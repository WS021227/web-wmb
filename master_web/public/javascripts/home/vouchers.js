// 翻译数据  调用 unity_lang 方法  如： unity_lang('aa')
let curr_lang_json = {

    'mine_vouchers_received': {cn: '已领取，去购买→', en: 'Received, Buy →'},
    'yangben': {cn: 'yangben', en: 'demo'}
}
$(function () {

})
function get_voucher(elem) {
    let id = $(elem).data('id'), flag = $(elem).data('flag'), m = $(elem).data('m')
    $.ajax('/async/coupon/receive', {
        datatype: 'text/json',
        type: 'post',
        data: {
            source:'auto',
            expire_flag:'sync',
            setting_id:id,
        },
        success: function (result) {
            if (result.state == 0) {
                $(elem).text(unity_lang('mine_vouchers_received'))
                    .attr("target", "_blank")
                    .attr("href", '/Alipay?v='+ flag +'&m=' + m)
                    .removeAttr('onclick')
                    .parents('.voucher-box').addClass('active')
                return;
            }
            $.alert('receive fail')
        }
    })


}
