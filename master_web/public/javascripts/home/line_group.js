// 翻译数据  调用 unity_lang 方法  如： unity_lang('aa')
// let curr_lang_
curr_lang_json['group_enter'] =  {cn: '进入圈子', en: 'Enter'},
curr_lang_json['group_exit'] =  {cn: '退圈', en: 'Exit Circle'},
curr_lang_json['group_introduction'] =  {cn: '简介', en: 'Introduction'},
curr_lang_json['group_members'] =   {cn: '成员', en: 'Members'},
curr_lang_json['group_all'] =   {cn: '所有', en: 'All'},
curr_lang_json['group_posts'] =  {cn: '帖子', en: 'Posts'},
curr_lang_json['group_views'] =  {cn: '浏览量', en: 'Views'},
curr_lang_json['group_yesterday'] =  {cn: '昨日', en: 'Yesterday'},
curr_lang_json['group_delete'] =  {cn: '删除', en: 'Delete'},
curr_lang_json['group_in'] =  {cn: '在', en: ' in '},
curr_lang_json['group_detail'] =  {cn: '详情', en: 'Detail'},
curr_lang_json['group_loading_more'] =  {cn: '加载更多', en: 'Loading more'},
curr_lang_json['group_loading_more_no'] =  {cn: '暂无更多数据', en: 'No further data available'},
curr_lang_json['group_message'] = {cn: '私信', en: 'message'},
curr_lang_json['group_clean'] = {cn: '取关', en: 'Clean'},
curr_lang_json['group_follow'] = {cn: '关注', en: 'Follow'},
curr_lang_json['group_enrolled_in'] = {cn: '我入驻了', en: 'I am enrolled in '},
curr_lang_json['group_industry_circle'] = {cn: '行业圈', en: ' Industry Circle'},
curr_lang_json['group_industry_circle_tips'] = {cn: '，以下是我的名片，如有需要请私信我哦。', en: ', Here is my business card, if you need it, please send me a private message.'},
curr_lang_json['group_attribution'] = {cn: '归属地', en: 'Attribution'},
curr_lang_json['group_am_in'] =  {cn: '我在', en: 'I am in '},
curr_lang_json['group_new_post'] =  {cn: '分享了一篇新贴子，欢迎您来讨论哦', en: 'has shared a new post and you are welcome to discuss it!'},
curr_lang_json['group_from'] = {cn: '来自于', en: 'From '},
curr_lang_json['group_say_hello'] = {cn: '和他打个招呼', en: 'Say hello to him'},
curr_lang_json['group_join_discussion'] = {cn: '参与讨论', en: 'Join the discussion'},


curr_lang_json['yangben'] =  {cn: 'yangben', en: 'demo'}


let tab_funs = {
    group: igroup_list,
    topic: topic_list,
    // reply: reply_list,
    // replymy: reply_my_list,
    message: message_list
}
let topic_circle = 0
$(function (){

    //
    $(document).on('click', '.tab', function () {
        let $this = $(this), tab = $this.data('tab'), hav = $this.data('hav')
        if(hav) return;
        tab_funs[tab]()
        $this.data('hav', 1)
    })
    $(document).on('click', '#circle_list .option-item', function () {
        let $this = $(this)
        topic_circle = $this.data('value')
        $('#topic_list').html('')
        get_topic_list(1)
    })

    let tab = queryString('tab') || 'group'
    $('.tab.' + tab).click()

})


/***
 * 加载圈子
 */
function igroup_list(){
    $.ajax('/async/line/group/inbound',{
        datatype: 'json',
        type: 'get',
        data: {page: 1},
        success: function (result){
            if(result.state != 0) return not_fount($('#group_list'));
            let list = (result.data||{}).list ||[], html = ''
            if(list.length <= 0) return not_fount($('#group_list'));
            $.each(list, function (_,item){
                html += '<div class="my-group-item">\n' +
                    '<div class="exchange">' +
                    //'<a class="btn join" target="_blank" href="'+ line_route +'/group-'+item.id+'">进入圈子</a>' +
                    // '<button class="btn">退圈</button>
                    '</div><div class="position">' +
                    '<img class="head" src="'+ result.static_url + item.photo  +'" alt="">' +
                    '<div class="name"><a target="_blank" href="'+ line_route +'/group-'+item.id+'">'+ item.name +'</a></div>' +
                    '<div class="descript">' + unity_lang('group_introduction') + '：'+ item.introduction +'</div>'
                let users = item.circle_user_list, ulist = users?JSON.parse(users):[]
                if(ulist.length > 0){
                    html += '<div class="member-list">' + unity_lang('group_members') + '： '
                    $.each(ulist, function (_, uitem){
                        html +='<div class="member-item"><img src="'+ result.static_url + uitem.avatar  +'" alt=""></div>'
                    })

                    html += ('</div><a class="all-member" href="javascript:void(0);" target="_blank">' + unity_lang('group_all') + '</a>')
                }
                html += ' <div class="analyse-count"> <div class="count-item">' +
                    '<div class="type point">' + unity_lang('group_members') + '</div>' +
                    '<div class="count">'+ item.user_count +'</div>' +
                    '<div class="day">' + unity_lang('group_yesterday') + ' +'+ item.yesterday_users +'</div></div>' +
                    '<div class="count-item">' +
                    '    <div class="type point">' + unity_lang('group_posts') + '</div>' +
                    '    <div class="count">'+ item.topic_count +'</div>' +
                    '    <div class="day">' + unity_lang('group_yesterday') + ' +'+ item.yesterday_topic +'</div>' +
                    '</div>' +
                    '<div class="count-item">' +
                    '    <div class="type point">' + unity_lang('group_views') + '</div>' +
                    '    <div class="count">'+ item.view_count +'</div>' +
                    '    <div class="day">' + unity_lang('group_yesterday') + ' +'+ item.yesterday_view +'</div>' +
                    '</div>' +
                    '</div></div></div>'
            })
            $('#group_list').append(html)
        }
    })

}
/***
 * 贴子列表
 */
function topic_list(){
    // /topic/circle
    get_topic_list(1)
    load_circle()
}
function get_topic_list(page){
    page = page || 1
    $.ajax('/async/line/circle/topic', {
        datatype: 'json',
        type: 'get',
        data: {page: page, group_id: topic_circle},
        success: function (result){
            if(result.state != 0) return not_fount($('#topic_list'));
            let list = (result.data||{}).list ||[];
            if(list.length <= 0) return not_fount($('#topic_list'))
            let html = ''
            $.each(list, function (_,item){
                html += '<div class="group-message-item">' +
                    '<a class="del-btn" data-tid="'+ item.id +'" onclick="topic_delete(this)">&#10005;' + unity_lang('group_delete') + '</a>' +
                    '<div class="position pl">' +
                    '<img class="head" src="'+ result.static_url + item.avatar +'" alt="">' +
                    '<div class="name">'+ item.name+'</div>' +
                    '<div class="time">'+ topic_time(item.create_time)

                html += ('' + unity_lang('group_in') + '' + '<a href="'+ line_route +'/group-'+ item.circle_id +'" target="_blank">'+ item.circle_name +'</a>')

                let content = brSlice(item.contents, 300)
                html +='</div><div class="detail">'+ content.html +'<a target="_blank" href="'+ line_route +'/topic/'+ item.id +'">' + unity_lang('group_detail') + '</a></div>'
                if(item.images){
                    html+=' <div class="pics-list">'
                    let images = item.images.split(',')
                    $.each(images, function (_, b){
                        html += '<div class="pic-item"><img src="'+ result.static_url + b +'" alt=""></div>'
                    })
                    html +='</div>'
                }
                        // <div class="bt-exchange">
                        //     <button class="btn">刷新</button>
                        //     <button class="btn">置顶</button>
                        //     <button class="btn">精华</button>
                        //     <button class="btn">编辑</button>
                        //     <div class="exchange-icon-list">
                        //         <div class="icon-item"><i class="icon"></i></div>
                        //         <div class="icon-item"><i class="icon"></i></div>
                        //         <div class="icon-item"><i class="icon"></i></div>
                        //         <div class="icon-item"><i class="icon"></i></div>
                        //     </div>
                        // </div>
                html +='</div></div>'
            })
            $('#topic_list').append(html)
            if(result.has_next) {
                $('#more_topic').removeClass('display-none').data('page', page + 1).html('' + unity_lang('group_loading_more') + '')
                    .attr('onclick', 'more_topic(this)')
            }else{
                $('#more_topic').removeClass('display-none').removeAttr('page').removeAttr('onclick')
                    .html('' + unity_lang('group_loading_more_no') + '')
            }
        }
    })
}
function more_topic(elem){
    let $this = $(elem), page = Number($this.data('page'))
    get_topic_list(page)
}

function load_circle(){
    $.ajax('/async/line/circle/items', {
        type:'get',
        datatype: 'json',
        data: {exist_topic: 1},
        success: function (result){
            console.log(result, 'asdfasf')
            $.each(result.data.list, function (a, b){
                $('#circle_list').append('<div class="option-item" data-value="'+ b.id +'">'+ b.name +'</div>')
            })
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
                $this.parents('.group-message-item').remove()
                return;
            }
        }
    })
}
// /***
//  * 我的回复
//  */
// function reply_list(){
//     $.ajax('/async/line/reply',{
//         datatype: 'json',
//         type: 'get',
//         data: {page: 1},
//         success: function (result){
//             if(result.state != 0) return;
//             let list = (result.data||{}).list ||[];
//             let html = ''
//             $.each(list, function (_,item){
//                 html += '<div class="group-message-list">\n' +
//                     ' <div class="group-message-item">\n' +
//                     '     <button class="del-btn" data-rid="'+ item.id +'">✕删除</button>\n' +
//                     '     <div class="position">\n' +
//                     // '         <img class="head" src="' + result.static_url + item.avatar +'" alt="">\n' +
//                     // '         <div class="name">'+ item.name +'</div>\n' +
//                     '         <div class="time">'+ topic_time(item.create_time) +'</div>\n' +
//                     '         <div class="detail">' + item.content +'</div>\n' +
//                     '         <div class="group-message-from">\n' +
//                     '             <!-- 可选: 由样式 unhead 控制 -->\n' +
//                     '             <img class="from-head" src="' + result.static_url + item.topic_avatar +'" alt="">\n' +
//                     '             <div class="from-name">'+ item.topic_user_name +'</div>\n' +
//                     '             <div class="from-title">'+ item.topic_content +'</div>\n'
//                     if(item.circle_id){
//                         html += '<div class="from-group">来自于：'+ item.circle_name +'</div>'
//                     }
//                 html += ' </div>\n' +
//                     // '         <div class="group-message-from unhead">\n' +
//                     // '             <!-- 可选: 由样式 unhead 控制 -->\n' +
//                     // '             <div class="from-name">Mark Zhu</div>\n' +
//                     // '             <div class="from-title">[分享] 我是来测试发帖功能的，什么都没有别误会了哦！</div>\n' +
//                     // '             <div class="from-group">\n' +
//                     // '                 来自于：Led灯具小组\n' +
//                     // '             </div>\n' +
//                     // '         </div>\n' +
//                     '     </div>\n' +
//                     ' </div>\n' +
//                     '</div>'
//             })
//             $('#reply_list').append(html)
//         }
//     })
//
// }


// /***
//  * 回复我的
//  */
// function reply_my_list() {
//     $.ajax('/async/line/reply/my', {
//         datatype: 'json',
//         type: 'get',
//         data: {page: 1},
//         success: function (result) {
//             if (result.state != 0) return;
//             let list = (result.data || {}).list || [];
//             let html = ''
//             $.each(list, function (_, item) {
//                 html += '<div class="group-message-list">\n' +
//                     '<div class="group-message-item">\n' +
//                     '    <div class="exchange">\n' +
//                     '        <a class="btn" target="_blank" href="/user/line/letter?user_id='+ item.reply_user_id +'">对话</a>\n'
//                 if(item.is_follow){
//                     html += '<button class="btn" onclick="line_unfollow(this)">-取关</button>'
//
//                 }else{
//                     html += '<button class="btn" onclick="line_follow(this)">+关注</button>'
//
//                 }
//                 html += '    </div>\n' +
//                     '    <div class="position pl">\n' +
//                     '        <img class="head" src="' + result.static_url + item.reply_user_avatar + '" alt="">\n' +
//                     '        <div class="name">' + item.reply_user_name + '</div>\n' +
//                     '        <div class="time">' + topic_time(item.create_time) + '</div>\n' +
//                     '        <div class="change">我回复了您'
//
//                 if (item.circle_id) {
//                     html += '在<a href="' + line_route + '/group-' + item.circle_id + '" target="_blank">' + item.circle_name + '</a>'
//                 }
//                 html += '的帖子：</div>' +
//                     '<div class="detail">' + item.content + '</div>\n' +
//                     '        <div class="group-message-from">\n' +
//                     // '            <img class="from-head" src="" alt="">\n' +
//                     // '            <div class="from-name">Mark Zhu</div>\n' +
//                     '            <div class="from-title">' + item.topic_content + '</div>\n'
//                 if (item.circle_id) {
//                     html += '<div class="from-group">来自于：<a target="_blank" href="' + line_route + '/group-' + item.circle_id + '">' + item.circle_name + '</a></div>'
//                 }
//                 html += '</div></div></div></div>'
//             })
//             $('#reply_my_list').append(html)
//         }
//     })
// }
/***
 * 消息
 */
function message_list(page) {
    page = page || 1
    $.ajax('/async/line/group/message', {
        datatype: 'json',
        type: 'get',
        data: {page: page},
        success: function (result) {
            if (result.state != 0) return not_fount($('#group_message_list'));
            let list = (result.data || {}).list || [], html = ''
            if(list.length <= 0) return not_fount($('#group_message_list'))
            $.each(list, function (_, item) {
                html += '<div class="group-message-item">\n' +
                    '     <div class="exchange">\n' +
                    '         <a class="btn" target="_blank" href="/user/line/letter?user_id=' + item.user_id + '">' + unity_lang('group_message') + '</a>\n'
                if (item.is_follow) {
                    html += '<a class="btn" onclick="line_unfollow(this)">' + unity_lang('group_clean') + '</a>'
                } else {
                    html += '<a class="btn" onclick="line_follow(this)">' + unity_lang('group_follow') + '</a>'

                }
                html += '</div>\n' +
                    '     <div class="position pl">\n' +
                    '         <img class="head" src="' + result.static_url + item.avatar + '" alt="">\n' +
                    '         <div class="name"><a target="_blank" href="'+ line_route +'/line/'+ item.user_id  +'">' + item.name + '</a></div>\n' +
                    '         <div class="time">' + topic_time(item.create_time) + '</div>\n'
                if (item.data_type == 0) {
                    html += '<div class="detail">' + unity_lang('group_enrolled_in') + '<a target="_blank" href="' + line_route + '/group-' + item.circle_id + '">' + item.circle_name + '' + unity_lang('group_industry_circle') + '</a>' + unity_lang('group_industry_circle_tips') + '</div>'

                    html += '<div class="group-message-from">\n' +
                       // '    <img class="from-head" src="' + result.static_url + item.avatar + '" alt="">\n' +
                        '    <div class="from-name"><a target="_blank" href="'+ line_route +'/line/'+ item.user_id  +'">' + item.name + '<span>(' + item.position + ')</span></a></div>\n' +
                        '    <div class="from-sub">' + item.company_name + '<font>|</font>' + item.company_type_name + '</div>\n' +
                        '    <div class="from-sub">'+ item.verb +'：' + item.products + '</div>\n' +
                        '    <div class="from-ip">' + unity_lang('group_attribution') + '</a>：' + pos_show(item) + '</div>'
                } else {
                    html += '<div class="detail">' + unity_lang('group_am_in') + '<a target="_blank" href="' + line_route + '/group-' + item.circle_id + '">' + item.circle_name + '</a>' + unity_lang('group_new_post') + '</div>'
                    html += '<div class="group-message-from">' +
                       // '<img class="from-head" src="' + result.static_url + item.avatar + '" alt="">' +
                       // '<div class="from-name">' + item.name + '</div>' +
                        '<div class="from-title"><a target="_blank" href="' + line_route + '/topic/' + item.topic_id + '">' + item.topic_contents + '</a></div>' +
                        '<div class="from-group">' + unity_lang('group_from') + '：<a target="_blank" href="' + line_route + '/group-' + item.circle_id + '">' + item.circle_name + '' + unity_lang('group_industry_circle') + '</a></div></div>'
                }
                html += '</div><div class="active-btn-link">'
                if (!item.is_hello && item.data_type == 0) {
                    html += '<a class="active-btn" data-uid="'+ item.user_id +'" onclick="letter_hello(this)">' + unity_lang('group_say_hello') + '</a>'
                }
                if (item.data_type == 1) {
                    html += '<a class="active-btn" target="_blank" href="' + line_route + '/topic/' + item.topic_id + '">' + unity_lang('group_join_discussion') + '</a>'
                }
                html += '</div></div></div>'
            })
            $('#group_message_list').append(html)
            if(result.has_next) {
                $('#more_group_message').removeClass('display-none').data('page', page + 1).html('' + unity_lang('group_loading_more') + '')
                    .attr('onclick', 'more_group_message(this)')
            }else{
                $('#more_group_message').removeClass('display-none').removeAttr('page').removeAttr('onclick')
                    .html('' + unity_lang('group_loading_more_no') + '')
            }
        }
    })
}
function more_group_message(elem){
    let $this = $(elem), page = Number($this.data('page'))
    message_list(page)
}