
let static_path = $('meta[name="static_path"]').attr('content')


$(function (){
    load_class_list($('.catalog-item:eq(0) .header'), function (){
        play_video($('.auth-true:eq(0)'))
    })
    $('.catalog-item .header').click(function (){
        let $this = $(this), _open = $this.data('open')
        load_class_list($this)
        if(_open){
            $this.data('open', '').siblings('.class-item').addClass('display-none')
        }else{
            $this.data('open', '1').siblings('.class-item').removeClass('display-none')
            $this.parents('.catalog-item').siblings('.catalog-item').find('.header').data('open', '')
                .siblings('.class-item').addClass('display-none')
        }
    })
})

function load_reply_list(page) {
    $.ajax('/async/cdc/reply?a=1', {
        data: {page: page},
        datatype: 'json',
        type: 'get',
        success: function (result) {
            if (result.state != 0) return;
            $('#reply_count').html(result.total)
            if (result.total <= 0) $('#reply_list').append('暂无评论')
            let html = ''
            $.each(result.data.list, function (a, b) {
                html += '<div class="textbox">\n' +
                    '    <div class="box1">\n' +
                    '        <img class="img" src="https://static.52wmb.com/images/userphoto/80_' + b.photo + '" />\n' +
                    '        <div class="text2">\n' +
                    '            <h3>' + b.contact + '</h3>\n' +
                    '            <p class="text">' + b.content + '</p>' +
                    '        </div>' +
                    '    </div>' +
                    '</div>'
            })
            $('#reply_list').append(html)
            if (result.has_next) {
                $('#more_reply').attr('onclick', 'more_reply(this)').data('page', page + 1)
            } else {
                $('#more_reply').removeAttr('onclick').html('暂无更多')
            }
        }
    })
}

function more_reply(elem){
    let page = $(elem).data('page')
    load_reply_list(page)
}
function reply_add(){
    let content = $('#reply_content').val()
    if(!content) return $.alert('请输入您的评论内容')
    $.ajax('/async/cdc/reply', {
        data: {content: content},
        datatype: 'json',
        type: 'post',
        success: function (result){
            if(result.state == 0) return $.alert('评论已提交正在审核中，感谢您的点评。')
            $.alert(result.message)
        }
    })
}



function load_class_list($catalog, fn){
    let id = $catalog.data('id'),
        $class_item = $catalog.siblings('.class-item')
    $.ajax('/async/cdc/class/' + id, {
        datatype:'json',
        type: 'get',
        success: function (result) {
            if (result.state != 0) return $.alert('数据异常')
            let _list = (result.data || {}).list || [], html = ''
            _list.forEach(function (item) {
                let auth = (item.is_open == 1 || !item.need_auth), has_play = auth && item.status == 1
                html += '<a onclick="btn_play_video(this)" class="auth-'+ auth +'" data-title="' + item.title + '" data-auth="'+ auth +'" data-cid="'+ item.id +'" data-hp="'+ has_play +'" href="javascript:void(0)">\n' +
                    '    <div class="list-context-for"><div class="list-context-k">\n' +
                    '         <span class="iconfont icon-shipinbofang"><img src="' + static_path + '/images/cdc/ke_vedio_icon.png" /></span>\n' +
                    '         <text><strong>' + item.class_no + '.</strong>' + item.title
                if(item.status == 0){
                    html +='<font>(待上线)</font>'
                }
                html += '</text>'
                if (!auth) {
                    html += '<span class="iconfont icon-open list-context-ico"></span>\n'
                }
                html += '</div>\n' +
                    '    <div class="list-context-time">时长:&nbsp;'+ item.time_length +'</div>\n' +
                    '</div></a>'
            })
            $class_item.html(html)
            if(fn) fn()
        }
    })
}


function btn_play_video(elem){
    play_video(elem, function (){
        $('body,html').animate({scrollTop: $(".content-content-content").offset().top - 10}, 300);
    })
}
function play_video(elem, fn) {
    let $this = $(elem), _data = $this.data(), auth = _data.auth
    if (auth != 'true' && (!auth && typeof auth == 'boolean')) {
        if (!verify_sign({login: true, only_return: true}, null)) return
        if(wg.user.vip_level) {
            layer.alert('会员免费增值服务，请先领取在观看。', {
                title: unity_lang('layer_tips'),
                btn: ['领取课件'],
                yes: function (){
                    layer.closeAll()
                    open_auth()
                }
            })
            return
        }

        layer.alert('付费用户免费增值服务，购买会员后免费领取。', {
            title: unity_lang('layer_tips'),
            btn_href: ['/Alipay?v=v&m=1'],
            btn: ['立即购买'],
        })
        return
    }
    if(!_data.hp) return false
    if(fn) fn()
    if(_data.url) return build_play(_data)
    $.ajax('/async/cdc/class/url/' + _data.cid, {
        datatype: 'json',
        type: 'get',
        success: function (result) {
            if(result.state != 0) return $.alert(result.message)
            $this.data('url', result.data.url)
            _data['url'] = result.data.url
            build_play(_data)
        }
    })
}

function build_play(data){
    $('#play_video_box').attr('src' ,  data.url)
    $('#class_title').html('正在主讲:《'+ data.title +'》')
}

function open_auth() {
    if (!verify_sign({login: true, only_return: true}, null)) return
    $.ajax('/async/cdc/open', {
        type: 'post',
        success: function (result) {
            if (result.state != 0) return $.alert(result.message)
            layer.alert('恭喜，课件领取成功！', {
                title: unity_lang('layer_tips'),
                yes: function () {
                    window.location.reload()
                }
            })
            $('.open-content').remove()
        }
    })
}