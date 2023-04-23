// 公司详情 翻译数据  调用 unity_lang 方法  如： unity_lang('aa')
let curr_lang_json = {
    'mail_enter': {cn: '请输入邮箱地址', en: 'Please enter your email address'},
    'mail_enter_error': {cn: '邮箱地址格式不正确', en: 'Incorrect email address format'},
    'mail_enter_pic_code': {cn: '请输入图片验证码', en: 'Please enter the image verification code'},
    'mail_enter_pic_code_reget': {cn: '重新获取验证码', en: 'Retrieve the verification code'},
    'mail_enter_pic_code_time': {cn: '秒后获取', en: ' seconds to acquire'},
    'mail_enter_pic_code_enter': {cn: '请输入验证码', en: 'Please enter the verification code'},
    'mail_enter_email_code': {cn: '请输入邮箱验证码', en: 'Please enter the e-mail verification code'},
    'mail_enter_password': {cn: '请输入密码', en: 'Please enter your password'},
    'mail_enter_password_tips': {cn: '密码长度应该在 6 - 20位', en: 'Password length should be in 6 - 20 digits'},
    'mail_enter_sucessfully': {cn: '注册成功，请稍后...', en: 'Registered successfully, please wait...'},
    'login_successfully': {cn: '登陆成功，请稍后...', en: 'Login successfully, please wait...'},
    'login_ing': {cn: '登陆中，请稍后...', en: 'Landing in, please wait...'},
    "login_enter_text": {cn: '立即登录', en: 'Login now'},
    'pwd_reset_successfully': {cn: '重置成功，请稍后...', en: 'Password reset successfully, please wait...'},
    'pwd_reset_again': {cn: '请再次输入密码', en: 'Please input password again'},
    'pwd_not_again': {cn: '两次密码输入不一致，请重新输入', en: 'Two times the password input does not match, please re-enter'},


    'yangben': {cn: '样本', en: 'demo'}
}

var domain_name = $('#domain_name').val(),
    qu =  window.location.search
    redirectUrl = queryString('redirectUrl'),
    _src = queryString('_src'),
    pn = queryString('pn')
    // login_redirect =  '/user/datacenter/home?redirectUrl=' + redirectUrl,
    // register_redirect= login_redirect,
var redirect =  redirectUrl !== "" ? decodeURIComponent(redirectUrl) : "/"
// 公司
// if(_src == 'detail'){
//     register_redirect =  redirectUrl !== "" ? redirectUrl : ""
// }
let static_url = $('meta[name="static_url"]').attr('content'),
    lading_gif = static_url +'images/loading.gif'
let wmb_token, qr_code_ex;

$(function () {
    /*登录*/
    $('#sumbit_login').on('click', function (e) {
        if(!$('[name="user_name"]').val()||!$('[name="password"]').val()){
            $.alert('请输入账号或密码') 
            return false
        }
        let $this = $(this)
        $this.html(unity_lang('login_ing')).prop('disabled', true)
        $.ajax('/async/sign', {
            data: {user_name: $('[name="user_name"]').val(), password: $('[name="password"]').val()},
            datatype: 'text/json',
            type: 'POST',
            success: function (result) {
                if (result.state != 0) {
                    $this.html(unity_lang('login_enter_text')).prop('disabled', false)
                    return $.alert(result.message)
                }
                $this.html(unity_lang('login_successfully')).prop('disabled', false)
                 location.replace(redirect);
            }
        })
        e.preventDefault();
    })
    weixin_login()
})

function login_or_register(elem){
    location.href = $(elem).attr("href") + qu
    return !1

}

function weixin_login() {
    var wxpqrcode = $('#wxpqrcode');
    if(wxpqrcode.length <=0) return false
    qr_code_ex = false
    $.ajax('/async/wchart/sign', {
        datatype: 'json',
        type: 'get',
        success: function (result) {
            // $('#wxpqrcode').unmask()
            wmb_token = result.data.wmb_token
            wxpqrcode.empty()
            if (wxpqrcode.length > 0) {
                wxpqrcode.qrcode({width: 200, height: 200, text: result.data.url}); //生成二维码
            } else {
                wxpqrcode.html('二维码生成失败');
            }
            window.setTimeout(verify_wechat_login, 1000)
            window.setTimeout(function () {
                // 二维码失效效果，
                qr_code_ex = true
                wxpqrcode.wMask({content: '<a href="javascript:void(0)" onclick="weixin_login()">点击刷新</a>', icon: null})
            }, result.data.expire_seconds * 1000)
            // }, 1000)
        }
    })
}



function verify_wechat_login() {
    if (qr_code_ex) return;
    $.ajax({
        url: "/async/wechat/login/verify",
        type: "post",
        datatype: "json",
        async: true,
        data: {token: wmb_token},
        success: function (result) {
           
            if (result.state === 1) {
                layer.alert(result.message, function () {
                    window.location.reload()
                })
                return false
            }
            // 暂无登录信息
            if (result.state == 1100) {
                window.setTimeout(verify_wechat_login, 5000)
                return false
            }
            if (result.state == 0) {
                $.alert('登录成功，请稍后......')
                window.location.href = redirect;
                // if(result.is_register == 1){
                //     window.location.href = register_redirect;
                //     window.location.href = redirect;
                // }else {
                //     window.location.href = login_redirect;
                // }
                return false
            }
            $('#wxpqrcode').mask('<a onclick="weixin_login()">登录失败，点击刷新</a>')
        }
    });
}

function qq_login() {
    // var top_location = queryString('redirectUrl');
    var top_location = 'https://www.52wmb.com';
    var wmburl = encodeURIComponent("https://www.52wmb.com/authorization/qq?wmb_redirect_uri=" + top_location);
    $.ajax({
        url: "/async/third/login/state",
        type: "get",
        datatype: "json",
        data:{type:0},
        success: function (JSONResponse) {
            var url = "https://graph.qq.com/oauth2.0/authorize?client_id=100477069&response_type=code&scope=all&redirect_uri=" + wmburl + "&state=" + JSONResponse.data.state;
            top.window.location = url;
        }
    });
}

function sina_login() {
    // var top_location = queryString('redirectUrl');
    var top_location = 'https://www.52wmb.com';
    var sina = encodeURIComponent("https://www.52wmb.com/authorization/sina?wmb_redirect_uri=" + top_location);
    $.ajax({
        url: "/async/third/login/state",
        type: "get",
        datatype: "json",
        data:{type:1},
        success: function (result) {
            var url = "https://api.weibo.com/oauth2/authorize?client_id=4075922869&redirect_uri=" + sina + "&response_type=code&display=default&state=" + result.data.state;
            top.window.location = url;
        }
    });
}

/*邮箱注册按钮切换*/
function tab_bind(elem) {
    $(elem).parents('.bind-box').addClass('display-none').siblings('.bind-box').removeClass('display-none')
}


/*获取手机验证码*/
function get_phone_code(elem) {
    let phone = $('#phone').val(), phone_pattern = /^1[0-9]{10}$/;
    if(!phone) return $.alert('请输入手机号')
    if(!phone_pattern.test(phone)) return $.alert('手机号格式不正确')

    var picture_code = $('#phone_picture_code').val()
    if(!picture_code && picture_code != '*'){
        return $.alert('请输入图片验证码')
    }
    let $this = $(elem)

    let data = {
        phone: phone,
        picture_code: picture_code
    }
    $.ajax('/async/account/register-phone/verify-code', {
        datatype: 'text/json',
        type: 'post',
        data: data,
        success: function (result) {
            if(result.state == 0) {
                $this.removeAttr('onclick')
                let sd = 60, timer = window.setInterval(function () {
                    sd--;
                    if (sd == 0) {
                        $this.html('重新获取验证码').attr('onclick', 'get_phone_code(this)')
                        window.clearInterval(timer)
                    } else {
                        $this.html(sd + '秒后获取验证码')
                    }
                }, 1000)
                return
            }
            if(result.state == 2000){
                $('#phone_picture_code').val('')
                if(!$('#phone_img_picture_code').data('show')) {
                    change_code('#phone_img_picture_code')
                }
                return;
            }
            $.alert(result.message)
        }
    })
}


function change_code(elem) {
    $(elem).addClass('picture-code').attr('src', lading_gif).data('show', 1).parents('li').show()
    $.ajax('/async/picture-code', {
        datatype: 'text/json',
        type: 'get',
        data: {'width': 100, 'height': 33},
        success: function (result) {
            if (result.state == 1) {
                var data = result.data.base64
                $(elem).attr('src', "data:image/png;base64," + data).removeClass('picture-code')
            }
        }
    })
}

/*获取邮箱验证码*/
function get_email_code(elem) {
    let email = $('#email').val(), email_pattern = /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/;
    if (!email) return $.alert(unity_lang('mail_enter'))
    if (!email_pattern.test(email)) return $.alert(unity_lang('mail_enter_error'))

    var picture_code = $('#email_picture_code').val()
    if(!picture_code && picture_code != '*'){
        return $.alert(unity_lang('mail_enter_pic_code'))
    }
    let $this = $(elem)
    $.ajax('/async/account/register-email/verify-code', {
        datatype: 'text/json',
        type: 'post',
        data: {
            email: email,
            picture_code: picture_code
        },
        success: function (result) {
            if(result.state == 0) {
                $this.removeAttr('onclick')
                let sd = 60, timer = window.setInterval(function () {
                    sd--;
                    if (sd == 0) {
                        $this.html(unity_lang('mail_enter_pic_code_reget')).attr('onclick', 'get_email_code(this)')
                        window.clearInterval(timer)
                    } else {
                        $this.html(sd + unity_lang('mail_enter_pic_code_time'))
                    }
                }, 1000)
                return
            }
            if(result.state == 2000){
                $('#email_picture_code').val('')
                if(!$('#email_img_picture_code').data('show')) {
                    change_code('#email_img_picture_code')
                }
                return;
            }
            $.alert(result.message)
        }
    })
}

/*手机注册*/
function register_phone() {
    let phone = $('#phone').val(), phone_pattern = /^1[0-9]{10}$/;
    if (!phone) return $.alert('请输入手机号')
    if (!phone_pattern.test(phone)) return $.alert('手机号格式不正确')
    let phone_code = $("#phone_code").val()
    if (!phone_code) return $.alert('请输入验证码')
    let pwd = $("#phone_pwd").val()
    if (!pwd) return $.alert('请输入密码')
    if (pwd.length < 6) return $.alert('密码长度应该在 6 - 20位')

    $.ajax('/async/account/register/phone', {
        datatype: 'text/json',
        type: 'post',
        data: {phone: phone, code: phone_code, password: pwd, pn: pn},
        success: function (result) {
            if (result.state == 0) {
                $.alert('注册成功，请稍后...')
                // window.location.replace(register_redirect)
                window.location.href = redirect;
                return
            }
            $.alert(result.message)
        }
    })
}

/*邮箱注册*/
function register_email() {

    let email = $('#email').val(), email_pattern = /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/;
    if (!email) return $.alert(unity_lang('mail_enter'))
    if (!email_pattern.test(email)) return $.alert(unity_lang('mail_enter_error'))
    let email_code = $("#email_code").val()
    if (!email_code) return $.alert(unity_lang('mail_enter_email_code'))
    let pwd = $("#email_pwd").val()
    if (!pwd) return $.alert(unity_lang('mail_enter_password'))
    if (pwd.length < 6) return $.alert(unity_lang('mail_enter_password_tips'))
    $.ajax('/async/account/register/email', {
        datatype: 'text/json',
        type: 'post',
        data: {email: email, code: email_code, password: pwd, pn: pn},
        success: function (result) {
            if (result.state == 0) {
                $.alert(unity_lang('mail_enter_sucessfully'))
                // window.location.replace(register_redirect)
                window.location.href = redirect;
                return
            }
            $.alert(result.message)
        }
    })
}

function reset_pwd(elem){
    let $e = $(elem), url = $e.attr('href')
    $e.attr('href', url + '?redirectUrl=' + redirectUrl)
}