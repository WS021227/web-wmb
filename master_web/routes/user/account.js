
const express = require('express');
const async = require('async');
const tools = require('../../common/util.js')
const config = require('../../common/base_config.js')
const {route} = require("express/lib/application");
const {setCookie} = require("../../common/util");
const router = express.Router();

router.login = function (req, res) {
    let _user = tools.unity_merger_user(res), redirectUrl = req.query.redirectUrl
    if (_user.id) {
        return res.redirect(redirectUrl ? redirectUrl : '/');
    }
    return res.wrender('./user/login.ejs', {
        results: {domain_name: req.protocol + '://' + req.headers.host}
    });
}

router.sign = function(req, res) {
    async.waterfall([
        function (callback) {
            let account = req.body['user_name'], password = req.body['password']
            tools.postMasterApiQuery(
                '/user/login',
                {account: account, password: password, qudao: tools.getCookie(req, '_WLQD')},
                req, res,
                function (result) {
                    if (result.state == 0) {
                        unity_login_cookies(req, res, result.data)
                        callback(null, {state: 0})
                    }else{

                        callback(null, result)
                    }
                }
            )
        }

    ], function (err, results) {
        res.send(results)
    })
}

router.sign_out = function (req, res){
    clear_cookies(req, res)
    res.send({})
}

function clear_cookies(req, res){

    try {
        var cookies_string = req.headers.cookie,ck_match,
            cookie_pattern = new RegExp('(_QUYA|visit_count|_BTK|certi|_WTK)=[^;]+(;\\s*|$)', 'g'), // 定义要匹配的 cookie 的正则表达式
            ck = cookies_string.replace(cookie_pattern, ''); // 去掉所有匹配项
        var cks_pattern = new RegExp(/(\w+)=([^;]+)/g)
        while (( ck_match = cks_pattern.exec(ck))){
            tools.setCookie(req, res, ck_match[1], '', 0, false)
        }
    }catch (e){

    }

}

/**
 * 登录后统一cookies操作
 * @param req
 * @param res
 * @param data
 */
function unity_login_cookies(req, res, data){
    clear_cookies(req, res)
    var token = data.access_token
    var expires = data.expires
    tools.setCookie(req, res, 'access_token', token, expires, true)

}

router.register_page = function (req, res) {

    let _user = tools.unity_merger_user(res), redirectUrl = req.query.redirectUrl
    if (_user.id) {
        return res.redirect(redirectUrl ? redirectUrl : '/');
    }
    return res.wrender('./user/register.ejs', {
        results: {domain_name: req.protocol + '://' + req.headers.host}
    });
}

router.reset_password = function (req, res){
    return res.wrender('./user/reset_password.ejs', {
        results: {domain_name: req.protocol + '://' + req.headers.host}
    });
}
/*获取邮箱验证码*/
router.register_email_verify_code = function (req, res) {
    var data=req.body
    data['send_type'] = 0
    async.waterfall(
        [
            function (callback) {
                tools.unity_send_verify_code(req, res, 'email', data, function (result){
                    callback(null, result)
                })
            }
        ],
        function (err, results) {
            res.send(results)
        }
    )
}
/*注册时获取手机验证码*/
router.register_phone_verify_code = function (req, res) {
    var data=req.body
    console.log(data)

    data['send_type'] = 0
    async.waterfall(
        [
            function (callback) {
                tools.unity_send_verify_code(req, res, 'phone', data, function (result){
                    callback(null, result)
                })
            }
        ],
        function (err, results) {
            res.send(results)
        }
    )
}

//手机注册
router.register_phone = function (req, res) {
    var data=req.body
    delete data.pn
    data['remark'] = 'web端注册'
    var pn = tools.getCookie(req, '_WLQD')
    data['proname'] = pn?pn: tools.getCookie(req, 'promote')
    async.waterfall(
        [
            function (callback) {
                tools.postMasterApiQuery('/account/register/phone' , data,
                    req, res,
                    function (result) {
                        callback(null, result)
                    }
                )
            }
        ],
        function (err, results) {
            if(results.state == 0){
                unity_login_cookies(req, res, results.data)
                results = {state: 0}
            }

            res.send(results)
        }
    )
}

//邮箱注册
router.register_email = function (req, res) {
    var data=req.body
    delete data.pn
    data['remark'] = 'web端注册'
    var pn = tools.getCookie(req, '_WLQD')
    data['proname'] = pn?pn: tools.getCookie(req, 'promote')
    async.waterfall(
        [
            function (callback) {
                tools.postMasterApiQuery('/account/register/email' ,
                    data, req, res,
                    function (result) {
                        callback(null, result)
                    }
                )
            }
        ],
        function (err, results) {
            if(results.state == 0){
                unity_login_cookies(req, res, results.data)
                results = {state: 0}
            }
            res.send(results)
        }
    )
}

// 发送绑定邮箱时的验证码
router.bind_email_verify_code = function (req, res) {
    tools.login_verify(res, 2, function (_user) {
        var data = req.body
        data['send_type'] = 3
        async.waterfall(
            [
                function (callback) {
                    tools.unity_send_verify_code(req, res, 'email', data, function (result) {
                        callback(null, result)
                    })
                }
            ],
            function (err, results) {
                res.send(results)
            }
        )
    })
}

router.bind_email = function (req, res) {
    tools.login_verify(res, 2, function (_user) {
        var data = req.body
        async.waterfall(
            [
                function (callback) {
                    tools.putMasterApiQuery('/account/bind/email',
                        data, req, res,
                        function (result) {
                            callback(null, result)
                        }
                    )
                }
            ],
            function (err, results) {
                res.send(results)
            }
        )
    })
}


/*获取重置密码邮箱验证码*/
router.reset_pwd_email_verify_code = function (req, res) {
    var data=req.body

    tools.postMasterApiQuery('/account/reset/password/email/send/verify/code',
        data, req, res,
        function (result) {
            res.send(result)
        }
    )
}
/*重置密码*/
router.reset_pwd_by_email = function (req, res) {
    var data=req.body

    tools.putMasterApiQuery('/account/reset/password/by/email',
        data, req, res,
        function (result) {
            res.send(result)
        }
    )
}
/*注册时获取手机验证码*/
router.reset_pwd_phone_verify_code = function (req, res) {
    var data=req.body

    tools.postMasterApiQuery('/account/reset/password/phone/send/verify/code',
        data, req, res,
        function (result) {
            res.send(result)
        }
    )
}
/*重置密码*/
router.reset_pwd_by_phone = function (req, res) {
    var data=req.body

    tools.putMasterApiQuery('/account/reset/password/by/phone',
        data, req, res,
        function (result) {
            res.send(result)
        }
    )
}

// 发送绑定手机时的验证码
router.pull_bind_phone = function (req, res) {
    return res.wrender('./pull/bind_phone.ejs');
}

// 发送绑定手机时的验证码
router.bind_phone_verify_code = function (req, res) {
    tools.login_verify(res, 2, function (_user) {
        var data = req.body
        data['send_type'] = 3
        async.waterfall(
            [
                function (callback) {
                    tools.unity_send_verify_code(req, res, 'phone', data, function (result) {
                        callback(null, result)
                    })
                }
            ],
            function (err, results) {
                res.send(results)
            }
        )
    })
}

//绑定手机
router.bind_phone = function (req, res) {
    tools.login_verify(res, 2, function (_user) {
        var data = req.body
        async.waterfall(
            [
                function (callback) {
                    tools.putMasterApiQuery('/account/bind/phone',
                        data, req, res,
                        function (result) {
                            try {
                                if (result.state == 0) tools.setCookie(req, res, 'su_token', '', 0)
                            }catch (e){}
                            callback(null, result)
                        }
                    )
                }
            ],
            function (err, results) {
                res.send(results)
            }
        )
    })
}

function wechat_login_get(req, res, callback) {
    var pn = tools.getCookie(req, '_WLQD'), proname = pn?pn:tools.getCookie(req, 'promote')
    tools.getMasterApiQuery('/third-party/wechat/login/get',
        {proname: proname}, req, res,
        function (result) {
            callback(null, result)
        }
    )
}
// 跳转新页面生成二维码
router.wchart_sign = function (req, res) {
    async.waterfall(
        [
            function (callback) {
                wechat_login_get(req, res, callback)
            }
        ],
        function (err, results) {
            results.domain_name = config.config.domain
            results.redirect_url = req.query.wmb_redirect_url
            return res.wrender('./user/wchart_login.ejs', {
                results: results
            });
        }
    )
}

router.wchart_sign_json = function (req, res) {
    async.waterfall(
        [
            function (callback) {
                wechat_login_get(req, res, callback)
            }
        ],
        function (err, results) {
            res.send(results)
        }
    )
}
/**
 * 微信登录状态验证以及登录
 * @param req
 * @param res
 */
router.wchart_login_verify = function (req, res) {
    let token = req.body.token, qudao = tools.getCookie(req, '_WLQD')
    async.waterfall(
        [
            function (callback) {
                tools.getMasterApiQuery('/third-party/wechat/login/verify',
                    {token: token, is_login: true, qudao: qudao}, req, res,
                    function (result) {
                        callback(null, result)
                    }
                )
            }
        ],
        function (err, results) {
            if(results.state == 0){
                let is_register = results.data.is_register || 0
                unity_login_cookies(req, res, results.data)
                // 第三方登录的需要写入一段 cookies 以此判断是否需要跳转到绑定页面
                let user_id = results.data.user_id
                if(user_id) {
                    tools.setCookie(req, res, 'third', 'thirdreturn=1&thirdid=%s'.format(user_id), 86400, false)
                }
                results = {state: 0, is_register: is_register}
            }
            res.send(results)
        }
    )
}

router.third_login_state = function (req, res) {
    async.waterfall(
        [
            function (callback) {
                tools.postYueApiQuery('/thirdparty_get_state',
                    {type: req.query.type}, req, res,
                    function (result) {
                        callback(null, result)
                    }
                )
            }
        ],
        function (err, results) {
            res.send(results)
        }
    )
}

router.authorization_qq = function (req, res){
    res.wrender('./user/authorization_third.ejs', {title: '腾讯QQ登录', api: 'thirdparty_login_qq'})
}
router.authorization_sina = function (req, res){
    res.wrender('./user/authorization_third.ejs', {title: '新浪微博登录', api: 'thirdparty_login_weibo'})
}

router.third_login = function (req, res) {
    var pn = tools.getCookie(req, '_WLQD')
    req.body['promote'] = pn?pn:tools.getCookie(req, 'promote')
    tools.postMasterApiQuery('/user/login/third', req.body, req, res,
        function (result) {
            if (result.state == 0) {
                unity_login_cookies(req, res, result.data)
                // 第三方登录的需要写入一段 cookies 以此判断是否需要跳转到绑定页面
                let user_id = result.data.user_id
                if(user_id) {
                    tools.setCookie(req, res, 'third', 'thirdreturn=1&thirdid=%s'.format(user_id), 86400, false)
                }
            }
            res.send(result)
        }
    )
}


router.third_return = function (req, res) {
    if(res.locals.wglobals.lang == 'en') return res.status(404).send('error')
    let third = tools.getCookie(req, 'third', 'thirdid')
    if(!third) return res.redirect('/')
    let user = res.locals.wglobals.user;
    if(user.id) {
        if (user.user_name || user.user_phone) {
            res.clearCookie('third')
            return res.redirect('/')
        }
    }
    let result = {redirectUrl: req.query.redirectUrl}
    res.wrender('./user/third_bind.ejs', result)
}

// 第三方注册/登陆 后发送绑定手机时的验证码
router.third_bind_phone_verify_code = function (req, res) {
    tools.login_verify(res, 2, function (_user) {
        tools.postMasterApiQuery('/account/third/send/phone/code',
            req.body, req, res,
            function (result) {
                res.send(result)
            }
        )
    })
}
// 第三方注册/登陆 后发送绑定手机时的验证码
router.third_bind_phone = function (req, res) {
    tools.login_verify(res, 2, function (_user) {
        tools.postMasterApiQuery('/account/third/bind/phone',
            req.body, req, res,
            function (result) {
                res.send(result)
            }
        )
    })
}

// 发送绑定邮箱时的验证码
router.third_bind_email_verify_code = function (req, res) {
    tools.login_verify(res, 2, function (_user) {
        tools.postMasterApiQuery('/account/third/send/email/code',
            req.body, req, res,
            function (result) {
                res.send(result)
            }
        )
    })
}
// 第三方注册/登陆 后发送绑定手机时的验证码
router.third_bind_email = function (req, res) {
    tools.login_verify(res, 2, function (_user) {
        tools.postMasterApiQuery('/account/third/bind/email',
            req.body, req, res,
            function (result) {
                res.send(result)
            }
        )
    })
}


router.experience_start=function (req,res) {
    async.waterfall(
        [
            function (callback) {
                tools.putMasterApiQuery('/account/experience/1', {}, req, res,
                    function (_) {
                        callback(null, 1)
                    }
                )
            }
        ],
        function (err, _) {
            tools.setCookie(req, res, 'su_token', '', 0, false)
            res.wrender('./full_pop/experience_lead.ejs')
        }
    )
}
router.experience_close=function (req,res) {
    tools.login_verify(res, 2, function (){
        tools.putMasterApiQuery('/account/experience/2', {}, req, res,
            function (result) {
                res.send(result)
            }
        )
    })
}
router.experience_pause=function (req,res) {
    tools.login_verify(res, 2, function () {
        tools.putMasterApiQuery('/account/experience/4', {}, req, res,
            function (result) {
                try {
                    if (result.state == 0) {
                        tools.setCookie(req, res, 'su_token', '', 0, false)
                        tools.setCookie(req, res, '_EXP_PAUSE', '1', 86400, false)
                    }
                } catch (e) {
                }
                res.send(result)
            }
        )
    })
}
router.experience_waiver=function (req,res) {
    tools.login_verify(res, 2, function () {
        tools.putMasterApiQuery('/account/experience/5', {}, req, res,
            function (result) {
                try {
                    if (result.state == 0) {
                        tools.setCookie(req, res, 'su_token', '', 0, false)
                        tools.setCookie(req, res, '_EXP_PAUSE', '', 0, false)
                    }
                } catch (e) {
                }
                res.send(result)
            }
        )
    })
}

router.experience_lead_close=function (req,res) {
    let fk = req.query.fk
    if(config.common.experience_lead_mark[fk] != 1) res.statusCode(404).send({})
    tools.login_verify(res, 2, function () {
        tools.change_functional(req, res, fk, 2, function (result) {
            res.send(result)
        })
    })
}
router.verify_child_perms=function (req,res) {
    tools.verify_child_perms(req, res, req.query.mark, function (){
        res.send({state: 0})
    })
}

router.verify_experience_invite=function (req,res) {
    tools.getMasterApiQuery('/orders/buyer/count', {}, req, res,
        function (result) {
            let _count = result.data.count || 0, ck = 'not', state=1
            // _count = 1
            if(_count == 1){
                ck = 'hav'
                state=0
            }
            tools.setCookie(req, res, '_TYV', ck, 86400)
            res.send({state: state, count: _count})
        }
    )
}

router.verify_experience_apply = function (req, res) {
    let _user = tools.unity_merger_user(res), uf = _user.user_functional || {}, mv = uf.mv || ''
    if (!tools.equal_real_vip(_user, 'v')) return res.statusCode(404).send()
    if (!tools.equal_vip_level(mv, 'v')) return res.statusCode(404).send()
    if ((_user.user_functional.eaf == 1 && uf.experience == 4) || _user.user_functional.eaf == 2) {
        return res.send({'state': 1002, message: 'error'})
    }
    if (uf.experience == 2) return res.send({state: 1001})
    if (!_user.user_phone && res.locals.wglobals.lang == 'cn') return res.send({state: 1000, message: '请绑定手机号'})
    async.waterfall(
        [
            function (callback) {
                if (res.locals.wglobals.lang != 'en') return callback(null, 1)
                // 英文站获取用户的社媒账号
                tools.getMasterApiQuery('/account/social', {}, req, res,
                    function (result) {
                        let data = result.data
                        if (!data.facebook && !data.whatsapp) return res.send({
                            state: 1000,
                            message: 'Please sign up for a social media account'
                        })
                        callback(null, 1)
                    }
                )
            },
            function (data, callback) {
                tools.postMasterApiQuery('/account/experience/open',
                    {experience_vip: 'yd', experience_time: 60}, req, res,
                    function (result) {
                        if (result.state != 0) return res.send(result)
                        callback(null, 1)
                    }
                )
            }
        ],
        function (err, _) {
            return res.wrender('./full_pop/experience.ejs', {}, function (err, str) {
                res.send({
                    content: str,
                    state: 0
                })
            })
        }
    )
}

router.experience_remote_add = function (req, res){
    tools.postMasterApiQuery('/account/experience/remote', req.body, req, res, function (result){
        return res.send(result)
    })
}

router.social_account_verify = function (req, res){
    // 英文站获取用户的社媒账号
    tools.getMasterApiQuery('/account/social', {}, req, res,
        function (result) {
            let data = result.data
            if (!data.facebook && !data.whatsapp) {
                return res.wrender('./pull/bind_social_account.ejs', {}, function (err, str) {
                    res.send({
                        content: str,
                        state: 0
                    })
                })
            }
            res.send({state: 0})
        }
    )
}

router.social_account_bind = function (req, res){
    // 英文站获取用户的社媒账号
    tools.postMasterApiQuery('/account/social', {social_account: req.body}, req, res,
        function (result) {
            res.send(result)
        },
        {is_json: true}
    )
}

module.exports = router;