// 翻译数据  调用 unity_lang 方法  如： unity_lang('aa')
// let curr_lang_
curr_lang_json['letter_attribution'] =  {cn: '归属地', en: 'Attribution'},
curr_lang_json['letter_goto_homepage'] =   {cn: '进入[@姓名]主页', en: 'Go to [@姓名]s homepage'},
curr_lang_json['letter_image_format'] =  {cn: '图片格式不正确', en: 'Incorrect image format'},
curr_lang_json['letter_loading_wait'] =    {cn: '加载中，请稍后...', en: 'Loading, please wait...'},
curr_lang_json['letter_just_now'] =  {cn: '刚刚', en: 'Just now'},
curr_lang_json['letter_enter_chat_content'] =  {cn: '请输入聊天内容', en: 'Please enter chat content'},
curr_lang_json['letter_sending'] =  {cn: '发送中', en: 'Sending'},
curr_lang_json['letter_sending_content'] = {cn: '这是打招呼消息', en: 'This is a greeting message'},


curr_lang_json['yangben'] =  {cn: 'yangben', en: 'demo'}

let user_id = queryString('user_id'),
    search_key = '',
    line_avatar = $('#line_avatar').val(),
    line_uname = $('#line_uname').val()
user_id = user_id?(Number(user_id) != wg.user.id? user_id: ''):''
$(function (){

    $(document).on('keydown', '#letter_search', function (event) {
        if(event.which == 13) {
            search_key = this.value
            $('#letter_users').html('')
            letter_user_list(1)
        }
    })

    $(document).on('click', '.people-item', function (){
        let $this = $(this)
        if($this.hasClass('active')) return;
        let data = $this.data('p'), static_url =$('#letter_users').data('static_url')
        letter_records(data.user_id, function (){
            $('.people-info').html('<div class="position">' +
                '<img class="head" src="'+ static_url + data.avatar +'" alt="">' +
                '<div class="name">'+ data.name +'<span>('+data.position+')</span></div>' +
                '<div class="sub">'+ data.verb +'：'+ data.products +'...</div>' +
                '<div class="ip">' + unity_lang('letter_attribution') + '：'+ pos_show(data) +'<font>｜</font>'+ data.company_type_name +'</div></div>')
            $('.line-index').attr('href', line_route + '/line/' + data.user_id).html(replaceKey(unity_lang('letter_goto_homepage'), '[@姓名]', data.name))
            record_last_date = null
            $this.addClass('active').siblings().removeClass('active')
            $('#letter_uid').val(data.user_id)
            $('#form_upload_image [name="user_id"]').val(data.user_id)
        })
    })

    $('#letter_records').on('scroll', function (){
        let pos = get_letter_records_pos()
        if($(this).data('next') && pos.st == 0){
            more_letter_records(this)
        }
    })


    $('#letter_users').on('scroll', function (){
        let md = document.querySelector('#letter_users'),
            sh = md.scrollHeight, st = md.scrollTop, ch = md.clientHeight
        if($(this).data('next') == '1' && (st + ch >= sh)){
            let page = Number($(this).data('page'))
            letter_user_list(page)
        }
    })

    // 上传图片
    $('#upload_letter_image').on('change', function (e){
        let filePath = this.value, ext = filePath.substring(filePath.lastIndexOf('.')).toLowerCase(),
            allow_ext =".jpg|.jpeg|.gif|.png|"//全部图片格式类型
        //限制图片类型
        if(allow_ext.indexOf(ext+"|")==-1) return $.alert('' + unity_lang('letter_image_format') + '')
        build_new_line()
        let _blob = URL.createObjectURL(e.target.files[0]), date = new Date()
        $('#letter_records').append(build_letter_record(wg.user.id, line_avatar, line_uname, _blob, date,2, 1))
        record_scroll()
        var data = new FormData($('#form_upload_image')[0])
        $.ajax('/async/letter/upload/image', {
            type: 'post',
            data: data,
            dataType: 'json',
            processData: false,
            contentType: false,

            beforeSend: function () {
                // _this.submitStart();
            },

            success: function (result) {
                $(this).val('');
                $('.send-status.s-' + date.getTime()).remove()
            },

            error: function (XMLHttpRequest, textStatus, errorThrown) {
                $(this).val('');
                $('.send-status.s-' + date.getTime()).removeClass('ing').addClass('error')
            },

            complete: function () {
                // _this.submitEnd();
            }
        });
    })
    ready_letter_user()
    // qq表情包
    $('#qqface').qqFace({
        id: 'facebox',
        assign: 'letter_message',
        top: true
    })
})
function letter_clear() {

    search_key = ''
    $('#letter_users').html('')
    letter_user_list(1, function () {
        let curr_uid = $('#letter_uid').val()
        let $t = $('#letter_users .people-item[data-uid="' + curr_uid + '"]')
        if ($t.length <= 0) {
            $t = $('#letter_users .people-item').eq(0)
        }
        $t.click()
    })
}


/**
 * 初始化以及搜索对话列表
 */
function ready_letter_user() {
    $('#letter_users').html('')
    letter_user_list(1, function (){
        $('#letter_users .people-item').eq(0).click()
    })
}


function letter_user_list(page, fn) {
    if (user_id == wg.user.id) return $.alert('非法请求')
    $.ajax('/async/line/letter', {
        data: {user_id: user_id, page: page, key: search_key},
        type: 'get',
        datatype: 'json',
        success: function (result) {
            let _list = (result.data||{}).list || [], total = _list.length > 0?_list[0]['total_count']:0
            $.each(_list, function (a, b) {
                let html = '<div class="people-item" data-uid="'+ b.user_id +'">' +
                    '<img class="head" src="' + result.static_url + b.avatar + '" alt="">' +
                    '<div class="name">' + b.name + '</div>' +
                    '<div class="sub">' + b.position + '</div>'
                if(b.letter_count > 0){
                    html += '<div class="count '+ (b.not_read?'point': '') +'">'+ b.letter_count +'</div>'
                }
                html += '</div>'
                $(html).data('p', b).appendTo($('#letter_users'))
            })
            $('#letter_count').html(total)
            $('#letter_users').data('static_url', result.static_url).data('next', result.has_next?1:0).data('page', page + 1)
            if(fn) fn()
        }
    })
}



function letter_records(user_id, fn){
    let $letter_records = $('#letter_records')
    if($letter_records.data('load')) return $.alert('' + unity_lang('letter_loading_wait') + '')
    $letter_records.html('').data('next', '').data('uid', user_id).data('load', 1)
    unity_letter_records(user_id, 1, function (){
        $letter_records.data('load', '')
        record_scroll()
        fn()
    })
}
function more_letter_records(elem) {
    let $this = $(elem), user_id = $this.data('uid'), page = $this.data('page')
    let old_sh = document.getElementById('letter_records').scrollHeight
    unity_letter_records(user_id, page, function () {
        let pos = get_letter_records_pos()
        pos.md.scrollTop = pos.sh - old_sh - 10;
        $this.data('page', Number(page) + 1)
    })
}
let record_last_date = null, record_first_date = null;
function unity_letter_records(user_id, page, fn){
    if(user_id == wg.user.id) return $.alert('非法请求')
    page = page || 1
    $.ajax('/async/line/letter/records',{
        data: {user_id: user_id, page: page},
        type: 'get',
        datatype: 'json',
        success: function (result){
            if(result.state ==2000) return $.alert('非法请求')
            let item_last_date = null, last_day_line = null,
                list = (result.data || {}).list|| []
            record_first_date = list.length > 0?new Date(list[0].create_time):null
            $.each(list, function (a, b){
                let _date = new Date(b.create_time), _day_line = day_line(record_last_date, _date, 1)
                if(_day_line) last_day_line = _day_line
                record_last_date = _date
                $('#letter_records').prepend(build_letter_record(b.user_id, result.static_url + b.avatar, b.name, b.contents, _date, b.type))
                item_last_date = b.create_time
            })

            if(item_last_date) day_line(last_day_line, item_last_date, 2)

            if(result.data.has_next){
                $('#letter_records').data('next', '1').data('page', Number(page) + 1)
            }else{
                $('#letter_records').data('next', '').removeAttr('data-page')
            }

            if(fn) fn()
        }
    })
}
function day_line(ld, date, s){
    let _date = typeof date == 'string'? new Date(date): date,
        _day = _date.getFullYear() + '-' + (_date.getMonth() + 1) + '-' + _date.getDate()
    if(ld == null){
        if(s == 1) return ''
        return build_day_line(_day)
    }
    let _ldate = typeof ld == 'string'? new Date(ld): ld,
        _ld = _ldate.getFullYear() + '-' + (_ldate.getMonth() + 1) + '-' + _ldate.getDate()

    if(_ld != _day) {
        if(s == 1){
            build_day_line(_ld)
        }else{
            build_day_line(_day)
        }
        return _ld
    }
    return ''
}

function build_day_line(_day_line){
    $('.time-line-'+ _day_line).remove()
    $('#letter_records').prepend('<div class="letter-item time time-line-'+ _day_line +'"><span class="time">'+ _day_line +'</span></div>')
}

function build_new_line(){
    let $newline = $('.time-line-new')
    if($newline.length > 0) return
    $('#letter_records').append('<div class="letter-item time time-line-new"><span class="time">' + unity_lang('letter_just_now') + '</span></div>')
}

function send_message(){
    let $msg = $('#letter_message'), message =$msg.val(), uid = $('#letter_uid').val()
    if(!message) return $.alert('' + unity_lang('letter_enter_chat_content') + '')
    let date = new Date()
    build_new_line()
    $('#letter_records').append(build_letter_record(wg.user.id, line_avatar, line_uname, message, date, 1, 1))
    record_scroll()
    $.ajax('/async/letter/send', {
        data: {message: message, user_id: uid},
        datatype:'json',
        type:'post',
        success: function (result){
            $msg.val('')
            if(result.state != 0) {
                $('.send-status.s-' + date.getTime()).removeClass('ing').addClass('error')
                return
            }
            $('.send-status.s-' + date.getTime()).remove()
        }
    })
}

function build_letter_record(user_id, avatar, name, contents, date, letter_type, status) {
    status = status || 0
    let _show_time = date.getHours() + ':' + date.getMinutes()
    let html = '<div class="letter-item ' + (user_id == wg.user.id ? 'reply' : '') + '">' +
        '<div class="position">' +
        '<img class="head" src="' + avatar + '" alt="">' +
        '<div class="name">' + name + '<span class="time">' + _show_time + '</span></div>'
    if (status == 1) html += '<i class="send-status s-'+ date.getTime() +' ing">' + unity_lang('letter_sending') + '</i>'
    if(letter_type == 2){
        if(status == 1){
            html += '<div class="content"><img width="350" src="'+ contents +'"></div></div></div>'
        }else{
            html += '<div class="content">' + with_img(contents) + '</div></div></div>'
        }
    }else if(letter_type == 0){
        html += '<div class="content">' + unity_lang('letter_sending_content') + '</div></div></div>'
    }else{
        html += '<div class="content">' + html_to_qqface(contents) + '</div></div></div>'
    }
    return html
}

function with_img(str) {
    return '<img src="'+ str.replace('[@image_path]', 'https://static.52wmb.com/bangline/upload/images/') +'">';
}

function get_letter_records_pos(){

    let md = document.getElementById('letter_records'),
        sh = md.scrollHeight, st = md.scrollTop, ch = md.clientHeight
    return {sh: sh, st: st, ch: ch, md: md}
}
function record_scroll() {
    let pos = get_letter_records_pos()
    pos.md.scrollTop = pos.sh - pos.ch
}
