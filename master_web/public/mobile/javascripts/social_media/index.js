let img_src=$(".email-container").data("img")

var mySwiper = new Swiper('#swiper', {
    // 改可视区域可以显示的轮播框的个数
    loop: true,
    slidesPerView: 'auto',
    loopedSlides: 5,
    pagination: {
        el: '.swiper-pagination',
    },
})

// 返回
$(".email-header img").click(function () {
    window.history.back();
})

// 页面来源  社媒邮箱采集工具  外贸三剑客  邮件群发工具  亚马逊选品
let from_page=window.location.pathname.slice(1,)
console.log(from_page,"页面来源")

// 初始向下
let up_or_down = 0

let social_media_lang=$(".email-container").data("lang")

// 亚马逊问题答案
let ymx_aswter_text = ['Jungle Scout网页版和JS插件支持9个站点：美国、加拿大、墨西哥、印度、英国、法国、西班牙、意大利、德国。', 'JS插件仅支持1人同时使用，就像QQ账户，只能支持1人在线。若需多人同时使用插件，请购买多套插件。Jungle Scout网页版可以支持最多6人同时使用。', '插件如果安装在谷歌Chrome浏览器上，下载安装和初次登录需要“科学上网”，但之后使用就不需要了；详细的下载插件步骤请点开链接。如果您有任何下载安排的问题，还可以联系我们的客服获得帮助。', '从2019年2月1日起，JS插件再也没有终身版了，现在有按月或按年付费的套餐。Jungle Scout网页版也是按年或按月购买的，没有终身版。', '答：无论您是新手卖家，还是经验丰富的大卖，我们都建议您购入插件和网页版的组合套装，这两个工具功能互补，适用于选品的不同阶段。购买套装不仅可以享受更优惠的价格，还使得您的选品和运营决策更有保障。', '答：如果您只想了解一个ASIN的预估销量，那么JS插件就能满足您的需求。JS插件依据一级类目的排名，根据JS独家算法来预估销量，精准度在行业内领先。']
let ymx_aswter_text_en = ['At present, we have provided inquiries about import and export data from 31 trading countries, and all data are purchased from local national business departments, and the data is legal and guaranteed',
 'Regular registered users can purchase VIP and Diamond members directly. If your VIP account has not expired, you can also upgrade directly to Diamond (Blue and Yellow) membership, and the system will automatically deduct your VIP balance when upgrading your membership.', 
 'The original contract or electronic manuscript can be provided, contact customer service to go through the contract process. Electronic invoices, paper general receipts and special invoices can be provided, and diamond members can apply for invoicing in the data management center "My Orders" or contact customer service to issue invoices, and paper invoices are free of charge!',
  'Support PayPal, Alipay, WeChat, bank-to-business transfer. The online payment account will be opened automatically, when you choose to transfer to the company, manually open the account within 1 hour after the successful transfer, and provide the website to register an account.',
   'There are many data usage scenarios, including customer development, market analysis, peer & customer monitoring and maintenance. The content of the review includes: trading partners, products, volume and price, market analysis, contact information', 'First of all, the product attribute is the platform model, registered users can verify for free, good experience. Secondly, we have data consultants and after-sales customer service, which can save the intermediate price difference']

// 邮件群发工具问题答案
let yjqf_aswter_text = ['目前支持支付宝，微信，paypal，以及对公转账。', 'Benchmark Email满客邮件有多种弹性方案可以选择，若联络人数超出方案人数，您可以升级方案或是洽询官方客服，亲切的客服将协助选择最适合您的邮件群发方案。 ', '即刻开通，确认订单信息发送正式账号。', 'Benchmark Email 满客邮件支援英语，西班牙语，德语，繁体中文，简体中文，日语，意大利语，葡萄牙语和法语这9 种不同语言。', '根据指定条件在触发邮件里面建立名单触发；您也可以根据链接点击或开启，建立邮件互动触发机制。当联络人触发以下条件，可向他们发送邮件。', '外贸，跨境电商，物流，教育等行业皆可使用 Benchmark Email 满客邮件。','用户需要遵守 7 天规则规定，邮件发送七天后才能从账户删除名单。设定发送的邮件都需要经过 Benchmark 审核程序，对含有危险性或恶意性的邮件内容持有保留发送权利。']
let yjqf_aswter_text_en = ['At present, we have provided inquiries about import and export data from 31 trading countries, and all data are purchased from local national business departments, and the data is legal and guaranteed',
 'Regular registered users can purchase VIP and Diamond members directly. If your VIP account has not expired, you can also upgrade directly to Diamond (Blue and Yellow) membership, and the system will automatically deduct your VIP balance when upgrading your membership.', 
 'The original contract or electronic manuscript can be provided, contact customer service to go through the contract process. Electronic invoices, paper general receipts and special invoices can be provided, and diamond members can apply for invoicing in the data management center "My Orders" or contact customer service to issue invoices, and paper invoices are free of charge!',
  'Support PayPal, Alipay, WeChat, bank-to-business transfer. The online payment account will be opened automatically, when you choose to transfer to the company, manually open the account within 1 hour after the successful transfer, and provide the website to register an account.',
   'There are many data usage scenarios, including customer development, market analysis, peer & customer monitoring and maintenance. The content of the review includes: trading partners, products, volume and price, market analysis, contact information', 'First of all, the product attribute is the platform model, registered users can verify for free, good experience. Secondly, we have data consultants and after-sales customer service, which can save the intermediate price difference']

// 外贸三剑客问题答案
let sjk_aswter_text = ['答：三剑客套装不仅包含了黄钻会员，还包含了社媒邮箱采集工具、Benchmark邮件群发工具，三款产品。', '答：三剑客高级版套装中的“社媒邮箱采集”是高级版，', '答：三剑客套装是一套客户开发的解决方案，从寻找潜在目标客户开始，确认目标后采集公司中高层，雇员的邮箱；最后是通过benchmark邮箱营销与客户建立联系。', '答：购买套装后，我们将为您分配一名专属的数据顾问。同时我们还提供每月2次的视频直播培训课程。', '答：黄钻会员、社媒搜搜邮箱采集、Benchmark邮件群发的服务期均为12个月。', '答：1、可以在线选择三剑客套装直接购买，账号实时开通。2、银行转账水单提交至客服后，一个工作日内开通三剑客套装。']
let sjk_aswter_text_en = ['At present, we have provided inquiries about import and export data from 31 trading countries, and all data are purchased from local national business departments, and the data is legal and guaranteed',
 'Regular registered users can purchase VIP and Diamond members directly. If your VIP account has not expired, you can also upgrade directly to Diamond (Blue and Yellow) membership, and the system will automatically deduct your VIP balance when upgrading your membership.', 
 'The original contract or electronic manuscript can be provided, contact customer service to go through the contract process. Electronic invoices, paper general receipts and special invoices can be provided, and diamond members can apply for invoicing in the data management center "My Orders" or contact customer service to issue invoices, and paper invoices are free of charge!',
  'Support PayPal, Alipay, WeChat, bank-to-business transfer. The online payment account will be opened automatically, when you choose to transfer to the company, manually open the account within 1 hour after the successful transfer, and provide the website to register an account.',
   'There are many data usage scenarios, including customer development, market analysis, peer & customer monitoring and maintenance. The content of the review includes: trading partners, products, volume and price, market analysis, contact information', 'First of all, the product attribute is the platform model, registered users can verify for free, good experience. Secondly, we have data consultants and after-sales customer service, which can save the intermediate price difference']

// 社媒邮箱采集工具问题答案
let smyx_aswter_text = ['高级版可以同时5个人使用，每天可以有效深挖200家公司的雇员信息。', '建议每次使用一个核心关键词', '可以', '可以采集到公司雇员的职位、邮箱信息、以及相关的社媒账号。', '12个月', '第一步：通过产品名称、公司名称搜索官网并筛选。第二步：采集确认的公司。第三步：查看采集结果']
let smyx_aswter_text_en = ['At present, we have provided inquiries about import and export data from 31 trading countries, and all data are purchased from local national business departments, and the data is legal and guaranteed',
 'Regular registered users can purchase VIP and Diamond members directly. If your VIP account has not expired, you can also upgrade directly to Diamond (Blue and Yellow) membership, and the system will automatically deduct your VIP balance when upgrading your membership.', 
 'The original contract or electronic manuscript can be provided, contact customer service to go through the contract process. Electronic invoices, paper general receipts and special invoices can be provided, and diamond members can apply for invoicing in the data management center "My Orders" or contact customer service to issue invoices, and paper invoices are free of charge!',
  'Support PayPal, Alipay, WeChat, bank-to-business transfer. The online payment account will be opened automatically, when you choose to transfer to the company, manually open the account within 1 hour after the successful transfer, and provide the website to register an account.',
   'There are many data usage scenarios, including customer development, market analysis, peer & customer monitoring and maintenance. The content of the review includes: trading partners, products, volume and price, market analysis, contact information', 'First of all, the product attribute is the platform model, registered users can verify for free, good experience. Secondly, we have data consultants and after-sales customer service, which can save the intermediate price difference']

// 大课堂问题答案
let dkt_aswter_text = ['随心听服务，是录播视频课程，除了每月2次免费直播课程 的回放权限还有更多名师课程、系列课程等内容可以反复学习，无限次查阅。', '1.邦阅网官网-大课堂-我的 2.关注公众号（@外贸这点事）点击底部菜单栏。', '根据每个课程专题的内容，直播课回放60分钟左右，系列 课程每个小节20分钟左右。', '买“随心听服务后”，可以添加小邦（微信ID：bangyue 52）拉您进入专属的用户微信群，与其他学员一起学习。 社群内不定期会有讲师答疑以及会员红包福利等活动。', '邦阅大课堂随心听服务为虚拟内容服务，一旦购买无法退 款，请您谅解。']
let dkt_aswter_text_en = ['At present, we have provided inquiries about import and export data from 31 trading countries, and all data are purchased from local national business departments, and the data is legal and guaranteed',
 'Regular registered users can purchase VIP and Diamond members directly. If your VIP account has not expired, you can also upgrade directly to Diamond (Blue and Yellow) membership, and the system will automatically deduct your VIP balance when upgrading your membership.', 
 'The original contract or electronic manuscript can be provided, contact customer service to go through the contract process. Electronic invoices, paper general receipts and special invoices can be provided, and diamond members can apply for invoicing in the data management center "My Orders" or contact customer service to issue invoices, and paper invoices are free of charge!',
  'Support PayPal, Alipay, WeChat, bank-to-business transfer. The online payment account will be opened automatically, when you choose to transfer to the company, manually open the account within 1 hour after the successful transfer, and provide the website to register an account.',
   'There are many data usage scenarios, including customer development, market analysis, peer & customer monitoring and maintenance. The content of the review includes: trading partners, products, volume and price, market analysis, contact information', 'First of all, the product attribute is the platform model, registered users can verify for free, good experience. Secondly, we have data consultants and after-sales customer service, which can save the intermediate price difference']

let text_cn,text_en

if(from_page=="social-media"){
    text_cn=smyx_aswter_text
    text_en=smyx_aswter_text_en
}else if(from_page=="san-jian-ke"){ 
    text_cn=sjk_aswter_text
    text_en=sjk_aswter_text_en
}else if(from_page=="amazon"){ 
    text_cn=ymx_aswter_text
    text_en=ymx_aswter_text_en
}else if(from_page=="benchmark"){ 
    text_cn=yjqf_aswter_text
    text_en=yjqf_aswter_text_en
}else if(from_page=="yuekt"){ 
    text_cn=dkt_aswter_text
    text_en=dkt_aswter_text_en
}

   // 问题按钮
$(".email-wd ul li").click(function () {
    console.log(up_or_down,social_media_lang,"556456456")
    let index = $(this).index()
    if (up_or_down == 0) {
        if(social_media_lang=='cn'){
           let $box = $(`<li><span class='hs'>A</span><span class="text">${text_cn[index]}</span></li>`)
          
           $(this).after($box)
        }else if(social_media_lang=='en'){
           let $box = $(`<li><span class='hs'>A</span><span class="text">${text_en[index]}</span></li>`)
           $(this).after($box)
        }
        $(this).children("img").attr("src", `${img_src}mobile/images/loft_HD/jiantou_up.png`)
        up_or_down = 1
    } else {
        $('.hs').parent().remove()
        $(".email-wd ul li img").attr("src", `${img_src}mobile/images/loft_HD/jiantou_down.png`)
        up_or_down = 0
    }
})