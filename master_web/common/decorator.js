/*-----------------------------------------------*
 *                                               *
 *                   装饰器/拦截器                 *
 *                                               *
 ------------------------------------------------*/
const util = require("../common/util");


module.exports = {
    /**
     * 验证是否需要登陆  异步请求不能使用
     * ps: 后期加的，所以很多地方没有使用这个装饰器
     * @returns {(function(*, *, *): void)|*}
     */
    login_required: function (){
        return function (req, res, next){
            var access_token = util.getCookie(req, 'access_token')
            if (!access_token) {
                // /login?redirectUrl=https%3A%2F%2Fwww.52wmb.com%2Fcustoms-data%2Funited_states
                let redirectUrl = encodeURIComponent(util.completeUrl(req)),
                    loc = req.protocol + '://' + req.get('host') + '/login?redirectUrl=' + redirectUrl
                res.writeHead(302, {'Location': loc});
                res.end();
                return
            }
            next()

        }
    },
    sign_required: function (){
        return function (req, res, next){
            var access_token = util.getCookie(req, 'access_token')
            if (!access_token) {
                return res.send({'message': 'need login', state: 302})
            }
            next()

        }
    },

    /**
     * 只有英文
     * @returns {(function(*, *, *): (*|undefined))|*}
     */
    only_en: function () {
        return function only_en(req, res, next) {
            if (res.locals.wglobals.lang !== 'en') return res.status(404).render('error')
            next()
        }
    },
    /**
     * 只有中文
     * @returns {(function(*, *, *): (*|undefined))|*}
     */
    only_cn: function () {
        return function only_cn(req, res, next) {
            if (res.locals.wglobals.lang !== 'cn') return res.status(404).render('error')
            next()
        }
    },

    /**
     * 附加到req
     * @param params
     * @returns {function(*, *, *): *}
     */
    req_extend: function (params) {
        return function req_extend(req, res, next) {
            req.extend_params = params
            return next()
        }
    },
    /**
     * 附加到 res 中的扩展参数, 这个基本是在ejs中调用
     * @param params
     * @returns {function(*, *, *): *}
     */
    res_extend: function (params) {
        return function res_extend(req, res, next) {
            res.locals.extend_params = params
            return next()
        }
    },
    company_detail_reftoken_verify: function () {
        return function reftoken_verify(req, res, next) {
            res.company_perms = true
            let _user = util.unity_merger_user(res)
            // 如果是钻石用户   则可查看全部数据
            if(util.verify_vip_level(_user.vip_level, 'bd', _user.experience))  return next()
            // 非钻石用户则解密数据，进行数据比对，数据对不上当前用户信息、公司信息 则表示为非法访问 reftoken 为加密数据
            let company_id = req.query.id || (req.body.id || 0), reftoken = req.query.reftoken
            // 加密数据为空  则为非法访问
            if(!reftoken) return res.send({state: 30000, message: 'Illegal access'})
            // 解密数据
            let data = util.decrypt(reftoken), token_data = JSON.parse(data)
            // 解密后的数据对比当前公司以及登录用户信息，  不一致则为非法访问
            if(token_data.uid != _user.id) return res.send({state: 3001, message: 'Illegal access; verify uid:' + token_data.uid +', req uid:' + _user.id})
            if(token_data.v != _user.vip_level) return res.send({state: 3002, message: 'Illegal access; verify v:' + token_data.v +'，req v:' + _user.vip_level})
            if(token_data.cid != company_id) return res.send({state: 3003, message: 'Illegal access; verify id:' + token_data.cid +'，req id:' + company_id})
            // if (token_data.uid != _user.id || token_data.v != _user.vip_level || token_data.cid != company_id) {
            //     return res.send({state: 3000, message: 'Illegal access'})
            // }
            res.company_perms = token_data.perms || false
            delete req.query.reftoken
            next()
        }
    },
    line_status: function (){
        return function (req, res, next){
            let _user = util.unity_merger_user(res)
            res.locals.wglobals.nav_active = 'datacenter'
            // 未开通
            if(!_user.bang_line) return res.redirect(302, '/user/line/edit');
            util.getMasterApiQuery('/line/audit', {}, req, res, function (result){
                // 存在未审核或者审核未通过的   0 审核中  2 为审核未通过   1 为审核通过
                if(result.status == 0) return res.redirect(302, '/user/line/edit');
                next()
                // return res.wrender('./home/line/not_open.ejs', {results: result.data})
            })
        }
    }
}



