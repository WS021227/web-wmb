let img_src=$(".company-details-container").data("img")

let company_details_aswter = {
  'a1': {
    cn: "市场趋势与交易",
    en: "Market trends and trading"
  },
  'a2': {
    cn: "官方参考联系",
    en: "Official reference contact"
  },
  "a3": {
    cn: "收起",
    en: "Collapse"
  },
  "a4": {
    cn: "展开",
    en: "unfold"
  },
  "a5": {
    cn: "交易次数/次",
    en: "Number/times"
  },
  "a6": {
    cn: "同比次数/次",
    en: "Year-over-year/times"
  },
  "a7": {
    cn: "请输入公司名称或国家进行搜索",
    en: "Please enter the company name ..."
  },
  "a8": {
    cn: "公司名录",
    en: "Directory"
  },
  "a9": {
    cn: "交易详情",
    en: "Detail"
  },
  "a10": {
    cn: "采购",
    en: " Buyers"
  },
  "a11": {
    cn: "供应商",
    en: " vendor"
  },
  "a12": {
    cn: "双方于",
    en: "Both parties in "
  },
  "a13": {
    cn: "有最新交易",
    en: " there are the latest deals"
  },
  "a14": {
    cn: "点击加载更多",
    en: "Click Load more"
  },
  "a15": {
    cn: "流失",
    en: "Loss"
  },
  "a16": {
    cn: "新增",
    en: "New"
  },
  "a17": {
    cn: "HS编码",
    en: "HS code"
  },
  "a18": {
    cn: "交易数",
    en: "Quantity"
  },
  "a19": {
    cn: "交易日期",
    en: "Date"
  },
  "a20": {
    cn: "产品描述",
    en: "Description"
  },
  "a21": {
    cn: "名称",
    en: "name"
  },
  "a22": {
    cn: "登陆提示",
    en: "Login Tips"
  },
  "a23": {
    cn: "建议您登陆/注册后尝试查询",
    en: "Query after logging in or registering"
  },
  "a24": {
    cn: "登陆",
    en: "login"
  },
  "a25": {
    cn: "注册",
    en: "Register"
  },
  "a26": {
    cn: "会员权限不足",
    en: "Insufficient User Permissions"
  },
  "a27": {
    cn: "VIP会员可查阅此板块内容/使用此功能，建议您升级。",
    en: "VIP Members Have Permission To Get"
  },
  "a28": {
    cn: "购买会员",
    en: "Buy Membership"
  },
  "a29": {
    cn: "会员权限不足",
    en: "Insufficient User Permissions"
  },
  "a29-other": {
    cn: "钻石会员可查阅此板块内容/使用此功能，建议您升级。",
    en: "Diamond Members Have Permission To Get"
  },
  "a30": {
    cn: "所有时间",
    en: "All the time"
  },
  "a31": {
    cn: "货运信息",
    en: "Shipment Information"
  },
  "a32": {
    cn: "交易日期",
    en: "Date"
  },
  "a33": {
    cn: "采购商",
    en: "Buyers"
  },
  "a34": {
    cn: "供应商",
    en: "Supplier"
  },
  "a35": {
    cn: "产品描述",
    en: "Description"
  },
  "a36": {
    cn: "交易重量",
    en: "Weight"
  },
  "a37": {
    cn: "交易数量",
    en: "Quantity"
  },
  "a38": {
    cn: "交易金额",
    en: "Amount"
  },
  "a39": {
    cn: "采购区",
    en: "Area"
  },
  "a40": {
    cn: "产品信息",
    en: "Products"
  },
  "a41": {
    cn: "上一条",
    en: "Front"
  },
  "a42": {
    cn: "下一条",
    en: "Next"
  },
  "a43": {
    cn: "注意",
    en: "Note"
  },
  "a44": {
    cn: "已经是第一条啦",
    en: "It's already the first one"
  },
  "a45": {
    cn: "已经是最后一条啦",
    en: "IIt's already the last one"
  },
  "a46": {
    cn: "警告",
    en: "Warn"
  },
  "a47": {
    cn: "关键词不能为空",
    en: "The keyword cannot be empty"
  },
  'a48': {
    cn: "请先登录",
    en: "Please log in first"
  },
  'a49': {
    cn: "登录之后可查阅数据",
    en: "Log in and view the data"
  },
  'a50': {
    cn: "去登陆",
    en: "Login"
  },
  'a51': {
    cn: "去注册",
    en: "Register"
  },
  "a52": {
    cn: "友情提示",
    en: "Tips"
  },
  "a52-other": {
    cn: "此功能在电脑端(52wmb.com)使用效果更佳；联系客服021-64033826免费试用。",
    en: "It works better on the computer(en.52wmb.com); Contact whatsapp +8616621075894 for free trial."
  },

  
  "a53": {
    cn: "联系人",
    en: "Contact"
  },
  "a54": {
    cn: "联系方式",
    en: "Phone"
  },
  "a55": {
    cn: "传真",
    en: "Fax"
  },
  "a56": {
    cn: "地址",
    en: "Address"
  },
  "a57": {
    cn: "邮箱",
    en: "Email"
  },
  "a58": {
    cn: "官网",
    en: "Web"
  },
}

let company_details_lang = $(".company-details-container").data("lang")

// 交易切换
// 默认交易次数
let trade = 0;

//轮播切换
var index = 0;

// 查询参数
var c_id = $(".ws-table").data("id");
var c_type = $(".ws-table").data("companytype");
var c_endtime = $(".ws-table").data("endtime");
var c_starttime = $(".ws-table").data("starttime");
var c_country = $(".ws-table").data("country");
var c_last_trade_date = $(".ws-table").data("endtime");
c_country.replaceAll(" ", "%20");

// 贸易伙伴tab
// 贸易伙伴数据
let trade_partner_list = [];

// 查询贸易伙伴次数
var trade_partner_num = 15;
// 查询贸易数据次数
let trade_data_num = 15;

// 贸易深度
let trade_flag = "s";
let year_trade_partner_list = [], //近一年有交易
  pass_trade_partner_list = [], //错失
  new_trade_partner_list = [], //新增
  search_huoban = []; //搜索数据

// 选择年份初始值
var year_options = {
  num: 0,
  key: "**"
};

var cs_num = 0;

// 搜索关键字
var data_search_key = "*";

+
function () {
  if (wg.user.vip_level !== "yd") {
    $(".kuang .shoucang").css("display", "none")
  }
}()


get_trade_data(0);


// 联系方式渲染
function put_lxfs() {
  let lxfs_a1 = $("#lxfs").data("a1")
  let lxfs_a2 = $("#lxfs").data("a2")
  let lxfs_a3= $("#lxfs").data("a3")
  let lxfs_a4 = $("#lxfs").data("a4")
  let lxfs_a5 = $("#lxfs").data("a5")
  let lxfs_a6 = $("#lxfs").data("a6")
  let $box_lxfs = $(`
                              <p>
                                  ${get_lang(company_details_lang,company_details_aswter,"a53")}
                                  <span>${lxfs_a1}</span>
                              </p>
                              <p>
                              ${get_lang(company_details_lang,company_details_aswter,"a54")}
                                  <span>${lxfs_a2}</span>
                              </p>
                              <p>
                              ${get_lang(company_details_lang,company_details_aswter,"a55")}
                                  <span>${lxfs_a3} </span>
                              </p>
                              <p>
                              ${get_lang(company_details_lang,company_details_aswter,"a56")}
                                  <span class="text-content1">${lxfs_a4}</span>
                              </p>
                              <p>
                              ${get_lang(company_details_lang,company_details_aswter,"a57")}
                                  <span>${lxfs_a5}</span>
                              </p>
                              <p>
                              ${get_lang(company_details_lang,company_details_aswter,"a58")}
                                  <span>${lxfs_a6}</span>
                              </p>
  `)
  $("#lxfs .book").html($box_lxfs)
}

// 顶部地址部分 展开按钮
(function () {
  let hs = Math.round(parseFloat($('.address .a1').css('height')) / parseFloat($('.address .a1').css('line-height')))
  let hs1 = Math.round(parseFloat($('.book .text-content .text').css('height')) / parseFloat($('.book .text-content .text').css('line-height')))
  if (hs > 1) {
    $('.address span').eq(1).css('display', 'inline-block')
    $('.address span').eq(0).addClass('active')
  }
  if (hs1 > 3) {
    $('.book .text-content .text').addClass("active")
    $('.book .text-content .text-more').css("display", "inline-block")
  }
})();

//详情页 商品详情展开按钮
// (function () {
//   let hs = Math.round(parseFloat($('.xq-page-li .more').css('height')) / parseFloat($('.xq-page-li .more').css('line-height')))
//   if (hs > 3) {
//     $('.xq-page-li .more').css('display', 'block')
//     $('.xq-page-li .more').addClass('active')
//   }
// })();

// 异步获取贸易数据，渲染图表
function get_trade_data(flag) {
  let id = $(".ws-table").data("id");
  let company_type = $(".ws-table").data("companytype");
  let end_time = $(".ws-table").data("endtime");
  let start_time = $(".ws-table").data("starttime");

  // 前一年
  let start_time2 = start_time.replaceAll("-", "/");
  let end_time2 = start_time;
  start_time2 = new Date(start_time2);
  start_time2.setFullYear(start_time2.getFullYear() - 1);
  start_time2 = start_time2.toLocaleDateString().replaceAll("/", "-");

  // 前一年数据
  let old_bill_counts_array = [],
    old_bill_counts_valuearray = [],
    // 交易数量
    old_qty_counts_array = [],
    old_qty_counts_valuearray = [],
    // 交易重量
    old_weight_counts_array = [],
    old_weight_counts_valuearray = [];

  // 当前数据
  axios
    .get(
      `/company/detail/trends?id=${id}&company_type=${company_type}&end_time=${end_time}&start_time=${start_time}`
    )
    // 同步
    .then(async (res) => {
      console.log(res);
      if (res.data.state == 0) {
        // 前一年数据
        await axios
          .get(
            `/company/detail/trends?id=${id}&company_type=${company_type}&end_time=${end_time2}&start_time=${start_time2}`
          )
          .then((res) => {
            if (res.data.state == 0) {
              res.data.data.bill_counts.forEach((item) => {
                old_bill_counts_array.push(item.date);
                old_bill_counts_valuearray.push(item.value);
              });
              res.data.data.qty.forEach((item) => {
                old_qty_counts_array.push(item.date);
                old_qty_counts_valuearray.push(item.value);
              });

              res.data.data.weight.forEach((item) => {
                old_weight_counts_array.push(item.date);
                old_weight_counts_valuearray.push(item.value);
              });
            }
          });

        //交易次数
        let bill_counts_array = [],
          bill_counts_valuearray = [],
          // 交易数量
          qty_counts_array = [],
          qty_counts_valuearray = [],
          // 交易重量
          weight_counts_array = [],
          weight_counts_valuearray = [];

        res.data.data.bill_counts.forEach((item) => {
          bill_counts_array.push(item.date);
          bill_counts_valuearray.push(item.value);
        });

        res.data.data.qty.forEach((item) => {
          qty_counts_array.push(item.date);
          qty_counts_valuearray.push(item.value);
        });

        res.data.data.weight.forEach((item) => {
          weight_counts_array.push(item.date);
          weight_counts_valuearray.push(item.value);
        });

        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById("main"), null, {
          width: getrem(315),
          height: getrem(168),
        });
        console.log(myChart, 'asf')

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
          color: ["#E98B0C", "#ADC9FF"],
          // 顶部的选项信息，每个系列名，点击系列名可控制该系列图标显示与否
          legend: {
            orient: "horizontal",
            x: "center",
            y: "top",
            itemWidth: getrem(5), // 图例图形宽度
            itemHeight: getrem(5), // 图例图形高度
            data: [`${get_lang(company_details_lang,company_details_aswter,"a5")}`, `${get_lang(company_details_lang,company_details_aswter,"a6")}`],
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
            data: flag == 0 ?
              bill_counts_array : flag == 1 ?
              qty_counts_array : weight_counts_array,
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
              name: `${get_lang(company_details_lang,company_details_aswter,"a5")}`, //系列名
              type: "line", //图表类型
              data: flag == 0 ?
                old_bill_counts_valuearray : flag == 1 ?
                old_qty_counts_valuearray : old_weight_counts_valuearray, //数据量
              barWidth: getrem(8.87), // 柱形的宽度
              barCategoryGap: getrem(1), // 柱形的间距
              roam: false, //支持拖拽缩放
            },
            {
              name: `${get_lang(company_details_lang,company_details_aswter,"a6")}`, //系列名
              type: "bar", //图表类型
              data: flag == 0 ?
                bill_counts_valuearray : flag == 1 ?
                qty_counts_valuearray : weight_counts_valuearray, //数据量
              barWidth: getrem(8.87), // 柱形的宽度
              barCategoryGap: getrem(1), // 柱形的间距
              roam: false, //支持拖拽缩放
            },
          ],
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
    });
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

//收藏
$(".follow").on('click', 'div', function () {
  if (!wg.user.encrypt_user_name) {
    buy_vip_toast(`${get_lang(company_details_lang,company_details_aswter,"a48")}`, `${get_lang(company_details_lang,company_details_aswter,"a49")}`, `${get_lang(company_details_lang,company_details_aswter,"a50")}`, `${get_lang(company_details_lang,company_details_aswter,"a51")}`, `login`, `register`);
  } else {
    if (
      $(this).children("img").attr("src").includes("follow_false")) {
      shoucang($(this));
    } else {
      quxiao($(this));
    }
  }
});


// 收藏
function shoucang(event) {
  console.log(event, event.data("id"));
  axios
    .post("/async/common/company/follow", {
      company_id: `${event.data("id")}`,
      source: 0,
    })
    .then((res) => {
      if (res.data.state == 0) {
        console.log("关注成功！");
        event.children("img").attr(
          "src",
          `${img_src}mobile/images/company/company_list/follow_true.png`
        );
      } else {
        console.log("关注失败！");
      }
    });
}

// 取消收藏
function quxiao(event) {
  console.log(event, event.data("id"));
  axios
    .post("/async/common/company/unfollow", {
      company_id: `${event.data("id")}`,
      source: 0,
    })
    .then((res) => {
      console.log(res, "0000000000000000");
      if (res.data.state == 0) {
        console.log("关注成功！");
        event.children("img").attr(
          "src",
          `${img_src}mobile/images/company/company_list/follow_false.png`
        );
      } else {
        console.log("关注失败！");
      }
    });
}

// 展开按钮
// 顶部地址
$('.address span').eq(1).click(function () {
  if ($(this).text() == `[${get_lang(company_details_lang, company_details_aswter, "a3")}]`) {
    $('.address span').eq(0).addClass('active')
    $(this).text(`[${get_lang(company_details_lang,company_details_aswter,"a4")}]`)
  } else {
    $('.address span').eq(0).removeClass('active')
    $(this).text(`[${get_lang(company_details_lang,company_details_aswter,"a3")}]`)
  }
})

// 首页贸易数据 展开
$('.book .text-content .text-more').click(function () {
  if ($(this).text() == `[${get_lang(company_details_lang, company_details_aswter, "a3")}]`) {
    $('.book .text-content .text').addClass('active')
    $(this).text(`[${get_lang(company_details_lang,company_details_aswter,"a4")}]`)
  } else {
    $('.book .text-content .text').removeClass('active')
    $(this).text(`[${get_lang(company_details_lang,company_details_aswter,"a3")}]`)
  }
})

// tab轮播切换
$(".swiper .swiper-slide").click(function () {
  if ($(this).children(".sbox").data("num") !== 0) {

    if (!wg.user.encrypt_user_name) {
      // 标题 提示文本 按钮1文本 按钮2文本 按钮1跳转路径参数 按钮2跳转路径参数
      buy_vip_toast(`${get_lang(company_details_lang,company_details_aswter,"a22")}`, `${get_lang(company_details_lang,company_details_aswter,"a23")}`, `${get_lang(company_details_lang,company_details_aswter,"a24")}`, `${get_lang(company_details_lang,company_details_aswter,"a25")}`, "login", "register");
    } else {
      // 联系方式需要 vip
      if ($(this).children(".sbox").data("num") == 1) {
        if (wg.user.vip_level == "") {
          console.log("vipvipvipvipvip")
          buy_vip_toast1(
            `${get_lang(company_details_lang,company_details_aswter,"a26")}`,
            `${get_lang(company_details_lang,company_details_aswter,"a27")}`,
            `${get_lang(company_details_lang,company_details_aswter,"a28")}`,
            "/Alipay?v"
          );
        } else {
          // 初始化
          trade_partner_num = 5;

          // 贸易深度初始化

          $(".swiper-slide .sbox").removeClass("active");
          $(this).children(".sbox").addClass("active");

          index = $(this).children(".sbox").data("num");

          $($(".tab-options")[index])
            .addClass("tab-active")
            .siblings()
            .removeClass("tab-active");

          if (index == 3) {
            get_huoban(c_id, c_type, c_endtime, c_starttime, c_country);
          }
          if (index == 4) {
            get_hs(c_id, c_type, c_endtime, c_starttime, c_country);
          }
          if (index == 2) {
            get_data(c_id, c_type, c_endtime, c_starttime, c_country);
          }
          if (index == 6) {
            get_qy(c_id, c_type, c_endtime, c_starttime, c_country);
          }
          if (index == 7) {
            get_gk(c_id, c_type, c_endtime, c_starttime, c_country);
          }
          if (index == 5) {
            get_cg(c_id, c_type, c_endtime, c_starttime, c_country);
          }

          put_lxfs()
        }
      }
      // 贸易数据vip可查看
      else if ($(this).children(".sbox").data("num") == 2) {
        if (wg.user.vip_level == "") {
          console.log("vipvipvipvipvip")
          buy_vip_toast1(
            `${get_lang(company_details_lang,company_details_aswter,"a26")}`,
            `${get_lang(company_details_lang,company_details_aswter,"a27")}`,
            `${get_lang(company_details_lang,company_details_aswter,"a28")}`,
            "/Alipay?v"
          );
        } else {
          // 初始化
          trade_partner_num = 5;

          // 贸易深度初始化

          $(".swiper-slide .sbox").removeClass("active");
          $(this).children(".sbox").addClass("active");

          index = $(this).children(".sbox").data("num");

          $($(".tab-options")[index])
            .addClass("tab-active")
            .siblings()
            .removeClass("tab-active");

          if (index == 3) {
            get_huoban(c_id, c_type, c_endtime, c_starttime, c_country);
          }
          if (index == 4) {
            get_hs(c_id, c_type, c_endtime, c_starttime, c_country);
          }
          if (index == 2) {
            get_data(c_id, c_type, c_endtime, c_starttime, c_country);
          }
          if (index == 6) {
            get_qy(c_id, c_type, c_endtime, c_starttime, c_country);
          }
          if (index == 7) {
            get_gk(c_id, c_type, c_endtime, c_starttime, c_country);
          }
          if (index == 5) {
            get_cg(c_id, c_type, c_endtime, c_starttime, c_country);
          }
        }
      } else if ($(this).children(".sbox").data("num") !== 1 || $(this).children(".sbox").data("num") !== 2) {
        if (wg.user.vip_level == "" || wg.user.vip_level == "v") {
          console.log("vipvipvipvipvip")
          buy_vip_toast1(
            `${get_lang(company_details_lang,company_details_aswter,"a29")}`,
            `${get_lang(company_details_lang,company_details_aswter,"a29-other")}`,
            `${get_lang(company_details_lang,company_details_aswter,"a28")}`,
            "/Alipay?bd"
          );
        } else {
          // 初始化
          trade_partner_num = 5;

          // 贸易深度初始化

          $(".swiper-slide .sbox").removeClass("active");
          $(this).children(".sbox").addClass("active");

          index = $(this).children(".sbox").data("num");

          $($(".tab-options")[index])
            .addClass("tab-active")
            .siblings()
            .removeClass("tab-active");

          if (index == 3) {
            get_huoban(c_id, c_type, c_endtime, c_starttime, c_country);
          }
          if (index == 4) {
            get_hs(c_id, c_type, c_endtime, c_starttime, c_country);
          }
          if (index == 2) {
            get_data(c_id, c_type, c_endtime, c_starttime, c_country);
          }
          if (index == 6) {
            get_qy(c_id, c_type, c_endtime, c_starttime, c_country);
          }
          if (index == 7) {
            get_gk(c_id, c_type, c_endtime, c_starttime, c_country);
          }
          if (index == 5) {
            get_cg(c_id, c_type, c_endtime, c_starttime, c_country);
          }
        }
      }
    }
  } else {

    console.log("vipvipvipvipvip")
    // 初始化
    trade_partner_num = 5;

    // 贸易深度初始化

    $(".swiper-slide .sbox").removeClass("active");
    $(this).children(".sbox").addClass("active");

    index = $(this).children(".sbox").data("num");

    $($(".tab-options")[index])
      .addClass("tab-active")
      .siblings()
      .removeClass("tab-active");

    if (index == 3) {
      get_huoban(c_id, c_type, c_endtime, c_starttime, c_country);
    }
    if (index == 4) {
      get_hs(c_id, c_type, c_endtime, c_starttime, c_country);
    }
    if (index == 2) {
      get_data(c_id, c_type, c_endtime, c_starttime, c_country);
    }
    if (index == 6) {
      get_qy(c_id, c_type, c_endtime, c_starttime, c_country);
    }
    if (index == 7) {
      get_gk(c_id, c_type, c_endtime, c_starttime, c_country);
    }
    if (index == 5) {
      get_cg(c_id, c_type, c_endtime, c_starttime, c_country);
    }
  }
})

// 趋势分析切换
$(".title>div .trade-option").click(function () {
  trade = $(this).index();
  $(this).addClass("active").siblings().removeClass("active");
  if (trade == 1) {
    get_trade_data(1);
  } else if (trade == 2) {
    get_trade_data(2);
  } else {
    get_trade_data(0);
  }
});

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

var mySwiper1 = new Swiper(".swiper1", {
  // 改可视区域可以显示的轮播框的个数
  loop: false,
  slidesPerView: "auto",
  // 点击自动切到当前页
  slideToClickedSlide: true,
  // 动态侦听
  observer: true,
  observeSlideChildren: true,
  initialSlide: 0
});

// 概述浏览更多跳转
$("#index_more7,#index_more6,#index_more5,#index_more3,#index_more2").click(function () {
  console.log($(this).data('id'))

  let id = $(this).data('id')
  $(".sbox").each((index, item) => {
    if ($(item).data('num') == id) {
      $(item).parent().click()
      // 自动移动到指定的slide
      mySwiper.slideTo(index, 1000, false);
    }
  })
})

// tab2 贸易伙伴---------------------------------------------------------------------------------------------------------------

// 获取贸易伙伴
function get_huoban(id, type, end, start, country) {
  loadding();

  let url = `/company/detail/partner?id=${id}&company_type=${type}&sort=last_trade_date&end_time=${end}&last_trade_date=${start}&country=${country}&sort=default&start=0&scene=${index}`;

  axios.get(url).then((result) => {
    if (result) {
      // 有贸易伙伴数据才渲染对应tab
      console.log(result, "贸易伙伴数据")
      delloadding();
      // 贸易深度不限制条件
      trade_partner_list = result.data.partner.data.list;
      // 数据处理
      data(result.data.partner.data.list).then((res) => {
        if (res) {
          put_data();
        }
      });
    }
  });
}

// 贸易伙伴，导出数据
$(".friend_option").click(function () {
  if ($(this).index() == 0) {
    // 先判断是否是会员，不是先弹提示买会员的弹窗
    // 是会员，提示前往电脑端
    text_toast({
      p1: `${get_lang(company_details_lang,company_details_aswter,"a52")}`,
      p2: `${get_lang(company_details_lang,company_details_aswter,"a52-other")}`
    });
  } else {
    $(".up-box").css({
      display: "block"
    });
  }
});

// 选择贸易深度
$(".up-box .s-box li").click(function () {
  // 初始化
  trade_partner_num = 5;
  $(".up-box").css({
    display: "none"
  });
  $(this).addClass("active").siblings().removeClass("active");
  trade_flag = $(this).data("id");
  // 请求默认
  put_data();
});

// 贸易深度弹窗
$(".up-box").click(function () {
  $(".up-box").css({
    display: "none"
  });
});

// 贸易伙伴初始和上拉渲染数据
function put_data(count) {
  let top_5 = [],
    c_flag;
  if (count) {
    $(".friend-content .box .more").remove();
    if (trade_flag == "s") {
      top_5 = trade_partner_list.slice(count, count + 15);
      c_flag = trade_partner_list.length;
    } else if (trade_flag == "y") {
      top_5 = year_trade_partner_list.slice(count, count + 15);
      c_flag = year_trade_partner_list.length;
    } else if (trade_flag == "p") {
      top_5 = pass_trade_partner_list.slice(count, count + 15);
      c_flag = pass_trade_partner_list.length;
    } else if (trade_flag == "n") {
      top_5 = new_trade_partner_list.slice(count, count + 15);
      c_flag = new_trade_partner_list.length;
    }
  } else {
    if (search_huoban.length !== 0) {
      $(".friend-content .box").remove();
    }
    if (trade_flag == "s") {
      top_5 = trade_partner_list.slice(0, 15);
      c_flag = trade_partner_list.length;
    } else if (trade_flag == "y") {
      top_5 = year_trade_partner_list.slice(0, 15);
      c_flag = year_trade_partner_list.length;
    } else if (trade_flag == "p") {
      top_5 = pass_trade_partner_list.slice(0, 15);
      c_flag = pass_trade_partner_list.length;
    } else if (trade_flag == "n") {
      top_5 = new_trade_partner_list.slice(0, 15);
      c_flag = new_trade_partner_list.length;
    }
  }

  if (trade_partner_list.length == 0) {
    text_toast({
      p1: "提示",
      p2: "暂无数据"
    })
    return
  }

  // 显示当前查询的公司个数
  $(".trade-friend").text(`(${c_flag})`);

  top_5.forEach((item, index) => {
    let $box = $(`<div class="box" data-id="${item.id}">
    <p class="box1" data-id="${item.id}">

    <a href="${item.type==0?`/buyer/${item.id}`:`/supplier/${item.id}`}">
    <span class="friend-name">${item.name}${item.state==1?`<span class="new"><span>${get_lang(company_details_lang,company_details_aswter,"a16")}</span></span>`:""}
    ${item.state==2?`<span class="new1"><span>${get_lang(company_details_lang,company_details_aswter,"a15")}</span></span>`:""}</span>
    </a>

    <span class="hb_img"><img data-id="${item.id}" src='${img_src}mobile/images/company/company_details/right_jiantou.png'/></span>
    </p>

    <p class="gysorcgs"><span>${item.country}</span><span>${
      item.type == 0 ? `${get_lang(company_details_lang,company_details_aswter,"a10")}` : `${get_lang(company_details_lang,company_details_aswter,"a11")}`
      }</span>,${get_lang(company_details_lang,company_details_aswter,"a12")}<span>${item.last_trade_date}</span>${get_lang(company_details_lang,company_details_aswter,"a13")}
    </p>
</div>`);
    if (index >= 14 && index == 14) {
      let $more = $(`<span class="more">${get_lang(company_details_lang,company_details_aswter,"a14")}</span>`);
      $box.append($more);
    }
    $(".friend-content").append($box);
  });
}

// 更多贸易伙伴
$(".friend-content").on("click", ".box .more", function () {
  put_data(trade_partner_num);
  trade_partner_num += 5;
});

// 贸易伙伴数据处理
function data(data) {
  return new Promise((res, rej) => {
    (year_trade_partner_list = []),
    (pass_trade_partner_list = []),
    (new_trade_partner_list = []),
    data.forEach((item, index) => {
      let time = item.last_trade_date;
      let time1 = formatDateTime(new Date());

      if (time1 < time) {
        // 近一年有过交易
        year_trade_partner_list.push(item);
      }
      // 错失的公司 state=0，1 2 所有 新增 流失
      if (item.state == 1) {
        new_trade_partner_list.push(item);
      } else if (item.state == 2) {
        pass_trade_partner_list.push(item);
      }
    });
    res(true);
  });
}

// 日期格式化
var formatDateTime = function (date) {
  var y = date.getFullYear() - 1;
  var m = date.getMonth() + 1;
  m = m < 10 ? "0" + m : m;
  var d = date.getDate();
  d = d < 10 ? "0" + d : d;
  return y + "-" + m + "-" + d;
};

// 贸易伙伴关键字搜索input
$(".friend-content .search-btn").click(function () {
  let search_key = $(".friend-content input").val()
  console.log(search_key, "---")
  if (search_key == "") {
    text_toast({
      p1: `${get_lang(company_details_lang,company_details_aswter,"a46")}`,
      p2: `${get_lang(company_details_lang,company_details_aswter,"a47")}`,
    });
  } else {
    key_search_huoban(search_key);
  }
});

// 贸易伙伴关键字搜索
function key_search_huoban(key) {
  search_huoban = [];
  trade_partner_list.forEach((item) => {
    if (item.country !== null && item.name !== null) {
      if (item.country.includes(key) || item.name.includes(key)) {
        search_huoban.push(item);
      }
    }
  });

  trade_partner_list = search_huoban;
  console.log(trade_partner_list, "12121212121")

  data(search_huoban).then((res) => {
    if (res) {
      put_data();
    }
  });
}

// tab3 hs编码----------------------------------------------------------------------------------------------------------------------
// 交易切换
// 默认交易次数
let hs_trade = 0;

//轮播切换
let hs_index = 0;

// 贸易伙伴tab
// 贸易伙伴数据
let trade_hs_list = [];

// 查询贸易伙伴次数
let trade_hs_num = 5;

// 贸易深度
let trade_hs_flag = "s";
let year_trade_hs_list = [], //近一年有交易
  pass_trade_hs_list = [], //错失
  new_trade_hs_list = [], //新增
  search_hs = []; //搜索数据

function get_hs(id, type, end, start, country) {
  loadding();

  url = `/company/detail/hs?id=${id}&company_type=${type}&sort=last_trade_date&end_time=${end}&last_trade_date=${start}&country=${country}&sort=default&start=0&scene=${index}`;

  axios.get(url).then((result) => {
    console.log(result, "22222222222222");
    if (result) {
      console.log(result.data.hs.data.list, "默认的整体数据");
      delloadding();
      // 贸易深度不限制条件
      trade_hs_list = result.data.hs.data.list;
      // 数据处理
      hs_data(result.data.hs.data.list).then((res) => {
        if (res) {
          put_hs();
        }
      });
    }
  });
}

// 贸易伙伴，导出数据
$(".hs_option").click(function () {
  if ($(this).index() == 0) {
    // 先判断是否是会员，不是先弹提示买会员的弹窗
    // 是会员，提示前往电脑端
    // text_toast({ p1: "如需导出名录", p2: "请前往电脑端进行操作" });
    text_toast({
      p1: `${get_lang(company_details_lang,company_details_aswter,"a52")}`,
      p2: `${get_lang(company_details_lang,company_details_aswter,"a52-other")}`
    });
  } else {
    $(".hs-up-box").css({
      display: "block"
    });
  }
});

// 选择贸易深度
$(".hs-up-box .hs-s-box li").click(function () {
  // 初始化
  trade_hs_num = 5;
  $(".hs-up-box").css({
    display: "none"
  });
  $(this).addClass("active").siblings().removeClass("active");
  trade_hs_flag = $(this).data("id");
  // 请求默认
  put_hs();
});

// 贸易深度弹窗
$(".hs-up-box").click(function () {
  $(".hs-up-box").css({
    display: "none"
  });
});

// 贸易伙伴初始和上拉渲染数据
function put_hs(count) {
  let top_5 = [],
    // 每种查询选项下的条数
    c_flag;
  if (count) {
    $(".hs-content .box .more").remove();

    if (trade_hs_flag == "s") {
      top_5 = trade_hs_list.slice(count, count + 15);
      c_flag = trade_hs_list.length;
    } else if (trade_hs_flag == "y") {
      top_5 = year_trade_hs_list.slice(count, count + 15);
      c_flag = year_trade_hs_list.length;
    } else if (trade_hs_flag == "p") {
      top_5 = pass_trade_hs_list.slice(count, count + 15);
      c_flag = pass_trade_hs_list.length;
    } else if (trade_hs_flag == "n") {
      top_5 = new_trade_hs_list.slice(count, count + 15);
      c_flag = new_trade_hs_list.length;
    }
  } else {

    if (trade_hs_flag == "s") {
      top_5 = trade_hs_list.slice(0, 15);
      c_flag = trade_hs_list.length;
    } else if (trade_hs_flag == "y") {
      top_5 = year_trade_hs_list.slice(0, 15);
      c_flag = year_trade_hs_list.length;
    } else if (trade_hs_flag == "p") {
      top_5 = pass_trade_hs_list.slice(0, 15);
      c_flag = pass_trade_hs_list.length;
    } else if (trade_hs_flag == "n") {
      top_5 = new_trade_hs_list.slice(0, 15);
      c_flag = new_trade_hs_list.length;
    }

    if (c_flag == 0) {
      text_toast({
        p1: "提示",
        p2: "暂无数据"
      })
      return
    } else {
      $(".hs-content .box").remove();
    }
  }

  console.log("789789789789789")
  // 显示当前查询的公司个数
  $(".trade-hs").text(`(${c_flag})`);

  top_5.forEach((item, index) => {
    let $box = $(`<div class="box" data-id="${item.hs}">
    <p class="box1" data-id="${item.hs}"><span class="d_name"><span class='text'>${item.hs}</span>${item.state==1?`<span class="new"><span>${get_lang(company_details_lang,company_details_aswter,"a16")}</span></span>`:""}${item.state==2?`<span class="new1"><span>${get_lang(company_details_lang,company_details_aswter,"a15")}</span></span>`:""}</span><span class="xq count">${item.bill_count}</span><span><img data-id="${item.hs}" src="${img_src}mobile/images/company/company_details/right_jiantou.png"/></span></p>
    </div>`);
    if (index >= 4 && index == top_5.length - 1) {
      let $more = $(`<span class="more">${get_lang(company_details_lang,company_details_aswter,"a14")}</span>`);
      $box.append($more);
    }
    $(".hs-content").append($box);
  });
}

// 更多贸易港口
$(".hs-content").on("click", ".box .more", function () {
  put_hs(trade_hs_num);
  trade_hs_num += 5;
});

// 贸易伙伴数据处理
function hs_data(data) {
  return new Promise((res, rej) => {
    (year_trade_hs_list = []),
    (pass_trade_hs_list = []),
    (new_trade_hs_list = []),
    data.forEach((item, index) => {
      let time = item.last_trade_date;
      let time1 = formatDateTime(new Date());
      if (time1 < time) {
        // 近一年有过交易
        year_trade_hs_list.push(item);
      }
      // 错失的公司 state=0，1 2 所有 新增 流失
      if (item.state == 1) {
        new_trade_hs_list.push(item);
      } else if (item.state == 2) {
        pass_trade_hs_list.push(item);
      }
    });
    console.log(year_trade_hs_list, pass_trade_hs_list, new_trade_hs_list);
    res(true);
  });
}

// 日期格式化
var formatDateTime = function (date) {
  var y = date.getFullYear() - 1;
  var m = date.getMonth() + 1;
  m = m < 10 ? "0" + m : m;
  var d = date.getDate();
  d = d < 10 ? "0" + d : d;
  return y + "-" + m + "-" + d;
};

// 贸易港口关键字搜索input
$(".hs-content input").click(function () {

});

// 贸易伙伴input回车侦听
$(".search-page input").on("keypress", function (e) {
  if (e.keyCode == "13" && index == 4) {
    //按下回车
    e.preventDefault();
    console.log(e.target.value);
    if (e.target.value !== "") {
      key_search_hs(e.target.value);
      $(".search-page").css("display", "none");
      $(".search-page input").val("");
    } else {
      text_toast({
        p1: `${get_lang(company_details_lang,company_details_aswter,"a46")}`,
        p2: `${get_lang(company_details_lang,company_details_aswter,"a47")}`,
      });
    }
  }
});

// 取消search弹窗
$(".search-page span").click(() => {
  $(".search-page").css("display", "none");
});

// 贸易伙伴关键字搜索
function key_search_hs(key) {
  search_hs = [];
  trade_hs_list.forEach((item) => {
    if (item.country !== null && item.hs !== null) {
      if (item.hs.includes(key)) {
        search_hs.push(item);
      }
    }
  });
  console.log(search_hs, "关键字搜索");
  trade_hs_list = search_hs;
  console.log(trade_hs_list, "关键字搜索后的整体数据");
  hs_data(search_hs).then((res) => {
    if (res) {
      put_hs();
    }
  });
}

// tab4 贸易数据----------------------------------------------------------------------------------------------------------------
// 贸易数据不能一次全部获取，必须依次请求


let c_flag = 5;
let year_data_list = [];
// 贸易数据总条数
let data_sum = 0;

// 搜索结果数组
let search_data;


// 获取贸易数据  贸易数据只能分页拿到，不能一次拿到全部
function get_data(id, type, end, start, country, flag) {
  let a = flag;
  loadding();

  url = `/company/detail/trade?id=${id}&company_type=${type}&start_time=${
    year_options.key == "**" ? year_options.key : year_options.key + "-01-01"
  }&end_time=${
    year_options.key == "**" ? end : year_options.key + "-12-31"
  }&last_trade_date=${end}&country=${country}&start=${cs_num}&size=${trade_data_num}&scene=3&sort=default&key=*&product=*&tag_id=0&reftoken=${$(".ws-table").data("reftoken")}`;

  axios.get(url).then((result) => {
    console.log(result, "贸易数据")
    if (result) {
      delloadding();
      // 贸易深度不限制条件
      trade_partner_list = result.data.trade.data.list;
      // 设置当前搜索下的条数
      $(".data-data").text(`(${result.data.trade.data.hits})`);

      // if (year_options.num == 0) {
      //   year_data_list = result.data.year.list;
      // }

      // 数据渲染
      if (a) {
        put_data_data(a);
      } else {
        put_data_data();
      }
    }
  });
}

// 贸易数据的点击加载更多
$(".data-content").on("click", ".box .more", function () {
  $(this).remove();
  // 查询参数
  let c_id = $(".ws-table").data("id");
  let c_type = $(".ws-table").data("companytype");
  let c_endtime = $(".ws-table").data("endtime");
  let c_starttime = $(".ws-table").data("starttime");
  let c_country = $(".ws-table").data("country");
  c_country.replaceAll(" ", "%20");

  cs_num += 5;
  c_flag += 5;

  get_data(c_id, c_type, c_endtime, c_starttime, c_country, true);
});

// 贸易数据初始和上拉渲染数据
function put_data_data(flag) {
  if (!flag) {
    $(".data-content .box").remove();
  }

  console.log(trade_partner_list, "pppppp")
  // 显示当前查询的公司个数
  trade_partner_list.forEach((item, index) => {
    console.log(item, "贸易数据")
    let $box = $(`<div class="box" data-id="${item.buyer_id_std}">
    <p class="box1" data-id="${item.buyer_id_std}" data-sid="${item.id}"><span class="name"><span class='text'>${item.date}</span>${item.state==1?`<span class="new"><span>${get_lang(company_details_lang,company_details_aswter,"a16")}</span></span>`:""}${item.state==2?`<span class="new1"><span>${get_lang(company_details_lang,company_details_aswter,"a15")}</span></span>`:""}</span><span class="xq">${item.descript==null?"---":item.descript}</span><span><img data-id="${item.id}" src="${img_src}mobile/images/company/company_details/right_jiantou.png"/></span></p>
</div>`);
    if (index >= 4 && index == trade_partner_list.length - 1) {
      let $more = $(`<span class="more">${get_lang(company_details_lang,company_details_aswter,"a14")}</span>`);
      $box.append($more);
    }
    $(".data-content").append($box);
  });
}

// 贸易数据，导出数据
$(".data_option").click(function () {
  if ($(this).index() == 0) {
    // 先判断是否是会员，不是先弹提示买会员的弹窗
    // 是会员，提示前往电脑端
    // text_toast({ p1: "如需导出名录", p2: "请前往电脑端进行操作" });
    text_toast({
      p1: `${get_lang(company_details_lang,company_details_aswter,"a52")}`,
      p2: `${get_lang(company_details_lang,company_details_aswter,"a52-other")}`
    });
  } else {
    $(".data-up-box").css({
      display: "block"
    });
    $(".data-up-box .data-s-box li").remove();
    let $box;
    year_data_list.forEach((item, idx) => {
      $box = $(
        `<li data-year=${item.key_as_string}>${item.key_as_string}</li>`
      );

      $(".data-up-box .data-s-box").append($box);
    });
    $box = $(`<li data-year="**">所有年份</li>`);
    $(".data-up-box .data-s-box").prepend($box);
    $(".data-up-box .data-s-box")
      .children()
      .eq(year_options.num)
      .addClass("active");
  }
});

// 选择贸易深度
$(".data-up-box ").on("click", ".data-s-box li", function () {
  $(this).addClass("active").siblings().removeClass("active");
  // 状态保持
  year_options.num = $(this).index();
  year_options.key = $(this).data("year");
  // 初始化
  $(".data-up-box").css({
    display: "none"
  });
  cs_num = 0;
  c_flag = 5;
  // 请求数据
  // 查询参数
  let c_id = $(".ws-table").data("id");
  let c_type = $(".ws-table").data("companytype");
  let c_endtime = $(".ws-table").data("endtime");
  let c_starttime = $(".ws-table").data("starttime");
  let c_country = $(".ws-table").data("country");
  c_country.replaceAll(" ", "%20");
  get_data(c_id, c_type, c_endtime, c_starttime, c_country);
  // put_data();
});

// 关闭贸易深度弹窗
$(".data-up-box").click(function () {
  $(".data-up-box").css({
    display: "none"
  });
});

// 贸易伙伴关键字搜索input
$(".data-content input").click(function () {

});

// 贸易伙伴input回车侦听
$(".search-page input").on("keypress", function (e) {
  if (e.keyCode == "13" && index == 2) {
    //按下回车
    e.preventDefault();
    console.log(e.target.value, "搜索关键字");
    if (e.target.value !== "") {
      data_search_key = e.target.value;

      // 查询参数
      let c_id = $(".ws-table").data("id");
      let c_type = $(".ws-table").data("companytype");
      let c_endtime = $(".ws-table").data("endtime");
      let c_starttime = $(".ws-table").data("starttime");
      let c_country = $(".ws-table").data("country");
      c_country.replaceAll(" ", "%20");

      key_search_data(c_id, c_type, c_endtime, c_starttime, c_country);
      $(".search-page").css("display", "none");
      $(".search-page input").val("");
    } else {
      text_toast({
        p1: `${get_lang(company_details_lang,company_details_aswter,"a46")}`,
        p2: `${get_lang(company_details_lang,company_details_aswter,"a47")}`,
      });
    }
  }
});

// 取消search弹窗
$(".search-page span").click(() => {
  $(".search-page").css("display", "none");
});

// 关键字搜索只需要关注深度类型和关键字值
function key_search_data(id, type, end, start, country, flag) {
  // 搜索结果数组
  search_data = [];
  let a = flag;
  loadding();

  url = `/company/detail/trade?id=${id}&company_type=${type}&start_time=&end_time=${end}&last_trade_date=${end}&country=${country}&start=0&size=${trade_data_num}&scene=4&sort=default&key=${data_search_key}`;

  axios.get(url).then((result) => {
    if (result) {
      console.log(result, "查询搜索结果");
      delloadding();
      // 贸易深度不限制条件
      trade_partner_list = result.data.trade.data.list;
      // 设置当前搜索下的条数
      $(".data-data").text(`(${result.data.trade.data.hits})`);

      if (year_options.num == 0) {
        year_data_list = result.data.year.list;
      }

      // 数据渲染
      if (a) {
        put_data_data(a);
      } else {
        put_data_data();
      }
    }
  });
}

// tab5 贸易数据-----------------------------------------------------------------------------------------------------------
// 交易切换
// 默认交易次数
let qy_trade = 0;

//轮播切换
let qy_index = 0;

// 贸易伙伴tab
// 贸易伙伴数据
let trade_qy_list = [];

// 查询贸易伙伴次数
let trade_qy_num = 5;

// 贸易深度
let trade_qy_flag = "s";
let year_trade_qy_list = [], //近一年有交易
  pass_trade_qy_list = [], //错失
  new_trade_qy_list = [], //新增
  search_qy = []; //搜索数据

function get_qy(id, type, end, start, country) {
  loadding();

  url = `/company/detail/trade-country?id=${id}&company_type=${type}&sort=last_trade_date&end_time=${end}&last_trade_date=${start}&country=${country}&sort=default&start=0&scene=2`;

  axios.get(url).then((result) => {
    console.log(result, "22222222222222");
    if (result) {
      console.log(result.data.country.data.list, "默认的整体数据");
      delloadding();
      // 贸易深度不限制条件
      trade_qy_list = result.data.country.data.list;
      // 数据处理
      qy_data(result.data.country.data.list).then((res) => {
        if (res) {
          put_qy();
        }
      });
    }
  });
}

// 贸易伙伴，导出数据
$(".qy_option").click(function () {
  if ($(this).index() == 0) {
    // 先判断是否是会员，不是先弹提示买会员的弹窗
    // 是会员，提示前往电脑端
    // text_toast({ p1: "如需导出名录", p2: "请前往电脑端进行操作" });
    text_toast({
      p1: `${get_lang(company_details_lang,company_details_aswter,"a52")}`,
      p2: `${get_lang(company_details_lang,company_details_aswter,"a52-other")}`
    });
  } else {
    $(".qy-up-box").css({
      display: "block"
    });
  }
});

// 选择贸易深度
$(".qy-up-box .qy-s-box li").click(function () {
  // 初始化
  trade_qy_num = 5;
  $(".qy-up-box").css({
    display: "none"
  });
  $(this).addClass("active").siblings().removeClass("active");
  trade_qy_flag = $(this).data("id");
  // 请求默认
  put_qy();
});

// 贸易深度弹窗
$(".qy-up-box").click(function () {
  $(".qy-up-box").css({
    display: "none"
  });
});

// 贸易伙伴初始和上拉渲染数据
function put_qy(count) {
  let top_5 = [],
    // 每种查询选项下的条数
    c_flag;
  if (count) {
    $(".qy-content .box .more").remove();

    if (trade_qy_flag == "s") {
      top_5 = trade_qy_list.slice(count, count + 15);
      c_flag = trade_qy_list.length;
    } else if (trade_qy_flag == "y") {
      top_5 = year_trade_qy_list.slice(count, count + 15);
      c_flag = year_trade_qy_list.length;
    } else if (trade_qy_flag == "p") {
      top_5 = pass_trade_qy_list.slice(count, count + 15);
      c_flag = pass_trade_qy_list.length;
    } else if (trade_qy_flag == "n") {
      top_5 = new_trade_qy_list.slice(count, count + 15);
      c_flag = new_trade_qy_list.length;
    }
  } else {
    $(".qy-content .box").remove();
    if (trade_qy_flag == "s") {
      top_5 = trade_qy_list.slice(0, 15);
      c_flag = trade_qy_list.length;
    } else if (trade_qy_flag == "y") {
      top_5 = year_trade_qy_list.slice(0, 15);
      c_flag = year_trade_qy_list.length;
    } else if (trade_qy_flag == "p") {
      top_5 = pass_trade_qy_list.slice(0, 15);
      c_flag = pass_trade_qy_list.length;
    } else if (trade_qy_flag == "n") {
      top_5 = new_trade_qy_list.slice(0, 15);
      c_flag = new_trade_qy_list.length;
    }
  }

  if (c_flag == 0) {
    text_toast({
      p1: "提示",
      p2: "暂无数据"
    })
    return
  }

  // 显示当前查询的公司个数
  $(".trade-qy").text(`(${c_flag})`);

  top_5.forEach((item, index) => {
    let $box = $(`<div class="box" data-id="${item.country}">
    <p class="box1" data-id="${item.country}"><span class="d_name"><span class='text'>${item.country}</span>${item.state==1?`<span class="new"><span>${get_lang(company_details_lang,company_details_aswter,"a16")}</span></span>`:""}${item.state==2?`<span class="new1"><span>${get_lang(company_details_lang,company_details_aswter,"a15")}</span></span>`:""}</span><span class="xq count">${item.bill_count}</span><span><img data-id="${item.country}" src="${img_src}mobile/images/company/company_details/right_jiantou.png"/></span></p>
    </div>`);
    if (index >= 4 && index == top_5.length - 1) {
      let $more = $(`<span class="more">${get_lang(company_details_lang,company_details_aswter,"a14")}</span>`);
      $box.append($more);
    }
    $(".qy-content").append($box);
  });
}

// 更多贸易港口
$(".qy-content").on("click", ".box .more", function () {
  put_qy(trade_qy_num);
  trade_qy_num += 5;
});

// 贸易伙伴数据处理
function qy_data(data) {
  return new Promise((res, rej) => {
    (year_trade_qy_list = []),
    (pass_trade_qy_list = []),
    (new_trade_qy_list = []),
    data.forEach((item, index) => {
      let time = item.last_trade_date;
      let time1 = formatDateTime(new Date());
      if (time1 < time) {
        // 近一年有过交易
        year_trade_qy_list.push(item);
      }
      // 错失的公司 state=0，1 2 所有 新增 流失
      if (item.state == 1) {
        new_trade_qy_list.push(item);
      } else if (item.state == 2) {
        pass_trade_qy_list.push(item);
      }
    });
    console.log(year_trade_qy_list, pass_trade_qy_list, new_trade_qy_list);
    res(true);
  });
}

// 日期格式化
var formatDateTime = function (date) {
  var y = date.getFullYear() - 1;
  var m = date.getMonth() + 1;
  m = m < 10 ? "0" + m : m;
  var d = date.getDate();
  d = d < 10 ? "0" + d : d;
  return y + "-" + m + "-" + d;
};

// 贸易港口关键字搜索input
$(".qy-content input").click(function () {

});

// 贸易伙伴input回车侦听
$(".search-page input").on("keypress", function (e) {
  if (e.keyCode == "13" && index == 6) {
    //按下回车
    e.preventDefault();
    console.log(e.target.value);
    if (e.target.value !== "") {
      key_search_qy(e.target.value);
      $(".search-page").css("display", "none");
      $(".search-page input").val("");
    } else {
      text_toast({
        p1: `${get_lang(company_details_lang,company_details_aswter,"a46")}`,
        p2: `${get_lang(company_details_lang,company_details_aswter,"a47")}`,
      });
    }
  }
});

// 取消search弹窗
$(".search-page span").click(() => {
  $(".search-page").css("display", "none");
});

// 贸易伙伴关键字搜索
function key_search_qy(key) {
  search_qy = [];
  trade_qy_list.forEach((item) => {
    if (item.country !== null) {
      if (item.country.includes(key)) {
        search_qy.push(item);
      }
    }
  });
  console.log(search_qy, "关键字搜索");
  trade_qy_list = search_qy;
  console.log(trade_qy_list, "关键字搜索后的整体数据");
  qy_data(search_qy).then((res) => {
    if (res) {
      put_qy();
    }
  });
}

// tab6 贸易港口-------------------------------------------------------------------------------------------------
// 获取贸易伙伴

// 交易切换
// 默认交易次数
let gk_trade = 0;

//轮播切换
let gk_index = 0;

// 贸易伙伴tab
// 贸易伙伴数据
let trade_gk_list = [];

// 查询贸易伙伴次数
let trade_gk_num = 5;

// 贸易深度
let trade_gk_flag = "s";
let year_trade_gk_list = [], //近一年有交易
  pass_trade_gk_list = [], //错失
  new_trade_gk_list = [], //新增
  search_gk = []; //搜索数据

function get_gk(id, type, end, start, country) {
  loadding();

  url = `/company/detail/port?id=${id}&company_type=${type}&sort=last_trade_date&end_time=${end}&last_trade_date=${start}&country=${country}&sort=default&start=0&scene=${index}`;

  axios.get(url).then((result) => {
    console.log(result, "22222222222222");
    if (result) {
      console.log(result.data.port.data.list, "默认的整体数据");
      delloadding();
      // 贸易深度不限制条件
      trade_gk_list = result.data.port.data.list;
      // 数据处理
      gk_data(result.data.port.data.list).then((res) => {
        if (res) {
          put_gk();
        }
      });
    }
  });
}

// 贸易伙伴，导出数据
$(".gk_option").click(function () {
  if ($(this).index() == 0) {
    // 先判断是否是会员，不是先弹提示买会员的弹窗
    // 是会员，提示前往电脑端
    // text_toast({ p1: "如需导出名录", p2: "请前往电脑端进行操作" });
    text_toast({
      p1: `${get_lang(company_details_lang,company_details_aswter,"a52")}`,
      p2: `${get_lang(company_details_lang,company_details_aswter,"a52-other")}`
    });
  } else {
    $(".gk-up-box").css({
      display: "block"
    });
  }
});

// 选择贸易深度
$(".gk-up-box .gk-s-box li").click(function () {
  // 初始化
  trade_gk_num = 5;
  $(".gk-up-box").css({
    display: "none"
  });
  $(this).addClass("active").siblings().removeClass("active");
  trade_gk_flag = $(this).data("id");
  // 请求默认
  put_gk();
});

// 贸易深度弹窗
$(".gk-up-box").click(function () {
  $(".gk-up-box").css({
    display: "none"
  });
});

// 贸易伙伴初始和上拉渲染数据
function put_gk(count) {
  let top_5 = [],
    // 每种查询选项下的条数
    c_flag;
  if (count) {
    $(".gk-content .box .more").remove();

    if (trade_gk_flag == "s") {
      top_5 = trade_gk_list.slice(count, count + 15);
      c_flag = trade_gk_list.length;
    } else if (trade_gk_flag == "y") {
      top_5 = year_trade_gk_list.slice(count, count + 15);
      c_flag = year_trade_gk_list.length;
    } else if (trade_gk_flag == "p") {
      top_5 = pass_trade_gk_list.slice(count, count + 15);
      c_flag = pass_trade_gk_list.length;
    } else if (trade_gk_flag == "n") {
      top_5 = new_trade_gk_list.slice(count, count + 15);
      c_flag = new_trade_gk_list.length;
    }
  } else {
    $(".gk-content .box").remove();
    if (trade_gk_flag == "s") {
      top_5 = trade_gk_list.slice(0, 15);
      c_flag = trade_gk_list.length;
    } else if (trade_gk_flag == "y") {
      top_5 = year_trade_gk_list.slice(0, 15);
      c_flag = year_trade_gk_list.length;
    } else if (trade_gk_flag == "p") {
      top_5 = pass_trade_gk_list.slice(0, 15);
      c_flag = pass_trade_gk_list.length;
    } else if (trade_gk_flag == "n") {
      top_5 = new_trade_gk_list.slice(0, 15);
      c_flag = new_trade_gk_list.length;
    }
  }

  if (c_flag == 0) {
    text_toast({
      p1: "提示",
      p2: "暂无数据"
    })
    return
  }

  // 显示当前查询的公司个数
  $(".trade-gk").text(`(${c_flag})`);

  top_5.forEach((item, index) => {
    let $box = $(`<div class="box" data-id="${item.id}">
    <p class="box1" data-id="${item.id}"><span class="d_name"><span class='text'>${item.port}</span>${item.state==1?`<span class="new"><span>${get_lang(company_details_lang,company_details_aswter,"a16")}</span></span>`:""}${item.state==2?`<span class="new1"><span>${get_lang(company_details_lang,company_details_aswter,"a15")}</span></span>`:""}</span><span class="xq count">${item.bill_count}</span><span><img data-id="${item.port}" src="${img_src}mobile/images/company/company_details/right_jiantou.png"/></span></p>
    </div>`);
    if (index >= 4 && index == top_5.length - 1) {
      let $more = $(`<span class="more">${get_lang(company_details_lang,company_details_aswter,"a14")}</span>`);
      $box.append($more);
    }
    $(".gk-content").append($box);
  });
}

// 更多贸易港口
$(".gk-content").on("click", ".box .more", function () {
  put_gk(trade_gk_num);
  trade_gk_num += 5;
});

// 贸易伙伴数据处理
function gk_data(data) {
  return new Promise((res, rej) => {
    (year_trade_gk_list = []),
    (pass_trade_gk_list = []),
    (new_trade_gk_list = []),
    data.forEach((item, index) => {
      let time = item.last_trade_date;
      let time1 = formatDateTime(new Date());
      if (time1 < time) {
        // 近一年有过交易
        year_trade_gk_list.push(item);
      }
      // 错失的公司 state=0，1 2 所有 新增 流失
      if (item.state == 1) {
        new_trade_gk_list.push(item);
      } else if (item.state == 2) {
        pass_trade_gk_list.push(item);
      }
    });
    console.log(year_trade_gk_list, pass_trade_gk_list, new_trade_gk_list);
    res(true);
  });
}

// 日期格式化
var formatDateTime = function (date) {
  var y = date.getFullYear() - 1;
  var m = date.getMonth() + 1;
  m = m < 10 ? "0" + m : m;
  var d = date.getDate();
  d = d < 10 ? "0" + d : d;
  return y + "-" + m + "-" + d;
};

// 贸易港口关键字搜索input
$(".gk-content input").click(function () {

});

// 贸易伙伴input回车侦听
$(".search-page input").on("keypress", function (e) {
  if (e.keyCode == "13" && index == 7) {
    //按下回车
    e.preventDefault();
    console.log(e.target.value);
    if (e.target.value !== "") {
      key_search_gk(e.target.value);
      $(".search-page").css("display", "none");
      $(".search-page input").val("");
    } else {
      text_toast({
        p1: `${get_lang(company_details_lang,company_details_aswter,"a46")}`,
        p2: `${get_lang(company_details_lang,company_details_aswter,"a47")}`,
      });
    }
  }
});

// 取消search弹窗
$(".search-page span").click(() => {
  $(".search-page").css("display", "none");
});

// 贸易伙伴关键字搜索
function key_search_gk(key) {
  search_gk = [];
  trade_gk_list.forEach((item) => {
    if (item.country !== null && item.port !== null) {
      if (item.port.includes(key)) {
        search_gk.push(item);
      }
    }
  });
  console.log(search_gk, "关键字搜索");
  trade_gk_list = search_gk;
  console.log(trade_gk_list, "关键字搜索后的整体数据");
  gk_data(search_gk).then((res) => {
    if (res) {
      put_gk();
    }
  });
}

// tab7 采供区域-------------------------------------------------------------------------------------------------
// 获取贸易伙伴

// 交易切换
// 默认交易次数
let cg_trade = 0;

//轮播切换
let cg_index = 0;

// 贸易伙伴tab
// 贸易伙伴数据
let trade_cg_list = [];

// 查询贸易伙伴次数
let trade_cg_num = 15;

// 贸易深度
let trade_cg_flag = "s";
let year_trade_cg_list = [], //近一年有交易
  pass_trade_cg_list = [], //错失
  new_trade_cg_list = [], //新增
  search_cg = []; //搜索数据

function get_cg(id, type, end, start, country) {
  loadding();

  url = `/async/detail/product-list?id=${id}&company_type=${type}&sort=default&start_time=**&end_time=${end}&last_trade_date=${start}&country=${country}&sort=default&start=0&size=15&scene=2&product=*&top_count=0`;
  // url="/async/detail/product-list?id=25351644&company_type=0&end_time=2022-11-01&last_trade_date=2022-11-01&country=United%20States&key=*&product=*&sort=default&start_time=**&seo_flag=0&is_page=true&start=0&size=5&tag_id=0&reftoken=&top_count=0&scene=2"

  axios.get(url).then((result) => {
    console.log(result, "22222222222222");
    if (result) {
      console.log(result.data.product.data.list, "默认的整体数据");
      delloadding();
      // 贸易深度不限制条件
      trade_cg_list = result.data.product.data.list;
      // 数据处理
      cg_data(result.data.product.data.list).then((res) => {
        if (res) {
          put_cg();
        }
      });
    }
  });
}

// 贸易伙伴，导出数据
$(".cg_option").click(function () {
  if ($(this).index() == 0) {
    // 先判断是否是会员，不是先弹提示买会员的弹窗
    // 是会员，提示前往电脑端
    text_toast({
      p1: `${get_lang(company_details_lang,company_details_aswter,"a52")}`,
      p2: `${get_lang(company_details_lang,company_details_aswter,"a52-other")}`
    });
  } else {
    $(".cg-up-box").css({
      display: "block"
    });
  }
});

// 选择贸易深度
$(".cg-up-box .cg-s-box li").click(function () {
  // 初始化
  trade_cg_num = 5;
  $(".cg-up-box").css({
    display: "none"
  });
  $(this).addClass("active").siblings().removeClass("active");
  trade_cg_flag = $(this).data("id");
  // 请求默认
  put_cg();
});

// 贸易深度弹窗
$(".cg-up-box").click(function () {
  $(".cg-up-box").css({
    display: "none"
  });
});

// 贸易伙伴初始和上拉渲染数据
function put_cg(count) {
  let top_5 = [],
    // 每种查询选项下的条数
    c_flag;
  if (count) {
    $(".cg-content .box .more").remove();

    if (trade_cg_flag == "s") {
      top_5 = trade_cg_list.slice(count, count + 15);
      c_flag = trade_cg_list.length;
    } else if (trade_cg_flag == "y") {
      top_5 = year_trade_cg_list.slice(count, count + 15);
      c_flag = year_trade_cg_list.length;
    } else if (trade_cg_flag == "p") {
      top_5 = pass_trade_cg_list.slice(count, count + 15);
      c_flag = pass_trade_cg_list.length;
    } else if (trade_cg_flag == "n") {
      top_5 = new_trade_cg_list.slice(count, count + 15);
      c_flag = new_trade_cg_list.length;
    }
  } else {
    $(".cg-content .box").remove();
    if (trade_cg_flag == "s") {
      top_5 = trade_cg_list.slice(0, 15);
      c_flag = trade_cg_list.length;
    } else if (trade_cg_flag == "y") {
      top_5 = year_trade_cg_list.slice(0, 15);
      c_flag = year_trade_cg_list.length;
    } else if (trade_cg_flag == "p") {
      top_5 = pass_trade_cg_list.slice(0, 15);
      c_flag = pass_trade_cg_list.length;
    } else if (trade_cg_flag == "n") {
      top_5 = new_trade_cg_list.slice(0, 15);
      c_flag = new_trade_cg_list.length;
    }
  }

  if (c_flag == 0) {
    text_toast({
      p1: "提示",
      p2: "暂无数据"
    })
    return
  }

  // 显示当前查询的公司个数
  $(".trade-cg").text(`(${c_flag})`);

  top_5.forEach((item, index) => {
    let $box = $(`<div class="box" data-id="${item.value}">
    <p class="box1" data-id="${item.value}"><span class="d_name"><span class='text'>${item.value}</span>${item.state==1?`<span class="new"><span>${get_lang(company_details_lang,company_details_aswter,"a16")}</span></span>`:""}${item.state==2?`<span class="new1"><span>${get_lang(company_details_lang,company_details_aswter,"a15")}</span></span>`:""}</span><span class="xq count">${item.count}</span><span><img data-id="${item.value}" src="${img_src}mobile/images/company/company_details/right_jiantou.png"/></span></p>
    </div>`);
    if (index >= 4 && index >= 4 && index == top_5.length - 1) {
      let $more = $(`<span class="more">${get_lang(company_details_lang,company_details_aswter,"a14")}</span>`);
      $box.append($more);
    }
    $(".cg-content").append($box);
  });
}

// 更多贸易港口
$(".cg-content").on("click", ".box .more", function () {
  put_cg(trade_cg_num);
  trade_cg_num += 15;
});

// 贸易伙伴数据处理
function cg_data(data) {
  return new Promise((res, rej) => {
    (year_trade_cg_list = []),
    (pass_trade_cg_list = []),
    (new_trade_cg_list = []),
    data.forEach((item, index) => {
      let time = item.last_trade_date;
      let time1 = formatDateTime(new Date());
      if (time1 < time) {
        // 近一年有过交易
        year_trade_cg_list.push(item);
      }
      // 错失的公司 state=0，1 2 所有 新增 流失
      if (item.state == 1) {
        new_trade_cg_list.push(item);
      } else if (item.state == 2) {
        pass_trade_cg_list.push(item);
      }
    });
    console.log(year_trade_cg_list, pass_trade_cg_list, new_trade_cg_list);
    res(true);
  });
}

// 日期格式化
var formatDateTime = function (date) {
  var y = date.getFullYear() - 1;
  var m = date.getMonth() + 1;
  m = m < 10 ? "0" + m : m;
  var d = date.getDate();
  d = d < 10 ? "0" + d : d;
  return y + "-" + m + "-" + d;
};

// 贸易港口关键字搜索input
$(".cg-content input").click(function () {

});

// 贸易伙伴input回车侦听
$(".search-page input").on("keypress", function (e) {
  if (e.keyCode == "13" && index == 5) {
    //按下回车
    e.preventDefault();
    console.log(e.target.value);
    if (e.target.value !== "") {
      key_search_cg(e.target.value);
      $(".search-page").css("display", "none");
      $(".search-page input").val("");
    } else {
      text_toast({
        p1: `${get_lang(company_details_lang,company_details_aswter,"a46")}`,
        p2: `${get_lang(company_details_lang,company_details_aswter,"a47")}`,
      });
    }
  }
});

// 取消search弹窗
$(".search-page span").click(() => {
  $(".search-page").css("display", "none");
});

// 贸易伙伴关键字搜索
function key_search_cg(key) {
  search_cg = [];
  trade_cg_list.forEach((item) => {
    if (item.value !== null) {
      if (item.value.includes(key)) {
        search_cg.push(item);
      }
    }
  });
  console.log(search_cg, "关键字搜索");
  trade_cg_list = search_cg;
  console.log(trade_cg_list, "关键字搜索后的整体数据");
  cg_data(search_cg).then((res) => {
    if (res) {
      put_cg();
    }
  });
}

// 贸易记录 更多按钮
$("#my_jl").click(function () {
  let id = $(this).data("id")
  $(".sbox").each((index, item) => {
    if ($(item).data('num') == id) {
      $(item).parent().click()
      // 自动移动到指定的slide
      mySwiper.slideTo(index, 1000, false);
    }
  })
})

// 详情页面----------------------------------------------------------------------------------------------------------------
// 详情页面参数 公司id
let m_id = "";

// 贸易伙伴跳转
$(".friend-content").on("click", ".box .box1 img", function () {
  // 贸易公司id
  from_slide = $(this).parent().parent().parent().parent().data("id");
  m_id = $(this).data('id')
  console.log(m_id);
  $(".jy-detail-page").animate({
      scrollTop: 0,
    },
    function () {
      setTimeout(function () {
        $("html,body")
          .animate({
            scrollTop: 0,
          })
          .css("overflow-y", "hidden");
      }, 800);
    }
  );

  // 查询贸易伙伴的数据信息 需要贸易公司的id
  get_xq_data(c_id, c_type, c_endtime, c_starttime, c_country, m_id).then(
    (res) => {
      if (res) {
        $(".jy-detail-page").css('display', 'block')
        // 渲染页面
        put_xq_page_data();
      }
    }
  );
});

// hs跳转
$(".hs-content").on("click", ".box .box1", function () {
  // 贸易公司id
  from_slide = $(this).parent().parent().parent().data("id");
  m_id = $(this).data('id')
  console.log(m_id);
  $(".jy-detail-page").animate({
      scrollTop: 0,
    },
    function () {
      setTimeout(function () {
        $("html,body")
          .animate({
            scrollTop: 0,
          })
          .css("overflow-y", "hidden");
      }, 800);
    }
  );

  // 查询贸易伙伴的数据信息 需要贸易公司的id
  get_xq_data(c_id, c_type, c_endtime, c_starttime, c_country, m_id).then(
    (res) => {
      if (res) {
        $(".jy-detail-page").css('display', 'block')
        // 渲染页面
        put_xq_page_data();

      }
    }
  );
});

// hs跳转
$(".qy-content").on("click", ".box .box1", function () {
  // 贸易公司id
  from_slide = $(this).parent().parent().parent().data("id");
  m_id = $(this).data('id')
  console.log(m_id, from_slide, "678686876678");
  $(".jy-detail-page").animate({
      scrollTop: 0,
    },
    function () {
      setTimeout(function () {
        $("html,body")
          .animate({
            scrollTop: 0,
          })
          .css("overflow-y", "hidden");
      }, 800);
    }
  );

  // 查询贸易伙伴的数据信息 需要贸易公司的id
  get_xq_data(c_id, c_type, c_endtime, c_starttime, c_country, m_id).then(
    (res) => {
      if (res) {
        $(".jy-detail-page").css('display', 'block')
        // 渲染页面
        put_xq_page_data();

      }
    }
  );
});

// 贸易数据跳转详情页
$(".data-content").on("click", ".box .box1", function () {
  // 贸易公司id
  m_id = $(this).data("id");
  var ms_id = $(this).data("sid");
  from_slide = $(this).parent().parent().parent().data("id");
  console.log(m_id);

  $(".jy-detail-page").animate({
      scrollTop: 0,
    },
    function () {
      setTimeout(function () {
        $("html,body")
          .animate({
            scrollTop: 0,
          })
          .css("overflow-y", "hidden");
      }, 800);
    }
  );

  // 查询贸易伙伴的数据信息 需要贸易公司的id
  get_xq_data(c_id, c_type, c_endtime, c_starttime, c_country, m_id, ms_id).then(
    (res) => {
      if (res) {
        $(".jy-detail-page").css('display', 'block')
        // 渲染页面
        put_xq_page_data();
      }
    }
  );
});

// 贸易港口跳转详情页
$(".gk-content").on("click", ".box .box1", function () {
  console.log($(this).parent().parent().parent().parent().parent().data("id"), "详情页参数")
  // 贸易公司id
  from_slide = $(this).parent().parent().parent().parent().parent().data("id");
  m_id = $(this).data('id')
  console.log(m_id);
  $(".jy-detail-page").animate({
      scrollTop: 0,
    },
    function () {
      setTimeout(function () {
        $("html,body")
          .animate({
            scrollTop: 0,
          })
          .css("overflow-y", "hidden");
      }, 800);
    }
  );

  // 查询贸易伙伴的数据信息 需要贸易公司的id

  get_xq_data(c_id, c_type, c_endtime, c_starttime, c_country, m_id).then(
    (res) => {
      if (res) {
        $(".jy-detail-page").css('display', 'block')
        // 渲染页面
        put_xq_page_data();

      }
    }
  );
});

// 贸易港口跳转详情页
$(".cg-content").on("click", ".box .box1", function () {
  console.log($(this).parent().parent().parent().parent().parent().data("id"), "详情页参数")
  // 贸易公司id
  from_slide = $(this).parent().parent().parent().data("id");
  m_id = $(this).data('id')
  console.log(m_id, from_slide, "99999999999777777777");
  $(".jy-detail-page").animate({
      scrollTop: 0,
    },
    function () {
      setTimeout(function () {
        $("html,body")
          .animate({
            scrollTop: 0,
          })
          .css("overflow-y", "hidden");
      }, 800);
    }
  );

  // 查询贸易伙伴的数据信息 需要贸易公司的id

  get_xq_data(c_id, c_type, c_endtime, c_starttime, c_country, m_id).then(
    (res) => {
      if (res) {
        $(".jy-detail-page").css('display', 'block')
        // 渲染页面
        put_xq_page_data();

      }
    }
  );
});

// 概述浏览的跳转公司详情页面
// 提示登录
function login_toast(e) {
  console.log("54564564564")
  buy_vip_toast(`${get_lang(company_details_lang,company_details_aswter,"a22")}`, `${get_lang(company_details_lang,company_details_aswter,"a23")}`, `${get_lang(company_details_lang,company_details_aswter,"a24")}`, `${get_lang(company_details_lang,company_details_aswter,"a25")}`, `login`, `register`);
}

// 购买vip
function buy_toast() {
  buy_vip_toast1(
    `${get_lang(company_details_lang,company_details_aswter,"a26")}`,
    `${get_lang(company_details_lang,company_details_aswter,"a27")}`,
    `${get_lang(company_details_lang,company_details_aswter,"a28")}`,
    "/Alipay?v"
  );
}

// 概述浏览的跳转提单详情页面
$(".swiper1 .swiper-slide .look-box").on("click", ".look-box-item1>.to_xq", function () {
  if (!wg.user.encrypt_user_name) {
    console.log("未登录");
    buy_vip_toast(`${get_lang(company_details_lang,company_details_aswter,"a22")}`, `${get_lang(company_details_lang,company_details_aswter,"a23")}`, `${get_lang(company_details_lang,company_details_aswter,"a24")}`, `${get_lang(company_details_lang,company_details_aswter,"a25")}`, "login", "register");
  } else if (wg.user.vip_level == "") {
    buy_vip_toast1(
      `${get_lang(company_details_lang,company_details_aswter,"a26")}`,
      `${get_lang(company_details_lang,company_details_aswter,"a27")}`,
      `${get_lang(company_details_lang,company_details_aswter,"a28")}`,
      "/Alipay?v"
    );
  } else {
    console.log("箭头箭头")
    // 贸易公司id
    m_id = $(this).data("id");
    console.log($(this).parent().parent().parent().children("h3").children().data("id"), "详情页参数")
    from_slide = $(this).parent().children("h3").children("span").data("id")
    console.log(m_id, from_slide, "公司id");

    $(".jy-detail-page").animate({
        scrollTop: 0,
      },
      function () {
        setTimeout(function () {
          $("html,body")
            .animate({
              scrollTop: 0,
            })
            .css("overflow-y", "hidden");
        }, 800);
      }
    );

    // 查询贸易伙伴的数据信息 需要贸易公司的id
    get_xq_data(c_id, c_type, c_endtime, c_starttime, c_country, m_id).then(
      (res) => {
        if (res) {
          $(".jy-detail-page").css('display', 'block')
          // 渲染页面
          put_xq_page_data();

        }
      }
    );
  }
});

// 概述浏览的跳转提单详情页面
$(".swiper1 .swiper-slide .look-box").on("click", ".look-box-item", function () {
  if (!wg.user.encrypt_user_name) {
    console.log("未登录");
    buy_vip_toast(`${get_lang(company_details_lang,company_details_aswter,"a22")}`, `${get_lang(company_details_lang,company_details_aswter,"a23")}`, `${get_lang(company_details_lang,company_details_aswter,"a24")}`, `${get_lang(company_details_lang,company_details_aswter,"a25")}`, "login", "register");
  } else if (wg.user.vip_level == "") {
    buy_vip_toast1(
      `${get_lang(company_details_lang,company_details_aswter,"a26")}`,
      `${get_lang(company_details_lang,company_details_aswter,"a27")}`,
      `${get_lang(company_details_lang,company_details_aswter,"a28")}`,
      "/Alipay?v"
    );
  } else {
    // 贸易公司id
    m_id = $(this).data("id");
    console.log($(this).parent().parent().parent().children("h3").children().data("id"), "详情页参数")
    from_slide = $(this).parent().children("h3").children("span").data("id")
    console.log(m_id, from_slide, "公司id");

    $(".jy-detail-page").animate({
        scrollTop: 0,
      },
      function () {
        setTimeout(function () {
          $("html,body")
            .animate({
              scrollTop: 0,
            })
            .css("overflow-y", "hidden");
        }, 800);
      }
    );

    // 查询贸易伙伴的数据信息 需要贸易公司的id
    get_xq_data(c_id, c_type, c_endtime, c_starttime, c_country, m_id).then(
      (res) => {
        if (res) {
          $(".jy-detail-page").css('display', 'block')
          // 渲染页面
          put_xq_page_data();

        }
      }
    );
  }
});

// 空白点击关闭详情弹窗
$("#xq_del").click(function () {
  $(".jy-detail-page").toggle()
  $("html,body")
    .css("overflow-y", "scroll");
  $(".jy-detail-page-time-box").css("display", "none")
  start_num = 0;
  $(".q-h-idx").text(1);
  xq_page_data_num = 0;
  $(".jy-detail-page-time-box span").remove()
  c_endtime = $(".ws-table").data("endtime");
  c_starttime = $(".ws-table").data("starttime");
  from_slide = 0

});

$(".jy-detail-page").click(function () {
  if ($(".jy-detail-page-time-box").css("display") == 'block') {
    $(".jy-detail-page-time-box").toggle()
  }
})

// 获取详情页面数据
// 详情页面数据
let xq_page_data = [],
  xq_page_time = [],
  xq_page_data_num = 0,
  start_num = 0;
var from_slide = 0,
  reftoken = $(".ws-table").data("reftoken");

function get_xq_data(c_id, c_type, c_endtime, c_starttime, c_country, m_id, ms_id) {
  console.log("详情")
  return new Promise((resolve) => {
    axios
      .get(
        `${from_slide==2?`/company/detail/bill?bill_id=${ms_id}&reftoken=${$(".ws-table").data("reftoken")}&id=${m_id}`:`/company/detail/trade?id=${c_id}&company_type=${c_type}&end_time=${c_endtime}&last_trade_date=${c_last_trade_date}&country=${c_country}&key=*&product=${from_slide==5?m_id:'*'}&start_time=${c_starttime==$(".ws-table").data("starttime")?'**':c_starttime}&start=${
          start_num == 0 ? 0 : start_num
        }&size=1&${from_slide==3?'trade_id_std':from_slide==4?'hs':from_slide==6?'trade_country':from_slide==7?'port':""}=${m_id}&scene=${from_slide==7?4:3}&sort=default&reftoken=${reftoken}`}`
      )
      .then((res) => {
        console.log(res, from_slide, "概述");

        if (from_slide == 2) {
          xq_page_data = res.data.data

          //贸易数据
        } else {
          xq_page_data = res.data.trade.data.list; //其他
        }

        if (start_num == 0 && from_slide !== 2) {
          // 提单总条数
          xq_page_data_num = res.data.trade.data.hits;
        }

        resolve(true);
        // 年份
        // get_xq_time(m_id,c_starttime,c_endtime).then(res => {
        //   if (res) {
        //     v
        //   }
        // })
      });
  });
}

// 获取时间列表
// function get_xq_time(id,start,end) {
//   return new Promise(function (resolve, reject) {
//     axios.get(`/company/detail/trade?id=${m_id}&company_type=0&end_time=${end}&last_trade_date=2022-12-18&country=United%20States&key=*&product=*&sort=default&start_time=**&seo_flag=0&is_page=true&start=0&size=1&tag_id=0&reftoken=&trade_id_std=35180224&scene=4`)
//       .then(res => {
//         if (res) {
//           console.log(res, "年份数据")
//           //  年份数据
//           xq_page_time = res.data.year.list
//           resolve(true)
//         }
//       })
//   })
// }

// 渲染详情页面
function put_xq_page_data() {
  // 渲染总条数
  // 排除贸易数据
  if (from_slide !== 2) {
    $(".jy-detail-page-num").text(
      `(${xq_page_data_num == null ? "---" : xq_page_data_num})`
    )
  } else {
    $(".jy-detail-page-num").text(`${$(".tab-options h2 .tab-title .data-data").text()}`)
  }

  //渲染年份
  // if ($(".jy-detail-page-time-box").children("span").length == 0) {

  //   let a = $(".ws-table").data("starttime"),
  //     b = $(".ws-table").data("endtime");
  //   // $(".jy-detail-page-time-box").append($(`<span class='active time' data-starttime='${a}' data-endtime='${b}'>${get_lang(company_details_lang,company_details_aswter,"a30")}</span>`))
  //   // xq_page_time.forEach((item, index) => {
  //   //   let $box = ""
  //   //   $box = $(`
  //   //       <span class='time' data-starttime='${item.key_as_string}-01-01' data-endtime='${item.key_as_string}-12-31'>${item.key_as_string}</span>
  //   //       `)
  //   //   $(".jy-detail-page-time-box").append($box)
  //   // });
  // }

  console.log(xq_page_data, "页面数据")

  if (xq_page_data.length == 0) {
    $(".jy-detail-page .jy-detail-page-huo").css("display", "none")
    $(".jy-detail-page .jy-detail-page-product").css("display", "none")
    $(".jy-detail-page .q-h").css("display", "none")
    $(".jy-detail-page .no-info").css("display", "block")
  } else {
    $(".jy-detail-page .jy-detail-page-huo").css("display", "block")
    $(".jy-detail-page .jy-detail-page-product").css("display", "block")
    $(".jy-detail-page .q-h").css("display", "flex")
    $(".jy-detail-page .no-info").css("display", "none")
  }


  if (from_slide !== 2) {
    // 详情页数据
    xq_page_data.forEach((item) => {

      console.log(item, ".0.0..0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.")

      $(".xq-page-date").each(function (index) {
        switch (index) {
          case 0:
            $(this).text(item.date ? item.date : '---');
            break;
          case 1:
            $(this).text(item.seller ? item.seller : '---');
            break;
          case 2:
            $(this).text(item.buyer ? item.buyer : "---");
            break;
          case 3:
            $(this).text(item.descript ? item.descript : "---");
            break;
          case 4:
            $(this).text(item.weight_text ? item.weight_text : "---");
            break;
            // 数量
          case 5:
            $(this).text(item.qty_text ? item.qty_text : "---");
            break;
          case 6:
            $(this).text(item.amount ? item.amount : "---");
            break;
          case 7:
            $(this).text(item.buyer_country ? item.buyer_country : "---");
            break;
          case 8:
            $(this).text(item.date ? item.date : "---");
            break;
          case 9:
            $(this).text(item.seller ? item.seller : "---");
            break;
          case 10:
            $(this).text(item.buyer ? item.buyer : "---");
            break;
        }
      });

      $(".xq-page-date1").each(function (index) {
        switch (index) {
          case 0:
            $(this).text(item.place_receipt ? item.place_receipt : '---');
            break;
          case 1:
            $(this).text(item.scac_desc ? item.scac_desc : '---');
            break;
          case 2:
            $(this).text(item.transit_country ? item.transit_country : "---");
            break;
          case 3:
            $(this).text(item.vessel_code ? item.vessel_code : "---");
            break;
          case 4:
            $(this).text(item.seller_port ? item.seller_port : "---");
            break;
            // 数量
          case 5:
            $(this).text(item.buyer_country ? item.buyer_country : "---");
            break;
          case 6:
            $(this).text(item.origin_country ? item.origin_country : "---");
            break;
          case 7:
            $(this).text(item.carrier_code ? item.carrier_code : "---");
            break;
          case 8:
            $(this).text(item.sline_desc ? item.sline_desc : "---");
            break;
          case 9:
            $(this).text(item.voyage_number ? item.voyage_number : "---");
            break;
          case 10:
            $(this).text(item.buyer_port ? item.buyer_port : "---");
            break;
          case 11:
            $(this).text(item.trans_type ? item.trans_type : "---");
            break;
          case 12:
            $(this).text(item.vessel_name ? item.vessel_name : "---");
            break;
        }
      });
    });
  } else {
    // 详情页贸易数据tab下的详情页数据

    // 此时没有上一条，下一条按钮
    $(".jy-detail-page .q-h").remove()

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
          $(this).text(xq_page_data.place_receipt ? xq_page_data.place_receipt : '---');
          break;
        case 1:
          $(this).text(xq_page_data.scac_desc ? xq_page_data.scac_desc : '---');
          break;
        case 2:
          $(this).text(xq_page_data.transit_country ? xq_page_data.transit_country : "---");
          break;
        case 3:
          $(this).text(xq_page_data.vessel_code ? xq_page_data.vessel_code : "---");
          break;
        case 4:
          $(this).text(xq_page_data.seller_port ? xq_page_data.seller_port : "---");
          break;
          // 数量
        case 5:
          $(this).text(xq_page_data.buyer_country ? xq_page_data.buyer_country : "---");
          break;
        case 6:
          $(this).text(xq_page_data.origin_country ? xq_page_data.origin_country : "---");
          break;
        case 7:
          $(this).text(xq_page_data.carrier_code ? xq_page_data.carrier_code : "---");
          break;
        case 8:
          $(this).text(xq_page_data.sline_desc ? xq_page_data.sline_desc : "---");
          break;
        case 9:
          $(this).text(xq_page_data.voyage_number ? xq_page_data.voyage_number : "---");
          break;
        case 10:
          $(this).text(xq_page_data.buyer_port ? xq_page_data.buyer_port : "---");
          break;
        case 11:
          $(this).text(xq_page_data.trans_type ? xq_page_data.trans_type : "---");
          break;
        case 12:
          $(this).text(xq_page_data.vessel_name ? xq_page_data.vessel_name : "---");
          break;
      }
    });

  }

  let hs = Math.round(parseFloat($('.jy-detail-page-huo .xq-page-li .xq-page-date-more').css('height')) / parseFloat($('.jy-detail-page-huo .xq-page-li .xq-page-date-more').css('line-height')))
  console.log(hs, "展开参数")
  if (hs > 3) {
    $('.xq-page-li .more').css('display', 'block')
    $('.xq-page-li .xq-page-date').addClass('active')
  } else {
    $('.xq-page-li .more').css('display', 'none')
    $('.xq-page-li .xq-page-date').removeClass('active')
  }
}

// 上下条数据
$(".q-h span").click(function (e) {
  e.stopPropagation();
  $(this).addClass("active").siblings().removeClass("active");
  if ($(this).index() == 0) {
    // 上一条数据

    if (start_num <= 0) {
      text_toast({
        p1: `${get_lang(company_details_lang,company_details_aswter,"a43")}`,
        p2: `${get_lang(company_details_lang,company_details_aswter,"a44")}`
      });
    } else {
      start_num--;
      $(".q-h-idx").text(start_num + 1);
      get_xq_data(c_id, c_type, c_endtime, c_starttime, c_country, m_id).then(
        (res) => {
          if (res) {
            put_xq_page_data();
            $(".jy-detail-page").animate({
              scrollTop: 0,
            });
          }
        }
      );
    }
  } else {
    // 下一条数据
    console.log(m_id);

    if (start_num >= xq_page_data_num - 1) {
      text_toast({
        p1: `${get_lang(company_details_lang,company_details_aswter,"a43")}`,
        p2: `${get_lang(company_details_lang,company_details_aswter,"a45")}`
      });
    } else {
      start_num++;
      $(".q-h-idx").text(start_num + 1);
      get_xq_data(c_id, c_type, c_endtime, c_starttime, c_country, m_id).then(
        (res) => {
          if (res) {
            put_xq_page_data();
            $(".jy-detail-page").animate({
              scrollTop: 0,
            });
          }
        }
      );
    }
  }
});

// 详情页选择时间弹窗
$(".jy-detail-page-time").click(function (e) {
  e.stopPropagation()
  $(".jy-detail-page-time-box").toggle()
})

// 选择时间弹窗选项
$(".jy-detail-page-time-box ").on("click", "span", function () {

  $(this).addClass("active").siblings().removeClass("active")

  c_starttime = $(this).data('starttime')
  c_endtime = $(this).data('endtime')
  get_xq_data(c_id, c_type, c_endtime, c_starttime, c_country, m_id).then(function (res) {
    if (res) {
      put_xq_page_data()
    }
  })
})

// 展开按钮
$('.xq-page-li .more').click(function (e) {
  e.stopPropagation()
  if ($(this).text() == `[${get_lang(company_details_lang,company_details_aswter,"a3")}]`) {
    $('.xq-page-date-more').addClass('active')
    $(this).text(`[${get_lang(company_details_lang,company_details_aswter,"a4")}]`)
  } else {
    $(this).text(`[${get_lang(company_details_lang,company_details_aswter,"a3")}]`)
    $('.xq-page-date-more').removeClass('active')
  }
})

//回到顶部
$(".go-top").click(function () {
  $("body,html").animate({
    scrollTop: 0
  }, 1000, function () {
    $(".go-top").css("display", "none");
  });
});

//侦听上拉加载
$(window).scroll(function () {
  // 回到顶部按钮显示与否

  if ($(window).scrollTop() >= 2 * $(window).height()) {
    $(".go-top").css("display", "block");
  } else {
    $(".go-top").css("display", "none");
  }
});

// 同行公司跳转
function to_company_details(id) {
  window.location.pathname = `buyer/${id}`;
}