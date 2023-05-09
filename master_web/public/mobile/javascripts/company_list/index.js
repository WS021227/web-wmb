// tab对应id,默认2
let tab_flag = 2;
// tab默认文本
let tab_text = "产品名";
let search_key = ""

let new_url = decodeURIComponent(window.location)

// 左侧选择，默认采购商
let select_flag = window.location.pathname.slice(0, 4) == "/buy" ? 0 : 1;
// tab 
tab_flag = getParam('search_type') || tab_flag

// search搜索关键字
if (new_url.includes("-")) {
  let index1 = new_url.indexOf("-")
  let index2 = new_url.indexOf("?")
  search_key = new_url.slice(index1 + 1, index2).replaceAll("_", " ")
  $("#context_search").text(search_key)
}

let display = false;
// 一线国家
var top_country = [];
// 各个大洲
var list = [];
var top_obj = {};
// 选取状态
var gj_flag = [];
// 多选国家列表
let select_country_text = "";
// 搜索条数
let search_num = 0;
// 上拉开关
let up_flag = true;
// 排序弹窗选项id
let sort_options_sort = "default";

let img_src = $(".container").data("img")

$(function () {

  let company_list_aswter = {
    "tab0": {
      cn: "产品名",
      en: "Products"
    },
    "tab1": {
      cn: "公司名",
      en: "Company"
    },
    "tab2": {
      cn: "HS编码",
      en: "HS Code"
    },
    "search_btn": {
      cn: "搜索",
      en: "Search"
    },
    "his_text": {
      cn: "浏览历史",
      en: "Browse History"
    },
    "hot_text": {
      cn: "热门",
      en: "Hot"
    },
    "search_text": {
      cn: "请输入",
      en: "Please enter"
    },
    "a00": {
      country: '*',
      cn: '全部',
      en: 'All'
    },
    "a0": {
      country: 'india',
      cn: '印度',
      en: 'india'
    },
    "a1": {
      country: 'united states',
      cn: '美国',
      en: 'united states'
    },
    "a2": {
      country: 'vietnam',
      cn: '越南',
      en: 'vietnam'
    },
    "a3": {
      country: 'england',
      cn: '英国',
      en: 'england'
    },
    "a4": {
      country: 'china',
      cn: '中国',
      en: 'china'
    },
    "a5": {
      country: 'mexico',
      cn: '墨西哥',
      en: 'mexico'
    },
    "a6": {
      country: 'south korea',
      cn: '韩国',
      en: 'south korea'
    },
    "a7": {
      country: 'bangladesh',
      cn: '孟加拉',
      en: 'bangladesh',
      is_new: 1
    },
    "a9": {
      cn: "抱歉，您的会员权限不足",
      en: "Insufficient User Permissions"
    },
    'a10': {
      cn: "警告!",
      en: "warn!"
    },
    'a11': {
      cn: "搜索内容不能为空!",
      en: "The search cannot be empty!"
    },
    'a12': {
      cn: "抱歉，您的会员权限不足",
      en: "Insufficient User Permissions"
    },
    'a13': {
      cn: "VIP会员可查阅此板块内容/使用此功能，建议您升级",
      en: "VIP Members Have Permission To Get"
    },
    'a14': {
      cn: "购买会员",
      en: "Buy Membership"
    },
    'a15': {
      cn: "登陆提示",
      en: "Login Tips"
    },
    'a16': {
      cn: "建议您登陆/注册后尝试查询",
      en: "Query after logging in or registering"
    },
    'a17': {
      cn: "登陆",
      en: "Login"
    },
    'a18': {
      cn: "注册",
      en: "Register"
    },
    'a22': {
      cn: "智能排序",
      en: "Smart"
    },
    'a23': {
      cn: "交易日期",
      en: "Date"
    },
    'a24': {
      cn: "交易次数",
      en: "Number"
    },
    'a25': {
      cn: "友情提示",
      en: "Tips"
    },
    'a26': {
      cn: "此功能在电脑端(52wmb.com)使用效果更佳；联系客服021-64033826免费试用。",
      en: "It works better on the computer(en.52wmb.com); Contact whatsapp +8616621075894 for free trial."
    },
    "a27": {
      cn: "搜索目标外贸公司",
      en: "Search for foreign trade companies"
    },
    "a28": {
      cn: "确认",
      en: "Confirm"
    },
    "a29": {
      cn: "全部",
      en: "All"
    },
    "a30": {
      cn: "印度",
      en: "India"
    },
    "a31": {
      cn: "美国",
      en: "American"
    },
    "a32": {
      cn: "中国",
      en: "China"
    },
    "a33": {
      cn: "韩国",
      en: "Korea"
    },
    "a34": {
      cn: "选择国家或地区",
      en: "Select a country or region"
    },
    "a35": {
      cn: "[@个数] 个公司",
      en: "[@个数] Companies"
    },
    "a36": {
      cn: "排序",
      en: "Sort"
    },
    "a37": {
      cn: "筛选",
      en: "Screen"
    },
    'a38': {
      cn: "采购商",
      en: "Buyer"
    },
    'a39': {
      cn: "供应商",
      en: "Supplier"
    },
    'a40': {
      cn: "活跃值[@分数]分",
      en: "Active value [@分数]"
    },
    'a41': {
      cn: "主营",
      en: "Main"
    },
    'a42': {
      cn: "推荐理由",
      en: "Reason for recommendation"
    },
    'a43': {
      cn: "多人收藏",
      en: "Multiplayer collection"
    },
    'a44': {
      cn: "黄钻精搜",
      en: "Yellow diamond search"
    },
    'a45': {
      cn: "包含联系方式",
      en: "Contains contact details"
    },
    'a46': {
      cn: "数据更新至",
      en: "Data updated to"
    },
    'a47': {
      cn: "收藏",
      en: "collection"
    },
    "a48": {
      cn: "交易",
      en: "trade"
    },
    "a49": {
      cn: "分",
      en: ""
    },
    "a50": {
      cn: "该公司最近两年共计有[@数量]笔[@产品]的交易，占该公司近两年交易总数的[@占比]%",
      en: "The company has had a total of [@数量] [@产品] transactions in the last two years,[@占比] % of the company's total transactions in the past two years"
    },
    "a52": {
      cn: "笔",
      en: "strokes"
    },
    "a53": {
      cn: "多选",
      en: "Multiple"
    },
    "a54": {
      cn: "暂无更多数据",
      en: "No more data is available"
    },
    "a55": {
      cn: "展开",
      en: "Unfold"
    },
    "a56": {
      cn: "收起",
      en: "Collapse"
    }
  }

  let company_list_lang = $(".container").data("lang")
  console.log(wg,"用户数据")
  let turkey_ip_area=wg.ip_area || ""

  // 热门国家
  let hot_company_country = [{
      country: 'india',
      country_cn_show: '印度',
      country_en_show: 'india'
    },
    {
      country: 'united states',
      country_cn_show: '美国',
      country_en_show: 'united states'
    },
    {
      country: 'vietnam',
      country_cn_show: '越南',
      country_en_show: 'vietnam'
    },
    {
      country: 'england',
      country_cn_show: '英国',
      country_en_show: 'england'
    },
    {
      country: 'china',
      country_cn_show: '中国',
      country_en_show: 'china'
    },
    {
      country: 'mexico',
      country_cn_show: '墨西哥',
      country_en_show: 'mexico'
    },
    {
      country: 'south korea',
      country_cn_show: '韩国',
      country_en_show: 'south korea'
    },
    {
      country: 'turkey',
      country_cn_show: '土耳其',
      country_en_show: 'turkey',
      is_new: 1
    }
  ]
 
  // 页面翻译
  $(".sort-toast").children("span").each(function (index, item) {
    $(item).text(`${get_lang(company_list_lang,company_list_aswter,`a${index+22}`)}`)
  })
  $(".select-country-btn").text(`${get_lang(company_list_lang,company_list_aswter,`a28`)}`)
  $(".box-more .title .left").text(`${get_lang(company_list_lang,company_list_aswter,`a34`)}`)

  // 展开按钮
  setting_more()
  //处理主营格式问题
  cl_zy_gs();

  // 获取推荐的国家
  (function () {
    axios.get(`/async/common/countries?tier=0`).then(function (res) {
      
      // 没有登录时使用本地热门国家  hot_company_country[]
      $('.country-list-box-li').append($(`<span class="list-box active" data-country="*">${get_lang(company_list_lang,company_list_aswter,"a00")}</span>`))
      if (res.data.top_country) { // 登录时
        hot_company_country.forEach(function (item, index) {
          if(turkey_ip_area == 'TR' &&  item.country == 'turkey' ) return true
          if(turkey_ip_area == 'IN' &&  item.country == 'india' ) return true
          if(turkey_ip_area == 'IN' &&  item.country == 'india new' ) return true
          let $box = $(`<span class="list-box" data-country="${item.country.replace(" ","%20")}">${get_lang(company_list_lang,company_list_aswter,"a"+index)}</span>`)
          $(".country-list-box-li").append($box)
        })
        
      } else { //未登录
        hot_company_country.forEach(function (item, index) {
          if(turkey_ip_area == 'TR' &&  item.country == 'turkey' ) return true
          if(turkey_ip_area == 'IN' &&  item.country == 'india' ) return true
          if(turkey_ip_area == 'IN' &&  item.country == 'india new' ) return true
          let $box = $(`<span class="list-box" data-country="${item.country.replace(" ","%20")}">${get_lang(company_list_lang,company_list_aswter,"a"+index)}</span>`)
          $(".country-list-box-li").append($box)
        })
   
      }
    })
  })();

  //侦听上拉加载
  // $(window).scroll(function () {
  //   // 回到顶部按钮显示与否

  //   if ($(window).scrollTop() >= 4 * $(window).height()) {
  //     $(".go-top").css("display", "block");
  //   } else {
  //     $(".go-top").css("display", "none");
  //   }
  //   if (up_flag) {
  //     // 滚动条离当前屏幕底部还有60px时，请求数据
  //     if (
  //       $(window).height() + $(window).scrollTop() >=
  //       $(document).height() - 60
  //     ) {
  //       up_debounce();
  //     }
  //   }
  // });

  // 点击加载更多

  $(".company-more").click(function () {
    if (!wg.user.encrypt_user_name) {
      // 搜索按钮不可用
      buy_vip_toast(`${get_lang(company_list_lang,company_list_aswter,"a15")}`, `${get_lang(company_list_lang,company_list_aswter,"a16")}`, `${get_lang(company_list_lang,company_list_aswter,"a17")}`, `${get_lang(company_list_lang,company_list_aswter,"a18")}`, `login`, `register`);
    } else {
      search_num += 30;
      up_search(undefined, select_country_text);
    }
  })

  //回到顶部
  $(".go-top").click(function () {
    $("body,html").animate({
      scrollTop: 0
    }, 1000);
  });

  // 国家多选框
  $("#right_btn").click(function () {

    let user=wg.user.id
    if(!user) return buy_vip_toast(`${get_lang(company_list_lang,company_list_aswter,"a15")}`, `${get_lang(company_list_lang,company_list_aswter,"a16")}`, `${get_lang(company_list_lang,company_list_aswter,"a17")}`, `${get_lang(company_list_lang,company_list_aswter,"a18")}`, `login`, `register`);

    // 初始化
    list = [];
    top_obj = {};
    top_country = [];
    // 向右滑动显示弹窗
    $(".box-more").animate({
      height: "toggle"
    }, 320);
    $("html").css("overflow-y", "hidden");

    axios.get(`/async/common/country/stats?start=0&key=${$("#context_search").val()}&hs=*&company_type=${select_flag}&off_line_counties=*&search_type=${tab_flag}&search_company_list_language=0&search_relation=0&filter_bill_count_min=0&filter_bill_count_max=0&filter_weight=default&trade_countries=*&buyer_ports=*&seller_ports=*&company_mark=*&filter_date_start=*&filter_date_end=*`).then(
      (res) => {
        res.data.data.list.forEach((item, idx) => {
          list.push(item);
          if (idx < 5) {
            item.country_list.forEach((item1, idx) => {
              if (item.name_cn == "亚洲") {
                if (idx < 10) {
                  top_country.push(item1);
                }
              } else if (item.name_cn == "北美洲") {
                if (idx < 9) {
                  top_country.push(item1);
                }
              } else if (item.name_cn == "欧洲") {
                if (idx < 3) {
                  top_country.push(item1);
                }
              } else if (item.name_cn == "南美洲") {
                if (idx < 9) {
                  top_country.push(item1);
                }
              } else if (item.name_cn == "非洲") {
                if (idx < 1) {
                  top_country.push(item1);
                }
              }
            });
          }
        });

        top_obj.country_list = top_country;
        top_obj.name_cn = "一线";
        top_obj.name_en = "Top";
        list.unshift(top_obj);
        console.log(list,"总数据")

        if ($(".select-country-content").children().length == 0) {
          list.forEach((item3, idx) => {
            // 地区
            let $box1 = $(
              `<div class="select-country-box">${company_list_lang=="cn"?item3.name_cn:item3.name_en}</div>`
            );
            $(".select-country-content").append($box1);
            $(".select-country-content").children(":first").addClass("active");
            if (idx == 0) {
              // 国家
              item3.country_list.forEach((item4) => {
                console.log(item4.country_en)
                if(turkey_ip_area == 'TR' &&  item4.country_en == 'Turkey' ) return true
                if(turkey_ip_area == 'IN' &&  item.country == 'india' ) return true
                if(turkey_ip_area == 'IN' &&  item.country == 'india new' ) return true
                let $box2 = $(
                  `<div class='select-country-options-box'><input id="select_guojia" type="checkbox" data-name="${item4.country_en}" data-namecn="${item4.country_cn_show}"/>${company_list_lang=="cn"?item4.country_cn_show:item4.country_en}(${item4.stats_count})</div>`
                );
                $(".select-country-options").append($box2);
              });
            }
          });
        }
      });
  });

  // 关闭多选国家弹窗
  $(".select-country-right").click(function () {
    // 向下滑动显示弹窗
    $(".box-more").animate({
      height: "toggle"
    }, 320);
    $("html").css("overflow-y", "scroll");
  });

  // 多选国家tab切换
  $(".select-country-content").on("click", ".select-country-box", function () {
    $(".select-country-options").empty();
    $(this).addClass("active").siblings().removeClass("active");
    list[$(this).index()].country_list.forEach((item5) => {
      if(turkey_ip_area == 'TR' &&  item5.country_en == 'Turkey' ) return true
      if(turkey_ip_area == 'IN' &&  item.country == 'india' ) return true
      if(turkey_ip_area == 'IN' &&  item.country == 'india new' ) return true
      var $box3
      if (gj_flag.length !== 0) {
        gj_flag.forEach(function (item99, index) {
          // 相同的选项 添加选中状态
          if (item5.country_en_show == item99.en) {
            $box3 = $(
              ` <div class='select-country-options-box'><input id="select_guojia" checked='true' type="checkbox" data-name="${item99.en}" data-namecn="${item99.cn}"/>${company_list_lang=="cn"?item5.country_cn_show:item5.country_en}(${item5.stats_count})</div>`
            );
          }
          // 不同的选项 
          if (item5.country_en_show !== item99.en) {
            $box3 = $(
              ` <div class='select-country-options-box'><input id="select_guojia" type="checkbox" data-name="${item99.en}" data-namecn="${item99.cn}"/>${company_list_lang=="cn"?item5.country_cn_show:item5.country_en}(${item5.stats_count})</div>`
            );
          }

          $(".select-country-options").append($box3);

        });
      } else {
        $box3 = $(
          ` <div class='select-country-options-box'><input id="select_guojia" type="checkbox" data-name="${item5.country_en}" data-namecn="${item5.country_cn_show}"/>${company_list_lang=="cn"?item5.country_cn_show:item5.country_en}(${item5.stats_count})</div>`
        );
        $(".select-country-options").append($box3);
      }
    });
  });

  // 选择国家
  $(".country-list-box .country-list-box-li").on("click", ".list-box", function () {

    let user=wg.user.id
    if(!user) return buy_vip_toast(`${get_lang(company_list_lang,company_list_aswter,"a15")}`, `${get_lang(company_list_lang,company_list_aswter,"a16")}`, `${get_lang(company_list_lang,company_list_aswter,"a17")}`, `${get_lang(company_list_lang,company_list_aswter,"a18")}`, `login`, `register`);

    $(this).addClass("active").siblings().removeClass("active");
    $(".container .search-context .company-more").css("display", "block")
    // 多选国家初始化
    // $(".box-more .select-country-options .select-country-options-box .select_guojia").attr("checked", false)

    // 单选
    if (select_country_text == "") {
      search(undefined, $(this).data("country"));
    } else {
      // 多选
      // 全部按钮

      if ($(this).text() == `${get_lang(company_list_lang,company_list_aswter,"a00")}`) {

        search(undefined, undefined)
      } else {
        search(undefined, $(this).data("country"));

      }
      let $new_box = $(".country-list-box .country-list-box-li").find(".new_box")[0];
      if ($new_box) {
        $new_box.remove();
      }
    }
  });

  // 选择历史记录
  // 动态添加的子元素用 .on 获取
  $("#hostory .context").on("click", ".his-box", function () {
    $(this).addClass("active").siblings().removeClass("active");
    let his_flag = $(this).text();
    $("#search_code").val(his_flag);
    $("#context_search").text(his_flag);
    search(his_flag).then((res) => {
      if (res == true) {
        $(this).removeClass("active");
        $("html").css("overflow-y", "scroll");
      }
    });
  });

  // 选择热门搜索
  $(".hot .context").on("click", ".his-box", function () {
    $(this).addClass("active").siblings().removeClass("active");
    let hot_flag = $(this).text();
    $("#search_code").val(hot_flag);
    $("#context_search").text(hot_flag);
    search(hot_flag).then((res) => {
      if (res == true) {
        $(this).removeClass("active");
        $("html").css("overflow-y", "scroll");
      }
    });
  });

  // 搜索下拉弹窗，顶部tab
  $(".tab #flag").click(function () {
    // 先判断登录，再判断是否黄钻用户
    if ($(this).data("id") == 3) {
      // 是否登录
      if (!wg.user.encrypt_user_name) {
        // 搜索按钮不可用
        buy_vip_toast(`${get_lang(company_list_lang,company_list_aswter,"a15")}`, `${get_lang(company_list_lang,company_list_aswter,"a16")}`, `${get_lang(company_list_lang,company_list_aswter,"a17")}`, `${get_lang(company_list_lang,company_list_aswter,"a18")}`, `login`, `register`);
      } else if (wg.user.vip_level !== "yd") {
        // '': '普通用户',
        // 'v': 'Vip用户',
        // 'bd': '蓝钻用户',
        // 'yd': '黄钻用户'
        // 判断是否是黄钻会员，提示购买弹窗
        buy_vip_toast1(
          `${get_lang(company_list_lang,company_list_aswter,"a9")}`,
          `${get_lang(company_list_lang,company_list_aswter,"a13")}`,
          `${get_lang(company_list_lang,company_list_aswter,"a14")}`,
          "/Alipay?yd"
        );
      } else {
        $(this).addClass("active").siblings().removeClass("active");
        tab_flag = $(this).data("id");
        tab_text = $(this).text();

        $("#search_code").attr("placeholder", `${get_lang(company_list_lang,company_list_aswter,'search_text')}` + tab_text.replaceAll(" ", ""));
      }
    } else {
      $(this).addClass("active").siblings().removeClass("active");
      tab_flag = $(this).data("id");
      tab_text = $(this).text();

      $("#search_code").attr("placeholder", `${get_lang(company_list_lang,company_list_aswter,'search_text')}` + tab_text.replaceAll(" ", ""));
      $("#search_code").val('')
    }
  });

  // 下拉按钮
  $(".box .search-box .borm").click(function (e) {
    e.stopPropagation();
    display = !display;
    if (display) {
      $("#down").css("transform", "rotate(180deg)");
    } else {
      $("#down").css("transform", "rotate(0deg)");
    }
    $(".select").toggle();
  });

  // 左侧选择采购商，供应商
  $(".search-box .select #options").click(function () {
    display = !display;

    $(this).addClass("select-active").siblings().removeClass("select-active");

    $(".select").toggle();

    if (display) {
      $("#down").css("transform", "rotate(180deg)");
    } else {
      $("#down").css("transform", "rotate(0deg)");
    }

    select_flag = $(this).data("id");

    // 不刷新页面，改变地址栏参数
    if (select_flag == 0) {
      let newUrl = window.location.href
      newUrl = newUrl.replace("/supplier", "/buyer")

      history.replaceState('', '', newUrl);
      $("#borm").text($(this).text());
    } else {
      let newUrl = window.location.href
      newUrl = newUrl.replace("/buyer", "/supplier")

      history.replaceState('', '', newUrl);
      $("#borm").text($(this).text());
    }

    $("#search_code").val("");
  });

  // 搜索按钮
  $("#search_btn").click(function () {
    $("#context_search").text($("#search_code").val());
    search($("#search_code").val(), select_flag);
    $("html").css("overflow-y", "scroll");
  });

  // 点击搜索框下拉搜索界面
  $("#context_search").click(function () {
    let user=wg.user.id
    if(!user) return buy_vip_toast(`${get_lang(company_list_lang,company_list_aswter,"a15")}`, `${get_lang(company_list_lang,company_list_aswter,"a16")}`, `${get_lang(company_list_lang,company_list_aswter,"a17")}`, `${get_lang(company_list_lang,company_list_aswter,"a18")}`, `login`, `register`);

    // 全局的搜索弹窗
    // 调用search弹窗组件
    search_toast()
    // 公司搜索页面要把header剔除
    $(".box .header").remove()


    // 同步采购/供应
    $(".search-box .select #options").eq(select_flag).click()
    $(".search-box #down").click()

    // 同步tab
    $(".tab #flag").each(function (index, item) {
      if ($(item).data('id') == tab_flag) {
        $(item).click()
      }
    })

    // 同步search内容
    $("#search_code").val(search_key)
    $("#context_search").text(search_key)

  });

  // 多选国家搜索按钮
  $(".select-country-btn").click(function () {
    let search_text = gj_flag_format();
    search(undefined, search_text, 'more').then((res) => {
      if (res) {
        // 若选择了多个国家，需要添加一个多选按钮
        let searchtext = select_country_text.includes("%7C");
        if (searchtext == true) {
          $(".country-list-box .new_box").remove();

          $(".country-list-box .country-list-box-li").children().removeClass("active");
          $(".country-list-box .country-list-box-li").children(":first").after(`<span class='list-box active new_box' data-id=''>${get_lang(company_list_lang,company_list_aswter,"a53")}</span>`);
        } else {
          $(".country-list-box .new_box").remove();

          var cou_flag = 0
          // 若多选国家只选择了一个，需要比较此国家是否在推荐国家列表中，若存在，则激活
          $(".country-list-box-li .list-box").each(function (index1, item1) {
            gj_flag.forEach(function (item, index) {
              // 多选国家的参数数组。这里格式为 %20 首字母大写
              item.en = item.en //全部转化小写
              key = $(item1).data("country").replaceAll("%20", " ")

              if (key == item.en) {

                $(item1).click()
                $(".country-list-box-li").scrollLeft = 100;
                cou_flag = 1
              } else {
                // 若不存在，则在推荐国家全部按钮后添加此国家
                if (index1 + 1 >= $(".country-list-box-li .list-box").length && cou_flag == 0) {

                  add_country(item)
                }
              }
            })
          })
        }

        // 末尾添加国家
        function add_country(item) {

          $(".country-list-box .country-list-box-li").children().removeClass("active");

          $(".country-list-box .country-list-box-li").children(":first").after($(`<span class='list-box active new_box' data-id='${item.en}'>${company_list_lang=="cn"?item.cn:item.en}</span>`));
        }

        // 多选国家收回
        $(".box-more").animate({
          height: "toggle"
        }, 320, function () {
          $("body").css("overflow", "auto");
          $("html").css("overflow-y", "scroll");
        });


        if (select_country_text !== "") {
          $(".country-list-box")
            .children(".list-box")
            .each(function () {
              let country = $(this).attr("data-country");
              if (country == select_country_text) {
                $(this).addClass("active");
                $(this).addClass("active").siblings().removeClass("active");
              }
            });
        }
      }
    });
  });

  // 复选状态保持
  $(".select-country-options").on(
    "click",
    ".select-country-options-box",
    function () {
      if ($(this).children()[0].checked == true) {

        let flag = false

        gj_flag.forEach(function (item, index) {
          if (item.en == ($(this).children('input').data("name"))) {
            flag = true
          }
        })

        if (!flag) {
          let a = {}
          a.cn = $(this).children('input').data("namecn")
          a.en = $(this).children('input').data("name")
          gj_flag.push(a);
        }
      } else if ($(this).children()[0].checked == false) {
        gj_flag = gj_flag.filter((item11) => {
          return item11.en !== $(this).children('input').data("name");
        });
      }
    }
  );

  // 排序弹窗
  $(".company-box").on(
    "click",
    ".company-list .title .setting .left",
    function (e) {
      e.stopPropagation()
      $(".sort-toast").toggle();
    }
  );

  // 筛选弹窗
  $(".company-box").on(
    "click",
    ".company-list .title .setting .right",
    function () {
      text_toast({
        p1: `${get_lang(company_list_lang,company_list_aswter,'a25')}`,
        p2: `${get_lang(company_list_lang,company_list_aswter,'a26')}`
      });
    }
  );

  // 排序弹窗切换
  $(".sort-toast").on("click", "span", function () {
    if ($(this).data("sort") !== "default") {
      if (!wg.user.encrypt_user_name) {
        // 搜索按钮不可用
        buy_vip_toast(`${get_lang(company_list_lang,company_list_aswter,"a15")}`, `${get_lang(company_list_lang,company_list_aswter,"a16")}`, `${get_lang(company_list_lang,company_list_aswter,"a17")}`, `${get_lang(company_list_lang,company_list_aswter,"a18")}`, `login`, `register`);
        return false
      } else if (wg.user.vip_level == "") {
        buy_vip_toast1(
          `${get_lang(company_list_lang,company_list_aswter,"a12")}`,
          `${get_lang(company_list_lang,company_list_aswter,"a13")}`,
          `${get_lang(company_list_lang,company_list_aswter,"a14")}`,
          "/Alipay?v"
        );
        return false
      } else {
        $(this).addClass("active").siblings().removeClass("active");

        sort_options_sort =
          $(this).index() !== 0 ?
          $(this).index() == 1 ?
          "last_trade_date" :
          "bill_count" :
          "default";
      }
    } else {
      $(this).addClass("active").siblings().removeClass("active");

      sort_options_sort =
        $(this).index() !== 0 ?
        $(this).index() == 1 ?
        "last_trade_date" :
        "bill_count" :
        "default";

      $(".sort-toast").toggle();

    }
    search(undefined, select_country_text);
  })

  // 设置交易的展开初始化
  // 展开按钮
  $(".company-list .company .text .p1more").on("click", "#p1-more", function () {
    // 展开
    if ($(this).text() == `[${get_lang(company_list_lang,company_list_aswter,"a55")}]`) {
      $(this).parent().children(".more-text").removeClass("active")
      $(this).text(`[${get_lang(company_list_lang,company_list_aswter,"a56")}]`)
    } else {
      $(this).parent().children(".more-text").addClass("active")
      $(this).text(`[${get_lang(company_list_lang,company_list_aswter,"a55")}]`)
    }

  })

  // 点击空白关闭弹窗
  // 点击空白关闭弹窗
  $('body').click(function (event) {
    // 阻止事件捕获
    event.stopImmediatePropagation();
    if ($(".sort-toast").css("display") == 'block') {
      $(".sort-toast").toggle();
    }
    if ($(".search-box .select").css("display") == 'block') {
      $(".search-box .select").toggle();
      $(".search-box>img").css({
        'transform': 'rotate(0deg)'
      })
    }
  })

  // 收藏
  $("#follow_btn").click(function () {
    console.log(wg, "用户数据")
    if (!wg.user.encrypt_user_name) {
      buy_vip_toast(`${get_lang(company_list_lang,company_list_aswter,"a15")}`, `${get_lang(company_list_lang,company_list_aswter,"a16")}`, `${get_lang(company_list_lang,company_list_aswter,"a17")}`, `${get_lang(company_list_lang,company_list_aswter,"a18")}`, `login`, `register`);
      return false
    }
    if ($(this).children("img").attr("src").includes("follow_false")) {
      shoucang($(this))
    } else {
      quxiao($(this))
    }
  })

})

// 收藏
function shoucang(event) {
  console.log("收藏")
  axios
    .post("/async/common/company/follow", {
      company_id: `${event.data("id")}`,
      source: 0,
    })
    .then((res) => {
      if (res.data.state == 0) {

        event.children("img").attr(
          "src",
          `${img_src}mobile/images/company/company_list/follow_true.png`
        );
      } else {

      }
    });
}

// 取消收藏
function quxiao(event) {

  axios
    .post("/async/common/company/unfollow", {
      company_id: `${event.data("id")}`,
      source: 0,
    })
    .then((res) => {

      if (res.data.state == 0) {

        event.children("img").attr(
          "src",
          `${img_src}mobile/images/company/company_list/follow_false.png`
        );
      } else {

      }
    });
}

// 关闭搜索框
function del_box() {
  $(".container .box .del-btn img").click(function () {
    $(".container .box").slideUp('fast', function () {
      $("html").css('overflow', 'scroll')
    });
  })
}

// 展开按钮初始化
function setting_more() {
  $(".company-list .company .text .p1more>.more-text").each(function (index, item) {
    let zk = Math.round(parseFloat($(item).css("height")) / parseFloat($(item).css("line-height")))
    // 超过三行显示展开按钮
    if (zk > 3) {
      $(item).addClass("active")
      $(item).parent().children("#p1-more").css("display", "inline-block")
    }
  })
};

// 处理交易、推荐、主营数据
function cl_zy_gs() {
  if ($("#context_search").text() == "") {
    $(".company-box .company-list .company .text #reason_flag").remove()
  }
}

// 搜索函数
function search(key_value, country_type, more_flag) {
  console.log(key_value,country_type)
  return new Promise((resolve, reject) => {
    if (more_flag !== undefined || key_value !== "") {
      // 加载
      loadding();

      // 搜索值
      let input_value = $("#context_search").text();
      input_value == "" ? "*" : input_value;

      // 国家
      let country = country_type ? country_type : "*";

      axios
        .get(
          `/async/company/search?start=0&key=${input_value}&hs=*&company_type=${select_flag}&off_line_counties=*&search_type=${tab_flag}&search_company_list_language=0&search_relation=0&sort=${sort_options_sort}&country=${country}&is_add_log=true&filter_bill_count_min=0&filter_bill_count_max=0&filter_weight=default&trade_countries=*&buyer_ports=*&seller_ports=*&company_mark=*&filter_date_start=*&filter_date_end=*`
        )
        .then((res) => {
          if (res.data.content) {
            console.log(res)
            delloadding();
            if ($(res.data.content).data("id") == "no-data") {
              $(".container .search-context .company-more").css("display", "none")
            }
            $(".company-box").html(res.data.content);
            // 设置推荐是否显示
            cl_zy_gs()
            // 设置展开按钮是否显示
            setting_more()
            $(window).scrollTop(0);
          }
          resolve(true);
        });
    } else {
      text_toast({
        p1: `${get_lang(company_list_lang,company_list_aswter,"a10")}`,
        p2: `${get_lang(company_list_lang,company_list_aswter,"a11")}`,
      });
    }
  });
}

// 上拉加载搜索函数  搜索关键字 搜索的国家
function up_search(key_value, country_type) {
  return new Promise((resolve, reject) => {
    // 加载
    loadding();

    // 搜索值
    let input_value = $("#context_search").text();
    input_value == "" ? "*" : input_value;
    let search_flag = key_value ? key_value : input_value;

    // 国家
    let country = country_type !== "" ? country_type : "*";

    axios
      .get(
        `/async/company/search?start=${search_num}&key=${search_flag}&hs=*&company_type=${select_flag}&off_line_counties=*&search_type=${tab_flag}&search_company_list_language=0&search_relation=0&sort=default&country=${country}&is_add_log=true&filter_bill_count_min=0&filter_bill_count_max=0&filter_weight=default&trade_countries=*&buyer_ports=*&seller_ports=*&company_mark=*&filter_date_start=*&filter_date_end=*`
      )
      .then((res) => {
        if (res.data.content) {

          let $new_text = $(res.data.content);

          if ($new_text.data("id") == 'no-data') {
            $(".container .search-context .company-more").css("display", "none")
          }

          // 上拉加载出的内容，需要去除titlt
          $new_text.children(".title").remove()

          $(".company-box .company-list").append($new_text.children());

          setting_more()
          // 处理交易、推荐、主营数据
          if ($("#context_search").text() == "") {
            $(".company-box .company-list .company .text #reason_flag").remove()
          }

          delloadding();
          resolve(true);
        }
      });
    // } 
  });
}

// 上拉刷新防抖
function up_debounce() {
  if (this.timer !== "") {
    clearTimeout(this.timer);
  }

  this.timer = setTimeout(() => {
    search_num += 30;
    up_search(undefined, select_country_text);
  }, 400);
}

// 多选国家列表格式处理
function gj_flag_format() {
  select_country_text = "";
  gj_flag.forEach((item) => {
    let text1 = item.en;
    let text2 = (text1 += "%7C");
    select_country_text += text2;
  });
  select_country_text = select_country_text.replaceAll(" ", "%20");
  select_country_text = select_country_text.slice(0, -3);
  return select_country_text;
}

function getParam(paramName) {
  paramValue = "", isFound = !1;
  if (this.location.search.indexOf("?") == 0 && this.location.search.indexOf("=") > 1) {
    arrSource = unescape(this.location.search).substring(1, this.location.search.length).split("&"), i = 0;
    while (i < arrSource.length && !isFound) arrSource[i].indexOf("=") > 0 && arrSource[i].split("=")[0].toLowerCase() == paramName.toLowerCase() && (paramValue = arrSource[i].split("=")[1], isFound = !0), i++
  }
  return paramValue == "" && (paramValue = null), paramValue
}

$(function(){

})

window.onload = function(){

}