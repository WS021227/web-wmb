const baseConfig = require('./base_config');
const queryString = require('querystring');
const md5 = require('md5-node');
const {json} = require("express");
const crypto = require('crypto');
const FormData = require('form-data')
const request = require('request')
const multiparty = require("multiparty");
const path = require("path");
const fs = require("fs");
const translator = require("./translator");


const algorithm = 'aes-256-ctr';
const secretKey = 'a41glOcPKAzv037jwTh56BomJ5NU39CS';
const iv = crypto.randomBytes(16);

module.exports = {

    /**
     * 统一获取用户信息
     * @param req
     * @param res
     * @param rsu
     * @param fn
     */
    unity_user: function (req, res, rsu, fn) {
        var access_token = this.getCookie(req, 'access_token') || req.wmb_token
        if (!access_token) return fn()
        let that = this


        that.getMasterApiQuery('/user/info',
            {}, req, res,
            function (result) {
                if (result.state == 0) {
                    let data = result.data || {};
                    res.locals.wglobals.user = data
                    if (data) {
                        that.set_simple_user(req, res, data, rsu)
                    }
                }
                fn()
            }
        )
    },
    /***
     * 写入简单版用户信息
     * @param req
     * @param res
     * @param _user 用户信息
     * @param reload 是否重新设置 su token
     * @param fn 回调方法
     * @returns {}
     */
    set_simple_user: function (req, res, _user, reload) {
        var access_token = this.getCookie(req, 'access_token'),
            simple_user_token = this.getCookie(req, 'su_token'),
            nsur = 0
        try{
            nsur = parseInt(_user.user_functional.nsur || 0)
        }catch (e){
            if(baseConfig.config.api_error) console.log(' >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> set_simple_user', e, _user.user_functional)
        }
        //
        if(simple_user_token){
            // 如果有加密信息  则解密并返回
            let sdata = this.decrypt(simple_user_token)
            try {
                let _simple_user = JSON.parse(sdata)
                if (!(
                    _simple_user.id !=_user.id||
                    _simple_user.vip_level != _user.vip_level ||
                    _simple_user.experience != _user.experience ||
                    _simple_user.bang_line != _user.bang_line
                ) && !reload && nsur != 1 ) {
                    return;
                }
            } catch (e) {
            }
        }

        let simple_user = {
                id: _user.id, contact: _user.contact, vip_level: _user.vip_level,
                account_type: _user.account_type, token: access_token,
                verifi: _user.verifi, extended_auth: _user.extended_auth,
                is_experience: _user.experience ? 1 : 0, experience: _user.experience
            },
            text = this.encrypt(JSON.stringify(simple_user))

        this.setCookie(req, res, 'su_token', text, 7200)
        res.locals.wglobals.simple_user = simple_user;
        if(nsur == 1){
            this.change_functional(req, res, 'nsur', 2)
        }
    },
    /**
     * 异步请求时 为了减少用户数据的请求数， 这里提取常用的部分用户数据进行加密存储再cookies
     * @param req
     * @param res
     * @param fn
     * @returns {boolean}
     */
    simple_user: function (req, res, fn) {
        var access_token = this.getCookie(req, 'access_token'),
            simple_user_token = this.getCookie(req, 'su_token'), //
            that = this
        if (!simple_user_token) return fn()
        // 如果有加密信息  则解密并返回
        try {
            let data = this.decrypt(simple_user_token)
            let _simple_user = JSON.parse(data)
            if (_simple_user.token != access_token ) {
                return that.unity_user(req, res, true, fn)
            }
            res.locals.wglobals.simple_user = _simple_user
            fn()
        } catch (e) {
            fn()
        }
    },
    /**
     * 统一获取用户信息， 全量用户信息没有的情况下获取简单版用户信息
     * @param res
     * @returns {{}|{user_id, contact: (string|*), vip_level: *, token: *}|*}
     */
    unity_merger_user: function (res) {
        return this._unity_merger_user(res.locals.wglobals)
    },
    _unity_merger_user: function (_wglobals) {
        return Object.assign(_wglobals.simple_user || {}, _wglobals.user);
    },
    /**
     * 统一修改功能参数接口
     * @param req
     * @param res
     * @param key 功能键
     * @param value 功能值
     * @param fn
     */
    change_functional: function (req, res, key, value, fn) {
        this.putMasterApiQuery(
            '/user/functional', {key: key, value: value},
            req, res, fn
        )
    },
    postMasterApiQuery: function (api, data, req, res, fn, options) {
        var url = baseConfig.config.master_api;
        try {
            this.wApi(url + api,
                'POST',
                data, req, res,
                function (_data) {
                    try {
                        fn != undefined && fn(_data);
                    } catch (e) {
                        if(baseConfig.config.api_error) console.error(' >>>>>> 数据处理异常，postMasterApiQuery >> ', api, e)
                        res.wabortApi(404, req, e)
                    }
                },
                options
            )
        } catch (e) {
            if(baseConfig.config.api_error) console.log('postMasterApiQuery', e)
        }
    },
    /**
     *
     * @param api
     * @param data
     * @param req
     * @param res
     * @param fn
     * @param options
     */
    putMasterApiQuery: function (api, data, req, res, fn, options) {
        var url = baseConfig.config.master_api;
        this.wApi(
            url + api,
            'PUT',
            data, req, res,
            function (_data) {
                try {
                    fn != undefined && fn(_data);
                } catch (e) {
                    if(baseConfig.config.api_error) console.error(' >>>>>> 数据处理异常，putMasterApiQuery >> ', api, e)
                    res.wabortApi(404, req, e)
                }
            },
            options
        )
    },
    deleteMasterApiQuery: function (api, data, req, res, fn, options) {
        var url = baseConfig.config.master_api;
        this.wApi(
            url + api,
            'DELETE',
            data, req, res,
            function (_data) {
                try {
                    fn != undefined && fn(_data);
                } catch (e) {
                    if(baseConfig.config.api_error) console.error(' >>>>>> 数据处理异常，deleteMasterApiQuery >> ', api, e)
                    res.wabortApi(404, req, e)
                }
            },
            options
        )
    },
    getMasterApiQuery: function (api, data, req, res, fn, options) {
        options = options || {}
        var url = baseConfig.config.master_api;
        this.wApi(
            url + api, 'GET', data, req, res,
            function (_data) {
                try {
                    fn != undefined && fn(_data);
                } catch (e) {
                    if(baseConfig.config.api_error) console.error(' >>>>>> 数据处理异常，getMasterApiQuery >> ', api, e)
                    // res.wabortApi(404, req, e)
                }
            },
            options
        )
    },
    // 封装外贸邦api请求
    wApi: function (url, method, data, request, resp, fn, options) {
        options = options || {}
        options['has_login'] = options.has_login != null ? options.has_login : true
        //
        let headers = this.wApiHeaders(request, resp, options.has_login, {})
        this.httpQuery(url, method, data, fn, options, headers)
    },
    /**
     * 获取请求的IP
     * @param request  req
     * @param resp res
     * @param has_login 是否获取登录用户信息
     * @param headers
     * @returns {{"client-lang": *, "client-device": (string|*)}}
     */
    wApiHeaders: function (request, resp, has_login, headers) {
        headers['client-device'] = resp.locals.wglobals.device
        headers['client-lang'] = resp.locals.wglobals.lang
        headers['client-ip'] = resp.locals.wglobals.client_ip
        headers['client-area'] = resp.locals.wglobals.ip_area || 'ZZ'
        headers['client-port'] = resp.locals.wglobals.client_port
        // 校验code  可以不定期更换
        headers['auth-code'] = 'Wt4x{CZS=^h+8ry~735!FnT1EjfR6zM9'
        var access_token = this.getCookie(request, 'access_token') || request.wmb_token
        if (has_login && access_token) {
            headers["access-token"] = access_token
        }
        try {
            headers['client-ua'] = request.headers['user-agent']
        } catch (e) {
        }
        return headers
    },
    /**
     * 邦阅接口
     * @param api
     * @param data
     * @param req
     * @param res
     * @param fn
     * @param options
     */
    postYueApiQuery: function (api, data, req, res, fn, options) {
        options = options || {}
        var url = baseConfig.config.yue_api;
        data['security_code'] = baseConfig.config.yue_code
        let headers = {
            'WMBCLIENT': this.get_client_ip(req),
            'WMBPORT': this.get_client_port(req),
            'Connection': 'keep-alive'
        }

        try {
            headers['WMBAGENT'] = req.headers['user-agent']
        } catch (e) {
        }

        this.httpQuery(url + api, 'POST', data, function (result) {
            try {
                fn != undefined && fn(result);
            } catch (e) {
                if(baseConfig.config.api_error) console.error(' >>>>>> 数据处理异常，postMasterApiQuery >> ', api, e)
                res.wabortApi(404, req, e)
            }
        }, options, headers)
    },
    /**
     * 封装http请求
     * @param url
     * @param method
     * @param data
     * @param fn
     * @param options
     * @param headers
     */
    httpQuery: function (url, method, data, fn, options, headers) {
        headers = headers || {}
        options = options || {}
        let is_json = options.is_json != null ? options.is_json : false
        let content, content_type;
        if (is_json) {
            content = JSON.stringify(data)
            content_type = 'application/json'
        } else {
            content = require('querystring').stringify(data);
            content_type = 'application/x-www-form-urlencoded'
        }
        var parse_u = require('url').parse(url, true);
        var isHttp = parse_u.protocol == 'http:';
        var http = require(isHttp ? 'http' : 'https');
        headers = Object.assign(headers, {
            'Content-Type': content_type,
            'Content-Length': Buffer.byteLength(content)
        })
        var _options = {
            host: parse_u.hostname,
            port: parse_u.port || (isHttp ? 80 : 443),
            path: parse_u.path + (method == 'GET' ? '?' + content : ''),
            method: method,
            headers: headers,
        };
        const req = http.request(_options, function (res) {
            res.setEncoding('utf8');
            var _data = '';
            res.on('data', function (chunk) {
                _data += chunk;
            });
            res.on('end', function () {
                let result = {state: 10000}
                if (this.statusCode == 200) {
                    try {
                        result = JSON.parse(_data)
                        if(result.state != 0 && baseConfig.config.api_error) console.log(' state != 0', result, url)
                    } catch (e) {
                        if(baseConfig.config.api_error) console.error('request JSON parse error', e, url)
                    }
                } else {
                    result['message'] = 'statusCode != 200 is ' + this.statusCode
                    if(baseConfig.config.api_error) console.error(result['message'])
                }
                fn != undefined && fn(result);
            });
        });
        req.on('error', (e) => {
            if(baseConfig.config.api_error) console.error(' on error', e, url)
            fn != undefined && fn({"state": 10000, "message": "error 1"});
        })
        req.on('timeout', (e) => {
            if(baseConfig.config.api_error) console.error(' on timeout', e, url)
            fn != undefined && fn({"state": 10001, "message": "error 2"});
        })
        req.write(content);
        req.end();
    },
    unity_send_email: function (req, res, api, title, content, address, cc, send_type, callback) {
        let params = {
            req: api,
            title: title,
            content: content,
            address: address,
            cc: cc,
            send_type: send_type
        }
        this.httpQuery(baseConfig.common.send_service, 'POST', params, function (result) {
            if (callback) callback(result)
        })
    },

    /**
     * 统一发送验证码，除修改绑定的验证码
     * @param req
     * @param res
     * @param type email / phone
     * @param params 参数
     * @param callback
     */
    unity_send_verify_code: function (req, res, type, params, callback) {
        this.postMasterApiQuery('/account/send/' + type + '/code',
            params, req, res,
            function (result) {
                try {
                    callback(result)
                } catch (e) {
                    res.wabort(404, req)
                }
            }
        )
    },
    getCookie: function (req, name, key) {
        if (!req.headers.cookie) return null

        var reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)"),
            arr = req.headers.cookie.match(reg)

        if (arr != null && arr[2] != null && arr[2] != '') {
            var str_arr = decodeURIComponent(arr[2].replace('"', '').replace('"', ''))
            if (key != null) {
                var key_reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)", "i");
                var value = str_arr.match(key_reg)[2]
                return value
            }
            if (arr != null) return (str_arr);
        }
        return "";
    },
    setCookie: function (req, res, key, value, expires, httponly) {
        var _domain = baseConfig.config.domain
        res.cookie(key, value, {
            maxAge: expires * 1000,
            path: '/',
            domain: _domain,
            httpOnly: httponly
        });
    },
    url_stringify: function (obj, not_keys) {
        if (not_keys != null) {

            not_keys.forEach(function (key) {
                delete obj[key]
            })
        }
        return queryString.stringify(obj)
    },
    tag_url_stringify: function (obj, not_keys) {
        if (not_keys != null) {

            not_keys.forEach(function (key) {
                delete obj[key]
            })
        }
        return queryString.stringify(obj)
    },
    show_country: function (country) {
        if (country == '' || country == null) return 'Other'
        var _country = {
            'taiwan': 'China Taiwan',
            'hong kong': 'China Hong kong',
            'macao': 'China Macao'
        }[country.toLowerCase()]
        return _country != null ? _country : country
    },
    /**
     * 数字超千位处理成 k
     * @param value
     * @returns {string|number}
     */
    node_thousand: function (value) {
        if (typeof value != "number") value = Number(value)
        if (value < 1000) return value
        return (value / 1000).toFixed(2) + 'K'

    },
    /**
     * 获取完整url
     * @param req
     * @returns {string}
     */
    completeUrl: function (req) {
        return req.protocol + '://' + req.get('host') + req.originalUrl;
    },
    /**
     * 获取当前路由对应的语言
     * @param req
     */
    wLang: function (req) {
        var subDomain = req.headers.host.split('.')[0];
        //
        return subDomain === 'new' || subDomain === 'www' || subDomain === '127' || subDomain === '192'|| subDomain === 'm' ? 'cn' : 'en'

    },
    format: function (str, step, splitor) {
        str = str.toString();
        var len = str.length;
        if (len > step) {
            var l1 = len % step,
                l2 = parseInt(len / step),
                arr = [],
                first = str.substr(0, l1);
            if (first != '') {
                arr.push(first);
            }
            ;
            for (var i = 0; i < l2; i++) {
                arr.push(str.substr(l1 + i * step, step));
            }
            ;
            str = arr.join(splitor);
        }
        ;
        return str;

    },
    wPromote: function (req, res) {
        let promote = this.getCookie(req, 'promote')
        if (promote) return;
        let _complete_url = this.completeUrl(req).split('?')[0]
        if (_complete_url.indexOf('cookie/set') >= 0) return;
        promote = req.query.s || ''
        try{
            let url_pro = decodeURIComponent(promote)
            var parse_u = require('url').parse(url_pro, true);
            promote = parse_u.host?parse_u.host:promote
        }catch (e){
        }
        if (!promote) {
            let http_referer = req.headers.referer || ''
            try {
                if (http_referer) {
                    let ref_parse = require('url').parse(decodeURIComponent(http_referer), true),
                        ref_host = ref_parse.host ? ref_parse.host : ''

                    promote = ref_host ? (baseConfig.config.hosts.indexOf(ref_host) >=0?'auto': ref_host) : 'auto'
                } else {
                    promote = 'auto'
                }
            }catch (e){
                promote = 'auto'
            }
        }
        promote = promote || 'auto'
        this.setCookie(req, res, 'promote', promote, 86400)

    },
    wLoginQuDao: function (req, res) {
        var wlqd = this.getCookie(req, '_WLQD')
        if (wlqd) return;
        wlqd = req.query.login || ''
        this.setCookie(req, res, '_WLQD', wlqd, 86400)
    },
    wIpCountry: function (req, res, callback) {
        let client_ip = res.locals.wglobals.client_ip, that = this
        that.getMasterApiQuery('/common/ip/country/' + client_ip, {}, req, res, function (result) {
            let country = (result.data || {}).country || 'ZZ',
                country_text = that.encrypt(JSON.stringify({area: country}))

            that.setCookie(req, res, '_QUYA', country_text, 86400)
            callback(country)
        })
    },
    wIpArea: function (req, res, callback) {
        let _user = this.unity_merger_user(res), user_id = _user.id || 0,
            white_uid = baseConfig.common.ip_area_white_uid[user_id]
        if (white_uid) return callback(white_uid)
        let client_ip = res.locals.wglobals.client_ip
        // 验证全段ip白名单
        if (baseConfig.common.white_ips_all[client_ip]) return callback('ZZ')
        // 验证前3个ip段
        let ip_bf = client_ip.split('.').slice(0, 3).join('.')
        if (baseConfig.common.white_ips_before[ip_bf]) return callback('ZZ')
        // 加密在cookies中的
        let cip_area = this.getCookie(req, '_QUYA'), that = this
        // 没有IP cookies 信息，则获取，然后加密
        if (!cip_area) return that.wIpCountry(req, res, callback)
        // 解密
        let crypt_data = this.decrypt(cip_area), ip_info = {}
        try {
            ip_info = JSON.parse(crypt_data)
        } catch (e) {
        }
        if (!ip_info.area) return that.wIpCountry(req, res, callback)
        callback(ip_info.area)
    },
    /**
     * 印度数据屏蔽
     * @param country
     * @param res
     * @param scene  场景  公司搜索  公司详情  公司列表
     */
    india_offline: function (res, country, scene) {
        if (country) {
            var lower_country = country.toLocaleLowerCase()
            if(!(lower_country == 'india' || lower_country == 'india new')) return 0
        }
        //  如果为登陆用户，则判断是否开通了特殊权限， 没有特殊权限且没有登陆的则无法看到
        let _user = this.unity_merger_user(res)
        // 未登录  公司只能看 2016-12-31之前的数据，
        if (!_user.id) return scene == 'company_detail'?1: (res.locals.wglobals.ip_area != 'IN'?0:2)
        // 特殊权限
        if (this.extended_auth(_user, 'unlock_india_data_new')) return 3
        // 老特殊权限-相当于黑名单
        if (this.extended_auth(_user, 'unlock_india_data')) return 2
        if (res.locals.wglobals.ip_area != 'IN') return 0
        // 无权查看
        return 2
    },
    country_offline: function (res, country, scene, callback) {
        let results = {}, params = {}
        results.india_offline = this.india_offline(res, country, scene)
        if (results.india_offline == 2 || results.india_offline == 1) {
            results.screen = 'india'
            results.screen_new = 'india new'
            results.raw_screen = 'india'
            results.company_screen = 'philippines'
            params.off_line_counties = 'india'
        } else if (res.locals.wglobals.ip_area == 'PH') {
            params.off_line_counties = 'philippines'
            results.screen = 'philippines'
            results.company_screen = 'philippines'
            results.raw_screen = 'philippines'
        }else if (res.locals.wglobals.ip_area == 'TR') {
            results.screen = 'turkey'
        } else if (res.locals.wglobals.ip_area == 'CN') {
            results.screen = 'china'
            results.company_screen = 'china'
        }else if (res.locals.wglobals.ip_area == 'ID') {
            results.screen = 'indonesia'
        }
        callback(results, params)
    },
    /**
     * 获取设备信息
     * @param req
     * @returns {{is_wechat: boolean, device: string}}
     */
    wDevice: function (req) {
        var subDomain = req.headers.host.split('.')[0],deviceAgent = req.headers['user-agent'].toLowerCase()
        if(subDomain == 'm'){
            return {device: 'mobile', is_wechat: deviceAgent.indexOf('micromessenger') >= 0}
        }
        var _match = deviceAgent.match(/googlebot-mobile|android|avantgo|blackberry|blazer|elaine|hiptop|ip(hone|od)|kindle|midp|mmp|mobile|o2|opera mini|palm( os)?|pda|plucker|pocket|psp|smartphone|symbian|treo|up\.(browser|link)' + |vodafone|wap|windows ce; (iemobile|ppc)|xiino|maemo|fennec/)
        if (_match != null) {
            return {device: 'mobile', is_wechat: deviceAgent.indexOf('micromessenger') >= 0}
        }
        return {device: 'pc', is_wechat: false}
    },
    /**
     * 浏览次数
     * @param req
     * @param res
     */
    sVisitCount: function (req, res) {
        let visit_count = parseInt(this.getCookie(req, 'visit_count') || 0)
        visit_count++;
        this.setCookie(req, res, 'visit_count', visit_count, 86400)
        var access_token = this.getCookie(req, 'access_token')
        if (access_token) {
            this.postMasterApiQuery('/common/view/page', {
                url: this.completeUrl(req), refferr_url: req.headers.referer, explorer: req.headers['user-agent']
            }, req, res, function (_) {
            })
        }
    },
    /**
     * 获取真实IP
     * @param req
     * @returns {string}
     */
    get_client_ip: function (req) {
        // return '162.221.197.136'
        return (req.headers['x-real-ip'] || req.headers['x-forwarded-for'] || req.ip || req.socket.remoteAddress).match(/\d+\.\d+\.\d+\.\d+/)[0]
    },
    /**
     * 获取真实源端口
     * @param req
     * @returns {string}
     */
    get_client_port: function (req) {
        return req.headers['x-real-port'] || req.socket.remotePort
    },
    /**
     * 初始化全局数据
     * @param req
     * @param res
     */
    init_wglobals: function (req, res) {
        var wmb_token = req.query['52wmb_token'], _access_token = this.getCookie(req, 'access_token')
        if(wmb_token && !_access_token) {
            req.wmb_token = wmb_token
            this.setCookie(req, res, 'access_token', wmb_token, 86400, true)
        }
        res.locals.wglobals = {user: {}, lang: this.wLang(req), client_ip: this.get_client_ip(req), client_port: this.get_client_port(req)}
        res.locals.wglobals = Object.assign(this.wDevice(req), res.locals.wglobals)
        res.locals.wglobals.static = baseConfig.config.static
        let _now = new Date()
        res.locals.wglobals.is_df = baseConfig.config.df_st <= _now && _now <= baseConfig.config.df_et
        res.locals.wglobals.dff = baseConfig.config.df_st <= _now && _now <= baseConfig.config.df_pet
        this.wPromote(req, res)
        this.wLoginQuDao(req, res)
    },
    /**
     * 验证该请求是否需要获取用户信息
     * @param req
     * @param res
     * @returns {boolean}
     */
    request_access_user: function (req, res) {
        // if(req.path.indexOf('/login') >= 0) return false
        if (req.path.indexOf('/sign') >= 0) return false
        let async = req.headers['x-requested-with'] === 'XMLHttpRequest'
        req.async = async
        if (!async) {
            this.sVisitCount(req, res);
            return true;
        }
        let wtype = req.headers.wtype
        return wtype === '2';

    },
    /**
     * 百度翻译
     * @param fn
     * @param words
     * @param translate_from
     * @param translate_to
     */
    baidu_translate: function (fn, words, translate_from, translate_to) {
        let bd_accounts = baseConfig.common.baidu_account, bd_index = baseConfig.common.bd_index,
            bd_account = bd_accounts[bd_index[Math.round(Math.random() * bd_index.length)]],
            salt = Date.now()
        // bd_account = bd_accounts[2]
        var parameters = {
                'q': words,
                'from': translate_from,
                'to': translate_to,
                'appid': bd_account['appid'],
                'salt': salt,
                'sign': md5(bd_account['appid'] + words + salt + bd_account['key'])
            }
        this.httpQuery(
            'https://api.fanyi.baidu.com/api/trans/vip/translate',
            'post',
            parameters,
            function (result) {
                console.log(bd_account['appid'], result)
                let trans_resultds = result.trans_result || {},
                    item = trans_resultds.length > 0 ? trans_resultds[0] : {},
                    dst = item.dst || words
                fn(dst)
            }
        )
    },
    /**
     * 上传文件到接口
     * @param api
     * @param req
     * @param res
     * @param options
     */
    api_upload_file: function (api, req, res, options) {
        let _from = new multiparty.Form(), that = this, callback = options.callback
        _from.parse(req, function (err, fields, files) {
            if (err) {
                callback({message: 'error', state: 10002})
                return;
            }
            let avatar_files = files[options.file_field] || []
            if (avatar_files.length <= 0) {
                callback({message: 'not image', state: 10000})
                return;
            }

            let rfile = avatar_files[0],
                filePath = rfile.path,
                // originalFilename = rfile.originalFilename,
                // newPath = path.join(path.dirname(filePath), originalFilename),
                eFields = options.eFields || [], // 传递到接口需要的扩展字段 由前端传递
                params = options.params // 传递到接口需要的扩展字段，后端自定义
            let file = fs.createReadStream(filePath) //创建读取流
            let form = new FormData() // new form data实例
            form.append('file', file) // 把文件加入到form data实例中
            eFields.forEach(function (f, _) {
                let _extend = fields[f] || [], eValue = _extend.length > 0 ? _extend[0] : null;
                if (eValue) {
                    form.append(f, eValue)
                }
            })
            if (params) {
                for (var key in params) {
                    if(typeof params[key] == 'string' || typeof params[key] == 'number') {
                        form.append(key, params[key])
                    }
                }
            }
            that.submit_upload_file(api, req, res, form, callback)
        })
    },

    submit_upload_file: function (api, req, res, form, callback) {
        let headers = this.wApiHeaders(req, res, true, form.getHeaders())

        request(baseConfig.config.master_api + api, {
            method: 'post',
            body: form,
            headers: headers  //form data的headers
        }, function (error, response, body) {
            let resp = {}
            try{
                resp = JSON.parse(body)
            }catch (e){
                resp = {message: 'error'}
            }
            callback(resp)
        })
    },
    /**
     验证用户权限
     * @param res
     * @param nv
     * @param exp
     * @returns {*}
     */
    user_authority(res, nv, exp = true) {
        return this.verify_authority(this.unity_merger_user(res), nv, exp)
    },
    /**
     * 验证用户权限
     * @param user 用户信息
     * @param nv  所需vip
     * @param exp 是否验证体验权限
     */
    verify_authority: function (user, nv, exp = true) {
        let vip_level = user && user.id ? user.vip_level : ''
        return this.verify_vip_level(vip_level || '', nv, exp ? user.experience : '')
    },
    /**
     * 子账号权限统一验证
     * @param req
     * @param res
     * @param perms_mark
     * @param callback
     */
    verify_child_perms: function (req, res, perms_mark, callback) {
        let user = this.unity_merger_user(res)
        if (user.account_type == 1) return callback()
        this.getMasterApiQuery('/permissions/child/verify', {mark: perms_mark}, req, res,
            function (result) {
                if (result.state !== 0) return res.send({
                    state: 22000,
                    message: translator.translate(res, 'share_child_not_perms')
                })
                callback()
            })
    },
    /**
     * 验证用户权限
     * @param nv  所需vip
     * @param exp 是否验证体验权限
     */
    ejs_verify_authority: function (nv, exp = true) {
        let that = this.UTIL
        return that.verify_authority(that._unity_merger_user(this.wglobals), nv, exp)
    },
    equal_real_vip: function (user, nv) {
        return this.equal_vip_level(user.vip_level, nv)
    },
    ejs_equal_real_vip: function (nv) {
        let that = this.UTIL
        return that.equal_vip_level(this.wglobals.user.vip_level, nv)
    },
    verify_real_vip: function (res, nv) {
        let user = this.unity_merger_user(res)
        return this.verify_authority(user, nv, '')
    },
    ejs_verify_real_vip: function (nv) {
        let that = this.UTIL
        return that.verify_authority(this.wglobals.user, nv, '')
    },
    /**
     *
     * @param vip
     * @param nv
     * @param experience 如果不验证体验账号等级权限， 则传false
     * @returns {*|boolean}
     */
    verify_vip_level: function (vip, nv, experience = '') {
        let vip_auth = baseConfig.common.vipMarkLevel[vip] >= baseConfig.common.vipMarkLevel[nv]
        if (vip_auth) return true
        return baseConfig.common.vipMarkLevel[experience] >= baseConfig.common.vipMarkLevel[nv]
    },
    equal_vip_level: function (vip, nv) {
        return baseConfig.common.vipMarkLevel[vip] == baseConfig.common.vipMarkLevel[nv]
    },
    extended_auth: function (_user, auth) {
        if (!_user) return false
        if (!_user.id) return false
        try {
            return _user.extended_auth[auth] == 'true'
        } catch (e) {
            return false
        }
    },
    ejs_extended_auth: function (auth) {
        let that = this.UTIL
        return that.extended_auth(this.wglobals.user, auth)
    },
    ejs_company_descript_clear: function (text) {
        let that = this.UTIL
        return that.space_repeat_remove(that.clear_html(text))
    },
    clear_html: function (text) {
        return text.replace(/<[^>]+>/gi, '')
    },
    space_repeat_remove: function (text) {
        return text.replace(/[\s]+/gi, ' ')
    },
    ucfirst: function (str) {

        var arr = str.split(" ");
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
            str = arr.join(" ");
        }
        return str;

    },
    ejs_raw_bill_encrypt(bill_id) {
        let that = this.UTIL, _user = that._unity_merger_user(this.wglobals)
        let data = {id: bill_id, uid: _user.id || 0, ip: this.wglobals.client_ip, d: new Date().getTime()}
        return that.encrypt(JSON.stringify(data))
    },
    ejs_url_encrypt(text) {
        if(!text) return ''
        for(var ri=0; ri<baseConfig.common.fuck_url_regs.length; ri++){
            var mt = text.match(baseConfig.common.fuck_url_regs[ri])
            if(mt) {
                for (var i = 0; i < mt.length; i++) {
                    var cmt = mt[i], _rg = new RegExp(cmt)
                    text = text.replace(_rg, '<wmb-cf> ' + cmt.bd_encode() + '</wmb-cf>')
                }
            }
        }
        return text
    },
    /**
     * crypto 加密
     * @param data 加密数据
     * @param options:
     *         algorithm 是算法的意思
     */
    encrypt: function (data, options) {
        try {

            let cipher = crypto.createCipheriv(algorithm, secretKey, iv); 	// 创建 cipher 实例
            // 加密数据
            const encrypted = Buffer.concat([cipher.update(data), cipher.final()]);
            let iv_hex = iv.toString('hex')
            return encrypted.toString('hex') + iv_hex;
        }catch (e){
            return ''
        }

        // options = options || {};
        // let password = crypto.randomBytes(16).toString('hex');  // password是用于生产密钥的密码
        // let salt = crypto.randomBytes(16).toString('hex'); // 生成盐值
        // let iv = crypto.randomBytes(8).toString('hex'); // 初始化向量
        // let algorithm = options.algorithm || 'aes-128-cbc';
        // let derivedKey = crypto.scryptSync(password, salt, 16)
        //
        // let cipher = crypto.createCipheriv(algorithm, derivedKey, iv); 	// 创建 cipher 实例
        // const encrypted = Buffer.concat([cipher.update(data, ), cipher.final()])
        // // let cipherText = cipher.update(data, 'utf8', 'hex');
        // // cipherText += cipher.final('hex');
        // // cipherText += (password + salt + iv);
        //
        // return encrypted.toString('hex') + (password + salt + iv)
    },
    /**
     * crypto解密
     * @param cipherText
     * @param options
     *         algorithm 是算法的意思
     */
    decrypt: function (cipherText, options) {
        try {
            let iv_hex =  cipherText.slice(-32),  // 获取初始化向量
                data = cipherText.slice(0, (cipherText.length - 32));   //获取密文
            const decipher = crypto.createDecipheriv(algorithm, secretKey, Buffer.from(iv_hex, 'hex'));
            const decrypted = Buffer.concat([decipher.update(Buffer.from(data, 'hex')), decipher.final()]);
            return decrypted.toString();
        }catch (e){
            return null
        }

        // options = options || {};
        // let iv = cipherText.slice(-16);  // 获取初始化向量
        // let salt = cipherText.slice(-48, -16);  // 获取盐值
        // let password = cipherText.slice(-80, -48); // 获取密钥密码
        // let data = cipherText.slice(0, -80);  //获取密文
        // let algorithm = options.algorithm || 'aes-128-cbc';
        // let derivedKey = crypto.scryptSync(password, salt, 16)
        // let decipher = crypto.createDecipheriv(algorithm, derivedKey, iv); 	// 创建 decipher 实例
        // // 解密数据
        // const decrypted = Buffer.concat([decipher.update(Buffer.from(data, 'hex')), decipher.final()]);
        // // let txt = decipher.update(data, 'hex', 'utf8');
        // // txt += decipher.final('utf8');
        // return decrypted.toString()
    },
    /**
     *
     * @param res
     * @param type  1是直接跳转 2是返回错误信息
     * @param callback
     */
    login_verify: function (res, type, callback) {
        let _user = this.unity_merger_user(res)
        if (!_user.id) {
            if (type == 1) return res.redirect('/login');
            return res.send({state: 200})
        }
        callback(_user)
    },
    get_time_interval_duration: function (s, e) {
        try {
            s = typeof s != 'Date' ? new Date(s) : s
            e = typeof e != 'Date' ? new Date(e) : e
        } catch (e) {
            return ''
        }
        let interval = (e - s) / 1000,// 秒数
            days = interval * 86400  // 天
        if (days >= 1) return days + '' + translator.translate('share_date_days')
        if (interval >= 3600) return (interval / 3600).toFixed(1) + '' + translator.translate('share_date_hours')
        if (interval >= 60) return (interval / 60).toFixed(1) + '' + translator.translate('share_date_minutes')
        return interval + '' + translator.translate('share_date_seconds')
    },
    get_star: function (num) {
        if (num < 60) return '20'
        if (num <= 68) return '25'
        if (num <= 74) return '30'
        if (num <= 79) return '35'
        if (num <= 85) return '40'
        if (num <= 90) return '45'
        return '50'
    },
    /**
     *  非阻塞休眠
     * @param ms
     */
    sleep: function (ms){
        return new Promise(resolve => setTimeout(resolve,ms));
    },
    /**
     * 非堵塞休眠开启
     * @param ms
     * @returns {Promise<void>}
     */
    sleep_start: async function(ms){
        await this.sleep(ms);
    },
    get_wx_open_id: function (code, fun){

        // let form = new FormData() // new form data实例
        // form.append('appid', baseConfig.config.wx_app_id)
        // form.append('secret', baseConfig.config.wx_app_secret)
        // form.append('code', code)
        // form.append('grant_type', 'authorization_code')
        let params = {
            appid: baseConfig.config.wx_app_id,
            secret: baseConfig.config.wx_app_secret,
            code: code,
            grant_type: "authorization_code"
        }

        // request('https://api.weixin.qq.com/sns/oauth2/access_token', {
        //     method: 'post',
        //     body: form,
        // }, function (error, response, body) {
        //     fun(JSON.parse(body))
        // })
        this.httpQuery('https://api.weixin.qq.com/sns/oauth2/access_token', 'post', params, fun)
    },
    pos_show: function (data){
        if(data.ip_country_name && data.ip_pro_name) return data.ip_country_name + ' ' + data.ip_pro_name
        return data.country
    },
    line_route(){
        return baseConfig.config.line_host + (this.wglobals.lang == 'cn' ? '' : '/en')
    },
    wstats: function (req, res, collect){

        let _that = this, _user = _that.unity_merger_user(res), _ef = Number(_user.is_experience || 0)
        if (!collect) return
        _that.postMasterApiQuery('/common/wstats', {
                collect: collect,
                promote: _that.getCookie(req, 'promote') || 'auto',
                source: 0, ef: _ef,
                vip: _user.vip_level || '',
            }, req, res
        )
    },
    prov_url: function (){
        return baseConfig.config.prov_url.replace('@host', this.wglobals.lang == 'cn'?'www':'en')
    },
    prov_md5: function (req){
        return  md5(this.get_client_ip(req))
    },
    check_prov: function (req){
        var r,t=0,e=this.prov_md5(req);for(r=e.length-1;r>=0;r--)t^=(t>>5)+e.charCodeAt(r)+(t<<2);return t
    },
    three_year: function (_user){
        var user_functional =  _user.user_functional || {}, user_stage = _user.og_user_stage
        // 当前是钻石不弹
        if(this.verify_authority(_user, 'bd', false)) return 0
        // 曾经没有购买过钻石的不弹
        if (!this.verify_vip_level(user_functional.mv, 'bd') || user_stage == 0) return 0
        var dty = user_functional.dty // 领取的过期时间
        // 未领取
        if(!dty){
            // 获取钻石的过期时间
            let ldet = user_functional.ldet || (user_functional.lvet || '')
            if (!ldet) return 0
            let date_ldet = new Date(ldet)
            if (!(date_ldet instanceof Date)) return 0
            // 过期时间小于一年  不弹
            if(new Date() - date_ldet < 86400000 * 365) return 0
            return 1
        }
        // 已领取 未使用 （已使用则当前为钻石用户）
        let date_dty = new Date(dty)
        if (!(date_dty instanceof Date)) return 0
        // 已过期则不弹
        if(date_dty <= new Date()) return 0
        return dty
    },
    quarter_activities: function (req, res, fn) {
    // 2023.3月活动
        var _user = res.locals.wglobals.user,
            user_functional = _user.user_functional || {},
            now_time = new Date(),
            register_time = new Date(_user.create_time),
            _mv = user_functional.mv
    if(!_user.id) return fn(0)
    // 是否在活动期间
    if (now_time <= baseConfig.config.cj_start_time || now_time >= baseConfig.config.cj_end_time) return fn(0)
    if(this.verify_vip_level(_mv, 'bd')) return fn(0)
    // 是否是意向用户
    var yx = user_functional.yx_0
    // 注册时间
    if (register_time >= baseConfig.config.cj_user_start_time) return fn(yx ?Number(yx) : 1)

    if (yx != null) return fn(Number(yx))

    // 调用验证接口
    this.getMasterApiQuery('/activities/quarter/auth', {}, req, res, function (res) {
        if (res.data.auth == false) {
            return fn(0)
        }
        return fn(1)
    })
    },
    // 曾经的意向用户 (全局head 有奖调研按钮 )
    prize_research:function (req, res, fn) {
        let _user=res.locals.wglobals.user
        let no_zs=_user.user_functional.mv
        let pr_flag= this.getCookie(req, '_PR')

        if(!_user.id) return fn(0)
        if(pr_flag){
            return fn(1)
        }
        // 排除曾购买过钻石的
        if(this.verify_vip_level(no_zs, 'bd')) return fn(0)
        // 排除当前是钻石的
        if(this.verify_authority(_user, 'bd', false)) return fn(0)
        // 调用验证接口
        this.getMasterApiQuery('/user/pl', {}, req, res, function (res) {
           if(res.data.pl == false){
            return fn(0)
           }
           return fn(1)
        })
    },
    // 日期格式化处理
    date_zh_day(date){
        let tdate=new Date()
        let day = Math.floor((tdate - date)/86400000)
        if(day<1) return '今日发布'
        if(day>1 && day<30) return `${day}日前发布`
        if(day>=30 && day<365) return `${Math.floor(day/30)}月前发布`
        if(day>=365) return `${Math.floor(day/365)}年前发布`
    }
}