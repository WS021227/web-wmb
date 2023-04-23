// 获取国家列表
let c_list = [],
  new_list = [];
$(".s-box").each(function (index, event) {
  c_list.push({
    en: $(event).data("country_cn"),
    cn: $(event).data("country"),
  });
});

// 贸易国点击


// 跳转页面
function go_customs_data(country) {
  window.location.pathname = `customs-data/${country}`;
}

// 搜素贸易国
$(".billsearch-box-seach input").bind("input propertychange", function () {
  new_list = [];
  $(".new-options").remove();
  let value = $(this).val();
  if (value != "") {
    c_list.forEach(function (item) {
      if (item.en.includes(value) || item.cn.includes(value))
        new_list.push(item);
    });
    if (new_list.length != 0) {
      new_list.forEach((item) => {
        let $box = `<span data-flag=${item.cn} class="new-options">${
          item.en + "(" + item.cn + ")"
        }</span>`;
        $(".search-list").append($box);
      });
    }
  }
});

// 快捷搜索选择
$(".search-list").on("click",".new-options",function(){
    let value=$(this).data("flag")
    $(".billsearch-box-seach input").val("")
    $(".new-options").remove()
    go_customs_data(value)
})
