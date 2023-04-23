// 翻译数据  调用 unity_lang 方法  如： unity_lang('aa')
let curr_lang_json = {
    'line_no_content': {cn: '暂无内容', en: 'No content available'},
    'line_focuson_fail': {cn: '关注失败', en: 'Focus on failure'},
    'line_clean_fail': {cn: '取关失败', en: 'Clean failure'},
    'line_industry_circle': {cn: '行业圈', en: ' Industry Circle'},
    'line_members': {cn: '成员', en: 'Members'},
    'line_members_all': {cn: '所有', en: 'All '},
    'line_goto_group': {cn: '进入圈子→', en: 'Go to group →'},
    'line_message': {cn: '私信', en: 'Message'},
    'line_follow': {cn: '关注', en: 'Follow'},
    'line_clean': {cn: '取关', en: 'Clean'},
    'line_from': {cn: '来自于', en: 'From'},
    'line_attribution': {cn: '归属地', en: 'Attribution'},
    'line_today': {cn: '今日', en: 'today'},
    'line_view_more': {cn: '查看更多', en: 'View more'},
    'line_greeting_sent': {cn: '已发送招呼', en: 'Greetings have been sent'},
    'line_message_fail': {cn: '消息发送失败', en: 'Message delivery failure'},
    'bline_share_display': {cn: '展示', en: ' display'},
    'bline_share_post': {cn: '帖子', en: ' posts'},
    'bline_share_follow': {cn: '关注', en: ' follow'},

    'yangben': {cn: 'yangben', en: 'demo'}
}

$(function (){
    $(document).on('click', '.follow-tab', function (){
        if($(this).data('hav')) return;
        follow_list()
    })
    // 加载圈子列表
    group_list()
    // 推荐的人
    recommend_users(1)
    // 今日数据统计
    day_stats()
    // 各种消息红点标识数据
    nav_notification()
})

function not_fount(elem){
    elem.html('<div class="no-content">' + unity_lang('line_no_content') + '</div>')
}
function nav_notification() {
    if(!wg.user.bang_line) return;
    $.ajax('/async/nav/notification', {
        datatype: 'json',
        type: 'get',
        success: function (result) {
            if (result.state == 0) {
                $.each(result.data, function (a, b) {
                    if (b > 0) {
                        $('#' + a).find('.point').removeClass('display-none')
                        $('#tab_' + a).removeClass('display-none')
                    }
                })
            }
        }
    })
}
/**
 * 关注
 * @param elem
 */
function line_follow(elem) {
    let $this = $(elem), user_id = $this.data('uid')
    $.ajax('/async/line/follow', {
        data: {user_id: user_id},
        datatype: 'json',
        type: 'get',
        success: function (result) {
            if (result.state == 0) {
                return $this.html('' + unity_lang('line_clean') + '').attr('onclick', 'line_unfollow(this)')
            }
            $.alert('' + unity_lang('line_focuson_fail') + '')
        }
    })
}

/**
 * 取关
 * @param elem
 */
function line_unfollow(elem) {
    let $this = $(elem), user_id = $this.data('uid')
    $.ajax('/async/line/unfollow', {
        data: {user_id: user_id},
        datatype: 'json',
        type: 'get',
        success: function (result) {
            if (result.state == 0) {
                return $this.html('' + unity_lang('line_follow') + '').attr('onclick', 'line_follow(this)')
            }
            $.alert('' + unity_lang('line_clean_fail') + '')
        }
    })
}


function group_list(){
    let $box = $('#line_group_list')
    if($box.length > 0){
        $.ajax('/async/line/group',{
            datatype: 'json',
            type: 'get',
            success: function (result){
                if(result.state != 0) return;
                let html = '<div class="swiper-wrapper">'
                $.each(result.data.list, function (_,item){
                    html += '<div class="swiper-slide line-group-item">\n' +
                        //'    <img class="group-head" src="'+ result.static_url + item.photo  +'" alt="">\n' +
                        '    <div class="group-title">'+ item.name +'' + unity_lang('line_industry_circle') + '</div>\n' +
                        '    <div class="group-descript">'+ item.introduction +'</div>\n'
                    let users = item.circle_user_list, ulist = users?JSON.parse(users):[]
                    if(ulist.length > 0){
                        html += '<div class="group-member">' + unity_lang('line_members') + '：<div class="member-list">'
                        $.each(ulist, function (_, uitem){
                            html +='<div class="member-head"><img src="'+ result.static_url + uitem.avatar  +'" alt=""></div>'
                        })

                        html += ('</div><a href="#" target="_blank">' + unity_lang('line_members_all') + ''+ item.user_count +'</a></div>')
                    }
                    html += ' <div class="group-exchange"><a class="btn" href="'+ line_route +'/group-'+ item.id +'" target="_blank">' + unity_lang('line_goto_group') + '</a></div></div>'
                })
                $box.append(html)
            }
        })
    }
}

function recommend_users(page){
    let $box = $('#line_recommend_user_list'), $tab = $('#line_recommend_user_tab')
    console.log($tab, '$tab')
    if($box.length > 0){
        $.ajax('/async/line/member',{
            data: {page: page},
            datatype: 'json',
            type: 'get',
            success: function (result){
                let list = (result.data||{}).list ||[];
                if(result.state != 0 || list.length<=0) {
                    $tab.siblings('.tab-item').addClass('active')
                    $tab.remove()
                    $box.siblings('.tab-pane').addClass('active')
                    $box.remove()
                    return
                };
                let html = ''
                $.each(result.data.list, function (_,item) {
                    html += '<div class="line-supplier-item">' +
                        '<div class="exchange">' +
                        '<a class="btn talk point" target="_blank" href="/user/line/letter?user_id='+ item.user_id +'">' + unity_lang('line_message') + '</a>'
                    html += '<a class="btn follow checked" data-uid="'+ item.user_id +'" onclick="line_follow(this)">' + unity_lang('line_follow') + '</a>'
                    html += '</div><div class="position">' +
                        '<a target="_blank" href="'+ line_route +'/line/'+ item.user_id  +'"><img class="head" src="' + result.static_url + item.avatar + '" alt=""></a>' +
                        '<div class="name"><a target="_blank" href="'+ line_route +'/line/'+ item.user_id  +'">' + item.name + '<span>(' + item.position + ')</span></a></div>' +
                        '<div class="number">'+ item.promote_cnt +'' + unity_lang('bline_share_display') + '<font>|</font>'+ item.post_cnt +'' + unity_lang('bline_share_post') + '<font>|</font>'+ item.attention_cnt +'' + unity_lang('bline_share_follow') + '</div>'+
                        '<div class="sub">' + item.company_name + '<font>|</font>' + item.company_type_name + '</div>' +
                        '<div class="open">'+ item.verb +'：' + item.products + '</div>'
                    if (item.topic_id) {
                        let content = brSlice(item.topic_contents, 80)
                        html += '<div class="lately"><div class="time">'+topic_time(item.topic_create_time)+'</div>'
                        if (item.circle_id) {
                            html += '<div class="descript"><a target="_blank" href="'+ line_route +'/topic/'+ item.topic_id +'">' + content.html + '</a></div>'
                            html += '<div class="from">' + unity_lang('line_from') + '：<a target="_blank" href="'+ line_route +'/group-'+ item.circle_id +'">' + item.circle_name + '</a></div>'
                        }else{
                            html += '<div class="descript"><a target="_blank" href="'+ line_route +'/line/'+ item.user_id +'">' + content.html + '</a></div>'
                        }
                        html += '</div>'
                    }
                    html += '<div class="ip">' + unity_lang('line_attribution') + '：'+ pos_show(item) +'</div></div></div>'
                })
                $box.append(html)
            }
        })
    }
}

function day_stats(){
    let $box = $('.stats-day')
    if($box.length > 0){
        $.ajax('/async/line/stats',{
            datatype: 'json',
            type: 'get',
            success: function (result){
                $.each(result.data.list, function (_, item){
                    let $e = $('[data-st="'+ item.mark +'"]'), is_all = $e.data('all')
                    if($e.length > 0){
                        if($e.hasClass('un')){
                           if(item.count >0) $e.removeClass('display-none')
                        }else{
                            $e.html((is_all?'':'' + unity_lang('line_today') + '+') + item.count )
                        }
                    }
                })
            }
        })
    }
}

function follow_list(){
    let $box = $('#line_follow_user_list')
    $.ajax('/async/line/follow/list',{
        datatype: 'json',
        type: 'get',
        data: {page: 1},
        success: function (result){
            let list = (result.data||{}).list ||[];
            if(result.state != 0 || list.length<=0) {
                $tab.sibling('tab-item').addClass('active')
                $tab.remove()
                $box.sibling('tab-pane').addClass('active')
                $box.remove()
                return
            };
            let html = ''
            $.each(result.data.list, function (_,item) {
                html += '<div class="line-supplier-item">' +
                    '<div class="exchange">' +
                    '<a class="btn talk point" target="_blank" href="/user/line/letter?user_id='+ item.user_id +'">' + unity_lang('line_message') + '</a>'
                html += '<a class="btn follow unchecked" data-uid="'+ item.user_id +'" onclick="line_unfollow(this)">' + unity_lang('line_clean') + '</a>'
                html += '</div><div class="position">' +
                    '<img class="head" src="' + result.static_url + item.avatar + '" alt="">' +
                    '<div class="name"><a target="_blank" href="'+ line_route +'/line/'+ item.user_id  +'">' + item.name + '<span>(' + item.position + ')</span></a></div>' +
                    '<div class="number">'+ item.promote_cnt +'' + unity_lang('bline_share_display') + '<font>|</font>'+ item.post_cnt +'' + unity_lang('bline_share_post') + '<font>|</font>'+ item.attention_cnt +'' + unity_lang('bline_share_follow') + '</div>'+
                    '<div class="sub">' + item.company_name + '<font>|</font>' + item.company_type_name + '</div>' +
                    '<div class="open">'+ item.verb +'：' + item.products + '</div>'
                if (item.topic_id) {
                    html += '<div class="lately">' +
                        '<div class="time">'+topic_time(item.topic_create_time)+'</div>'
                    if (item.circle_id) {
                        html += '<div class="descript"><a href="'+ line_route +'/topic/'+ item.topic_id +'">' + item.topic_contents + '</a></div>'
                        html += '<div class="from">' + unity_lang('line_from') + '：<a target="_blank" href="'+ line_route +'/group-'+ item.circle_id +'">' + item.circle_name + unity_lang('line_industry_circle') + '</a></div>'
                    }else{
                        html += '<div class="descript">' + item.topic_contents + '</div>'
                    }
                    html += '</div>'
                }
                html += '<div class="ip">' + unity_lang('line_attribution') + '：'+ pos_show(item) +'</div></div></div>'
            })
            if(result.data.has_next == '1'){
                console.log('next')
                html += '<a href="/user/line/related" target="_blank">' + unity_lang('line_view_more') + '</a>'
            }
            $box.html(html)
        }
    })
}

function letter_hello(elem){
    let $this = $(elem), user_id = $this.data('uid')
    $.ajax('/async/letter/hello', {
        data: {user_id: user_id},
        type: 'post',
        datatype: 'json',
        success: function (result){
            if(result.state == 0){
                $this.removeAttr('onclick').attr('href', '/user/line/letter?user_id=' + user_id)
                    .attr('target', '_blank').html('' + unity_lang('line_greeting_sent') + '')
                return
            }
            $.alert('' + unity_lang('line_message_fail') + '')
        }
    })
}
