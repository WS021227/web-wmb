let company_list_aswter = {
 
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
  }
}
let company_list_lang = $(".container").data("lang")


$(function () {
  // swiper初始化
  var mySwiper = new Swiper('.swiper', {
    // 改可视区域可以显示的轮播框的个数
    loop: true,
    slidesPerView: 'auto',
    loopedSlides: 5,
  })
 
  // 搜索框
  $("#search").click(() => {
    let user=wg.user.id
    if(!user)  return buy_vip_toast(`${get_lang(company_list_lang,company_list_aswter,"a15")}`, `${get_lang(company_list_lang,company_list_aswter,"a16")}`, `${get_lang(company_list_lang,company_list_aswter,"a17")}`, `${get_lang(company_list_lang,company_list_aswter,"a18")}`, `login`, `register`);
    // 全局的搜索弹窗
    search_toast()
  });

  // 轮播标题按钮切换
  // 热门
  $(".title-hot-right span").click(function (event) {
    $(this).addClass("active").siblings().removeClass("active");
    // 切换到指定tab
    $(".swiper-context").find("div:eq(" + $(this).index() + ")").attr("class", "corg  corg_active").siblings().attr("class", "corg  no_corg_active")
  });

  // 关注
  $(".title-look-right span").click(function (event) {
    $(this).addClass("active").siblings().removeClass("active");
    // 切换到指定tab
    $(".swiper-context1").find("div:eq(" + $(this).index() + ")").attr("class", "corg  corg_active").siblings().attr("class", "corg  no_corg_active")
  });

});