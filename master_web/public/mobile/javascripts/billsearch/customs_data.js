let img_src = $(".container").data("img")

let customs_data_aswter = {
  "a1": {
    cn: "最新进出口数据已更新至 ",
    en: "The latest data is updated to "
  },
  "a2": {
    cn: "数据类型：",
    en: "Data type："
  },
  "a3": {
    cn: "以下是",
    en: "Here are the following "
  },
  "a4": {
    cn: "样本报告！",
    en: " Sample report!"
  },
  "a5": {
    cn: "+创建报告",
    en: "+ Reports"
  },
  "a6": {
    cn: "友情提示",
    en: "Tips"
  },
  "a7": {
    cn: "此功能在电脑端(52wmb.com)使用效果更佳；联系客服021-64033826免费试用。",
    en: "This function works better on the computer side (en.52wmb.com); Whatsapp +8616621075894 for free trial."
  },
  "a8": {
    cn: "趋势分析",
    en: "Trend analysis"
  },
  "a9": {
    cn: "交易数",
    en: "Number"
  },
  "a10": {
    cn: "交易量",
    en: "Volume"
  },
  "a11": {
    cn: "总价",
    en: "Price"
  },
  "a12": {
    cn: "交易次数/次",
    en: "Number of transactions/times"
  },
  "a13": {
    cn: "展开查看全部",
    en: "Expand to see all"
  },
  "a14": {
    cn: "点击收起",
    en: "Click Collapse"
  },
  "a15": {
    cn: "提关单数据",
    en: "Data"
  },
  "a16": {
    cn: "共计[@数量]",
    en: "Total [@数量]"
  },
  "a17": {
    cn: "笔",
    en: ""
  },
  "a32": {
    cn: "交易日期",
    en: "Date"
  },
  "a33": {
    cn: "供应商",
    en: "Supplier"
  },
  "a34": {
    cn: "采购商",
    en: "Buyer"
  },
  "a35": {
    cn: "产品描述",
    en: "Description"
  },
  "a36": {
    cn: "交易数量",
    en: "Quantity"
  },
  "a37": {
    cn: "公司名称",
    en: "Name"
  },
  "a38": {
    cn: "交易数",
    en: "Quantity"
  },
  "a39": {
    cn: "占比",
    en: "Ratio"
  },
  "a40": {
    cn: "供应国",
    en: "Supplier countries"
  },
  "a41": {
    cn: "名称 ",
    en: "Name"
  },
  "a42": {
    cn: "进口港 ",
    en: "Import"
  },
  "a43": {
    cn: "出口港 ",
    en: "Export"
  },
  "a44": {
    cn: "展开 ",
    en: "unfold"
  },
  "a45": {
    cn: "收起 ",
    en: "Collapse"
  },
  "a46": {
    cn: "查无数据 ",
    en: "No data available"
  },
  "a47": {
    cn: "HS编码统计 ",
    en: "HS code"
  },
  "a48": {
    cn: "编码名称 ",
    en: "Name"
  },
  'customs_data_toast_title': {
    cn: '友情提示',
    en: 'Tips'
  },
  'customs_data_toast_content': {
    cn: '此功能在电脑端(52wmb.com)使用效果更佳；联系客服021-64033826免费试用。',
    en: 'It works better on the computer(en.52wmb.com); Contact whatsapp +8616621075894 for free trial.'
  },
  'customs_data_toast_jg': {
    cn: '警告',
    en: 'Warn'
  },
  'customs_data_toast_jgtext': {
    cn: '搜索框不能为空',
    en: 'The search box cannot be empty'
  },
  "qj_sjhz": {
    cn: "数据.",
    en: " date."
  },
  'report_trade_Percentage': {
    cn: '交易占比',
    en: 'Percentage'
  },
  'report_trade_times': {
    cn: '交易次数',
    en: 'Transactions'
  },
}

var curr_lang_json = Object.assign({}, customs_data_aswter, {})

let customs_data_lang = $(".container").data("lang")

let country = $(".table-box").data("country");
//  进口参数
let date = $(".table-box").data("date");
//  出口参数
let ckdate = $(".taable-box").data("ckdate");

var new_map_default_data = [];
country = country.replace(" ", "%20");

// 进口或者出口 默认进口数据
let jk_or_ck = 0

// 基于交易数的数据
let bill_count_y = [],
  bill_count_x = [];
// 基于交易量的数据
let qty_y = [],
  qty_x = [];
// 基于总价的数据
let sum_y = [],
  sum_x = [];

// 采购商数据
let buyer1_list = [];
// 供应商数据
let gys_list = [];
// 进口港数据
let jkg_list = [];

// tag_id tag_nam
let tag_id = "",
  tag_name = "",
  p_token = "";

// 查询次数
let tgd_num = 0;
let gyg_num = 0;

let corg_show_flag = true,
  corg_show_flag1 = true,
  jkgk_show_flag = true,
  jkgk_show_flag1 = true


// 图表底下表格数据
let table_data = [];

// 当前tab序号
let tab_index = 0;


// 获取标签id
get_tag_id();

// printf_map();

// 首页
// 进口商 or 出口商
$(".customs-data-header-box span").click(function (e) {
  e.stopPropagation()

  $(this).addClass("active").siblings().removeClass("active");
  $(".customs-data-header-text").text($(this).text());
  $(".customs-data-header-box").toggle();

  // 参数ie
  jk_or_ck = $(this).index()

  if (jk_or_ck == 0) {
    location.reload()
  } else {
    get_tag_id();

    // printf_map();
  }

});


// 详情页面展开按钮
function setting_more() {
  let hs = Math.round(parseFloat($('.xq-page-date-more').css('height')) / parseFloat($('.xq-page-date-more').css('line-height')))

  if (hs > 1) {
    $('.xq-page-li .more').css('display', 'inline-block')
    $('.xq-page-date-more').addClass('active')
  }
}

// tab切换
$(".container .customs-data-swiper .swiper .swiper-wrapper .swiper-slide").click(

  function () {

    //初始化
    tgd_num = 0;
    gyg_num = 0;
    // $(".tab-map-table .more").css("display", "block");
    // $(".tab-options2-content input").val("");

    // $(".tab-options3-content .more").css("display", "block");
    // $(".tab-options3-content-text p").remove();

    $(this).siblings().children(".sbox").removeClass("active");
    $(this).children(".sbox").addClass("active");
    $(".content").children(".tab-options").removeClass("active");

    let that = $(this)
    $(".content").children(".tab-options").each(function (index, item) {

      if ($(item).data("num") == that.children(".sbox").data("num")) {

        $(item).addClass("active")
      }
    })

    tab_index = $(this).children(".sbox").data("num");


    if (tab_index == 1) {
      // 市场分析
      put_fx_data()
    } else if (tab_index == 3) {
      // 贸易数据
      get_tgd_data(1, tag_id);
    } else if (tab_index == 2) {
      // 供应国 or 采购国
      get_map_data(tag_id, p_token);
    } else if (tab_index == 4) {
      // 采购商
      put_cg_data()
    } else if (tab_index == 5) {
      // 供应商
      put_gy_data()
    } else if (tab_index == 6) {
      // 进口港
      put_jkg_data()
    } else if (tab_index == 7) {
      // 出口港
      put_ckg_data()
    } else if (tab_index == 8) {
      // hs
      put_hs_data()
    }

  }
);

// 创建报告
$(".create-bg").click(function () {
  text_toast({
    p1: `${get_lang(customs_data_lang,customs_data_aswter,"a6")}`,
    p2: `${get_lang(customs_data_lang,customs_data_aswter,"a7")}`,
  });
});

// 获取tag_id、tag_name
function get_tag_id() {
  loadding();
  axios
    .get(
      `/async/raw/trade-tags/tags?ie=${jk_or_ck}&country=${country}&start=0&sample=true&scene=1`
    )
    .then((res) => {
      console.log(res,"tag_id")
      if(res.data.state==0){
        tag_id = res.data.data.list[0].id;
        tag_name = res.data.data.list[0].label_name;
        // 日期参数
        tag_start_date = res.data.data.list[0].params.start_date.length==7?res.data.data.list[0].params.start_date+'-01':res.data.data.list[0].params.start_date;
        tag_end_date = res.data.data.list[0].params.end_date.length==7?res.data.data.list[0].params.end_date+'-31':res.data.data.list[0].params.end_date;
        tag_hs = res.data.data.list[0].params.hs || "";
        tag_date_type = res.data.data.list[0].params.date_type;
        //  改页面的tag_name显示
        $(".customs-data-toast div .text").text(`${get_lang(customs_data_lang, customs_data_aswter, "a3")}${tag_name}${get_lang(customs_data_lang, customs_data_aswter, "a4")}${tag_start_date.replaceAll("-", "/")}-${tag_end_date.replaceAll("-", "/")}${get_lang(customs_data_lang, customs_data_aswter, "qj_sjhz")}`);
      
        get_ptoken(tag_id);
        get_tgd_data(undefined, tag_id);
      }
    });
}


// 获取ptoken
function get_ptoken(id) {
  axios
    .get(
      `/async/raw/trade/list?country=${country}&=undefined&ie=${jk_or_ck}&start_date=${tag_start_date}&end_date=${tag_end_date}&hs=${tag_hs}&seller=&buyer=&seller_country=&weight_min=&weight_max=&qty_min=&qty_max=&amount_min=&amount_max=&tag_id=${id}&start=0`
    )
    .then((res) => {

      console.log(res,"ptoken")
      p_token = res.data.ptoken;
      get_trade_data(p_token, id);
      get_buyer_data(tag_id, tag_name, p_token);
      get_gys_data(tag_id, tag_name, p_token);
      get_map_data(tag_id, p_token);
      get_jkgk_data(tag_id, tag_name, p_token);
      get_ckgk_data(tag_id, tag_name, p_token)
      get_hs_data(tag_id, tag_name, p_token);

      setTimeout(function () {
        mokuai_show()
      }, 500)

    });
}

// 提关单数据展开按钮初始化
function set_more() {
  let hs = Math.round(parseFloat($('#miaoshu-text').css('height')) / parseFloat($('#miaoshu-text').css('line-height')))
  if (hs > 3) {
    $('#miaoshu-more').css('display', 'inline-block')
    $('#miaoshu-text').addClass('active')
  }
};

// 展开按钮单机事件
$('.customs-data-data').on("click", "#miaoshu-more", function () {
  if ($(this).text() == `[${get_lang(customs_data_lang,customs_data_aswter,"a45")}]`) {
    $(this).text(`[${get_lang(customs_data_lang,customs_data_aswter,"a44")}]`)
    $("#miaoshu-text").addClass("active")
  } else {
    $(this).text(`[${get_lang(customs_data_lang,customs_data_aswter,"a45")}]`)
    $("#miaoshu-text").removeClass("active")
  }

})

// 首页提关单数据  start_date  end_date 时间一致，为最新的进出口数据更新时间
function get_tgd_data(tab_flag, id, more_flag) {
  loadding();

  axios
    .get(
      `/async/raw/trade/list?country=${country}&=undefined&ie=${jk_or_ck}&start_date=${tag_start_date}&end_date=${tag_end_date}&hs=&des=&bill_no=&seller=&buyer=&buyer_country=&seller_country=&origin_country=&seller_port=&buyer_port=&trans=&notify_name=&weight_min=&weight_max=&qty_min=&qty_max=&container_min=&container_max=&tag_id=${id}&start=${tgd_num}`
    )
    .then((res) => {
      if (res) {
        delloadding();
        if (res.data.hits == 0) {
          // 没有数据隐藏
          $(".swiper .swiper-wrapper .swiper-slide").each(function (index, item) {
            if ($(item).children('.sbox').data("num") == 3) {
              $(item).remove()
              $(".customs-data-data").remove()
            }
          })
        } else {
          console.log(res,"踢单数")
          // 首页
          if (!tab_flag) {
            let $content = $(res.data.content);
            if ($(".customs-data-data").children("div h3")) {
              $(".customs-data-data div h3").remove()
            }
            $content.children(".box2").remove();
            $(".customs-data-data .not-data").remove()

            $(".customs-data-data div .data-text").remove();

            $(".customs-data-data").append($content);
            $(".customs-data-data h3 .data-sum").text(`${get_lang(customs_data_lang,customs_data_aswter,"a16").replace("[@数量]",res.data.hits.toLocaleString())}${get_lang(customs_data_lang,customs_data_aswter,"a17")}`)
            set_more()
          } else {
            //tab
            // tab渲染
            if (!more_flag) {

              $(".tab-options3-sum span").text(`(${res.data.hits})`);
              $(".tab-options3-content-text .box2").remove();
              let $content = $(res.data.content).children(".box2");
              $(".tab-options3-content-text").append($content);
            } else {
              //tab点击加载
              if (tgd_num <= res.data.hits) {
                if (res.data.hits == 0) {
                  $(".tab-options3-content .more").css("display", "none");
                }
                $(".tab-options3_sum").text(`海关数据(${res.data.hits})`);

                let $content = $(res.data.content).children(".box2");
                $(".tab-options3-content-text").append($content);
              } else {
                $(".tab-options3-content .more").css("display", "none");
              }
            }
          }
        }

      }
    });
}

// 获取表格数据  市场分析
let get_trade_data = function (p, id) {
  axios
    .get(
      `/raw/trade/analyse/market?country=${country}&=undefined&ptoken=${p}&tag_id=${id}&ie=${jk_or_ck}&start_date=${tag_start_date}&end_date=${tag_end_date}&hs=&bill_no=&seller=&buyer=&buyer_country=&seller_country=&origin_country=&seller_port=&buyer_port=&trans=&notify_name=&weight_min=&weight_max=&qty_min=&qty_max=&container_min=&container_max=&start=0`
    )
    .then((res) => {

      if (res) {
        delloadding();
        // 底部表格数据
        table_data = res.data.data.table_list || [];
        table_data_title = res.data.data.stats_list


        if (table_data.length !== 0) {
          table_data_title.forEach((item, index) => {
            if (item.field == "bill_count") {
              bill_count_y = item.series_datas.series_data1 || [];
              bill_count_x = item.xAxis_data || [];
            } else if (item.field == "qty") {
              qty_y = item.series_datas.series_data1 || [];
              qty_x = item.xAxis_data || [];
            } else if (item.field == "amount") {
              sum_y = item.series_datas.series_data1 || [];
              sum_x = item.xAxis_data || [];
            }
          });

          // 初始渲染表格
          printf_table(0);
          printf_table2(3);
        } else {
          // 没有数据隐藏
          $(".swiper .swiper-wrapper .swiper-slide").each(function (index, item) {
            if ($(item).children('.sbox').data("num") == 1) {
              $(item).remove()
              $(".customs-data-table").remove()
            }
          })
        }
      }
    });
};

// 首页采购商数据
function get_buyer_data(id, tag_name, p) {

  axios
    .get(
      `/raw/trade/analyse?country=${country}&=undefined&ie=${jk_or_ck}&start_date=${tag_start_date}&end_date=${tag_end_date}&hs=&des=&bill_no=&seller=&buyer=&buyer_country=&seller_country=&origin_country=&seller_port=&buyer_port=&trans=&notify_name=&weight_min=&weight_max=&qty_min=&qty_max=&container_min=&container_max=&tag_id=${id}&ptoken=${p}&field=buyer_id_std&start=0&size=30`
    )
    .then((res) => {

      if (res.data.message == "查无数据" || res.data.data.hits == 0) {

        corg_show_flag = false

        // $(".tab-options4-content .more").css("display", "none");

        $(".customs-data-corg .data-sum").text(`${get_lang(customs_data_lang,customs_data_aswter,"a16").replace("[@数量]",0)}${get_lang(customs_data_lang,customs_data_aswter,"a17")}`);
        $(".customs-data-corg-text-option p").remove();
        let $box = $(`<p class="no-data">${get_lang(customs_data_lang,customs_data_aswter,"a46")}</p>`)
        $(".customs-data-corg-text-option").append($box);

        // 没有数据隐藏
        $(".swiper .swiper-wrapper .swiper-slide").each(function (index, item) {
          if ($(item).children('.sbox').data("num") == 4) {
            $(item).remove()
            // $(".customs-data-gk h3 span").eq(0).children("span").eq(0).remove()
          }
        })
      } else {
        // 采购商总数数据
        buyer1_list = res.data.data


        $(".customs-data-corg .data-sum").text(`${get_lang(customs_data_lang,customs_data_aswter,"a16").replace("[@数量]",res.data.data.hits.toLocaleString())}${get_lang(customs_data_lang,customs_data_aswter,"a17")}`)
        let buyer_list = res.data.data.list.slice(0, 5);
        $(".customs-data-corg-text-option p").remove();
        buyer_list.forEach(function (item, index) {

          let $box = $(
            `<p><span><span class="index index-${index}">${index+1}</span><a href="/${item.type==0?'buyer':'supplier'}/${item.buyer_id_std}"><span class="name">${item.buyer}</span></a></span><span>${item.prop}%</span></p>`
          );
          $(".customs-data-corg-text-option").append($box);
        });
      }
    });
}

//tab获取供应商数据
function get_gys_data1(id, tag_name, p) {
  return new Promise(function (resolve, reject) {
    axios
      .get(
        `/raw/trade/analyse?country=${country}&ie=${jk_or_ck}&start_date=${tag_start_date}&end_date=${tag_end_date}&hs=&des=&bill_no=&seller=&buyer=&buyer_country=&seller_country=&origin_country=&seller_port=&buyer_port=&trans=&notify_name=&weight_min=&weight_max=&qty_min=&qty_max=&container_min=&container_max=&tag_id=${id}&ptoken=${p}&field=seller_id_std&start=0&size=30`
      )
      .then((res) => {

        if (res.data.message !== '查无数据') {
          gys_list = res.data.data
          resolve(true)
        } else {
          $(".tab-options5 h3 .tab-options5-sum span").text(`(0)`);
          $(".tab-options5-content .more").css("display", "none");
        }
      })
  })

}

// 首页供应商数据
function get_gys_data(id, tag_name, p) {
  axios
    .get(
      `/raw/trade/analyse?country=${country}&=undefined&ie=${jk_or_ck}&start_date=${tag_start_date}&end_date=${tag_end_date}&hs=&des=&bill_no=&seller=&buyer=&buyer_country=&seller_country=&origin_country=&seller_port=&buyer_port=&trans=&notify_name=&weight_min=&weight_max=&qty_min=&qty_max=&container_min=&container_max=&tag_id=${id}&ptoken=${p}&field=seller_id_std&start=0&size=30`
    )
    .then((res) => {

      if (res.data.message == "查无数据" || res.data.data.hits == 0) {

        corg_show_flag1 = false

        // $(".tab-options5-content .more").css("display", "none");

        $(".customs-data-corg .data-sum").text(`${get_lang(customs_data_lang,customs_data_aswter,"a16").replace("[@数量]",0)}${get_lang(customs_data_lang,customs_data_aswter,"a17")}`)
        $(".customs-data-corg-text-option p").remove();
        let $box = $(`<p class="no-data">${get_lang(customs_data_lang,customs_data_aswter,"a46")}</p>`)
        $(".customs-data-corg-text-option").append($box);

        // 没有数据隐藏
        $(".swiper .swiper-wrapper .swiper-slide").each(function (index, item) {
          if ($(item).children('.sbox').data("num") == 5) {
            $(item).remove()
            // $(".customs-data-gk h3 span").eq(0).children("span").eq(0).remove()
          }
        })

      } else {
        gys_list = res.data.data
        // 采购商
        let buyer_list = res.data.data.list;
        $(".customs-data-corg .data-sum").text(`${get_lang(customs_data_lang,customs_data_aswter,"a16").replace("[@数量]",res.data.data.hits.toLocaleString())}${get_lang(customs_data_lang,customs_data_aswter,"a17")}`)
        $(".customs-data-corg-text-option p").remove();

        if (buyer_list.length == 0) {
          let $box = $(`<p class="no-data">${get_lang(customs_data_lang,customs_data_aswter,"a46")}</p>`)
          $(".customs-data-corg-text-option").append($box);
        } else {
          buyer_list.slice(0, 5).forEach(function (item, index) {

            let $box = $(
              `<p><span><span class="index index-${index}">${index+1}</span><a href="/${item.type==0?'buyer':'supplier'}/${item.seller_id_std}"><span class="name">${item.seller}</span></a></span><span>${item.prop}%</span></p>`
            );
            $(".customs-data-corg-text-option").append($box);
          });
        }
      }
    });
}

// 首页进口港数据
function get_jkgk_data(id, tag_name, p) {
  axios
    .get(
      `/raw/trade/analyse?country=${country}&=undefined&ie=${jk_or_ck}&start_date=${tag_start_date}&end_date=${tag_end_date}&hs=&des=&bill_no=&seller=&buyer=&buyer_country=&seller_country=&origin_country=&seller_port=&buyer_port=&trans=&notify_name=&weight_min=&weight_max=&qty_min=&qty_max=&container_min=&container_max=&tag_id=${id}&ptoken=${p}&field=buyer_port&start=0&size=30`
    )
    .then((res) => {

      if (res.data.message == "查无数据" || res.data.data.hits == 0) {

        jkgk_show_flag = false
        // $(".tab-options6-content .more").css("display", "none");

        $(".customs-data-gk .data-sum").text(`${get_lang(customs_data_lang,customs_data_aswter,"a16").replace("[@数量]",0)}${get_lang(customs_data_lang,customs_data_aswter,"a17")}`);
        $(".tab-options6-content .more").remove()
        $(".customs-data-gk-text-option p").remove();
        let $box = $(`<p class="no-data">${get_lang(customs_data_lang,customs_data_aswter,"a46")}</p>`)
        $(".customs-data-gk-text-option").append($box);

        // 没有数据隐藏
        $(".swiper .swiper-wrapper .swiper-slide").each(function (index, item) {
          if ($(item).children('.sbox').data("num") == 6) {
            $(item).remove()
            // $(".customs-data-gk h3 span").eq(0).children("span").eq(0).remove()
          }
        })
      } else {
        jkg_list = res.data.data
        let jkgk_data = res.data.data.list;
        $(".customs-data-gk .data-sum").text(`${get_lang(customs_data_lang,customs_data_aswter,"a16").replace("[@数量]",res.data.data.hits.toLocaleString())}${get_lang(customs_data_lang,customs_data_aswter,"a17")}`)
        $(".customs-data-gk-text-option p").remove();
        jkgk_data.slice(0, 5).forEach(function (item, index) {
          let $box = $(
            `<p><span><span class="index index-${index}">${index+1}</span><span>${item.buyer_port}</span></span><span>${item.bill_count}</span><span>${item.prop}%</span></p>`
          );
          $(".customs-data-gk-text-option").append($box);
        });
      }
    });
}

// tab获取出口港数据
function get_ckgk_data1(id, tag_name, p) {
  return new Promise(function (resolve, reject) {
    axios
      .get(
        `/raw/trade/analyse?country=${country}&=undefined&ie=${jk_or_ck}&start_date=${tag_start_date}&end_date=${tag_end_date}&hs=&des=&bill_no=&seller=&buyer=&buyer_country=&seller_country=&origin_country=&seller_port=&buyer_port=&trans=&notify_name=&weight_min=&weight_max=&qty_min=&qty_max=&container_min=&container_max=&tag_id=${id}&ptoken=${p}&field=seller_port&start=0&size=30`
      )
      .then((res) => {

        if (res.data.message !== "查无数据") {
          ckg_list = res.data.data
          resolve(true)
        } else {
          $(".tab-options7 h3 .tab-options7-sum span").text(`(0)`);
          $(".tab-options7-content .more").css("display", "none");
        }
      })
  })
}

// 首页出口港数据
function get_ckgk_data(id, tag_name, p) {
  axios
    .get(
      `/raw/trade/analyse?country=${country}&=undefined&ie=${jk_or_ck}&start_date=${tag_start_date}&end_date=${tag_end_date}&hs=&des=&bill_no=&seller=&buyer=&buyer_country=&seller_country=&origin_country=&seller_port=&buyer_port=&trans=&notify_name=&weight_min=&weight_max=&qty_min=&qty_max=&container_min=&container_max=&tag_id=${id}&ptoken=${p}&field=seller_port&start=0&size=30`
    )
    .then((res) => {
      console.log(res, "首页出口港口数据")
      if (res.data.message == "查无数据" || res.data.data.hits == 0) {

        jkgk_show_flag1 = false

        // $(".tab-options7-content .more").css("display", "none");
        $(".customs-data-gk .data-sum").text(`${get_lang(customs_data_lang,customs_data_aswter,"a16").replace("[@数量]",0)}${get_lang(customs_data_lang,customs_data_aswter,"a17")}`)
        $(".customs-data-gk-text-option p").remove();
        let $box = $(`<p class="no-data">${get_lang(customs_data_lang,customs_data_aswter,"a46")}</p>`)
        $(".customs-data-gk-text-option").append($box);

        // 没有数据隐藏
        $(".swiper .swiper-wrapper .swiper-slide").each(function (index, item) {
          if ($(item).children('.sbox').data("num") == 7) {
            $(item).remove()
            // $(".customs-data-gk h3 span").eq(0).children("span").eq(1).remove()
          }
        })
      } else {
        ckg_list = res.data.data
        let jkgk_data = res.data.data.list;
        $(".customs-data-gk .data-sum").text(`${get_lang(customs_data_lang,customs_data_aswter,"a16").replace("[@数量]",res.data.data.hits.toLocaleString())}${get_lang(customs_data_lang,customs_data_aswter,"a17")}`)
        $(".customs-data-gk-text-option p").remove();
        jkgk_data.slice(0, 5).forEach(function (item, index) {
          let $box = $(
            `<p><span><span class="index index-${index}">${index+1}</span><span>${item.seller_port}</span></span><span>${item.bill_count}</span><span>${item.prop}%</span></p>`
          );
          $(".customs-data-gk-text-option").append($box);
        });
      }
    });
}

// 首页hs编码数据
function get_hs_data(id, tag_name, p) {
  axios
    .get(
      `/raw/trade/analyse?country=${country}&=undefined&ie=${jk_or_ck}&start_date=${tag_start_date}&end_date=${tag_end_date}&hs=&des=&bill_no=&seller=&buyer=&buyer_country=&seller_country=&origin_country=&seller_port=&buyer_port=&trans=&notify_name=&weight_min=&weight_max=&qty_min=&qty_max=&container_min=&container_max=&tag_id=${id}&ptoken=${p}&field=hs&start=0&size=30`
    )
    .then((res) => {

      if (res.data.message == "查无数据" || res.data.data.hits == 0) {
        // $(".tab-options8-content .more").css("display", "none");
        // $(".customs-data-hs .data-sum").text(`${get_lang(customs_data_lang,customs_data_aswter,"a16")}0${get_lang(customs_data_lang,customs_data_aswter,"a17")}`);
        // $(".tab-options8-content .more").remove()
        // $(".customs-data-hs-text-option p").remove();
        // let $box = $(`<p class="no-data">${get_lang(customs_data_lang,customs_data_aswter,"a46")}</p>`)
        // $(".customs-data-hs-text-option").append($box);

        // 没有数据隐藏
        $(".swiper .swiper-wrapper .swiper-slide").each(function (index, item) {
          if ($(item).children('.sbox').data("num") == 8) {
            $(item).remove()
            $(".customs-data-hs").remove()
          }
        })
      } else {
        hs_list = res.data.data
        let hs_data = res.data.data.list;
        // 渲染首页hs编码模块
        $(".customs-data-hs .data-sum").text(`${get_lang(customs_data_lang,customs_data_aswter,"a16").replace("[@数量]",hs_data.length.toLocaleString())}${get_lang(customs_data_lang,customs_data_aswter,"a17")}`)
        $(".customs-data-hs-text-option p").remove();
        hs_data.slice(0, 5).forEach(function (item, index) {
          let $box = $(
            `<p><span><span class="index index-${index}">${index+1}</span><span>${item.hs}</span></span><span>${item.bill_count}</span><span>${item.prop}%</span></p>`
          );
          $(".customs-data-hs-text-option").append($box);
        });
      }
    });
}

// 渲染图表
function printf_table(flag) {
  // 基于准备好的dom，初始化echarts实例
  if (!document.getElementById("main")) return false
  var myChart = echarts.init(document.getElementById("main"), null, {
    width: getrem(315),
    height: getrem(168),
  });

  // 指定图表的配置项和数据
  var option = {
    // 标题
    title: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    // 提示信息
    tooltip: {},
    // 图例颜色
    color: ["#ADC9FF"],
    // 顶部的选项信息，每个系列名，点击系列名可控制该系列图标显示与否
    legend: {
      orient: "horizontal",
      x: "center",
      y: "top",
      itemWidth: getrem(5), // 图例图形宽度
      itemHeight: getrem(5), // 图例图形高度
      data: [`${get_lang(customs_data_lang,customs_data_aswter,"a12")}`],
      textStyle: {
        //图例文本颜色
        fontSize: getrem(6.75),
        color: "#8C8C8C",
      },
      itemWidth: getrem(8.87),
    },
    // dataZoom: {
    //   // 放大和缩放
    //   type: "inside",
    // },
    //平面x轴
    xAxis: {
      type: "category",
      data: flag == 0 ? bill_count_x : flag == 1 ? qty_x : sum_x,
      axisLabel: {
        boundaryGap: false,
        interval: 0,
        fontSize: getrem(6.75),
        color: "#000000",
        rotate: 40,
      },
      nameTextStyle: {
        // 名称样式
      },
      axisTick: {
        // 坐标轴刻度
        show: false, // 是否显示
      },
    },
    // 平面y轴
    yAxis: {
      type: "value",
      axisLabel: {
        boundaryGap: false,
        interval: 0,
        fontSize: getrem(6.75),
        color: "#000000",
      },
      nameTextStyle: {
        // 名称样式
      },
      // y轴轴线
      axisLine: {
        show: false
      },
      axisTick: {
        // 坐标轴刻度
        show: false, // 是否显示
      },
      // 网格线
      splitLine: {
        //网格线
        lineStyle: {
          type: "solid", //设置网格线类型 dotted：虚线   solid:实线
          color: "rgba(0, 0, 0, 0.1)",
        },
        show: true, //隐藏或显示
      },
    },
    // 配置每个系列
    series: [{
      name: `${get_lang(customs_data_lang,customs_data_aswter,"a12")}`, //系列名
      type: "bar", //图表类型
      data: flag == 0 ? bill_count_y : flag == 1 ? qty_y : sum_y, //数据量
      barWidth: getrem(8.87), // 柱形的宽度
      barCategoryGap: getrem(1), // 柱形的间距
    }, ],
    grid: {
      x: flag == 0 ? getrem(28) : flag == 1 ? getrem(38) : getrem(42),
      y: getrem(28),
      x2: getrem(0),
      y2: getrem(28),
    },
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
}

// 渲染表格
function printf_table2(num) {
  if (table_data.length <= 3) {
    $(".tabel-more").remove()
  }
  $("tbody tr").remove()
  table_data.slice(0, num).forEach(function (item, index) {
    let $tr = $(
      `<tr><td>${item.date.replace("-","/")}</td><td>${item.bill_count}</td><td>${item.prop}%</td></tr>`
    );

    $("tbody").append($tr);
  });
}

//表格加载更多按钮
$(".tabel-more").click(function () {

  if ($(this).text() == `${get_lang(customs_data_lang,customs_data_aswter,"a14")}`) {
    printf_table2(3)
    $(this).html(`${get_lang(customs_data_lang,customs_data_aswter,"a13")}<img src='${img_src}mobile/images/billsearch/xiangxiajiantou.png' />`)
  } else {
    printf_table2(table_data.length)
    $(this).text(`${get_lang(customs_data_lang,customs_data_aswter,"a14")}`)
  }


})

// tabel1 -------------------------------------------市场分析
// 渲染数据
// 首页加载时，数据已经拿到
function put_fx_data() {

  // 总量
  $(".tab-options1-sum span").text(`(${table_data.length})`)
  $(".tab-options1-content-text p").remove()
  table_data.forEach(function (item, index) {
    let $box = $(`<p><span>${item.date.replace("-","/")}</span><span>${item.bill_count}</span><span>${item.prop}%</span></p>`)
    $(".tab-options1-content-text").append($box)
  })
}

// 导出名录
$(".tab-options1-options span").click(function () {
  text_toast({
    p1: `${get_lang(customs_data_lang,customs_data_aswter,"customs_data_toast_title")}`,
    p2: `${get_lang(customs_data_lang,customs_data_aswter,"customs_data_toast_content")}`
  });
})

// 操作----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
$("#customs_data_header_down").parent().click(function (e) {
  e.stopPropagation()
  $(".customs-data-header-box").toggle();
});

$("html body").click(function (e) {
  e.stopImmediatePropagation()
  if ($(".customs-data-header-box").css("display") == 'block') {
    $(".customs-data-header-box").toggle();
  }
})

// 轮播
var mySwiper = new Swiper(".swiper", {
  // 改可视区域可以显示的轮播框的个数
  loop: false,
  slidesPerView: "auto",
  // 动态侦听
  observer: true,
  observeSlideChildren: true,
  initialSlide: 0,

  // 点击自动切到当前页
  slideToClickedSlide: true,
});

// 图表切换
$(".customs-data-table h3 .right span").click(function () {
  printf_table($(this).index());
  $(this).addClass("active").siblings().removeClass("active");
});

var corg_index = 0
// 采购商 供应商切换
$(".customs-data-corg .customs-data-corg-options").click(function () {

  $(this).addClass("active").siblings().removeClass("active");
  corg_index = $(this).index()
  if ($(this).index() == 0) {
    get_buyer_data(tag_id, tag_name, p_token);
  } else if ($(this).index() == 1) {
    get_gys_data(tag_id, tag_name, p_token);
  }
});

var gk_index = 0
// 港口切换
$(".customs-data-gk .customs-data-gk-options").click(function () {

  $(this).addClass("active").siblings().removeClass("active");
  gk_index = $(this).index()
  if ($(this).index() == 0) {
    get_jkgk_data(tag_id, tag_name, p_token);
  } else if ($(this).index() == 1) {
    get_ckgk_data(tag_id, tag_name, p_token);
  }
});

// 获取地图数据源  供应国 or 采购国  数据
// 拿全部数据
function get_map_data(id, p, search_key, more_flag) {
  axios
    .get(
      `/raw/trade/analyse?country=${country}&=undefined&ie=${jk_or_ck}&start_date=${tag_start_date}&end_date=${tag_end_date}&hs=&seller=&buyer=&seller_country=${
        search_key ? search_key : ""
      }&weight_min=&weight_max=&qty_min=&qty_max=&amount_min=&amount_max=&tag_id=${id}&ptoken=${p}&field=${jk_or_ck==0?'seller_country':'buyer_country'}&start=0&size=30&des=${tag_name}`
    )
    .then((res) => {
      console.log(res, "供应国，采购国数据")
      // 动态地图区域数据
      let map_data = [];
      let map_table = [];

      if (res.data.message == "查无数据" || res.data.data.hits == 0) {
        // $(".customs-data-map .no-data").remove()
        // $(".customs-data-map .customs-data-map-table>.customs-data-map-text-option>p").remove()
        // let $box = $(`<p class="no-data">${get_lang(customs_data_lang,customs_data_aswter,"a46")}</p>`)
        // $(".customs-data-map").append($box);
        // $(".customs-data-map .data-sum").text(`${get_lang(customs_data_lang,customs_data_aswter,"a16").replace("[@数量]",res.data.data.hits.toLocaleString())}${get_lang(customs_data_lang,customs_data_aswter,"a17")}`);
        // new_map_default_data = []
        // printf_map(new_map_default_data);

        // 隐藏对应模块
        $('.customs-data-map').remove()
        $(".swiper .swiper-wrapper .swiper-slide").each(function (index, item) {
          if ($(item).children('.sbox').data("num") == 2) {
            $(item).remove()
          }
        })

      } else {

        // top国家
        if (tab_index == 0) {
          map_data = res.data.data.list.slice(0, 5);
        } else if (tab_index == 2) {
          map_data = res.data.data.list.slice(0, 15);

        }


        // 底下表格数据

        $(".customs-data-map .data-sum").text(`${get_lang(customs_data_lang,customs_data_aswter,"a16").replace("[@数量]",res.data.data.hits.toLocaleString())}${get_lang(customs_data_lang,customs_data_aswter,"a17")}`)
        $(".tab-options2 h3 .tab-options2-sum span").text(`(${res.data.data.hits.toLocaleString()})`)

        if (tab_index == 0) {
          map_table = res.data.data.list.slice(0, 5);
        } else if (tab_index == 2) {
          if (more_flag) {
            if (gyg_num < res.data.data.list.length) {
              map_table = res.data.data.list.slice(gyg_num, gyg_num + 15);
            } else {
              $(".tab-map-table .more").css("display", "none");
            }
          } else {
            map_table = res.data.data.list.slice(0, 15);
          }
        }

        // 搜素先清空
        if (search_key) {
          $(".tab-map-text-option p").remove();
          $(".tab-map-table .more").css("display", "none");
        }

        $(".customs-data-map .no-data").remove()

        // 渲染底下表格
        printf_map_table(map_table, more_flag);


        // 对比地图区域，确定需要点亮的国家
        // map_data.forEach(function (item, index) {
        //   map_default_data.forEach(function (item1, index1) {
        //     if (xtod(item.seller_country) == item1.name) {
        //       item1.selected = true;
        //       new_map_default_data.push(item1);
        //     }
        //   });
        // });

        var map_chart_list = []
        map_data.forEach(function (values, _) {
          // sum += values.prop;
          map_chart_list.push({
            value: values.prop,
            name: sensitive_country_iup(values['seller_country'].InitialUpper()),
            bill: values.bill_count
          })
        })

        console.log(map_chart_list)

        // 渲染地图
        if (tab_index == 0) {


          // 渲染首页地图
          printf_map(map_chart_list);
        } else if (tab_index == 2) {

        }
      }

    });
}

// 渲染底下表格
function printf_map_table(data, more_flag) {
  if (!more_flag) {
    $(".tab-map-text-option p").remove();
  }



  $(".customs-data-map-text-option p").remove()
  let num
  tab_index == 2 ? num = 15 : num = 5

  data.slice(0, num).forEach(function (item, index) {
    let $box = $(
      `<p><span><span class="index index-${index}">${tab_index == 0?index+1:""}</span><span>${jk_or_ck==0?item.seller_country:item.buyer_country}</span></span><span>${item.bill_count}</span><span>${item.prop}%</span></p>`
    );
    if (tab_index == 0) {
      $(".customs-data-map-text-option").append($box);
    } else if (tab_index == 2) {
      $(".tab-map-text-option").append($box);
    }
  });
}

// 渲染地图
function printf_map(data) {
  console.log(data, 'country map')
  if (!document.getElementById("map_main"))
    return false
  var myChart = echarts.init(document.getElementById("map_main"), null, {
    width: getrem(345),
    height: getrem(168),
  });


  option = {
    visualMap: {
      show: false,
      min: 0,
      max: 100,
      realtime: true,
      //平均分层
      splitNumber: 120,
      inRange: {
        color: ["#DB7093", "#3CB371", "#C71585", "#ff9900", "#800080", "#FFFF00", "#D2691E", "#3333FF", "#663333"]
      },
      outOfRange: {
        color: ['#800000'],
      },
    },
    tooltip: {
      "show": true,
      // "trigger": "item",
      "triggerOn": "click",
      "axisPointer": {
        "type": "line"
      },
      "textStyle": {
        "fontSize": 10
      },
      "borderWidth": 0,
      formatter: function (params) {
        if (params.value.toString() == 'NaN')
          return "";
        var value = (params.value + '%')
        return params.name + '<br/>' + unity_lang('report_trade_Percentage') + ' : ' + value + ' <br/>' + unity_lang('report_trade_times') + ' : ' + params.data.bill;
      }
    },
    series: [{
      type: 'map',
      mapType: 'world',
      selectedMode: "multiple", // 选中效果固化，。。。。。
      roam: true,
      itemStyle: {
        emphasis: {
          label: {
            show: true
          }
        }
      },
      data: data,
    }],
  };
  myChart.setOption(option);
}

function printf_tab_map(data) {

  var myChart = echarts.init(document.getElementById("tab_map_main"), null, {
    width: getrem(345),
    height: getrem(168),
  });
  option = {
    title: {
      sublink: "http://esa.un.org/wpp/Excel-Data/population.html",
      left: "center",
      top: "top",
    },
    series: [{
      name: "World Population (2010)",
      type: "map",
      mapType: "world",
      selectedMode: "multiple", // 选中效果固化，。。。。。
      roam: true,
      label: {
        normal: {
          textStyle: {
            fontSize: getrem(3),
            fontWeight: "bold",
            color: "red",
          },
        },
      },
      data: data,
    }, ],
  };
  myChart.setOption(option);
}

// 首字母大写
function xtod(str) {
  let string = [...str];
  string[0] = string[0].toUpperCase();
  string.forEach((item, index) => {
    if (index < string.length) {
      if (item == " ") {
        string[index + 1] = string[index + 1].toUpperCase();
      }
    }
  });
  string = string.join("");
  return string;
}

// 响应式单位
function getrem(value) {
  var clientWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  if (!clientWidth) return;
  var fz;
  var width = clientWidth;
  fz = width / 375;

  return fz * value;
}

// tab--------------------------------------------------------------------------3 供应国
$(".tab-options2 h3 .tab-options2-options").click(function () {
  text_toast({
    p1: `${get_lang(customs_data_lang,customs_data_aswter,"customs_data_toast_title")}`,
    p2: `${get_lang(customs_data_lang,customs_data_aswter,"customs_data_toast_content")}`
  });
});

// 加载更多按钮
$(".tab-options2-content .more").click(function () {

  gyg_num += 15;
  get_map_data(tag_id, p_token, undefined, "more");
});

// 供应国搜索
$(".tab-options2-content .search-btn").click(function () {
  if ($(".tab-options2-content input").val() == "") {
    text_toast({
      p1: `${get_lang(customs_data_lang,customs_data_aswter,"customs_data_toast_jg")}`,
      p2: `${get_lang(customs_data_lang,customs_data_aswter,"customs_data_toast_jgtext")}`
    });
  } else {
    get_map_data(tag_id, p_token, $(".tab-options2-content input").val());
  }
});

// tab--------------------------------------------------------------------------2 海关数据
$(".tab-options3 h3 .tab-options3-options").click(function () {
  text_toast({
    p1: `${get_lang(customs_data_lang,customs_data_aswter,"customs_data_toast_title")}`,
    p2: `${get_lang(customs_data_lang,customs_data_aswter,"customs_data_toast_content")}`
  });
});

// 加载更多按钮
$(".tab-options3-content .more").click(function () {

  tgd_num += 20;
  get_tgd_data(2, tag_id, "more");
});

// tab--------------------------------------------------------------------------4 采购商
// 数据在首页加载时拿到
// 渲染采购商数据

let cg_num = 0

function put_cg_data(flag) {
  if (!flag) {
    $(".tab-options4-content-text p").remove()
  }

  // 总量
  $(".tab-options4-sum span").text(`(${buyer1_list.hits})`)
  buyer1_list.list.slice(cg_num, cg_num + 15).forEach(function (item, index) {
    let $box = $(`<p><a href="/${item.type==0?'buyer':'supplier'}/${item.buyer_id_std}"><span>${item.buyer}</span></a><span>${item.bill_count}</span><span>${item.prop}%</span></p>`)
    $(".tab-options4-content-text").append($box)
  })
}

// 更多按钮
$(".tab-options4-content .more").click(function () {
  cg_num += 15
  put_cg_data(1)
})

// 导出名录
$(".tab-options4-options,.tab-options5-options,.tab-options6-options,.tab-options7-options,.tab-options8-options>.option1").click(function () {
  text_toast({
    p1: `${get_lang(customs_data_lang,customs_data_aswter,"customs_data_toast_title")}`,
    p2: `${get_lang(customs_data_lang,customs_data_aswter,"customs_data_toast_content")}`
  });
})

// tab--------------------------------------------------------------------------5 供应商
// 数据首页点击供应商才能拿到
// 渲染采购商数据

let gy_num = 0

function put_gy_data(flag) {

  if (!flag) {
    $(".tab-options5-content-text p").remove()
  }

  // 先拿数据
  get_gys_data1(tag_id, tag_name, p_token).then(function (res) {
    if (res) {
      // 总量
      $(".tab-options5-sum span").text(`(${gys_list.hits})`)
      gys_list.list.slice(gy_num, gy_num + 15).forEach(function (item, index) {
        if (gy_num <= gys_list.hits) {
          let $box = $(`<p><a href="/${item.type==0?'buyer':'supplier'}/${item.seller_id_std}"><span>${item.seller}</span></a><span>${item.bill_count}</span><span>${item.prop}%</span></p>`)
          $(".tab-options5-content-text").append($box)
        } else {
          $(".tab-options5 .tab-options5-content .more").css("display", "none")
        }

      })
    }
  })
}

// 更多按钮
$(".tab-options5-content .more").click(function () {
  gy_num += 15
  put_gy_data(1)
})

// tab--------------------------------------------------------------------------6 进口港
// 渲染采购商数据

let jkg_num = 0

function put_jkg_data(flag) {

  if (!flag) {
    $(".tab-options6-content-text p").remove()
  }

  // 总量
  if (jkg_list.list) {
    $(".tab-options6-sum span").text(`(${jkg_list.list.length})`)
    jkg_list.list.slice(jkg_num, jkg_num + 15).forEach(function (item, index) {
      if (jkg_num <= jkg_list.list.length) {
        let $box = $(`<p><span>${item.buyer_port}</span><span>${item.bill_count}</span><span>${item.prop}%</span></p>`)
        $(".tab-options6-content-text").append($box)
      } else {

        $(".tab-options6 .tab-options6-content .more").css("display", "none")
      }
    })
  } else {
    $(".tab-options6-sum span").text(`(0)`)
  }

}

// 更多按钮
$(".tab-options6-content .more").click(function () {
  jkg_num += 15

  put_jkg_data(1)
})

// tab--------------------------------------------------------------------------7 出口港
// 渲染采购商数据

let ckg_num = 0

function put_ckg_data(flag) {

  if (!flag) {
    $(".tab-options7-content-text p").remove()
  }

  get_ckgk_data1(tag_id, tag_name, p_token).then(function (res) {
    if (res) {
      // 总量
      $(".tab-options7-sum span").text(`(${ckg_list.hits})`)
      ckg_list.list.slice(ckg_num, ckg_num + 15).forEach(function (item, index) {
        if (ckg_num <= ckg_list.hits) {
          let $box = $(`<p><span>${item.seller_port}</span><span>${item.bill_count}</span><span>${item.prop}%</span></p>`)
          $(".tab-options7-content-text").append($box)
        } else {
          $(".tab-options7 .tab-options7-content .more").css("display", "none")
        }

      })
    }
  })
}

// 更多按钮
$(".tab-options7-content .more").click(function () {
  ckg_num += 15
  put_ckg_data(1)
})

// tab--------------------------------------------------------------------------8 HS编码
// 渲染采购商数据

let hs_num = 0

function put_hs_data(flag) {

  if (!flag) {
    $(".tab-options8-content-text p").remove()
  }
  // 总量

  $(".tab-options8-sum span").text(`(${hs_list.hits})`)
  hs_list.list.slice(hs_num, hs_num + 15).forEach(function (item, index) {
    let $box = $(`<p><span>${item.hs}</span><span>${item.bill_count}</span><span>${item.prop}%</span></p>`)
    $(".tab-options8-content-text").append($box)
  })
}

// 更多按钮
$(".tab-options8-content .more").click(function () {
  hs_num += 15
  put_hs_data(1)
})


// 首页各个title点击跳转

// 1 提单数据
$(".customs-data-data").on("click", "h3 .data-sum,img", function () {
  $(".customs-data-swiper .swiper .swiper-slide").each(function (index, item) {
    if ($(item).children(".sbox").data("num") == 3) {
      $(item).click()
      mySwiper.slideTo($(item).index(), 500, false)
    }
  })
})

// 采购商 or 供应商
$(".customs-data-corg").on("click", "h3 .data-sum,img", function () {
  if (corg_index == 0) {
    $(".customs-data-swiper .swiper .swiper-slide").each(function (index, item) {
      if ($(item).children(".sbox").data("num") == 4) {
        $(item).click()
        mySwiper.slideTo($(item).index(), 500, false)
      }
    })
  } else {
    $(".customs-data-swiper .swiper .swiper-slide").each(function (index, item) {
      if ($(item).children(".sbox").data("num") == 5) {
        $(item).click()
        mySwiper.slideTo($(item).index(), 500, false)
      }
    })
  }
})

// 供应国
$("#gyg_data_sum").click(function () {

  $(".customs-data-swiper .swiper .swiper-slide").each(function (index, item) {
    if ($(item).children(".sbox").data("num") == 2) {
      $(item).click()
      mySwiper.slideTo($(item).index(), 500, false)
    }
  })
})

// 进口 or 出口
$(".customs-data-gk").on("click", "h3 .data-sum,img", function () {
  if (gk_index == 0) {
    $(".customs-data-swiper .swiper .swiper-slide").each(function (index, item) {
      if ($(item).children(".sbox").data("num") == 6) {
        $(item).click()
        mySwiper.slideTo($(item).index(), 500, false)
      }
    })
  } else {
    $(".customs-data-swiper .swiper .swiper-slide").each(function (index, item) {
      if ($(item).children(".sbox").data("num") == 7) {
        $(item).click()
        mySwiper.slideTo($(item).index(), 500, false)
      }
    })
  }
})

// hs
$(".customs-data-hs").on("click", "h3 .data-sum,img", function () {
  $(".customs-data-swiper .swiper .swiper-wrapper .swiper-slide").each(function (index, item) {
    if ($(item).children(".sbox").data("num") == 8) {
      $(item).click()
      mySwiper.slideTo($(item).index(), 500, false)
    }
  })

})

// 海关数据详情页
$(".tab-options3-content-text").on("click", ".box2 p", function () {

  let id = $(this).children("span").eq(2).children("img").data("id")
  let date = $(this).children("span").eq(2).children("img").data("date")
  // $(".jy-detail-page").animate({
  //   width: "toggle"
  // }, 320, function () {
  //   // 渲染页面
  //   // put_xq_page_data();
  // });

  // 拿详情页面数据
  get_xq_data(id, date).then(function (res) {
    if (res) {
      $(".jy-detail-page").css('display', 'block')
      $("html,body").css("overflow-y", "hidden");
      put_xq_data()
      setting_more()
    }
  })
})

// 关闭详情弹窗
$("#xq_del").click(function () {

  $(".jy-detail-page").css('display', 'none')

  $("html,body")
    .css("overflow-y", "scroll");
});

// 拿详情页数据
// 参数 提单id 国家 ie=0 ptoken="" 
// 详情页面数据
let xq_page_data = {}

function get_xq_data(id, date) {
  return new Promise(function (resolve, reject) {

    axios.get(`/async/raw/bill/detail?id=${id}&ie=${jk_or_ck}&trade_date=${jk_or_ck==0?date:ckdate}&country=${country}&ptoken=${p_token}`).then(function (res) {

      if (res.data.state == 0) {
        xq_page_data = res.data.data.detail
        resolve(true)
      }
    })
  })
}

// 渲染详情页面数据
function put_xq_data() {
  console.log(xq_page_data,"详情页数据")
  $(".xq-page-date").each(function (index) {
    switch (index) {
      case 0:
        $(this).text(xq_page_data.date ? xq_page_data.date : '---');
        break;
      case 1:
        $(this).text(xq_page_data.seller ? xq_page_data.seller : '---');
        break;
      case 2:
        $(this).text(xq_page_data.buyer ? xq_page_data.buyer : "---");
        break;
      case 3:
        $(this).text(xq_page_data.descript ? xq_page_data.descript : "---");
        break;
      case 4:
        $(this).text(xq_page_data.weight_text ? xq_page_data.weight_text : "---");
        break;
        // 数量
      case 5:
        $(this).text(xq_page_data.qty_text ? xq_page_data.qty_text : "---");
        break;
      case 6:
        $(this).text(xq_page_data.amount ? xq_page_data.amount : "---");
        break;
      case 7:
        $(this).text(xq_page_data.buyer_country ? xq_page_data.buyer_country : "---");
        break;
      case 8:
        $(this).text(xq_page_data.date ? xq_page_data.date : "---");
        break;
      case 9:
        $(this).text(xq_page_data.seller ? xq_page_data.seller : "---");
        break;
      case 10:
        $(this).text(xq_page_data.buyer ? xq_page_data.buyer : "---");
        break;
    }
  });

  $(".xq-page-date1").each(function (index) {
    switch (index) {
      case 0:
        $(this).text(xq_page_data.place_receipt ? xq_page_data.place_receipt : '---'); //1
        break;
      case 1:
        $(this).text(xq_page_data.scac_desc ? xq_page_data.scac_desc : '---'); //1
        break;
      case 2:
        $(this).text(xq_page_data.vessel_code ? xq_page_data.vessel_code : "---"); //1
        break;
        // 数量
      case 3:
        $(this).text(xq_page_data.seller_port ? xq_page_data.seller_port : "---"); //出口港口
        break;
      case 4:
        $(this).text(xq_page_data.buyer_country ? xq_page_data.buyer_country : "---"); //目的国
        break;
      case 5:
        $(this).text(xq_page_data.origin_country ? xq_page_data.origin_country : "---"); //原产国
        break;
      case 6:
        $(this).text(xq_page_data.carrier_code ? xq_page_data.carrier_code : "---"); //承运人代码
        break;
      case 7:
        $(this).text(xq_page_data.sline_desc ? xq_page_data.sline_desc : "---"); //航线全程
        break;
      case 8:
        $(this).text(xq_page_data.voyage_number ? xq_page_data.voyage_number : "---"); //航次
        break;
      case 9:
        $(this).text(xq_page_data.buyer_port ? xq_page_data.buyer_port : "---"); //进口港口
        break;
      case 10:
        $(this).text(xq_page_data.trans_type ? xq_page_data.trans_type : "---"); //运输方式
        break;
      case 11:
        $(this).text(xq_page_data.vessel_name ? xq_page_data.vessel_name : "---"); //船名
        break;
    }
  });
}

// 展开按钮
$('.xq-page-li .more').click(function () {
  if ($(this).text() == `[${get_lang(customs_data_lang,customs_data_aswter,"a45")}]`) {
    $('.xq-page-date-more').addClass('active')
    $(this).text(`[${get_lang(customs_data_lang,customs_data_aswter,"a44")}]`)
  } else {
    $('.xq-page-date-more').removeClass('active')
    $(this).text(`[${get_lang(customs_data_lang,customs_data_aswter,"a45")}]`)
  }
})


function mokuai_show() {

  console.log(corg_show_flag, corg_show_flag1, jkgk_show_flag, jkgk_show_flag1, "963.8527410486205120.235456453132")

  if (corg_show_flag == false && corg_show_flag1 == false) {
    $(".customs-data-corg").css("display", "none")
  }

  if (jkgk_show_flag == false && jkgk_show_flag1 == false) {
    $(".customs-data-gk").css("display", "none")
  }

}