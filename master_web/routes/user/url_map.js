const express = require('express');
const router = express.Router();

const account = require('./account')


/*绑定邮箱*/
router.post('/async/bind/email',account.bind_email)
/*发送邮箱验证码*/
router.get('/async/send/bind-email/code',account.bind_email_verify_code)


//国家更新列表
router.get('/login', account.login)
router.post('/async/sign', account.sign)
router.get('/async/sign-out', account.sign_out)

router.get('/register', account.register_page)
router.get('/reset/password', account.reset_password)
/*获取邮箱验证码*/
router.post('/async/account/register-email/verify-code', account.register_email_verify_code)
/*获取手机验证码*/
router.post('/async/account/register-phone/verify-code', account.register_phone_verify_code)
/*手机注册*/
router.post('/async/account/register/phone', account.register_phone)
/*邮箱注册*/
router.post('/async/account/register/email', account.register_email)

// 获取绑定邮箱验证码
router.post('/async/account/bind-email/verify-code', account.bind_email_verify_code)
// 统一绑定邮箱
router.post('/async/account/bind/email', account.bind_email)


/*获取重置密码的邮箱验证码*/
router.post('/async/account/reset-pwd/email/verify-code', account.reset_pwd_email_verify_code)
router.post('/async/account/reset-pwd/by-email', account.reset_pwd_by_email)
/*获取重置密码的手机验证码*/
router.post('/async/account/reset-pwd/phone/verify-code', account.reset_pwd_phone_verify_code)
router.post('/async/account/reset-pwd/by-phone', account.reset_pwd_by_phone)

// 统侧拉一绑定手机
router.get('/async/pull/bind/phone', account.pull_bind_phone)
// 获取绑定手机验证码
router.post('/async/account/bind-phone/verify-code', account.bind_phone_verify_code)
// 统一绑定手机
router.post('/async/account/bind/phone', account.bind_phone)



// 微信第三方登录
router.get('/wchart/sign', account.wchart_sign)
// 异步获取微信第三方登录二维码信息
router.get('/async/wchart/sign', account.wchart_sign_json)
// 微信第三方登录状态验证
router.post('/async/wechat/login/verify', account.wchart_login_verify)
// 第三方登录获取 state (从邦阅接口获取)
router.get('/async/third/login/state', account.third_login_state)


router.get('/authorization/qq', account.authorization_qq)
router.get('/authorization/sina', account.authorization_sina)
router.post('/async/third/authorization', account.third_login)

// 统一第三方登录外贸邦绑定
router.get('/third/return', account.third_return)
// 第三方登陆后获取绑定手机验证码
router.post('/async/account/third-bind-phone/verify-code', account.third_bind_phone_verify_code)
router.post('/async/account/third-bind/phone', account.third_bind_phone)
// 获取绑定邮箱验证码
router.post('/async/account/third-bind-email/verify-code', account.third_bind_email_verify_code)
router.post('/async/account/third-bind/email', account.third_bind_email)

// 体验账号
router.get('/async/experience/start', account.experience_start)
router.get('/async/experience/close', account.experience_close)
router.get('/async/experience/pause', account.experience_pause)
router.get('/async/experience/waiver', account.experience_waiver)
router.get('/async/experience/lead/close', account.experience_lead_close)
// 邀约体验账号验证
router.get('/async/experience/invite/verify', account.verify_experience_invite)
router.post('/async/experience/invite/apply', account.verify_experience_apply)
router.post('/async/experience/remote/add', account.experience_remote_add)

// 通用子账号权限验证
router.get('/async/verify/child/perms', account.verify_child_perms)
// 英文站邀约体验时需要绑定社交媒体账号
router.get('/sync/social-account/verify', account.social_account_verify)
router.post('/async/social-account/bind', account.social_account_bind)

const user = require("./user");
router.get('/ipush', user.intention_push)

module.exports = router;