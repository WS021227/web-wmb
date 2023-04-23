let img_src=$(".container").data("img")
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
});

// 初始向下
let up_or_down = 0

// 问题答案
let loft_HD_aswter = {
    'a1': {
        cn: "目前我们已提供了31个贸易国进出口数据的查询，所有数据均从当地国家商务部门采购，数据合法且有保障",
        en: "We currently provide access to import and export data for 31 trading countries, all data is sourced from local national commerce departments, the data is legal and guaranteed......"
    },
    'a2': {
        cn: "普通注册用户可以直接购买VIP和钻石会员。如果您的VIP账号尚未过期，亦可直接升级至钻石(蓝黄)会员，升级会员时系统会自动将您VIP的余额进行抵扣。",
        en: "The system will automatically credit the balance of your VIP when you upgrade your membership."
    },
    'a3': {
        cn: "合同原件或是电子稿件均可提供，联系客服走合同流程。可提供电子发票、纸质普票和专票，钻石会员可在数据管理中心”我的订单“中申请开票或联系客服开票，纸质发票包邮！",
        en: "The original contract or the electronic copy can be provided, contact customer service to go through the contract process. Electronic invoices, paper invoices and special invoices are available. Diamond members can apply for invoicing in the My Orders section of the Data Management Centre or contact customer service for invoicing, and paper invoices are shipped!"
    },
    'a4': {
        cn: "支持PayPal、支付宝、微信、银行对公转账。在线支付账号将自动开通，选择对公转账时，转账成功后1个小时内手动开通账号，提供网站注册账号。支持PayPal、支付宝、微信、银行对公转账。在线支付账号将自动开通，选择对公转账时，转账成功后1个小时内手动开通账号，提供网站注册账号。",
        en: "PayPal, Alipay, WeChat and bank transfers for public use are supported. Online payment account will be opened automatically, when you choose to transfer funds for public use, the account will be opened manually within 1 hour after the successful transfer, a website registration account is provided."
    },
    'a5': {
        cn: "数据使用场景很多，包括客户开发、市场分析、同行&客户的监控与维护。查阅内容有：贸易伙伴、产品、量价、市场分析、联系方式",
        en: "The data is used in many scenarios, including customer development, market analysis, peer & customer monitoring and maintenance. Check out: trading partners, products, volumes, market analysis, contact details..."
    },
    'a6': {
        cn: "首先产品属性是平台模式，注册用户可免费验证，体验好。其次我们有数据顾问和售后客服，可以省去中间差价",
        en: "Firstly, the product attributes are platform model, registered users can verify for free and have a good experience. Secondly, we have data consultants and after-sales customer service, which can eliminate the middle price difference..."
    },
}


// 问题按钮

let loft_HD_lang = $(".container").data("lang")

$(".bj_content ul li").click(function () {
    let index = $(this).index()
    if (up_or_down == 0) {
        console.log(get_lang(loft_HD_lang,loft_HD_aswter,`a${index+1}`),`a${index+1}`,"5555555")
        let $box = $(`<li><span class='hs'>A</span><span class="text">${get_lang(loft_HD_lang,loft_HD_aswter,`a${index+1}`)}</span></li>`)
        $(this).after($box)
        $(this).children("img").attr("src", `${img_src}mobile/images/loft_HD/jiantou_up.png`)
        up_or_down = 1
    } else {
        $('.hs').parent().remove()
        $(this).children("img").attr("src", `${img_src}mobile/images/loft_HD/jiantou_down.png`)
        up_or_down = 0
    }
})

// 返回
$(".bj_head").children().eq(0).click(function () {
    window.history.back();
})