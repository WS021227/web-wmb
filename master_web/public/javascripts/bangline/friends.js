// 公司详情 翻译数据  调用 unity_lang 方法  如： unity_lang('aa')
let curr_lang_json = {
    'share_text_more_click': {cn: '点击加载更多', en: 'Click to load more'},
    'detail_module_loading': {cn: '加载中...', en: 'loading...'},


    'aa': {cn: 'aa', en: 'aa'}
}
$(function () {

})
// 更多列表
var page=1
function more_friends(elem) {
    $(elem).text(unity_lang('detail_module_loading'))
    page++
    $.ajax('/async/friend/list', {
        datatype: 'text/json',
        type: 'get',
        data: {page: page},
        success: function (result) {
            if (result.state == 0) {
                $(elem).text(unity_lang('share_text_more_click'))
                $.each(result.data.list, function () {
                    var list = '<li><a target="_blank" href="/m' + this.id + '"><img src="' + this.photo + '"><span>' + this.contact + '</span></a></li>'
                    $('.friend-list ul').append(list)
                })
            }
        }
    })
}
