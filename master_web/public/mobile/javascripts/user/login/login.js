let  img_src=$(".container").data("img")

let login_aswter = {
  'a1': {
    cn: "账号 ",
    en: "Account "
  },
  'a2': {
    cn: "请输入手机号/邮箱",
    en: "Please enter your mobile phone number/email address"
  },
  'a3': {
    cn: "密码 ",
    en: "Password "
  },
  'a4': {
    cn: "请输入密码",
    en: "Please enter a password"
  },
  'a5': {
    cn: "立即登陆",
    en: "Log in now"
  },
  'a6': {
    cn: "没有账号,",
    en: "No account , "
  },
  'a7': {
    cn: "立即注册",
    en: "Sign up now"
  },
  "a8": {
    cn: "登陆成功",
    en: "Login successful"
  },
  "a9": {
    cn: "即将跳转页面",
    en: "Jumping page soon"
  },
  'a10': {
    cn: "登陆失败",
    en: "Login failed"
  },
  'a11': {
    cn: "警告",
    en: "Warn"
  },
  'a12': {
    cn: "警告",
    en: "Warn"
  },
  "a13": {
    cn: "账号/密码不能为空",
    en: "Cannot be empty"
  }
}
let login_lang = $(".container").data("lang")


$(function () {

  $(".from .box1 .text .lab1").text(`${get_lang(login_lang,login_aswter,"a1")}`)
  $(".from .box3 .text .lab3").text(`${get_lang(login_lang,login_aswter,"a3")}`)
  $(".from .box1 input").attr('placeholder', `${get_lang(login_lang,login_aswter,"a2")}`)
  $(".from .box3 input").attr('placeholder', `${get_lang(login_lang,login_aswter,"a4")}`)
  $(".now-login").text(`${get_lang(login_lang,login_aswter,"a5")}`)
  $(".login span").eq(0).text(`${get_lang(login_lang,login_aswter,"a6")}`)
  $(".login a").text(`${get_lang(login_lang,login_aswter,"a7")}`)

  // 立即登录按钮
  $(".now-login").click(() => {
    if ($("#phoneNumber").val() !== "" && $("#passWord").val() !== "") {
      loadding();
      axios
        .post("/async/sign", {
          user_name: $("#phoneNumber").val(),
          password: $("#passWord").val(),
        })
        .then((res) => {
          // 登录成功！
          if (res.data.state === 0) {
            delloadding(); /* 移除*/
            text_toast({
              p1: `${get_lang(login_lang,login_aswter,"a8")}`,
              p2: `${get_lang(login_lang,login_aswter,"a9")}`,
              p3: 'no_del_btn'
            });
            setTimeout(() => {
              // 返回上一页面，并刷新页面
              window.location.replace(document.referrer)
            }, 1000);
          } else {
            delloadding(); /* 移除*/
            text_toast({
              p1: `${get_lang(login_lang,login_aswter,"a10")}`,
              p2: res.data.message,
            });
          }
        });

    } else {
      text_toast({
        p1: `${get_lang(login_lang,login_aswter,"a12")}`,
        p2: `${get_lang(login_lang,login_aswter,"a13")}`,
      });
    }
  });
});