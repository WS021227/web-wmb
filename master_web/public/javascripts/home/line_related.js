// 翻译数据  调用 unity_lang 方法  如： unity_lang('aa')
// let curr_lang_
curr_lang_json['related_message'] =  {cn: '对话', en: 'Message'},
curr_lang_json['related_clean'] =  {cn: '取关', en: 'Clean'},
curr_lang_json['related_from'] = {cn: '来自于', en: 'From'},
curr_lang_json['related_attribution'] =   {cn: '归属地', en: 'Attribution'},
curr_lang_json['related_loading_more'] =  {cn: '加载更多', en: 'Loading more'},
curr_lang_json['related_no_more'] =  {cn: '暂无更多数据', en: 'No more data available'},
curr_lang_json['related_loading'] =  {cn: '加载中...', en: 'Loading...'},
curr_lang_json['related_follow'] =  {cn: '关注', en: 'Follow'},
curr_lang_json['related_say_hello'] = {cn: '和他打个招呼', en: 'Say hello to him'},
curr_lang_json['bline_share_display'] = {cn: '展示', en: ' display'},
curr_lang_json['bline_share_post'] = {cn: '帖子', en: ' posts'},
curr_lang_json['bline_share_follow'] = {cn: '关注', en: ' follow'},


curr_lang_json['yangben'] =  {cn: 'yangben', en: 'demo'}

let tab_funs = {
    myfollow: my_follow_list,
    fans: fans_list,
    view: view_list,
    viewmy: view_my_list,
    message: message_list
}
$(function (){

    //
    $(document).on('click', '.tab', function () {
        let $this = $(this), tab = $this.data('tab'), hav = $this.data('hav')
        if(hav) return;
        tab_funs[tab]()
        $this.data('hav', 1)
    })
    let tab = queryString('tab') || 'myfollow'
    $('.tab.' + tab).click()
})

/***
 * 我的关注
 */
function my_follow_list(page){
    page = Number(page || 1)
    $.ajax('/async/line/follow/list',{
        datatype: 'json',
        type: 'get',
        data: {page: page},
        success: function (result){
            let list = (result.data||{}).list ||[], html = ''
            if(list.length <= 0) return not_fount($('#line_follow_user_list'))
            $.each(list, function (_,item) {
                html += '<div class="line-supplier-item">' +
                    '<div class="exchange">' +
                    '<a class="btn talk point" target="_blank" href="/user/line/letter?user_id='+ item.user_id +'">' + unity_lang('related_message') + '</a>'
                html += '<a class="btn follow unchecked" data-uid="'+ item.user_id +'" onclick="line_unfollow(this)">' + unity_lang('related_clean') + '</a>'
                html += '</div><div class="position"><a target="_blank" href="'+ line_route +'/line/'+ item.user_id  +'">' +
                    '<img class="head" src="' + result.static_url + item.avatar + '" alt="">' +
                    '<div class="name">' + item.name + '<span>(' + item.position + ')</span></div></a>' +
                    '<div class="number">'+ item.promote_cnt  +'' + unity_lang('bline_share_display') + '<font>|</font>'+ item.post_cnt +'' + unity_lang('bline_share_post') + '<font>|</font>'+ item.attention_cnt +'' + unity_lang('bline_share_follow') + '</div>'+
                    '<div class="sub">' + item.company_name + '<font>|</font>' + item.company_type_name + '</div>' +
                    '<div class="open">'+ item.verb +'：' + item.products + '</div>'
                if (item.topic_id) {
                    html += '<div class="lately">' +
                        '<div class="time">'+topic_time(item.topic_create_time)+'</div>'
                    if (item.circle_id) {
                        html += '<div class="descript"><a target="_blank" href="'+ line_route +'/topic/'+ item.topic_id +'">' + item.topic_contents + '</a></div>'
                        html += '<div class="from">'+unity_lang('related_from')+':<a target="_blank" href="'+ line_route +'/group-'+ item.circle_id +'">' + item.circle_name + '</a></div>'
                    }else{
                        html += '<div class="descript">' + item.topic_contents + '</div>'
                    }
                    html += '</div>'
                }
                html += '<div class="ip">' + unity_lang('related_attribution') + '：'+ pos_show(item) +'</div></div></div>'
            })
            $('#line_follow_user_list').append(html)
            if(result.has_next){
                $('#more_follow_list').data('page', page + 1).attr('onclick', 'more_follow_list(this)')
                    .html('' + unity_lang('related_loading_more') + '').removeClass('display-none')
            }else{
                $('#more_follow_list').removeAttr('onclick').html('' + unity_lang('related_no_more') + '').removeClass('display-none')
            }
        }
    })
}
function more_follow_list(elem){
    let $this = $(elem), page = $this.data('page')
    $this.html('' + unity_lang('related_loading') + '').removeAttr('onclick')
    my_follow_list(page)

}

/***
 * 我的粉丝
 */
function fans_list(page) {
    page = Number(page || 1)
    $.ajax('/async/line/fans', {
        datatype: 'json',
        type: 'get',
        data: {page: page},
        success: function (result) {
            let list = (result.data || {}).list || [],html = ''
            if(list.length <= 0) return not_fount($('#line_fans_list'))
            $.each(list, function (_, item) {
                html += '<div class="line-supplier-item">' +
                    '<div class="exchange">' +
                    '<a class="btn talk point" target="_blank" href="/user/line/letter?user_id=' + item.user_id + '">' + unity_lang('related_message') + '</a>'
                if (item.is_follow) {

                    html += '<a class="btn follow unchecked" data-uid="' + item.user_id + '" onclick="line_unfollow(this)">' + unity_lang('related_clean') + '</a>'
                } else {
                    html += '<a class="btn follow checked" data-uid="' + item.user_id + '" onclick="line_follow(this)">' + unity_lang('related_follow') + '</a>'

                }
                html += '</div><div class="position">' +
                    '<a target="_blank" href="'+ line_route +'/line/'+ item.user_id +'">' +
                    '<img class="head" src="' + result.static_url + item.avatar + '" alt="">' +
                    '<div class="name">' + item.name + '<span>(' + item.position + ')</span></div></a>' +
                    '<div class="number">'+ item.promote_cnt +'' + unity_lang('bline_share_display') + '<font>|</font>'+ item.post_cnt +'' + unity_lang('bline_share_post') + '<font>|</font>'+ item.attention_cnt +'' + unity_lang('bline_share_follow') + '</div>'+
                    '<div class="sub">' + item.company_name + '<font>|</font>' + item.company_type_name + '</div>' +
                    '<div class="open">'+ item.verb +'：' + item.products + '</div>'
                if (item.topic_id) {
                    html += '<div class="lately">' +
                        '<div class="time">' + topic_time(item.topic_create_time) + '</div>'
                    if (item.circle_id) {
                        html += '<div class="descript"><a target="_blank" href="'+ line_route +'/topic/'+ item.topic_id +'">' + item.topic_contents + '</a></div>'
                        html += '<div class="from">'+unity_lang('related_from')+':<a target="_blank" href="'+ line_route +'/group-'+ item.circle_id +'">' + item.circle_name + '</a></div>'
                    }else{
                        html += '<div class="descript">' + item.topic_contents + '</div>'
                    }
                    html += '</div>'
                }
                html += '<div class="ip">' + unity_lang('related_attribution') + '：' + pos_show(item) + '</div></div></div>'
            })
            $('#line_fans_list').append(html)
            if(result.has_next){
                $('#more_fans_list').data('page', page + 1).attr('onclick', 'more_fans_list(this)')
                    .html('' + unity_lang('related_loading_more') + '').removeClass('display-none')
            }else{
                $('#more_fans_list').removeAttr('onclick').html('' + unity_lang('related_no_more') + '').removeClass('display-none')
            }
        }
    })
}
function more_fans_list(elem){
    let $this = $(elem), page = $this.data('page')
    $this.html('' + unity_lang('related_loading') + '').removeAttr('onclick')
    fans_list(page)

}
/***
 * 我浏览的
 */
function view_list(page) {
    page = Number(page || 1)
    $.ajax('/async/line/view', {
        datatype: 'json',
        type: 'get',
        data: {page: page},
        success: function (result) {
            let list = (result.data || {}).list || [],html = ''
            if(list.length <= 0) return not_fount($('#line_view_list'))
            $.each(list, function (_, item) {
                html += '<div class="line-supplier-item">' +
                    '<div class="exchange">' +
                    '<a class="btn talk point" target="_blank" href="/user/line/letter?user_id=' + item.user_id + '">' + unity_lang('related_message') + '</a>'
                if (item.is_follow) {

                    html += '<a class="btn follow unchecked" data-uid="' + item.user_id + '" onclick="line_unfollow(this)">' + unity_lang('related_clean') + '</a>'
                } else {
                    html += '<a class="btn follow checked" data-uid="' + item.user_id + '" onclick="line_follow(this)">' + unity_lang('related_follow') + '</a>'

                }
                html += '</div><div class="position">' +
                    '<a target="_blank" href="'+ line_route +'/line/'+ item.user_id +'">' +
                    '<img class="head" src="' + result.static_url + item.avatar + '" alt="">' +
                    '<div class="name">' + item.name + '<span>(' + item.position + ')</span></div></a>' +
                    '<div class="number">'+ item.promote_cnt +'' + unity_lang('bline_share_display') + '<font>|</font>'+ item.post_cnt +'' + unity_lang('bline_share_post') + '<font>|</font>'+ item.attention_cnt +'' + unity_lang('bline_share_follow') + '</div>'+
                    '<div class="sub">' + item.company_name + '<font>|</font>' + item.company_type_name + '</div>' +
                    '<div class="open">'+ item.verb +'：' + item.products + '</div>'
                if (item.topic_id) {
                    html += '<div class="lately">' +
                        '<div class="time">' + topic_time(item.topic_create_time) + '</div>'
                    if (item.circle_id) {
                        html += '<div class="descript"><a target="_blank" href="'+ line_route +'/topic/'+ item.topic_id +'">' + item.topic_contents + '</a></div>'
                        html += '<div class="from">'+unity_lang('related_from')+':<a target="_blank" href="'+ line_route +'/group-'+ item.circle_id +'">' + item.circle_name + '</a></div>'
                    }else{
                        html += '<div class="descript">' + item.topic_contents + '</div>'
                    }
                    html += '</div>'
                }
                html += '<div class="ip">' + unity_lang('related_attribution') + '：' + pos_show(item) + '</div></div></div>'
            })
            $('#line_view_list').append(html)
            if(result.has_next){
                $('#more_view_list').data('page', page + 1).attr('onclick', 'more_view_list(this)')
                    .html('' + unity_lang('related_loading_more') + '').removeClass('display-none')
            }else{
                $('#more_view_list').removeAttr('onclick').html('' + unity_lang('related_no_more') + '').removeClass('display-none')
            }
        }
    })
}
function more_view_list(elem){
    let $this = $(elem), page = $this.data('page')
    $this.html('' + unity_lang('related_loading') + '').removeAttr('onclick')
    view_list(page)

}
/***
 * 浏览我的
 */
function view_my_list(page) {
    page = Number(page || 1)
    $.ajax('/async/line/view/my', {
        datatype: 'json',
        type: 'get',
        data: {page: page},
        success: function (result) {
            let list = (result.data || {}).list || [], html = ''
            if(list.length <= 0) return not_fount($('#line_view_my_list'))
            $.each(list, function (_, item) {
                html += '<div class="line-supplier-item">' +
                    '<div class="exchange">' +
                    '<a class="btn talk point" target="_blank" href="/user/line/letter?user_id=' + item.user_id + '">' + unity_lang('related_message') + '</a>'
                if (item.is_follow) {

                    html += '<a class="btn follow unchecked" data-uid="' + item.user_id + '" onclick="line_unfollow(this)">' + unity_lang('related_clean') + '</a>'
                } else {
                    html += '<a class="btn follow checked" data-uid="' + item.user_id + '" onclick="line_follow(this)">' + unity_lang('related_follow') + '</a>'

                }
                html += '</div><div class="position">' +
                    '<a target="_blank" href="'+ line_route +'/line/'+ item.user_id +'">' +
                    '<img class="head" src="' + result.static_url + item.avatar + '" alt="">' +
                    '<div class="name">' + item.name + '<span>(' + item.position + ')</span></div></a>' +
                    '<div class="number">'+ item.promote_cnt +'' + unity_lang('bline_share_display') + '<font>|</font>'+ item.post_cnt +'' + unity_lang('bline_share_post') + '<font>|</font>'+ item.attention_cnt +'' + unity_lang('bline_share_follow') + '</div>'+
                    '<div class="sub">' + item.company_name + '<font>|</font>' + item.company_type_name + '</div>' +
                    '<div class="open">'+ item.verb +'：' + item.products + '</div>'
                if (item.topic_id) {
                    html += '<div class="lately">' +
                        '<div class="time">' + topic_time(item.topic_create_time) + '</div>'
                    if (item.circle_id) {
                        html += '<div class="descript"><a target="_blank" href="'+ line_route +'/topic/'+ item.topic_id +'">' + item.topic_contents + '</a></div>'
                        html += '<div class="from">'+unity_lang('related_from')+':<a target="_blank" href="'+ line_route +'/group-'+ item.circle_id +'">' + item.circle_name + '</a></div>'
                    }else{
                        html += '<div class="descript">' + item.topic_contents + '</div>'
                    }
                    html += '</div>'
                }
                html += '<div class="ip">' + unity_lang('related_attribution') + '：' + pos_show(item) + '</div></div></div>'
            })
            $('#line_view_my_list').append(html)
            if(result.has_next){
                $('#more_view_my_list').data('page', page + 1).attr('onclick', 'more_view_my_list(this)')
                    .html('' + unity_lang('related_loading_more') + '').removeClass('display-none')
            }else{
                $('#more_view_my_list').removeAttr('onclick').html('' + unity_lang('related_no_more') + '').removeClass('display-none')
            }
        }
    })
}
function more_view_my_list(elem){
    let $this = $(elem), page = $this.data('page')
    $this.html('' + unity_lang('related_loading') + '').removeAttr('onclick')
    view_my_list(page)

}

/***
 * 回复我的
 */
function message_list(page) {
    page = Number(page || 1)
    $.ajax('/async/line/related/message', {
        datatype: 'json',
        type: 'get',
        data: {page: page},
        success: function (result) {
            if (result.state != 0) return not_fount($('#line_message_list'));
            let list = (result.data || {}).list || [],html = ''
            if(list.length <= 0) return not_fount($('#line_message_list'))
            $.each(list, function (_, item) {
                html += '<div class="group-message-item">\n'
                if(item.user_id) {
                    html+='<div class="exchange"><a class="btn" target="_blank" href="/user/line/letter?user_id=' + item.user_id + '">' + unity_lang('related_message') + '</a>'
                    if (item.is_follow) {
                        html += '<a class="btn" onclick="line_unfollow(this)">' + unity_lang('related_clean') + '</a>'
                    } else {
                        html += '<a class="btn" onclick="line_follow(this)">' + unity_lang('related_follow') + '</a>'
                    }
                    html += '</div><div class="position pl"><a target="_blank" href="'+ line_route +'/line/'+ item.user_id  +'">' +
                        '<img class="head" src="' + result.static_url + item.avatar + '" alt="">\n' +
                        '<div class="name">' + item.name + '</div></a>' +
                        '<div class="time">' + show_time(item.create_time) + '</div>' +
                        '<div class="detail">' + item.copywriter + '</div>' +
                        '<div class="group-message-from"><a target="_blank" href="'+ line_route +'/line/'+ item.user_id  +'">\n' +
                        //'    <img class="from-head" src="' + result.static_url + item.avatar + '" alt="">\n' +
                        '    <div class="from-name">' + item.name + '<span>(' + item.position + ')</span></div></a>' +
                        '    <div class="from-sub">' + item.company_name + '<font>|</font>' + item.company_type_name + '</div>\n' +
                        '    <div class="from-sub">'+ item.verb +'：' + item.products + '</div>\n' +
                        '    <div class="from-ip">' + unity_lang('related_attribution') + '：' + pos_show(item) + '</div>'

                    html += '</div>'
                    if (!item.is_hello) {
                        html += '<a class="active-btn" data-uid="'+ item.user_id +'" onclick="letter_hello(this)">' + unity_lang('related_say_hello') + '</a>'
                    }
                }else{

                    html += '<div class="position pl">\n' +
                        '<img class="head" src="https://static.52wmb.com/images/userphoto/190_member.jpg" alt="">\n' +
                        '<div class="name">' + item.name + '</div>\n' +
                        '<div class="time">' + topic_time(item.create_time) + '</div>' +
                        '<div class="detail">' + item.copywriter + '</div>'
                }
                html += '</div></div>'
            })
            $('#line_message_list').append(html)
            if(result.has_next){
                $('#more_message_list').data('page', page + 1).attr('onclick', 'more_message_list(this)')
                    .html('' + unity_lang('related_loading_more') + '').removeClass('display-none')
            }else{
                $('#more_message_list').removeAttr('onclick').html('' + unity_lang('related_no_more') + '').removeClass('display-none')
            }
        }
    })
}
function more_message_list(elem){
    let $this = $(elem), page = $this.data('page')
    $this.html('' + unity_lang('related_loading') + '').removeAttr('onclick')
    message_list(page)

}