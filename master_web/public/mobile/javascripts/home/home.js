let home_aswter = {
  'a1': {
    cn: "数据汇总",
    en: "Data aggregation"
  },
  'a2': {
    cn: "浏览历史",
    en: "history"
  },
  'a3': {
    cn: '收藏公司',
    en: "collection"
  },
  'a4': {
    cn: "搜索",
    en: "Search"
  },
  'a5': {
    cn: '公司',
    en: "firm"
  },
  'a6': {
    cn: '行业',
    en: "industry"
  },
  'a7': {
    cn: '采购商',
    en: "Buyers"
  },
  'a8': {
    cn: '供应商',
    en: "Vendor"
  },
  'a9': {
    cn: '活跃值',
    en: "Active value"
  },
  'a10': {
    cn: '分',
    en: ""
  },
  'a11': {
    cn: '推荐理由: ',
    en: "Reason: "
  },
  'a12': {
    cn: '数据更新至',
    en: "Data updated to"
  },
  'a13': {
    cn: " 收藏",
    en: " collection"
  },
  'a14': {
    cn: "多人收藏",
    en: "Multiplayer collection"
  },
  'a15': {
    cn: "包含联系方式",
    en: "Include Contacts"
  },
  'a16': {
    cn: "黄钻精搜",
    en: "Yellow diamond search"
  },
  'a17': {
    cn: "标签管理",
    en: "Tags Edit"
  },
  "a18": {
    cn: "筛选标签",
    en: "Screen tags"
  },
  "a19": {
    cn: "编辑",
    en: "edit"
  },
  "a20": {
    cn: "完成",
    en: "finish"
  },
  "a21": {
    cn: "浏览日期:",
    en: "Browse the date: "
  },
  "a22": {
    cn: "点击加载更多...",
    en: "Click to load more..."
  },
  "a23": {
    cn: "浏览次数: ",
    en: "Views : "
  },
  "a24": {
    cn: "贸易国: ",
    en: "Trading countries: "
  },
  "a25": {
    cn: "关联的公司: ",
    en: "Associated company: "
  },
  "a26": {
    cn: "全选",
    en: "Select all"
  },
  "a27": {
    cn: "删除",
    en: "Delete"
  },
  "a28": {
    cn: "收藏成功",
    en: "Collection success"
  },
  "a29": {
    cn: "提示",
    en: "prompt"
  },
  "a30": {
    cn: "请前往PC端使用此功能",
    en: "Please go to the PC side to use"
  },
  "a31": {
    cn: "成员管理",
    en: "manage"
  },
  "a32": {
    cn: "我的权限",
    en: "Permissions"
  },
  "a33": {
    cn: "会员权限",
    en: "Membership Permissions"
  },
  'a34': {
    cn: "登陆提示",
    en: "Login Tips"
  },
  'a35': {
    cn: "建议您登陆/注册后尝试查询",
    en: "Query after logging in or registering"
  },
  'a36': {
    cn: "登陆",
    en: "Login"
  },
  'a37': {
    cn: "注册",
    en: "Register"
  },
}
let home_lang = $(".home-container").data("lang")

// 页面翻译

$(".data-content-left-content div .tag_sel_num1").text(`${get_lang(home_lang,home_aswter,'a4')}`)
$(".data-content-left-content #tag_sel_num2").children('span').eq(1).text(`${get_lang(home_lang,home_aswter,'a5')}`)
$(".data-content-left-content #tag_sel_num3").children('span').eq(1).text(`${get_lang(home_lang,home_aswter,'a6')}`)


$(".box-more .select-tag span").text(`${get_lang(home_lang,home_aswter,'a18')}`)
$(".box-more .select-tag-box span").eq(0).text(`${get_lang(home_lang,home_aswter,'a5')}`)
$(".box-more .select-tag-box span").eq(1).text(`${get_lang(home_lang,home_aswter,'a6')}`)

$(".box-more .box-more-head .box-more-head-bj").text(`${get_lang(home_lang,home_aswter,'a19')}`)

$(".select-all>span>span").text(`${get_lang(home_lang,home_aswter,"a26")}`)
$(".select-all>div>button").eq(0).text(`${get_lang(home_lang,home_aswter,"a13")}`)
$(".select-all>div>button").eq(1).text(`${get_lang(home_lang,home_aswter,"a27")}`)


let company_type = {
  flag: 'refrigerated%20showcase',
  type: 0
}
let company_list = []

var view_num = 0,
  coll_num = 0,
  tab_num = 0

//  查询的收藏公司数

let sc_company_num_start = 0,
  sc_company_num = 20
// 收藏公司列表
let sc_company_list = []

// 编辑状态
let bj_flag = false

// 全选按钮状态
let all_flag = false

// 删除参数
let del_list = []

// tab选中状态
let tab_type = ""
let select_box_flag = "/buyer"

// tag标签盒子选中状态
let select_tag_box_option = 0

// 初始 采购商 推荐公司
get_company_list()
get_qx_list()

// 权限
function get_qx_list() {
  axios.get("/permissions/details").then(function (res) {
    console.log(res, "00000")
    let list = res.data.data

    list.child_account !== 1 ? $(".bottombox>div").eq(2).children(".qx").addClass("active") : ""

    list.company_report !== 1 ? $(".topbox>div").eq(1).children(".qx").addClass("active") : ""

    list.contact !== 1 ? $(".topbox>div").eq(2).children(".qx").addClass("active") : ""

    list.data_export !== 1 ? $(".bottombox>div").eq(1).children(".qx").addClass("active") : ""

    list.search_filter !== 1 ? $(".topbox>div").eq(0).children(".qx").addClass("active") : ""

    list.tag !== 1 ? $(".bottombox>div").eq(0).children(".qx").addClass("active") : ""

    list.trade_country !== 1 ? $(".topbox>div").eq(1).children(".qx").addClass("active") : ""

    list.trade_report !== 1 ? $(".topbox>div").eq(3).children(".qx").addClass("active") : ""



  })
}

// 公司推荐弹窗
$("#home_company_flag").click(function (e) {
  e.stopPropagation()
  $(".select-box").toggle()
})

// 公司选择切换
$(".select-box span").click(function (e) {
  e.stopPropagation()
  $(this).addClass("active").siblings().removeClass("active")
  $("#home_company_flag span").text($(this).text())
  company_type.flag = $(this).data('type')
  select_box_flag = $(this).data('flag')
  company_type.type = $(this).index()
  $(".select-box").toggle()

  get_company_list()
})

// 点击空白关闭弹窗
$('body').click(function (event) {
  // 阻止事件捕获
  event.stopImmediatePropagation();
  if ($(".select-box").css("display") !== 'none') {
    $(".select-box").toggle()
  }

  if ($(".select-tag-box").css("display") !== 'none') {
    $(".select-tag-box").toggle()
  }
})

// 获取底部公司推荐数据
function get_company_list() {
  axios.get(`/user_home/company/search/list?key=${company_type.flag}&hs=*&sort=last_trade_date&start=0&size=8&company_type=${company_type.type}&country=*&filter_bill_count_min=*&filter_bill_count_max=*&filter_weight=default&filter_date=*&search_type=2&search_home_language=0&search_relation=0&trade_countries=*&buyer_ports=*&seller_ports=*&company_mark=*&off_line_counties=*&filter_date_end=*&filter_date_start=*&is_add_log=false`).then(res => {
    console.log(res, "推荐公司")
    if (res.data.state == 0) {
      company_list = res.data.data.list
      post_company_list()
    }
  })
}

// 渲染推荐公司
function post_company_list() {
  $(".company-list .company").remove()
  company_list.forEach((item, index) => {
    let $box = $(`<div class="company">
                               <a href="${select_box_flag}/${item.id}"><h4>${item.name}</h4></a>
                               <p class="star"><span class='star_width_${item.star}'></span>${item.country}${item.company_type==0?get_lang(home_lang,home_aswter,"a7"):get_lang(home_lang,home_aswter,"a7")},${get_lang(home_lang,home_aswter,"a9")}${item.rating}${get_lang(home_lang,home_aswter,"a10")}</p>
                               <p class="text">${get_lang(home_lang,home_aswter,"a11")}${item.descript}</p>
                               ${item.have_follow==0 && item.weight<1000 ? "" : `
                               <p>
                                  <span class="${item.have_follow!==0?'more':''}">${item.have_follow!==0?get_lang(home_lang,home_aswter,"a14"):''}</span>
                                  <span class="${item.weight>=1000?"phone":""}">${item.weight>=1000?get_lang(home_lang,home_aswter,"a15"):""}</span>
                               </p>
                               `}
                               <p class='date'>${get_lang(home_lang,home_aswter,"a12")}&nbsp;${item.last_trade_date.replaceAll("-","/")}<span id="shoucang" data-id="${item.id}"> <span class="${item.is_follow==false?'false':'true'}"></span>${get_lang(home_lang,home_aswter,"a13")}</span></p>
                </div>`)
    $(".company-list").append($box)
  })
}

// 公司浏览记录&&收藏公司
+
function get_company_view() {
  axios.get("/user_home/company/report/stats").then(res => {
    console.log(res, "公司浏览记录&&收藏公司")
    if (res.data.state == 0) {
      view_num = res.data.data.list[1].count
      coll_num = res.data.data.list[0].count
      $("#view_num").text(res.data.data.list[0].count)
      $("#coll_num").text(res.data.data.list[1].count)
    }
  })
}()

// 标签管理数据
+
function get_company_tag() {
  axios.get("/user_home/tags/stats").then(res => {
    console.log(res, "标签管理数据")
    if (res.data.state == 0) {
      $("#tag_sel_num").text(res.data.data.list[0].count)
      $("#tag_com_num").text(res.data.data.list[1].count)
      $("#tag_hy_num").text(res.data.data.list[2].count)
    }
  })
}()

//收藏
$(".company-list").on("click", ".company #shoucang", function () {
  console.log($(this).children('span').attr("class"))
  if (
    $(this).children('span').attr("class") ==
    "false"
  ) {
    $(this).children('span').removeClass("false").addClass("true")
    shoucang($(this));
  } else {
    $(this).children('span').removeClass("true").addClass("false")
    quxiao($(this));
  }
});

// 数据汇总 浏览历史
function to_hist() {
  sc_company('ll_company')
}

function to_follow() {
  sc_company('sc_company')
}

function to_bq(type) {
  if (type == 1) {
    select_tag_box_option = 1
    $('.select-tag-box span').eq(1).addClass("active").siblings().removeClass('active')
  }
  sc_company('tag_company')
}

// 收藏
function shoucang(event) {
  if (!wg.user.encrypt_user_name) {
    buy_vip_toast(`${get_lang(home_lang,home_aswter,"a34")}`, `${get_lang(home_lang,home_aswter,"a35")}`, `${get_lang(home_lang,home_aswter,"a36")}`, `${get_lang(home_lang,home_aswter,"a37")}`, `login`, `register`);
  } else {
    axios
      .post("/async/common/company/follow", {
        company_id: `${event.data("id")}`,
        source: 0,
      })
      .then((res) => {
        if (res.data.state == 0) {
          console.log("关注成功！");
        }
      });
  }
}

// 取消收藏
function quxiao(event) {
  if (!wg.user.encrypt_user_name) {
    buy_vip_toast(`${get_lang(home_lang,home_aswter,"a34")}`, `${get_lang(home_lang,home_aswter,"a35")}`, `${get_lang(home_lang,home_aswter,"a36")}`, `${get_lang(home_lang,home_aswter,"a37")}`, `login`, `register`);
  } else {
    axios
      .post("/async/common/company/unfollow", {
        company_id: `${event.data("id")}`,
        source: 0,
      })
      .then((res) => {
        if (res.data.state == 0) {
          console.log("取关成功！")
        }
      });
  }
}

//  收藏公司按钮
//  异步获取收藏公司的列表
function sc_company(type) {
  if (type == 'll_company') {
    tab_num = 3
  }

  if (type == undefined) {
    text_toast({
      p1: `${get_lang(home_lang,home_aswter,"a29")}`,
      p2: `${get_lang(home_lang,home_aswter,"a30")}`
    })
  }

  tab_type = type
  get_sc_company_list().then(res => {
    if (res == true) {
      // 向右滑动显示弹窗
      $(".box-more").animate({
        width: "toggle"
      }, 400);
      $('body').css('overflow', 'hidden')

      if (tab_type == 'sc_company') {
        $("#title_name").text(`${get_lang(home_lang,home_aswter,'a13')}`)
        $(".box-more-head-num span").text(`(${view_num})`)
      } else if (tab_type == 'll_company') {
        $("#title_name").text(`${get_lang(home_lang,home_aswter,'a2')}`)
        $(".box-more-head-num span").text(`(${coll_num})`)
      } else if (tab_type == 'tag_company') {
        $("#title_name").text(`${get_lang(home_lang,home_aswter,'a17')}`)
        $(".box-more>.select-tag").css('display', "block")
        $(".box-more-head-num span").text(`(${coll_num})`)
      }

      put_sc_company()
    }
  })
}

// 获取收藏公司列表
function get_sc_company_list() {
  return new Promise((resolve, reject) => {
    if (tab_type == 'sc_company') {
      axios.get(`/async/user_collection/company/follow/list?start=${sc_company_num_start}&size=${sc_company_num}&sort=1`).then(res => {
        if (res.data.state == 0) {
          sc_company_list = res.data.data.list
          resolve(true)
        } else {
          reject(false)
        }
      })
    } else if (tab_type == 'll_company') {
      axios.get(`/async/user-browsing-history/records?start=${sc_company_num_start}&size=${sc_company_num}&sort=1`).then(res => {
        if (res.data.state == 0) {
          sc_company_list = res.data.data.list
          resolve(true)
        } else {
          reject(false)
        }
      })
    } else if (tab_type == 'tag_company') {
      if (select_tag_box_option == 0) {
        axios.get(`/user-label-manage/product-tag/tag?start=${sc_company_num_start}&size=${sc_company_num}&sort=1`).then(res => {
          console.log(res, "tag---公司名称数据")
          if (res.data.state == 0) {
            sc_company_list = res.data.data.list
            coll_num = res.data.data.list.length == 0 ? 0 : res.data.data.list[0].total_count
            resolve(true)
          } else {
            reject(false)
          }
        })
      } else {
        axios.get(`/user-label-manage/trade-tags/tag?start=${sc_company_num_start}&size=${sc_company_num}&sort=1`).then(res => {
          console.log(res, "tag---行业标签名称数据")
          if (res.data.state == 0) {
            sc_company_list = res.data.data.list
            coll_num = res.data.data.list.length == 0 ? 0 : res.data.data.list[0].total_count
            resolve(true)
          } else {
            reject(false)
          }
        })
      }
    }
  })
}

// 渲染收藏列表
function put_sc_company(flag) {
  $(".box-more-content .click-more").remove()
  if (flag) {
    $(".box-more-content .company").remove()
  }
  sc_company_list.forEach((item, index) => {
    console.log(item,tab_type,"公司数据")
    let $box = $(`
    <div class="company ${index==sc_company_list.length-1 && tab_type=='tag_company'?'tag-box':""}">
    <input type='checkbox' name='selc' data-id='${tab_type=='tag_company'?item.id:item.company_id}' value='${tab_type=='tag_company'?item.id:item.company_id}'>
    
    ${tab_type!=='tag_company'?
    `<h3><a href="/${item.type==0?'buyer':'supplier'}/${tab_type=='tag_company'?item.id:item.company_id}">${tab_type=='tag_company'?(select_tag_box_option==0?item.tag_name:item.label_name):item.company_name}</a></h3>`
    :
    `<h3>${tab_type=='tag_company'?(select_tag_box_option==0?item.tag_name:item.label_name):item.company_name}</h3>`}
    
    
    <p>${tab_type=='tag_company'?(select_tag_box_option==0?get_lang(home_lang,home_aswter,"a25"):get_lang(home_lang,home_aswter,"a24")):get_lang(home_lang,home_aswter,"a21")}${tab_type=='tag_company'?(select_tag_box_option==0?item.count:item.country):tab_type=='ll_company'?item.view_time:item.create_time}</p>
    ${tab_type=='tag_company'?"":tab_type=='ll_company'?`<p>${get_lang(home_lang,home_aswter,"a23")}${item.view_count}</p>`:`<p>
    <span class="${item.have_follow!==0?'more':''}">${item.have_follow!==0?get_lang(home_lang,home_aswter,"a14"):''}</span>
    <span class="${item.weight>=1000?"phone":""}">${item.weight>=1000?get_lang(home_lang,home_aswter,"a15"):""}</span>
    </p>`}
    </div>
    ${index==sc_company_list.length-1 && sc_company_list.length>=10?`<p class="click-more">${get_lang(home_lang,home_aswter,"a22")}</p>`:""}`)
    $(".box-more-content").append($box)
  })
}

function back_page() {
  window.location.pathname = '/user/datacenter/home'
  tab_num = 0
}

// 编辑按钮
$(".box-more-head-bj").click(function () {
  bj_flag = !bj_flag
  if (bj_flag) {
    $('.click-more').css('display', 'none')
    $(this).text(`${get_lang(home_lang,home_aswter,"a20")}`)

    if (tab_num == 3) {
      $(".box-more-content .select-all div .sc-company-btn").css('display', 'inline-block')
    }

    $(".box-more-content .company input").toggle()
    $(".box-more-content .company").css({
      'margin-left': '2.5rem'
    }, {
      'width': '19.0625rem'
    })
    $(".box-more-content .select-all").toggle()
  } else {
    $('.click-more').css('display', 'block')
    $(this).text(`${get_lang(home_lang,home_aswter,"a19")}`)
    $(".box-more-content .company input").toggle()
    $(".box-more-content .company").css({
      'margin-left': '0rem'
    }, {
      'width': '21.5625rem'
    })

    $(".box-more-content .select-all").toggle()
  }
})

// 全选按钮
$(".box-more-content .select-all input").click(function () {
  console.log($(this)[0].checked)
  if ($(this)[0].checked) {
    all_flag = true
    $(".box-more-content .company input").prop('checked', true)
  } else {
    all_flag = false
    $(".box-more-content .company input").prop('checked', false)
  }
})

// 多选按钮
$(".box-more-content").on("click", ".company input", function () {
  console.log($(this))
  // 只要有一个多选为false全选按钮为false
  if (!$(this)[0].checked) {
    all_flag = false
  }

  $(".box-more-content .company input").each((index, item) => {
    if ($(item)[0].checked !== false) {
      all_flag = true
    } else {
      all_flag = false
      return false
    }
  })

  pd_all_flag()
})

// 判断全选按钮状态
function pd_all_flag() {
  if (all_flag) {
    $(".box-more-content .select-all input").prop('checked', true)
  } else {
    $(".box-more-content .select-all input").prop('checked', false)
  }
}

// 删除按钮
function del_sc_company() {
  del_list = []
  $(".box-more-content .company input").each((index, item) => {
    if ($(item)[0].checked == true) {
      let str = $(item).data('id')
      del_list.push(str)
    }
  })
  if (tab_type == 'tag_company' || tab_type == 'll_company') {
    if (del_list.length > 1) {
      text_toast({
        p1: "提示",
        p2: "一次只能删除一条数据"
      })
      return true
    }
  }
  post_del(del_list)
}

// 删除收藏公司
function post_del(list) {

  // 对象转化为字符串  post请求一般都需要转化
  let new_list = JSON.stringify(list)

  if (tab_type == 'sc_company') {
    axios.post(`/async/user_collection/company/follow/cancel`, {
      company_list: new_list
    }).then(function (res) {
      console.log(res, "0000")
      if (res.data.state == 0) {
        get_sc_company_list().then(res => {
          if (res == true) {
            $(".box-more-head-bj").click()
            put_sc_company(1)
          }
        })
      }
    })
  } else if (tab_type == 'll_company') {
    axios.post(`/async/user-browsing-history/delete_records`, {
      company_id: list
    }).then(function (res) {
      if (res.data.state == 0) {
        get_sc_company_list().then(res => {
          if (res == true) {
            $(".box-more-head-bj").click()
            put_sc_company(1)
          }
        })
      }
    })
  } else if (tab_type == 'tag_company') {
    if (select_tag_box_option == 0) {
      axios.post(`/async/detail-customize-tag/delete`, {
        tag_id: list
      }).then(function (res) {
        if (res.data.state == 0) {
          get_sc_company_list().then(res => {
            if (res == true) {
              $(".box-more-head-bj").click()
              put_sc_company(1)
            }
          })
        }
      })
    } else {
      axios.post(`/async/raw/trade-tags/tags/delete`, {
        tag_id: list
      }).then(function (res) {
        if (res.data.state == 0) {
          get_sc_company_list().then(res => {
            if (res == true) {
              $(".box-more-head-bj").click()
              put_sc_company(1)
            }
          })
        }
      })
    }
  }
}

// 标签类型选择下拉盒子
$(".box-more>span").click(function (e) {
  e.stopPropagation()
  $(".select-tag-box").toggle()
})

// 盒子选择
$('.select-tag-box span').click(function (e) {
  e.stopPropagation()
  sc_company_num_start = 0
  sc_company_num = 20
  select_tag_box_option = $(this).index()
  $(this).addClass("active").siblings().removeClass("active")
  $(".select-tag-box").toggle()
  get_sc_company_list().then(res => {
    if (res == true) {
      $(".box-more-head-num span").text(`(${coll_num})`)
      put_sc_company("option")
    }
  })
})

//点击加载更多
$(".box-more-content").on("click", ".click-more", function () {
  sc_company_num_start = sc_company_num
  sc_company_num += 20
  get_sc_company_list().then(res => {
    if (res) {
      put_sc_company()
    }
  })
})

// 编辑操作 批量收藏按钮
function follow_companys() {

  let follow_list = []
  $(".box-more-content .company input").each((index, item) => {
    if ($(item)[0].checked == true) {
      let str = $(item).data('id')
      follow_list.push(str)
    }
  })

  axios.post(`/async/company/follow/bulk`, {
    company_list: follow_list
  }).then(function (res) {
    console.log(res, "54564545")
    if (res.data.state == 0) {
      layer.open({
        content: `${get_lang(home_lang,home_aswter,"a28")}`,
        style: 'background-color:#fff; color:#333; border:none;font-size:0.875rem;',
        time: 1
      });
    } else if (res.data.state == 1002) {
      layer.open({
        content: res.data.message,
        style: 'background-color:#fff; color:#333; border:none;font-size:0.875rem;',
        time: 1
      });
    }

  })

}


//退出登录
function logout() {
  axios.get('/async/sign-out').then(function (_) {
    window.location.replace("/")
  })
}