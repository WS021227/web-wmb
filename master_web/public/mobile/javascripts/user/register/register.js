let register_aswter = {
  'a1': {
    cn: "手机号",
    en: "Phone "
  },
  'a2': {
    cn: "请输入 ",
    en: "Please enter "
  },
  'a3': {
    cn: "验证码 ",
    en: "Captcha "
  },
  'a4': {
    cn: "获取验证码",
    en: "Get Captcha"
  },
  'a5': {
    cn: "密码",
    en: "Password "
  },
  'a6': {
    cn: "请设置密码",
    en: "Please set a password"
  },
  'a7': {
    cn: "立即注册",
    en: "Sign up now"
  },
  'a8': {
    cn: "点击注册按钮，即表示同意并遵守《用户协议》相关内容",
    en: "Click the Register button to agree to the User Agreement"
  },
  'a9': {
    cn: "已有帐号 , ",
    en: "Already have an account , "
  },
  'a10': {
    cn: "立即登录",
    en: "Log in now"
  },
  'a11': {
    cn: "邮箱号",
    en: "Email"
  },
  'a12': {
    cn: "警告",
    en: "Warn"
  },
  'a13': {
    cn: "账号不能为空",
    en: "Account cannot be empty"
  },
  'a14': {
    cn: "验证码无效",
    en: "The verification code is invalid"
  },
  'a14-1': {
    cn: "该账号已被注册",
    en: "Already registered"
  },
  'a15': {
    cn: "提示",
    en: "Prompt"
  },
  'a16': {
    cn: "已经发送,注意查收",
    en: "Sent, pay attention to check"
  },
  'a17': {
    cn: "格式不正确",
    en: "Incorrect format"
  },
  "a18": {
    cn: "注册成功",
    en: "Registration successful"
  },
  'a19': {
    cn: "验证失败",
    en: "Validation failed"
  },
  'a20': {
    cn: "已发送",
    en: "Sent"
  }
}
let register_lang = $(".container").data("lang")

$(function () {

  let display = false;
  let id = 0;

  $(".from .box1 .text .lab1").text(`${get_lang(register_lang,register_aswter,"a1")}`)
  $(".from .box1 input").attr("placeholder", `${get_lang(register_lang,register_aswter,"a2")}${$(".from .box1 .text .lab1").text()}`)
  $(".from .box2 input").attr("placeholder", `${get_lang(register_lang,register_aswter,"a2")}${get_lang(register_lang,register_aswter,"a3")}`)
  $(".from .box2 .text .lab2").text(`${get_lang(register_lang,register_aswter,"a3")}`)
  $(".from .box2 button").text(`${get_lang(register_lang,register_aswter,"a4")}`)
  $(".from .box3 .text .lab3").text(`${get_lang(register_lang,register_aswter,"a5")}`)
  $(".from .box3 input").attr("placeholder", `${get_lang(register_lang,register_aswter,"a6")}`)
  $("#now-register").text(`${get_lang(register_lang,register_aswter,"a7")}`)
  $(".click-register").text(`${get_lang(register_lang,register_aswter,"a8")}`)
  $(".login span").eq(0).text(`${get_lang(register_lang,register_aswter,"a9")}`)
  $(".login a").text(`${get_lang(register_lang,register_aswter,"a10")}`)

  $(".flag-box span").eq(0).text(`${get_lang(register_lang,register_aswter,"a1")}`)
  $(".flag-box span").eq(1).text(`${get_lang(register_lang,register_aswter,"a11")}`)

  // 立即注册
  $("#now-register").click(() => {
    console.log($("#ypassWord").val(), $("#phoneNumber").val(), "验证码和账号")
    if ($("#ypassWord").val() !== "" && $("#phoneNumber").val() !== "" && $("#passWord").val() !== "") {
      if (id == 0) {
        axios
          .post("/async/account/register/phone", {
            code: $("#ypassWord").val(),
            phone: $("#phoneNumber").val(),
            password: $("#passWord").val(),
          })
          .then((res) => {
            console.log(res, "5645645")
            if (res.data.state == 1000) {
              // 已被注册
              text_toast({
                p1: `${get_lang(register_lang,register_aswter,"a12")}`,
                p2: `${get_lang(register_lang,register_aswter,"a14")}`,
              });
              $("#ypassWord").val("")
            } else if (res.data.state == 0) {
              text_toast({
                p1: `${get_lang(register_lang,register_aswter,"a15")}`,
                p2: `${get_lang(register_lang,register_aswter,"a18")}`,
                p3: 'no_del_btn'
              });
              setTimeout(() => {
                window.location.pathname = "/";
              }, 1200);
            } else if (res.data.state == 100) {
              text_toast({
                p1: `${get_lang(register_lang,register_aswter,"a12")}`,
                p2: `${get_lang(register_lang,register_aswter,"a19")}`,
              });
            }
          });
      } else {
        axios
          .post("/async/account/register/email", {
            code: $("#ypassWord").val(),
            email: $("#phoneNumber").val(),
            password: $("#passWord").val(),

          })
          .then((res) => {
            console.log(res, "邮箱登录验证")
            if (res.data.state == 1000) {
              // 已经被注册
              text_toast({
                p1: `${get_lang(register_lang,register_aswter,"a12")}`,
                p2: `${get_lang(register_lang,register_aswter,"a14")}`,
              });
              $("#ypassWord").val("")
            } else if (res.data.state == 0) {
              text_toast({
                p1: `${get_lang(register_lang,register_aswter,"a15")}`,
                p2: `${get_lang(register_lang,register_aswter,"a18")}`,
                p3: 'no_del_btn'
              });
              setTimeout(() => {
                window.location.pathname = "/";
              }, 1200);
            } else if (res.data.state == 100) {
              text_toast({
                p1: `${get_lang(register_lang,register_aswter,"a12")}`,
                p2: `${get_lang(register_lang,register_aswter,"a19")}`,
              });
            }
          });
      }
    } else {
      text_toast({
        // 不能为空
        p1: `${get_lang(register_lang,register_aswter,"a12")}`,
        p2: `${get_lang(register_lang,register_aswter,"a13")}`,
      });
    }
  });

  //获取验证码
  $("#get-verificationCode").click(() => {
    if ($("#phoneNumber").val() !== "") {
      if (id == 0) {
        axios
          .post("/async/account/register-phone/verify-code", {
            phone: $("#phoneNumber").val(),
            picture_code: "*",
          })
          .then((result) => {
            console.log(result, "56456564564")
            // 成功发送
            if (result.data.state == 0) {
              setting_yzm()
              text_toast({
                p1: `${get_lang(register_lang,register_aswter,"a15")}`,
                p2: `${get_lang(register_lang,register_aswter,"a16")}`,
                p3: 'no_del_btn'
              });
              // 格式不正确
            } else if (result.data.state == 100) {
              text_toast({
                p1: `${get_lang(register_lang,register_aswter,"a12")}`,
                p2: `${get_lang(register_lang,register_aswter,"a17")}`,
              });
              console.log($(".text_toast .alert img").attr("src"),"del图片地址")
            } else if (result.data.state == 1000) {
              // 已经被注册
              text_toast({
                p1: `${get_lang(register_lang,register_aswter,"a12")}`,
                p2: `${get_lang(register_lang,register_aswter,"a14-1")}`,
              });
            }
          });
      } else {
        axios
          .post("/async/account/register-email/verify-code", {
            email: $("#phoneNumber").val(),
            picture_code: "*",
          })
          .then((result) => {
            if (result.data.state == 0) {
              setting_yzm()
              text_toast({
                p1: `${get_lang(register_lang,register_aswter,"a15")}`,
                p2: `${get_lang(register_lang,register_aswter,"a16")}`,
                p3: 'no_del_btn'
              });
            } else if (result.data.state == 100) {
              // 格式不正确
              text_toast({
                p1: `${get_lang(register_lang,register_aswter,"a12")}`,
                p2: `${get_lang(register_lang,register_aswter,"a17")}`,
                p3: 'no_del_btn'
              });
            } else {
              // 已被注册
              text_toast({
                p1: `${get_lang(register_lang,register_aswter,"a12")}`,
                p2: `${get_lang(register_lang,register_aswter,"a14-1")}`,
              });
            }
          });
      }
    } else {
      text_toast({
        // 不能为空
        p1: `${get_lang(register_lang,register_aswter,"a12")}`,
        p2: `${get_lang(register_lang,register_aswter,"a13")}`,
      });
    }
  });

  // 下拉按钮
  $("#select-pore-btn").click((e) => {
    e.stopPropagation()
    display = !display;
    $("#flag_box").toggle();
    if (display) {
      $("#select-pore-btn").css("transform", "rotate(180deg)");
    } else {
      $("#select-pore-btn").css("transform", "rotate(0deg)");
    }
  });

  // 点击空白关闭
  $('body').click(function (e) {
    e.stopImmediatePropagation()
    if (display) {
      $("#select-pore-btn").click()
    }
  })

  // 选择手机号或邮箱号
  $("#flag_box span").click(function () {
    display = !display;
    $(this).addClass("active").siblings().removeClass("active");
    $("#flag_box").toggle();

    if (display) {
      $("#select-pore-btn").css("transform", "rotate(180deg)");
    } else {
      $("#select-pore-btn").css("transform", "rotate(0deg)");
    }

    id = $(this).data("id");

    $("#pore").text($(this).text());
    $("#phoneNumber").attr("placeholder", `${get_lang(register_lang,register_aswter,"a2")}` + $(this).text());

    $("#phoneNumber").val("")
  });

});

// 获取验证码按钮状态
function setting_yzm() {
  // 获取验证码按钮状态
  $("#get-verificationCode").attr("disabled", "true")
  $("#get-verificationCode").css("background-color", "#ccc")
  $("#get-verificationCode").text(`${get_lang(register_lang,register_aswter,"a20")}`)

  let i=60
  let djs=setInterval(function () {
    i--
    if(i>=0){
      $("#get-verificationCode").text(`${get_lang(register_lang,register_aswter,"a20")}(${i})`)
    }else{
      clearInterval(djs)
      $("#get-verificationCode").css("background-color", "#0D52AD").text(`${get_lang(register_lang,register_aswter,"a4")}`)
      $("#get-verificationCode").removeAttr("disabled");
    }
  }, 1000)
}