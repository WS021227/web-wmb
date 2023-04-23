let img_src = $(".swiper").data("img")
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
  'a13': {
    cn: "服务周期",
    en: "service cycle"
  },
  'a14': {
    cn: "套餐选择",
    en: "package selection"
  },
  'a15': {
    cn: "支付提示",
    en: "Payment tips"
  },
  'a16': {
    cn: "您之前有一笔购买订单，请确认支付状态。",
    en: "You have a previous purchase order, please confirm the payment status."
  },
  'a17': {
    cn: "未支付，重新购买",
    en: "If not paid, repurchase"
  },
  'a18': {
    cn: "警告",
    en: "Warn"
  },
  'a19': {
    cn: "支付出错,请重新支付",
    en: "There was an error in the payment, please pay again"
  },
  'a20': {
    cn: "处理中",
    en: "Wait"
  }
}
let payment_lang = $(".swiper").data("lang")


// 请求清单(默认)
let order_key = {
  pay_source: 0, //来源
  pay_duration: 1, //周期
  method: payment_lang == "cn" ? 1 : 3, //支付方式 中文默认支付宝 英文默认 paypal
  auto_renew: 0, //自动续费
  products: 1, //产品
  discount: 0, //邦阅折扣
  scene: 'wap_pay_url', //场景
}

console.log(order_key, "查询参数")

let swiper_data = [],
  vip_data = [],
  bd_data = [],
  yellow_data = [],
  sjk_data = [],
  mySwiper = null,
  slide_index = 0;

// 根据页面跳转参数显示对应的套餐
// 地址跳转的格式 Alipay?v/bd/yd/tsm
console.log(window.location.search, "url参数");

let url_flag = window.location.search

let url_key, fj_key;

// 有无附加参数
let start = url_flag.indexOf('&')

console.log(start, "45445454")
if (start == -1) {
  url_key = url_flag.substring(1, );
  fj_key = 0
} else {
  url_key = url_flag.substring(1, start);
  fj_key = url_flag.substring(start + 1, url_flag.length);
}

console.log(url_key, 'swiper参数') //swiper
console.log(fj_key, '附加参数') //套餐选择

// 订单号
let order_no = "";

// 支付方式
// 支付方式显示
let pay_def = $(".zf").data("pay_def");
let pay_active = Number(wg.user.paymenthod || 0);
let pay_currency = wg.user.user_functional.fm || (pay_active == 0 ? (wg.lang == 'cn' ? 'na' : 'usd') : ([1, 2, 4, 5, 7].indexOf(pay_active) >= 0 ? 'rmb' : 'usd')); // 用户已存在的支付方式
console.log(pay_active, pay_currency, "支付数据");

// 进入支付页面先查询是否有未支付的订单
// 获取总数据
(function get_price_list() {
  loadding()
  axios.get(`/payment/products/price?is_payment=1`).then(res => {
    console.log(res, "订单状态")
    if (res.data.state == 0) {
      // swiper_data
      res.data.data.list.forEach(item => {
        swiper_data.push(item)
        if (item.mark == 'v') {
          vip_data = item
        } else if (item.mark == 'bd') {
          bd_data = item
        } else if (item.mark == 'yd') {
          yellow_data = item
        } else {
          sjk_data = item
        }
      });
      printf_swiper()
    } else if (res.data.state == 3001) {
      order_no = res.data.data.order_no
      buy_vip_toast2(
        `${get_lang(payment_lang,payment_aswter,'a15')}`,
        `${get_lang(payment_lang,payment_aswter,'a16')}`,
        `${get_lang(payment_lang,payment_aswter,'a17')}`,
        order_no
      );
      // 存在未支付的子订单
    }else if (res.data.state == 3000) {
      buy_vip_toast1("提示","存在一笔未完成支付的订单,请继续完成支付","前往支付","/payment/unpaid","no-btn")
    }
  })
})()

// 渲染swiper数据
function printf_swiper() {
  console.log(swiper_data, "swiper数据源")
  if (swiper_data.length !== 0) {
    swiper_data.forEach(function (item, index) {
      console.log(item, "swiper数据")
      let $box = $(`
                   <div class="swiper-slide" data-type="${item.mark}" data-hash="${index}" data-products="${item.mark=='v'?1:item.mark=='bd'?2:item.mark=='yd'?3:3+'|'+item.packages.list[0].list[0].products.join("|")}">
                           <div class="sbox ${index==0?'active':''}">
                              <span>${item.name}</span>
                              <p>${get_lang(payment_lang,payment_aswter,'a8')}<span>${item.amount}</span>/${item.duration==12?1:item.duration}${item.duration!==12?get_lang(payment_lang,payment_aswter,'a9'):get_lang(payment_lang,payment_aswter,'a10')}</p>
                              <p>${item.descriptions}</p>
                          </div>
                   </div>
                 `)
      $(".swiper .swiper-wrapper").append($box)
    })
    // 异步显示swiper
    mySwiper = new Swiper(".swiper", {
      // 改可视区域可以显示的轮播框的个数
      loop: false,
      slidesPerView: "auto",
      // 动态侦听
      observer: true,
      observeSlideChildren: true,
      initialSlide: 0
    });

    if (url_key !== '' && $(".swiper .swiper-wrapper").children(".swiper-slide").length >= 1) {
      $(".swiper .swiper-wrapper").children(".swiper-slide").each(function (index, item) {
        if ($(item).data("type") == url_key) {
          $(item).click()
        }
      })
    } else {
      // 未传参数，默认选中第一个slide
      $(".swiper .swiper-wrapper").children(".swiper-slide").eq(0).click()
    }

    delloadding()
  }
};

// 支付方式显示和默认支付
(function () {
  $(`.zf p .pay-${pay_currency}`).removeClass('display-none')
  pay_active == 0 ? pay_active = 1 : pay_active = pay_active
  console.log(pay_currency, pay_active, pay_def, "支付支付")

  // 默认支付方式
  order_key.method = pay_def
  printf_order_list()
})();

// slide切换
$(".swiper .swiper-wrapper").on("click", ".swiper-slide", function () {
  // 初始化
  // 根据不同index赋予不同的初始值
  if ($(this).data("type") == "v") {
    // if (vip_data.duration == 12) {
    //   order_key.pay_duration = 12
    //   order_key.products = 3
    // } else {
    order_key.pay_duration = 1
    order_key.products = 1
    // }
  } else if ($(this).data("type") == "bd") {
    order_key.pay_duration = 12
    order_key.products = 2
  } else if ($(this).data("type") == "yd") {
    order_key.pay_duration = 12
    order_key.products = 3
  } else if ($(this).data("type") == "tsm") {
    order_key.pay_duration = 12
    order_key.products = '3|4|6'
  }

  $(".swiper .swiper-wrapper .swiper-slide").children(".sbox").removeClass("active");
  $(this).children(".sbox").addClass("active");
  order_key.products = $(this).data('products')
  // slide切换标识
  slide_index = $(this).data("type")
  mySwiper.slideTo($(this).data('hash'));

  // 渲染套餐内容
  printf_content()

  printf_order_list()
})

// 渲染套餐内容
function printf_content() {

  //初始化
  $(".zhouqi h3").remove()
  $(".zhouqi p").remove()
  $(".zzfw h3").remove()
  $(".zzfw p").remove()
  $(".select-box0").remove()
  $(".select-box1").remove()
  $(".select-box2").remove()
  $(".select-box3").remove()

  $(".zf-list h3").text(`${get_lang(payment_lang,payment_aswter,'a6')}`)

  let data_list = {}
  // 当前切换silde渲染数据源
  slide_index == 'v' ? data_list = vip_data : (slide_index == 'bd' ? data_list = bd_data : slide_index == 'yd' ? data_list = yellow_data : data_list = sjk_data)


  console.log(data_list, '5645556456456')

  // 渲染

  $(".tishi").children("span").eq(1).text(`<${data_list.name}>`)

  if (slide_index == 'v') {
    //初始化
    $(".zhouqi h3").remove()
    $(".zhouqi p").remove()
    $(".zzfw h3").remove()
    $(".zzfw p").remove()
    if ($(".container .zhouqi").css("display") == 'none') {
      $(".container .zhouqi").toggle()
    }
    // 只有vip有服务周期选择  其他是套餐选择
    if (data_list.duration !== 12) {
      // 服务周期
      let $box1_1 = $(`<h3>${data_list.name}&nbsp;${slide_index == 'v' ?get_lang(payment_lang,payment_aswter,'a13'):get_lang(payment_lang,payment_aswter,'a14')}</h3>`)
      $(".zhouqi").append($box1_1)
      data_list.durations.list.forEach((item, index) => {
        let $box1_2 = $(`<p><span><input type="radio" name="v-zq" value="${index==0?1:index==1?3:12}" ${index==0?'checked':''}/>
                               <span>${item.duration_title}${get_lang(payment_lang,payment_aswter,'a3')}<span>${item.description}</span></span>
                         </span>
                         <span>${item.amount_txt}${get_lang(payment_lang,payment_aswter,'a4')}</span>
                     </p>`)
        $(".zhouqi").append($box1_2)
      })
    } else {
      $(".container .zhouqi").toggle()
    }

    // 增值服务
    if (data_list.add_service.length !== 0) {
      let $box2_1 = $(`<h3>增值服务</h3>`)
      $(".zzfw").append($box2_1)

      // vip 只有邦阅大课堂
      if (data_list.duration !== 12) {
        console.log(data_list.add_service, "86451230.46510561320561230")
        data_list.add_service[0].list.forEach((item, index) => {
          let $box2_2 = $(`<p><span><input type="checkbox" name="v-zz" value="12" /}/>
                               <span>${item.name}</span>
                         </span>
                         <span>${item.amount_txt}</span>
                     </p>`)
          $(".zzfw").append($box2_2)
        })
      } else {
        // 全部
        data_list.add_service.forEach((item, index) => {
          if (item.list.length == 1) {
            let $box2_2 = $(`<p><span><input type="checkbox" name="${item.mark=='jungle_scout'?'v-zz-js':'v-zz-class'}" value="12" data-ps="${item.list[0].product_id}" /}/>
                                 <span>${item.list[0].name}</span>
                           </span>
                           <span>${item.list[0].amount_txt}</span>
                       </p>`)
            $(".zzfw").append($box2_2)
          } else {
            // 有弹窗
            let $box2_2 = $(`<p><span><input type="checkbox" name="${item.mark=='jungle_scout'?'v-zz-js':'v-zz-class'}" value="12" data-ps="${item.list[0].product_id}" /}/>
                                   <span>${item.list[0].name}</span>
                                   <img data-id=${index} data-type="zzfw" class="select-down" src="${img_src}mobile/images/company/company_details/xiangxiajiantou.png" alt="" />
                             </span>
                             <span>${item.list[0].amount_txt}</span>
                        </p>
                        <div class="select-box${index}">
                        </div>
                      `)
            $(".zzfw").append($box2_2)
          }
        })
      }
    } else {
      $('.zzfw').css('display', "none")
    }
  } else if (slide_index == 'bd') {
    $('.zzfw').css('display', "block")
    console.log(data_list.packages, "00000000")
    if (data_list.packages) {
      // 服务周期
      let $box1_1 = $(`<h3>${data_list.name}&nbsp;${slide_index == 'v' ?get_lang(payment_lang,payment_aswter,'a13'):get_lang(payment_lang,payment_aswter,'a14')}</h3>`)
      $(".zhouqi").append($box1_1)
      data_list.packages.list.forEach((item, index) => {

        if (item.list.length == 1) {
          let $box1_2 = $(`<p><span><input type="radio" name="v-zq" value="12"  data-ps="${item.list[0].master_product}${item.list[0].products?'|'+item.list[0].products.join("|"):""}" ${index==0?'checked':''}/>
                             <span>${item.list[0].name}</span>
                       </span>
                       <span>${get_lang(payment_lang,payment_aswter,'a8')}${item.list[0].amount==12?1:item.list[0].amount}/${item.list[0].duration==12?1:item.list[0].duration}${item.list[0].duration==12?get_lang(payment_lang,payment_aswter,"a10"):get_lang(payment_lang,payment_aswter,"a9")}</span>
                   </p>`)
          $(".zhouqi").append($box1_2)
        } else {
          let $box1_2 = $(`<p><span><input type="radio" name="v-zq" value="12"  data-ps="2|${item.list[0].products.join("|")}"  ${index==0?'checked':''}/>
                                   <span>${item.list[0].name}</span>
                                   <img data-id=${index} data-type="fuzq" class="select-down" src="${img_src}mobile/images/company/company_details/xiangxiajiantou.png" alt="" />
                             </span>
                             <span>${get_lang(payment_lang,payment_aswter,'a8')}${item.list[0].amount}/${item.list[0].duration==12?1:item.list[0].duration}${item.list[0].duration==12?get_lang(payment_lang,payment_aswter,"a10"):get_lang(payment_lang,payment_aswter,"a9")}</span>
                         </p>
                         <div class="select-box${index}">
                         </div>
                   `)
          $(".zhouqi").append($box1_2)
        }

      })
    } else {
      $(".container .zhouqi").toggle()
    }
    // 增值服务
    let $box2_1 = $(`<h3>${get_lang(payment_lang,payment_aswter,'a11')}</h3>`)
    $(".zzfw").append($box2_1)
    data_list.add_service.forEach((item, index) => {
      if (item.list.length == 1) {
        let $box2_2 = $(`<p><span><input type="checkbox" name="${item.mark=='jungle_scout'?'v-zz-js':'v-zz-class'}" value="12" data-ps="${item.list[0].product_id}" /}/>
                                 <span>${item.list[0].name}</span>
                           </span>
                           <span>${item.list[0].amount_txt}</span>
                       </p>`)
        $(".zzfw").append($box2_2)
      } else {
        let $box2_2 = $(`<p><span><input type="checkbox" name="${item.mark=='jungle_scout'?'v-zz-js':'v-zz-class'}" value="12" data-ps="${item.list[0].product_id}" /}/>
                                   <span>${item.list[0].name}</span>
                                   <img data-id=${index} data-type="zzfu" class="select-down" src="${img_src}mobile/images/company/company_details/xiangxiajiantou.png" alt="" />
                             </span>
                             <span>${item.list[0].amount_txt}</span>
                        </p>
                        <div class="select-box${index}">
                        </div>
                      `)
        $(".zzfw").append($box2_2)
      }
    })
  } else if (slide_index == 'yd') {
    $('.zzfw').css('display', "block")
    console.log(data_list.packages, "00000000")
    if (data_list.packages) {
      // 服务周期
      let $box1_1 = $(`<h3>${data_list.name}&nbsp;${slide_index == 'v' ?get_lang(payment_lang,payment_aswter,'a13'):get_lang(payment_lang,payment_aswter,'a14')}</h3>`)
      $(".zhouqi").append($box1_1)
      data_list.packages.list.forEach((item, index) => {

        if (item.list.length == 1) {
          let $box1_2 = $(`<p><span><input type="radio" name="v-zq" value="12"  data-ps="${item.list[0].master_product}${(item.list[0].products?'|'+item.list[0].products.join("|"):"")}" ${index==0?'checked':''}/>
                               <span>${item.list[0].name}</span>
                         </span>
                         <span>${get_lang(payment_lang,payment_aswter,'a8')}${item.list[0].amount}/${item.list[0].duration==12?1:item.list[0].duration}${item.list[0].duration==12?get_lang(payment_lang,payment_aswter,"a10"):get_lang(payment_lang,payment_aswter,"a9")}</span>
                     </p>`)
          $(".zhouqi").append($box1_2)
        } else {
          let $box1_2 = $(`<p><span><input type="radio" name="v-zq" value="12"  data-ps="3|${item.list[0].products.join("|")}" ${index==0?'checked':''}/>
                                     <span>${item.list[0].name}</span>
                                     <img data-id=${index} data-type="fuzq" class="select-down" src="${img_src}mobile/images/company/company_details/xiangxiajiantou.png" alt="" />
                               </span>
                               <span>${get_lang(payment_lang,payment_aswter,'a8')}${item.list[0].amount}/${item.list[0].duration==12?1:item.list[0].duration}${item.list[0].duration==12?get_lang(payment_lang,payment_aswter,"a10"):get_lang(payment_lang,payment_aswter,"a9")}</span>
                           </p>
                           <div class="select-box${index}">
                           </div>
                     `)
          $(".zhouqi").append($box1_2)
        }

      })
    } else {
      $(".container .zhouqi").toggle()
    }
    // 增值服务
    let $box2_1 = $(`<h3>${get_lang(payment_lang,payment_aswter,'a11')}</h3>`)
    $(".zzfw").append($box2_1)
    data_list.add_service.forEach((item, index) => {
      if (item.list.length == 1) {
        let $box2_2 = $(`<p><span><input type="checkbox" name="${item.mark=='jungle_scout'?'v-zz-js':'v-zz-class'}" value="12" data-ps="${item.list[0].product_id}" /}/>
                                 <span>${item.list[0].name}</span>
                           </span>
                           <span>${item.list[0].amount_txt}</span>
                       </p>`)
        $(".zzfw").append($box2_2)
      } else {
        let $box2_2 = $(`<p><span><input type="checkbox" name="${item.mark=='jungle_scout'?'v-zz-js':'v-zz-class'}" value="12" data-ps="${item.list[0].product_id}" /}/>
                                   <span>${item.list[0].name}</span>
                                   <img data-id=${index} data-type="zzfu" class="select-down" src="${img_src}mobile/images/company/company_details/xiangxiajiantou.png" alt="" />
                             </span>
                             <span>${item.list[0].amount_txt}</span>
                        </p>
                        <div class="select-box${index}">
                        </div>
                      `)
        $(".zzfw").append($box2_2)
      }
    })
  } else if (slide_index == 'tsm') {
    $('.zzfw').css('display', "block")
    // 服务周期
    let $box1_1 = $(`<h3>${data_list.name}&nbsp;${slide_index == 'v' ?get_lang(payment_lang,payment_aswter,'a13'):get_lang(payment_lang,payment_aswter,'a14')}</h3>`)
    $(".zhouqi").append($box1_1)
    data_list.packages.list.forEach((item, index) => {

      if (item.list.length == 1) {
        let $box1_2 = $(`<p><span><input type="radio" name="v-zq" value="12"  data-ps="3${item.list[0].products?'|'+item.list[0].products.join('|'):""}" ${index==0?'checked':''}/>
                             <span>${item.list[0].name}</span>
                       </span>
                       <span>${get_lang(payment_lang,payment_aswter,'a8')}${item.list[0].amount}/${item.list[0].duration}月</span>
                   </p>`)
        $(".zhouqi").append($box1_2)
      } else {
        let $box1_2 = $(`<p><span><input type="radio" name="v-zq" value="12" data-ps="3|${item.list[0].products.join('|')}" ${index==0?'checked':''}/>
                                   <span>${item.list[0].name}</span>
                                   <img data-id=${index} data-type="fuzq" class="select-down" src="${img_src}mobile/images/company/company_details/xiangxiajiantou.png" alt="" />
                             </span>
                             <span>${get_lang(payment_lang,payment_aswter,'a8')}${item.list[0].amount}/${item.list[0].duration}月</span>
                         </p>
                         <div class="select-box${index}">
                         </div>
                   `)
        $(".zhouqi").append($box1_2)
      }

    })
    // 增值服务
    let $box2_1 = $(`<h3>${get_lang(payment_lang,payment_aswter,'a11')}</h3>`)
    $(".zzfw").append($box2_1)
    data_list.add_service.forEach((item, index) => {
      if (item.list.length == 1) {
        let $box2_2 = $(`<p><span><input type="checkbox" name=""${item.mark=='jungle_scout'?'v-zz-js':'v-zz-class'}"" value="12" data-ps="${item.list[0].product_id}"/}/>
                                 <span>${item.list[0].name}</span>
                           </span>
                           <span>${item.list[0].amount_txt}</span>
                       </p>`)
        $(".zzfw").append($box2_2)
      } else {
        let $box2_2 = $(`<p><span><input type="checkbox" name=""${item.mark=='jungle_scout'?'v-zz-js':'v-zz-class'}"" value="12" data-ps="${item.list[0].product_id}"/}/>
                                   <span>${item.list[0].name}</span>
                                   <img data-id=${index} data-type="zzfu" class="select-down" src="${img_src}mobile/images/company/company_details/xiangxiajiantou.png" alt="" />
                             </span>
                             <span>${item.list[0].amount_txt}</span>
                        </p>
                        <div class="select-box${index}">
                        </div>
                      `)
        $(".zzfw").append($box2_2)
      }
    })
  }

  select_fj()
}

// 选择套餐选择，增值服务
function select_fj() {
  //页面渲染完毕之后
  //存在附加参数
  // 
  if (fj_key !== 0) {
    if (fj_key == "social_0") {
      if (slide_index !== "tsm") {
        $(".zhouqi p").eq(1).children("span").eq(0).children("img").click()
        $("body .select-box1 p").eq(0).click()
        $("body .select-box1").css("display", "none")
      } else {
        // 三剑客
        $(".zhouqi p").eq(0).children("span").eq(0).children("input").click()
      }
    } else if (fj_key == "social_1") {
      if (slide_index !== "tsm") {
        $(".zhouqi p").eq(1).children("span").eq(0).children("img").click()
        $("body .select-box1 p").eq(1).click()
        $("body .select-box1").css("display", "none")
      } else {
        // 三剑客
        $(".zhouqi p").eq(1).children("span").eq(0).children("input").click()
      }
    }


    if (fj_key == "amazon_0") {

      $(".zzfw p").eq(0).children("span").eq(0).children("img").click()

      $("body .select-box0 p").eq(0).click()
      $("body .select-box0").css("display", "none")

    } else if (fj_key == "amazon_1") {
      $(".zzfw p").eq(0).children("span").eq(0).children("img").click()

      $("body .select-box0 p").eq(1).click()
      $("body .select-box0").css("display", "none")
    }

    if (fj_key == "benchmark") {
      // 邮件群发工具
      $(".zhouqi p").eq(2).children("span").eq(0).children("input").click()
    }
  }
}

// 服务周期/套餐选择 单选按钮 切换
$(".zhouqi").on("click", "input", function (e) {

  e.stopPropagation();

  if (slide_index == "v") {
    let month = $(this).attr("value")
    order_key.pay_duration = month //第一页是服务周期，只需要时间参数
    printf_order_list()
  } else {
    go_start().then(res => {
      if (res) {
        let ps = $(this).data("ps")
        console.log(ps, "0000000000000000000000000")
        order_key.products = ps
        printf_order_list()
      }
    })
  }
})

function go_start() {
  return new Promise(resolve => {
    if ($(".zzfw").children("input")) {
      $(".zzfw input").each((index) => {
        console.log($(".zzfw input").eq(index).prop('checked'))
        if ($(".zzfw input").eq(index).prop('checked') == true) {
          $(".zzfw input").eq(index).click()
        }
      })
    }
    setTimeout(() => {
      resolve(true)
    }, 200);
  })
}

// 增值服务多选按钮
$(".zzfw").on("click", "input", function (e) {
  e.stopPropagation();
  let product
  if (slide_index == 'v') {
    if (vip_data.duration !== 12) {
      product = $(this).attr("value")
    } else {
      product = $(this).data("ps")
    }
    console.log(product, "productproductproductproduct")
    // 注意jq1.6+使用prop
    if ($(this).prop('checked') == true) {
      // products 参数 单个拆开必须是数值型
      order_key.products = order_key.products + '|' + product
      printf_order_list()
    } else if ($(this).prop('checked') == false) {
      order_key.products = order_key.products.replaceAll(`|${product}`, "")
      printf_order_list()
    }
  } else {
    let product = $(this).data("ps")
    // 注意jq1.6+使用prop
    if ($(this).prop('checked') == true) {
      // products 参数 单个拆开必须是数值型
      order_key.products = order_key.products + '|' + product
      printf_order_list()
    } else if ($(this).prop('checked') == false) {
      order_key.products = order_key.products.replaceAll(`|${product}`, "")
      printf_order_list()
    }
  }
})

// select 弹窗
$("body").on("click", ".select-down", function (e) {
  e.stopPropagation()
  $(`.select-box${$(this).data("id")}`).toggle();
  printf_select_box_options($(this).data("id"), $(this).data("type"))
})

// 渲染select_box数据
function printf_select_box_options(id, type) {
  console.log(id, type, "ididididid")

  if (window.document.querySelectorAll(`.select-box${id} p`).length == 0) {
    $(`.select-box${id} p`).remove()
    let data_list = {}
    // 处理数据源
    slide_index == 'v' ? data_list = vip_data : (slide_index == 'bd' ? data_list = bd_data : slide_index == 'yd' ? data_list = yellow_data : data_list = sjk_data)

    if (type == "fuzq") {
      // 套装选择/服务周期弹窗
      console.log(data_list, "4565205202552656466599999999999999")
      data_list.packages.list.forEach((item, index) => {
        if (item.list.length !== 1) {
          item.list.forEach((item1, index1) => {

            let $box = $(`
              <p data-price="${get_lang(payment_lang,payment_aswter,'a8')}${item1.amount}/${item1.duration==12?1:item1.duration}${item1.duration==12?get_lang(payment_lang,payment_aswter,"a10"):get_lang(payment_lang,payment_aswter,"a9")}">${item1.name}</p>
              `)
            if (index == id) {
              $(`.select-box${id}`).append($box)
            }

          })
        }
      })
    } else {
      // 增值服务弹窗
      data_list.add_service.forEach((item, index) => {

        if (item.list.length > 1) {
          console.log(item, item.products, "9999999999999999")
          item.list.forEach((item1, index1) => {

            let $box = $(`
        <p data-price="${item1.amount_txt}" data-products="${item.products[index1] || ""}">${item1.name}</p>
        `)
            if (index == id) {
              $(`.select-box${id}`).append($box)
            }
          })
        }
      })
    }


  }
}

// select_box_options切换
$("body").on("click", ".select-box0 p", function (e) {
  e.stopPropagation();
  $(this).addClass("active").siblings().removeClass("active")
  let price_text = $(this).data("price")
  let text = $(this).text()
  $(this).parent().prev().children().eq(0).children("span").text(text)
  $(this).parent().prev().children().eq(1).text(price_text)
  go_start1($(this)).then(res => {
    if (res) {
      if ($(this).index() == 0) {
        $(this).parent().prev().children().eq(0).children("input").data("ps", $(this).data("products"))

      } else {
        $(this).parent().prev().children().eq(0).children("input").data("ps", $(this).data("products"))

      }
      $(this).parent().prev().children().eq(0).children("input").click()

      $(this).parent().css("display", "none")

    }
  })
})

// select_box_options切换
$("body").on("click", ".select-box2 p", function (e) {
  e.stopPropagation();
  $(this).addClass("active").siblings().removeClass("active")
  let price_text = $(this).data("price")
  let text = $(this).text()
  $(this).parent().prev().children().eq(0).children("span").text(text)
  $(this).parent().prev().children().eq(1).text(price_text)
  go_start1($(this)).then(res => {
    if (res) {
      if ($(this).index() == 0) {
        $(this).parent().prev().children().eq(0).children("input").data("ps", $(this).data("products"))

      } else {
        $(this).parent().prev().children().eq(0).children("input").data("ps", $(this).data("products"))

      }
      $(this).parent().prev().children().eq(0).children("input").click()

      $(this).parent().toggle()

    }
  })
})

// 初始化
function go_start1(item) {
  return new Promise(resolve => {
    if (item.parent().prev().children().eq(0).children("input").prop("checked") == true) {
      item.parent().prev().children().eq(0).children("input").click()
    }
    setTimeout(function () {
      resolve(true)
    }, 200)
  })
}

// select_box_options切换
$("body").on("click", ".select-box1 p", function (e) {

  $(".zf-list .content p").remove()
  console.log($(this).index(), ".............................................999999999999999999999999999999999999999999....................................................")
  e.stopPropagation();
  $(this).addClass("active").siblings().removeClass("active")
  let price_text = $(this).data("price")
  let text = $(this).text()
  $(this).parent().prev().children().eq(0).children("span").text(text)
  $(this).parent().prev().children().eq(1).text(price_text)

  go_start1($(this)).then(res => {
    if (res) {
      if (slide_index == 'yd') {
        if ($(this).index() == 0) {
          if (payment_lang == "cn") {
            $(this).parent().prev().children().eq(0).children("input").data("ps", '4|3')
          } else {
            $(this).parent().prev().children().eq(0).children("input").data("ps", '9|3')
          }
        } else {
          if (payment_lang == "cn") {
            $(this).parent().prev().children().eq(0).children("input").data("ps", '11|3')
          } else {
            $(this).parent().prev().children().eq(0).children("input").data("ps", '10|3')
          }
        }
      } else if (slide_index == 'bd') {
        if ($(this).index() == 0) {
          if (payment_lang == "cn") {
            $(this).parent().prev().children().eq(0).children("input").data("ps", '4|2')
          } else {
            $(this).parent().prev().children().eq(0).children("input").data("ps", '9|2')
          }
        } else {
          if (payment_lang == "cn") {
            $(this).parent().prev().children().eq(0).children("input").data("ps", '11|2')
          } else {
            $(this).parent().prev().children().eq(0).children("input").data("ps", '10|2')
          }

        }
      }

      $(this).parent().prev().children().eq(0).children("input").click()

      $(this).parent().toggle()
    }
  })
})

// select_box_options切换
$("body").on("click", ".select-box3 p", function (e) {
  e.stopPropagation();
  $(this).addClass("active").siblings().removeClass("active")
  let price_text = $(this).data("price")
  let text = $(this).text()
  $(this).parent().prev().children().eq(0).children("span").text(text)
  $(this).parent().prev().children().eq(1).text(price_text)

  if (slide_index == "yd") {
    if ($(this).index() == 0) {
      $(this).parent().prev().children().eq(0).children("input").data("ps", '4|6|3')
    } else {
      $(this).parent().prev().children().eq(0).children("input").data("ps", '6|11|3')
    }
  } else if (slide_index == "bd") {
    if ($(this).index() == 0) {
      $(this).parent().prev().children().eq(0).children("input").data("ps", '4|6|2')
    } else {
      $(this).parent().prev().children().eq(0).children("input").data("ps", '6|11|2')
    }
  }


  $(this).parent().prev().children().eq(0).children("input").click()


  $(this).parent().toggle()
})

//   点击空白关闭select弹窗
$('body').click(function () {
  $(`.select-box0,.select-box1,.select-box2,.select-box3`).css("display", "none");
})

// 支付方式
$(".zf p span").click(function () {
  $(this).addClass("active").siblings().removeClass("active")
  console.log($(this).data("type"), "支付方式")

  if ($(this).data("type") == 3) {
    order_key.method = 3
    printf_order_list()
  } else if ($(this).data("type") == 1) {
    // 改变对应参数
    order_key.method = 1
    printf_order_list()
  } else if ($(this).data("type") == 2) {
    // 改变对应参数
    order_key.method = 2
    printf_order_list()
  }
})

// 计算属性
// 时间周期
// Object.defineProperties(order_key, {
//   products: {
//     configurable: true,
//     get: function () {
//       return this._products;
//     },
//     set: function (newValue) {
//       if (newValue) {
//         this._products = newValue;
//       }
//       printf_order_list()
//     }
//   }
// })

// 获取购物清单

// pay_source:订单来源  0
// pay_duration：产品周期 月  1 3 12
// method：支付方式 1（微信） 2 (支付宝)  3 (paypal)
// auto_renew：是否自动续费   0
// products：产品 用  |  分割   vip:1  蓝钻：2  黄钻：3   三剑客：标准版4|6|3  高级版6|11|3
// discount：非必要 （是否是邦悦打折用户）

function printf_order_list() {
  console.log(order_key, order_key.products, order_key.pay_duration, "参数")

  axios.get(`/payment/price/details?pay_source=${order_key.pay_source}&auto_renew=${order_key.auto_renew}&pay_duration=${order_key.pay_duration}&method=${order_key.method}&products=${order_key.products}`).then(res => {
    console.log(res, "订单列表")
    let order_list = res.data.data.payment_item

    // 初始化
    $(".zf-list .content p").remove()

    if ($(".zf-list .content p")) {
      order_list.forEach(item => {
        let $box = $(`<p>${item.des}</p>`)
        $(".zf-list .content").append($box)
      })
      $(".zf-list>p>span").eq(1).text(`${res.data.data.currency_symbol}${res.data.data.total_amount}`)
      $(".zf-btn a").text(`${get_lang(payment_lang,payment_aswter,'a12')}${res.data.data.currency_symbol}${res.data.data.total_amount}`)
    }

  })
}

// 支付按钮
$(".zf-btn a").click(function () {
  loadding()
  // 解构
  let {
    _pay_duration,
    _products,
    ...obj
  } = order_key
  var $this = $(this),
    _sb = $this.attr('submit')
  if (_sb == '1') return;

  $this.html(`${get_lang(payment_lang,payment_aswter,"a20")}...`).attr('submit', '1')

  axios.post("/payment/add", obj).then(res => {
    console.log(res, "添加订单")
    var result = res.data
    // 支付成功
    if (result.state == 0) {
      delloadding()
      var url = ''
      // 支付宝支付
      if (order_key.method == 1) {
        url = result.data.integration.alipay_url
        //微信支付
      } else if (order_key.method == 2) {
        console.log(result, "微信支付")
        // wechat_payment(result)
        url = result.wx_url
      } else if (order_key.method == 3) {
        // pay支付
        url = res.data.data.integration.pp_url
      }
      window.location.href = url
    }
    // else {
    //   delloadding()
    //   // 支付出错
    //   text_toast({
    //     p1: `${get_lang(payment_lang,payment_aswter,"a18")}`,
    //     p2: `${get_lang(payment_lang,payment_aswter,"a19")}`
    //   })
    //   $(".text_toast img").remove()

    //   setTimeout(function () {
    //     // csh_list()
    //   }, 2000)

    // }
    // if(result.state == 3002) {
    //
    //   layer.alert(
    //       result.message,
    //       {
    //         'title': '提示',
    //         area: ['200px', 'auto'],
    //         yes: function () {
    //           window.location.reload()
    //         }
    //       })
    //   return
    // }
    // if(result.state == 4000){
    //   return unpaid()
    // }
    // if(result.state == 4001){
    //   return paying_order(result.data)
    // }
  })
})

// error 重新加载
function csh_list() {
  let url = window.location.pathname
  window.location.pathname = url
}

let wx_order_no = ''
// 调起微信支付
// 微信内部浏览器支付
function wechat_payment(data) {
  if (typeof window.WeixinJSBridge == "undefined") {

    function _onBridgeReady() {
      console.log("调用")
      onBridgeReady(data)
    }

    if (document.addEventListener) {
      document.addEventListener('WeixinJSBridgeReady', _onBridgeReady, false);
    } else if (document.attachEvent) {
      document.attachEvent('WeixinJSBridgeReady', _onBridgeReady);
      document.attachEvent('onWeixinJSBridgeReady', _onBridgeReady);
    }
  } else {
    onBridgeReady(data);
  }
}

function onBridgeReady(data) {
  console.log("微信支付00909099")
  wx_order_no = data.order_no
  let integration = data.integration
  WeixinJSBridge.invoke(
      'getBrandWCPayRequest', {
        "appId": integration.appId, //公众号名称，由商户传入
        "timeStamp": integration.timeStamp, //时间戳，自1970年以来的秒数
        "nonceStr": integration.nonceStr, //随机串
        "package": integration.package,
        "signType": integration.signType, //微信签名方式：
        "paySign": integration.paySign //微信签名
      }),
    function (res) {
      console.log(res, "调起微信支付")
      // 成功调起
      if (res.err_msg == "get_brand_wcpay_request:ok") {
        verificationOrder()
      } // 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回    ok，但并不保证它绝对可靠。});}
      // 支付过程中用户取消
      if (res.err_msg == "get_brand_wcpay_request:cancel") {

      }
      // 支付失败
      if (res.err_msg == "get_brand_wcpay_request:fail") {

      }
    }
}

// 判断支付状态
function verificationOrder() {
  console.log("87897979878")
  $.ajax({
    url: '/async/payment/verify',
    type: "post",
    datatype: "json",
    async: true,
    data: {
      "order_no": wx_order_no
    },
    success: function (result) {
      let state = result.state,
        data = result.data;
      if (state === 0) {
        // 支付成功，返回首页
        buy_vip_toast1("提示", "支付成功", "返回主页", "/")
      } else if (state === 10000) { // 订单未支付成功
        count = 10
        window.setTimeout(verificationOrder, 1000)
      } else if (state === 10001) { // 订单支付成功，子订单未支付
        wx_order_no = data.order_no
        // 单次限额3000，分次支付
        buy_vip_toast1("提示", `成功支付,需再支付${data.remain_amount}元`, "确定支付", "child_payment")

      } else {
        $('body').html(result.message)
      }
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
      window.setTimeout(verificationOrder, 5000)
    }
  });
}

// 子订单支付，单次限额3000
function child_payment() {
  layer.closeAll()
  $.ajax('/payment/child/weixin', {
    type: 'post',
    data: {
      "order_no": wx_order_no
    },
    dataType: 'json',
    success: function (results) {
      let data = results.integration
      WeixinJSBridge.invoke(
        'getBrandWCPayRequest', {
          "appId": data.appId, //公众号名称，由商户传入
          "timeStamp": data.timeStamp, //时间戳，自1970年以来的秒数
          "nonceStr": data.nonceStr, //随机串
          "package": data.package,
          "signType": data.signType, //微信签名方式：
          "paySign": data.paySign //微信签名
        },
        function (res) {
          if (res.err_msg === "get_brand_wcpay_request:ok") {
            // 使用以上方式判断前端返回,微信团队郑重提示：
            window.setTimeout(verificationOrder, 1000)
            return false
          }
        });
    }
  });
}