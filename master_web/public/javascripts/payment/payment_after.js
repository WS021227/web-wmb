
function unity_verification_order(order_no, fn) {
    console.log(order_no)
    $.ajax({
        url: '/async/payment/verify',
        type: "post",
        datatype: "json",
        async: true,
        data: {"order_no": order_no},
        success: function (result) {
            fn(result)
            if(result.state == 0){
                pafter(result.data)
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            window.setTimeout(function (){
                unity_verification_order(order_no, fn)
            }, 5000)
        }
    });
}

function pafter(data) {
    if (!data.after_data) return
    if (data.after_data.after == 1) {
        $('.youhuiquan').show().find('.yh-amount').html(data.after_data.amount)
        return;
    }
    if (data.after_data.after == 2) {
        // 过去一年购买vip支付的总金额
        $('#after_payment_code').html('<div class="after-pay-tips">' +
            '<p class="after-pay-tips-1">在最近的12个月，您购买VIP会员时累计支付了<b>' + data.after_data.nearly_year_amount + '元</b>。<br/>当您购买黄钻或三剑客套餐时，累计费用可直接抵扣！</p>' +
            '<p style="margin-top:15px;"><a href="/Alipay?v=tsm&s=VIP_jilei_end">购买黄钻或三剑客</a></p></div>').show()
    }
}