// 翻译数据  调用 unity_lang 方法  如： unity_lang('aa')
// let curr_lang_
curr_lang_json['dynamic_addup_images'] =  {cn: '最多添加4张图片', en: 'Add up to 4 images'},
curr_lang_json['dynamic_incorrect_image'] =  {cn: '图片格式不正确', en: 'Incorrect image format'},
curr_lang_json['dynamic_cannot_larger'] = {cn: '图片不能大于3M，请重新上传', en: 'Image cannot be larger than 3M, please re-upload'},
curr_lang_json['dynamic_editor'] =   {cn: '编辑', en: 'Editor'},
curr_lang_json['dynamic_delete'] =   {cn: '删除', en: 'Delete'},
curr_lang_json['dynamic_detail'] =  {cn: '详情', en: 'Details'},
curr_lang_json['dynamic_from'] =  {cn: '来自于', en: 'From'},
curr_lang_json['dynamic_tobe_review'] =  {cn: '待审核', en: 'Pending review'},
curr_lang_json['dynamic_more_replies'] = {cn: '更多回复', en: 'More replies'},
curr_lang_json['dynamic_loading'] =  {cn: '加载中...', en: 'Loading...'},
curr_lang_json['dynamic_push_content'] =  {cn: '在圈内分享供求、问答、知识...', en: 'Share supply and demand, Q&A and knowledge in the circle'},
curr_lang_json['dynamic_publish'] =  {cn: '发布', en: 'Publish'},
curr_lang_json['dynamic_enter_content'] =  {cn: '请输入内容', en: 'Please enter content'},
curr_lang_json['dynamic_under_review'] = {cn: '回复成功，正在审核...', en: 'Reply successful, under review.'},
curr_lang_json['dynamic_from_homepage'] =  {cn: '个人主页', en: 'Personal homepage'},   
curr_lang_json['dynamic_reply'] = {cn: '回复', en: ' Reply'}, 
curr_lang_json['dynamic_ta_reply'] = {cn: 'Ta回复', en: 'Ta Reply'}, 
curr_lang_json['dynamic_message'] =  {cn: '对话', en: 'Message'},
curr_lang_json['dynamic_follow'] = {cn: '关注', en: 'Follow'}, 
curr_lang_json['dynamic_clean'] = {cn: '取关', en: 'Clean'}, 
curr_lang_json['dynamic_no_visitors'] = {cn: '暂无访客', en: 'No visitors'}, 
curr_lang_json['dynamic_insert_video'] =  {cn: '插入视频', en: 'Insert video'}, 
curr_lang_json['dynamic_video_address'] =  {cn: '视频地址', en: 'Video address'}, 
curr_lang_json['dynamic_video_address_enter'] ={cn: '请输入视频地址', en: 'Please enter the video address'},
curr_lang_json['dynamic_in_progress'] =   {cn: '发布中，请稍后...', en: 'In progress...'}, 
curr_lang_json['dynamic_publish'] = {cn: '发布', en: 'Publish'}, 
curr_lang_json['dynamic_publish_under_review'] =  {cn: '发布成功，正在审核...', en: 'Posted successfully, under review'}, 
curr_lang_json['dynamic_posting_fail'] = {cn: '发布失败', en: 'Posting Failure'}, 


curr_lang_json['yangben'] =  {cn: 'yangben', en: 'demo'}

let tab_funs = {
    topic: topic_list,
    reply: reply_list,
    replymy: reply_my_list
}
$(function (){

    //
    $(document).on('click', '.tab', function () {
        let $this = $(this), tab = $this.data('tab'), hav = $this.data('hav')
        if(hav) return;
        tab_funs[tab]()
        $this.data('hav', 1)
    })
    $('#circle_list').wdropdown({
        selected: function (e) {
            $('#topic_form [name="group_id"]').val(e.value)
        }
    })

    $(document).on('click', '.image-upload', function () {
        let _index = $(this).data('index'), f = $('#file_topic_image')
        if(_index){
            f.data('index', _index)
        }else {
            let imgs = $('.topic-pics .pic-item').length
            if (imgs >= 8) return $.alert('' + unity_lang('dynamic_addup_images') + '')
        }
        f.click()
    })
    $(document).on('click', '.topic-image-delete', function () {
        $(this).parents('.pic-item').remove()
        let imgs = $('.topic-pics .pic-item.hav').length
        if(imgs <= 0) $('.topic-pics').addClass('hide')
    })
    $(document).on('change', '#file_topic_image', function () {
        let $this = $(this), findex = $this.data('index')
        let imgs = $('.topic-pics .pic-item.hav').length
        if (imgs >= 8) return $.alert('' + unity_lang('dynamic_addup_images') + '')
        let filePath = this.value, ext = filePath.substring(filePath.lastIndexOf('.')).toLowerCase(),
            allow_ext = ".jpg|.jpeg|.gif|.png|"//全部图片格式类型
        //限制图片类型
        if (allow_ext.indexOf(ext + "|") == -1) return $.alert(unity_lang('dynamic_incorrect_image'))
        var data = new FormData($('#form_topic_image_upload')[0])
        $.ajax('/async/line/upload/topic/image', {
            type: 'post',
            data: data,
            dataType: 'json',
            processData: false,
            contentType: false,

            success: function (result) {
                $this.val('');
                if(findex){
                    $('.pic-item [data-index="'+ findex +'"]').data('filename', result.file_name)
                        .attr('src', 'https://static.52wmb.com/bangline/upload/images/' + result.file_name + '')
                    return;
                }
                $('.topic-pics').append('<div class="pic-item topic-image " >' +
                    '<img class="image-upload" data-filename="'+result.file_name+'" data-index="'+ (imgs + 1) +'" src="https://static.52wmb.com/bangline/upload/images/' + result.file_name + '" alt="">' +
                    '<button class="btn image-upload-pop topic-image-delete">&#10005;</button></div>').
                removeClass('display-none')
            },

            error: function (XMLHttpRequest, textStatus, errorThrown) {
                // _this.submitFail(textStatus || errorThrown);
            }
        });
    })
    let tab = queryString('tab') || 'topic'
    $('.tab.' + tab).click()
    view_my_list()
    load_circle()
})

function load_circle(){
    $.ajax('/async/line/circle/items', {
        type:'get',
        datatype: 'json',
        success: function (result){
            $.each(result.data.list, function (a, b){
                $('#circle_list .dropdown-menu').append('<div class="item" data-value="'+ b.id +'">'+ b.name +'</div>')
            })
        }
    })
}
/***
 * 贴子列表
 */
function topic_list(page) {
    page = page || 1
    let $box = $('#topic_list'), hav = $box.data('hav')
    if (hav) return;
    $.ajax('/async/line/dynamic/topic', {
        datatype: 'json',
        type: 'get',
        data: {page: page},
        success: function (result) {
            // return;
            if (result.state != 0) return not_fount($box);
            let list = (result.data || {}).list || [], html = ''
            if(list.length <= 0) return not_fount($box)
            $.each(list, function (_, item) {
                html += '<div class="topic-item">\n' +
                    '    <div class="item-author">\n' +
                    '        <a href="javascript:void(0)">\n' +
                    '            <img class="head" src="' + result.static_url + item.avatar + '" alt="">\n' +
                    '            <div class="name">' + item.name + '</div>\n' +
                    '            <div class="sub">\n' +
                    '                <span class="country">' + pos_show(item) + '</span>\n' +
                    '                <span class="type">' + item.company_type_name + '</span>\n' +
                    '            </div>\n' +
                    '        </a>\n' +
                    '        <div class="exchange">\n' +
                    '            <div class="select">\n' +
                    '                <div class="selected"><i class="icon"></i></div>\n' +
                    '                <div class="select-option">\n' +
                    '                    <div class="option-item">' + unity_lang('dynamic_editor') + '</div>\n' +
                    '                    <div class="option-item" data-tid="' + item.id + '" onclick="topic_delete(this)">' + unity_lang('dynamic_delete') + '</div>\n' +
                    '                </div>\n' +
                    '            </div>\n' +
                    '        </div>\n' +
                    '    </div>\n'
                let _end = 300, content = brSlice(item.contents, _end)
                if(item.circle_id){
                    html += '<div class="item-descript top">' + content.html + (content.real_str.length > _end?'<a target="_blank" href="'+ line_route +'/topic/'+ item.id +'">' + unity_lang('dynamic_detail') + '</a>':'') +'</div>'
                    html += '<div class="from-group">' + unity_lang('dynamic_from') + '：<a target="_blank" href="'+ line_route +'/group-'+ item.circle_id +'">'+ item.circle_name +'</a></div>'
                }else{
                    html += '<div class="item-descript top">' + content.html + (content.real_str.length > _end?'<a target="_blank" href="'+ line_route +'/line/'+ item.user_id +'">' + unity_lang('dynamic_detail') + '</a>':'') +'</div>'
                }
                if (item.images) {
                    html += '<div class="item-pics">'
                    var image_list = item.images.split(',')
                    $.each(image_list, function (a, b) {
                        html += '<div class="pic-item"><img src="https://static.52wmb.com/bangline/upload/images/' + b + '" alt=""></div>'
                    })
                    html += '</div>'
                }
                html += '    <div class="item-position">\n' +
                    '        <span class="time">' + topic_time(item.create_time) + '</span>\n' +
                    '        <div class="count-list">\n'
                if (item.state == 1) {
                    html += '<span class="count-item open-reply open-reply-' + item.id + '" data-state="close" data-avatar="' + result.static_url + item.avatar + '" data-uname="' + item.name + '" onclick="open_reply(' + item.id + ')">' +
                        '<i class="iconfont"><svg t="1663554634433" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2396" width="18" height="18"><path d="M938.666667 0 85.333333 0C38.4 0 0 38.4 0 85.333333l0 682.666667c0 46.933333 38.4 85.333333 85.333333 85.333333l42.666667 0c25.6 0 42.666667 17.066667 42.666667 42.666667l0 72.533333c0 46.933333 34.133333 68.266667 76.8 46.933333l264.533333-140.8c21.333333-12.8 55.466667-21.333333 81.066667-21.333333L938.666667 853.333333c46.933333 0 85.333333-38.4 85.333333-85.333333L1024 85.333333C1024 38.4 985.6 0 938.666667 0zM725.333333 597.333333 298.666667 597.333333c-25.6 0-42.666667-17.066667-42.666667-42.666667 0-25.6 21.333333-42.666667 42.666667-42.666667l426.666667 0c25.6 0 42.666667 17.066667 42.666667 42.666667C768 580.266667 746.666667 597.333333 725.333333 597.333333zM725.333333 341.333333 298.666667 341.333333C273.066667 341.333333 256 324.266667 256 298.666667c0-25.6 21.333333-42.666667 42.666667-42.666667l426.666667 0c25.6 0 42.666667 17.066667 42.666667 42.666667C768 324.266667 746.666667 341.333333 725.333333 341.333333z" p-id="2397" fill="#999999"></path></svg></i>' +
                        '<font>' + item.reply_count + '</font></span>\n'
                } else {
                    html += '<font class="topic-loading">' + unity_lang('dynamic_tobe_review') + '</font>'
                }
                html += '</div>\n' +
                    '    </div>\n' +
                    '    <div class="item-reply">' +
                    '<div class="item-reply-edit" id="item_reply_edit_' + item.id + '"></div>\n'
                if (item.topic_reply) {
                    html += '<div class="item-reply-content"><div class="reply-content-list" id="reply_' + item.id + '">\n\n'
                    var reply_list = JSON.parse(item.topic_reply)
                    $.each(reply_list, function (_, ritem) {
                        html += build_reply(ritem)
                    })
                    html += '</div>'
                    if (reply_list.length >= 3) {
                        html += '<div class="reply-content-more"><button data-tid="' + item.id + '" data-start="' + reply_list.length + '" data-page="1" class="btn" onclick="more_reply(this)">更多回复</button></div>'
                    }
                    html += '</div>'
                }
                html += '    </div></div>'
            })
            $box.append(html)
            if (!result.has_next) {
                $('#topic_more').remove()
            } else {
                $('#topic_more').removeClass('display-none').data('page', page + 1)
            }
        }
    })
}

function topic_delete(elem){
    let $this = $(elem), tid = $this.data('tid')
    $.ajax('/async/line/topic/delete', {
        datatype: 'json',
        type: 'get',
        data: {topic_id: tid},
        success: function (result) {
            if(result.state == 0){
                $this.parents('.topic-item').remove()
                return;
            }
        }
    })
}

/**
 *
 */
function more_topic(elem){
    let page = $(elem).data('page')
    topic_list(page)
}
/**
 * 更多回复
 */
function more_reply(elem) {
    let $this = $(elem), start = $this.data('start'), page = Number($this.data('page')), topic_id = $this.data('tid')
    $this.removeAttr('onclick').html('加载中...')
    $.ajax('/async/line/dynamic/topic/reply', {
        data: {start: start, page: page, topic_id: topic_id},
        datatype: 'json',
        type: 'get',
        success: function (result) {
            console.log(result)
            if (result.state != 0) return;
            $.each(result.data.list, function (_, item) {
                $('#reply_' + topic_id).append(build_reply(item))
            })
            if (!result.data.has_next) return $this.remove()
            $('#topic_more').data('page', page + 1).attr('onclick', 'more_reply(this)').html('' + unity_lang('dynamic_more_replies') + '')
        }
    })
}
function build_reply(item) {
    return '<div class="reply-item">\n' +
        ' <div class="reply-name"><a target="_blank" href="' + line_route + '/line/' + item.user_id + '">' +
        item.user_name + '</a>:</div>\n' +
        ' <div class="reply-content">' + item.content + '</div>\n' +
        ' </div>'
}
/**
 *
 * @param topic_id
 */
function open_reply(topic_id) {
    $('.open-reply:not(.open-reply-' + topic_id + ')').data('state', 'close')
    let $obtn = $('.open-reply-' + topic_id), state = $obtn.data('state'),
        avatar = $obtn.data('avatar'), uname = $obtn.data('uname')
    if (state == 'close') {
        $('#item_reply_edit_' + topic_id).html(
            '<div class="item-reply-edit-other">' +
            '<img class="item-reply-head" src="'+ avatar +'" alt="">\n' +
            '    <div class="item-edit">\n' +
            '      <input type="text" class="item-reply-text" placeholder="'+ uname +'' + unity_lang('dynamic_push_content') + '">\n' +
            '      <a class="item-reply-btn" data-tid="'+ topic_id +'" onClick="add_reply(this)">' + unity_lang('dynamic_publish') + '</a>\n' +
            '</div></div>'
        )
        $('.reply-edit:not(.reply-edit-' + topic_id + ')').html('')
        $obtn.data('state', 'open')
    } else {
        $('#item_reply_edit_' + topic_id).html('')
        $obtn.data('state', 'close')
    }
}
/**
 * 添加贴子回复
 * @param elem
 */
function add_reply(elem) {
    let $btn = $(elem), content = $btn.siblings('.item-reply-text').val(),
        topic_id = $btn.data('tid')
    if (!content) return $.alert('' + unity_lang('dynamic_enter_content') + '')
    $btn.html('' + unity_lang('dynamic_in_progress') + '').removeAttr('onclick')
    $.ajax('/async/topic/reply', {
        data: {content: content, topic_id: topic_id},
        datatype: 'text',
        type: 'post',
        success: function (result) {
            $btn.html('' + unity_lang('dynamic_publish') + '').attr('onclick', 'add_reply(this)')
            if (result.state == 0) {
                $btn.siblings('.item-reply-text').val('')
                return $.alert('' + unity_lang('dynamic_under_review') + '')
            }
            $.alert('' + unity_lang('dynamic_try_later') + '')
        }, error: function (e) {
            $.alert('' + unity_lang('dynamic_try_later') + '')
            $btn.html('' + unity_lang('dynamic_publish') + '').attr('onclick', 'add_reply(this)')
        }
    })
}
/***
 * 我的回复
 */
function reply_list(){
    $.ajax('/async/line/reply',{
        datatype: 'json',
        type: 'get',
        data: {page: 1, is_group: 0},
        success: function (result){
            if(result.state != 0) return  not_fount($('#reply_list'));
            let list = (result.data||{}).list ||[], html = ''
            if(list.length <=0) return not_fount($('#reply_list'))
            $.each(list, function (_,item){
                html += '<div class="group-message-list">\n' +
                    ' <div class="group-message-item">\n' +
                    '     <a class="del-btn" onclick="delete_reply(this)" data-rid="'+ item.id +'">✕' + unity_lang('dynamic_delete') + '</a>\n' +
                    '     <div class="position">\n' +
                    // '         <img class="head" src="' + result.static_url + item.avatar +'" alt="">\n' +
                    '         <div class="name">'+ item.name +'</div>\n' +
                    '         <div class="time">'+ topic_time(item.create_time) +'</div>\n' +
                    '         <div class="detail">' + item.content +'</div>\n' +
                    '         <div class="group-message-from">\n' +
                    '             <!-- 可选: 由样式 unhead 控制 -->\n' +
                    '             <img class="from-head" src="' + result.static_url + item.topic_avatar +'" alt="">\n' +
                    '             <div class="from-name"><a target="_blank" href="'+ line_route +'/line/'+ item.topic_user_id  +'">'+ item.topic_user_name +'</a></div>\n'
                    if(item.circle_id){
                        html += '<div class="from-title"><a target="_blank" href="'+ line_route +'/line/'+ item.topic_id  +'">'+ item.topic_content +'</a></div>\n'
                        html += '<div class="from-group">' + unity_lang('dynamic_from') + '：<a target="_blank" href="'+ line_route +'/group-'+ item.circle_id +'">'+ item.circle_name +'</a></div>'
                    }
                    else{
                        html += '<div class="from-title">'+ item.topic_content +'</div>\n'
                        html += '<div class="from-group">' + unity_lang('dynamic_from') + '：' + unity_lang('dynamic_from_homepage') + '</div>'
                    }
                html += '<div class="from-group-reply">'+ item.reply_count +'' + unity_lang('dynamic_reply') + '</div>'
                html += ' </div>\n' +
                    // '         <div class="group-message-from unhead">\n' +
                    // '             <!-- 可选: 由样式 unhead 控制 -->\n' +
                    // '             <div class="from-name">Mark Zhu</div>\n' +
                    // '             <div class="from-title">[分享] 我是来测试发帖功能的，什么都没有别误会了哦！</div>\n' +
                    // '             <div class="from-group">\n' +
                    // '                 来自于：Led灯具小组\n' +
                    // '             </div>\n' +
                    // '         </div>\n' +
                    '     </div>\n' +
                    ' </div>\n' +
                    '</div>'
            })
            $('#reply_list').append(html)
        }
    })
}

/**
 * 我的回复删除
 * @param elem
 */
function delete_reply(elem){
    let $this = $(elem), rid = $this.data('rid')
    $.ajax('/async/reply/delete', {
        data: {reply_id: rid},
        type: 'get',
        datatype: 'json',
        success: function (result){
            if(result.state != 0) return $.alert('删除失败')
            $this.parents('.group-message-item').remove()
        }
    })
}
/***
 * 回复我的
 */
function reply_my_list() {
    $.ajax('/async/line/reply/my', {
        datatype: 'json',
        type: 'get',
        data: {page: 1, is_group: 0},
        success: function (result) {
            if (result.state != 0) return   not_fount($('#reply_my_list'));
            let list = (result.data || {}).list || [], html = ''
            if(list.length <= 0) return   not_fount($('#reply_my_list'))
            $.each(list, function (_, item) {
                html += '<div class="group-message-list">\n' +
                    '<div class="group-message-item">\n' +
                    '    <div class="exchange">\n' +
                    '        <a class="btn" target="_blank" href="/user/line/letter?user_id='+ item.reply_user_id +'">' + unity_lang('dynamic_message') + '</a>\n'
                if(item.is_follow){
                    html += '<a class="btn" onclick="line_unfollow(this)">' + unity_lang('dynamic_clean') + '</a>'

                }else{
                    html += '<a class="btn" onclick="line_follow(this)">' + unity_lang('dynamic_follow') + '</a>'

                }
                html += '    </div>\n' +
                    '    <div class="position pl">\n' +
                    '        <img class="head" src="' + result.static_url + item.reply_user_avatar + '" alt="">\n' +
                    '        <div class="name"><a target="_blank" href="'+ line_route +'/line/'+ item.reply_user_id +'">' + item.reply_user_name + '</a></div>\n' +
                    '        <div class="time">' + topic_time(item.create_time) + '</div>\n' +
                    '          <div class="detail">' + unity_lang('dynamic_ta_reply') + '：' + item.content + '</div>\n' +
                    '        <div class="group-message-from-back">\n'
                if (item.circle_id) {
                    html+='<div class="from-title"><a target="_blank" href="' + line_route + '/topic/' + item.topic_id + '">' + item.topic_content + '</a></div>\n'
                    html += '<div class="from-group">' + unity_lang('dynamic_from') + '：<a target="_blank" href="' + line_route + '/group-' + item.circle_id + '">' + item.circle_name + '</a></div>'
                }
                else{
                    html+='<div class="from-title">' + item.topic_content + '</div>\n'
                    html += '<div class="from-group">' + unity_lang('dynamic_from') + '：' + unity_lang('dynamic_from_homepage') + '</div>'
                }
                html += '<div class="from-group-reply">'+ item.reply_count +'' + unity_lang('dynamic_reply') + '</div>'
                html += '</div></div></div></div>'
            })
            $('#reply_my_list').append(html)
        }
    })
}

/**
 * 访客
 */
function view_my_list() {
    $.ajax('/async/view/my/top', {
        datatype: 'json',
        type: 'get',
        success: function (result) {
            console.log(result)
            if (result.state != 0) return;
            $('#view_my_users').parents('.dynamic-right').removeClass('display-none')
            let list = (result.data || {}).list || [];
            if(list.length <= 0) return $('#view_my_users').html('' + unity_lang('dynamic_no_visitors') + '')
            let html = ''
            $.each(list, function (_, item) {
                html += '<div class="visitor-item">\n' +
                    '     \n' +
                    '         <img class="head" src="' + result.static_url + item.avatar + '" alt="">\n' +
                    '         <div class="name"><a target="_blank" href="'+ line_route +'/line/'+ item.user_id  +'">' + item.name + '</a></div>\n' +
                    '         <div class="sub">' + item.company_type_name + '<font>|</font>' + item.position + '</div>\n' +
                    '     \n'
                if (item.is_follow) {
                    html += '<a class="follow-btn" data-uid="'+ item.user_id +'" onclick="line_unfollow(this)">' + unity_lang('dynamic_clean') + '</a>'
                } else {
                    html += '<a class="follow-btn" data-uid="'+ item.user_id +'" onclick="line_follow(this)">' + unity_lang('dynamic_follow') + '</a>'
                }
                html += '</div>'
            })
            $('#view_my_users').html(html)
        }
    })
}



/**
 *
 */
function add_video() {
    let old_video = $('.video-src font').html()
    layer.open({
        type: 1,
        btn: ['&#x786E;&#x5B9A;'],
        skin: 'layui-layer-rim',
        area: ['500px', '150px'], // 配置长高
        shadeClose: false, //点击遮罩关闭
        maxmin: false,
        closeBtn: 1,
        title: '' + unity_lang('dynamic_insert_video') + '',
        content: '<div class="video-body">' + unity_lang('dynamic_video_address') + '：<input type="text" id="video_url" value="'+ old_video +'" placeholder="' + unity_lang('dynamic_video_address_enter') + '"></div>',
        yes: function (a) {
            let url = $('#video_url').val()
            if (!url) return $.alert('' + unity_lang('dynamic_video_address_enter') + '')
            $('#topic_form [name="video"]').val($('#video_url').val())
            $('.video-src').removeClass('display-none').find('font').html($('#video_url').val())
            layer.close(a)
        }
    });
}
function video_remove(elem){
    $('#topic_form [name="video"]').val('')
    $(elem).parents('.video-src').addClass('display-none')
}

/**
 *
 * @param elem
 * @returns {void|jQuery}
 */
function topic_add(elem) {
    let $this = $(elem)
    let $from = $('#topic_form'), content = $from.find('[name="contents"]').val()
    if (!content) return $.alert(unity_lang('line_add'))
    let imgs = ''
    $.each($('.topic-image'), function (){
        imgs += (',' + $(this).find('img').data('filename'))
    })
    $('#topic_form [name="images"]').val(imgs.slice(1))
    $this.html('' + unity_lang('dynamic_in_progress') + '').prop('disabled', true)
    let formdata = new FormData($from[0])

    $.ajax('/async/line/topic/add', {
        data: formdata,
        type: "POST",
        processData: false,
        contentType: false,
        success: function (result) {
            $this.html('发布').prop('disabled', false)
            _lock = false;
            if (result.state == 0) {
                $from.find('[name="contents"]').val('')
                $('#topic_form .pic-item.fix').removeClass('hav')
                $('#topic_form .pic-item.fix img').remove()
                $('#topic_form .pic-item:not(.fix)').remove()
                $.alert('' + unity_lang('dynamic_publish_under_review') + '')
                return false
            }
            $.alert(result.message)
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $this.html('' + unity_lang('dynamic_publish') + '').prop('disabled', false)
            $.alert('' + unity_lang('dynamic_posting_fail') + '')
        }
    });
}