let payment_aswter = {
    'a1': {
      cn: "友情提示:您已选择",
      en: "Reminder: you have selected"
    },
    'a2': {
      cn: "会员套餐",
      en: "packages"
    },
    'a3': {
      cn: '会员',
      en: "member"
    },
    'a4': {
      cn: "元",
      en: ""
    },
    'a5': {
      cn: '支付方式',
      en: "Payment methods"
    },
    'a6': {
      cn: '支付清单',
      en: "Payment list"
    },
    'a7': {
      cn: '合计',
      en: "total"
    },
    'a8': {
      cn: '￥',
      en: "$"
    },
    'a9': {
      cn: '月',
      en: "month"
    },
    'a10': {
      cn: '年',
      en: "year"
    },
    'a11': {
      cn: '增值服务',
      en: "Value-added services"
    },
    'a12': {
      cn: '立即支付',
      en: "Pay now "
    },
    'a13':{
      cn:"服务周期",
      en:"service cycle"
    },
    'a14':{
      cn:"套餐选择",
      en:"package selection"
    },
    'a15':{
      cn:"支付提示",
      en:"Payment tips"
    },
    'a16':{
      cn:"您之前有一笔购买订单，请确认支付状态。",
      en:"You have a previous purchase order, please confirm the payment status."
    },
    'a17':{
      cn:"未支付，重新购买",
      en:"If not paid, repurchase"
    }
  }
let payment_lang = $(".product-container").data("lang")

let data_list = {
    pay_source: 0,
    method: payment_lang=="cn"?1:3, //默认支付宝
    auto_renew: 0,
    pay_duration: 12,
    products: 12,

    scene: 'wap_pay_url', //场景

    return_url: '/Alipay',
    quit_url: '/Alipay'
}

$(function () {

    setting_search()

    pd_list().then(function (res) {
        if (res == true) {
            get_list()
        } else {
            let order_no = res
            buy_vip_toast2(
                `${get_lang(payment_lang,payment_aswter,'a15')}`,
                `${get_lang(payment_lang,payment_aswter,'a16')}`,
                `${get_lang(payment_lang,payment_aswter,'a17')}`,
                order_no
            );
        }
    })

    $(".zf .btn span").click(function () {
        $(this).addClass("active").siblings().removeClass("active")
        if ($(this).data("type") == "zfb") {
            data_list.method = 1
        } else {
            data_list.method = 2
        }
        get_list()
    })

    $(".zf-btn a").click(function () {
        add_list()
    })

})

// 获取支付清单
function get_list() {
    axios.get('/payment/price/details', {
        params: data_list
    }).then(function (res) {
        console.log(res, "购买清单")
        if (res.data.state == 0) {
            let text=res.data.data.payment_item.length!==0?res.data.data.payment_item[0].des:res.data.data.payment_single.des
            // 清单
            $(".zfqd>span").html(`<span>${text}</span>`)
            // 合计价格
            if(payment_lang=="cn"){
                $(".zfqd>div span").eq(1).children("span").text(`${res.data.data.total_amount}`)
                // 价格
                $(".zf-btn a span").text(`${res.data.data.total_amount}`)
            }else{
                $(".zfqd>div span").eq(1).children("span").text(`${res.data.data.initial_amount}`)
                // 价格
                $(".zf-btn a span").text(`${res.data.data.initial_amount}`)
            } 
        }
    })
}

// 添加订单
function add_list() {
    axios.post('/payment/add', data_list).then(function (res) {
        console.log(res, "添加订单")
        let url = ''
        // 支付宝支付
        if (data_list.method == 1) {
            url = res.data.data.integration.alipay_url
            //微信支付
        } else if (data_list.method == 2) {
            url = res.data
        }else {
            url = res.data.data.integration.pp_url
          }
        window.location.href = url
    })
}

// 判断是否存在未支付订单
function pd_list() {
    return new Promise(function (resolve, reject) {
        axios.get(`/payment/products/price?is_payment=1`).then(res => {
            if (res.data.state == 0) {
                resolve(true)
            } else if (res.data.state == 3001) {
                resolve(res.data.data.order_no)
            }
        })
    })
}

// 地址栏参数处理  初始化页面
function setting_search() {
    let search_key = window.location.search
    let lastindex = search_key.lastIndexOf("=")

    let fistindex = search_key.indexOf("=")
    let fistindex1 = search_key.indexOf("&")
    // 产品id
    let key0 = search_key.slice(fistindex + 1,fistindex1)

    // 产品
    let key = search_key.slice(lastindex + 1)

    console.log(key,key0)
    key == 'yue_kt' ? data_list.products = 12 : data_list.products = 6
    if (key == 'yue_kt') {
        data_list.products = 12
    } else if (key == 'soso') {
        if(key0==11){
            data_list.products = 11
        }else if(key0==4){
            data_list.products = 4
        }
       
    } else if (key == "benchmark") {
        data_list.products = 6
    } else if (key == "jungle_scout") {
        if(key0==10){
            data_list.products = 10
        }else if(key0==9){
            data_list.products = 9
        }
    }
}