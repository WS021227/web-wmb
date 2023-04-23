const express = require('express');
const async = require('async');
const tools = require('../../common/util.js')
const baseConfig = require('../../common/base_config.js');
const multiparty = require('multiparty')
const {
    utils
} = require("gm");
const router = express.Router();

function pay_wx_code(req, res) {

    let redirect_uri = encodeURIComponent(req.protocol + '://' + req.get('host') + req.path)
    // let redirect_uri = encodeURIComponent('https://www.52wmb.com/weixin/paytest')
    res.writeHead(302, {
        'Location': 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + baseConfig.config.wx_app_id + '&redirect_uri=' + redirect_uri + '&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect'
    });
    res.end();
}

router.index = function (req, res) {
    tools.login_verify(res, 1, function (_user) {
        async.waterfall([
            function (callback) {
                if (!(res.locals.wglobals.device == "mobile" && res.locals.wglobals.is_wechat)) return callback(null, 1)
                let wx_open_id = tools.getCookie(req, 'wx_open_id')
                if (wx_open_id) return callback(null, 1)
                let code = req.query.code
                if (!code) return pay_wx_code(req, res)

                try {
                    tools.get_wx_open_id(code, function (result) {
                        let errcode = result.errcode;
                        if (errcode == 40029 || errcode == 40163) {
                            return pay_wx_code(req, res)
                        }
                        tools.setCookie(req, res, 'wx_open_id', result.openid || '', 86400, true)
                        callback(null, 1)
                    })
                } catch (e) {
                    callback(null, 1)
                }
            }
        ], function (err, _) {

            var dty = tools.three_year(_user)
            res.wrender('./payment/pay_detail.ejs', {
                results: {
                    dty: dty
                },
            });
        })

    })
}

function product_buyer_verify(adds, adds_id,_lang){
    if(adds == 'jungle_scout') return 1
    if ((adds == 'benchmark' || adds == 'yue_kt') && _lang == 'en') return 0
    if (adds_id != 12 && !tools.verify_authority(_user, 'bd')) return 0
    return 1
}

router.product = function (req, res) {
    let _lang=res.locals.wglobals.lang
    tools.login_verify(res, 1, function (_user) {
        let adds = req.query.adds,
            adds_id = req.query.product,
            results = {}
        if(!product_buyer_verify(adds, adds_id,_lang)) res.status(404).render('error')
        async.waterfall([
            function (callback) {
                tools.getMasterApiQuery('/payment/add-service/buyer/items', {
                        adds_name: adds,
                        adds_id: adds_id
                    }, req, res,
                    function (result) {
                        if (result.state == 0) {
                            results.add_service_list = result.data;
                            callback(null, 1);
                        } else {
                            var message = result.message;
                            callback(message, 1)
                        }
                    })
            }

        ], function (err, _) {
            return res.wrender('./payment/product.ejs', {
                results: results,
            });
        })
    })
}
/*产品价格列表*/
router.payment_products_price = function (req, res) {

    async.waterfall(
        [
            function (callback) {
                tools.getMasterApiQuery('/payment/products/price',
                    null, req, res,
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
/*支付价格详情*/
router.payment_products_details = function (req, res) {
    var data = req.query
    async.waterfall(
        [
            function (callback) {
                tools.getMasterApiQuery('/payment/price/details',
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
}

let payfs = {
    1: alipay_payment,
    2: weixin_payment,
    3: paypal_payment,
}

/**
 * 获取支付宝参数
 * @param req
 * @param res
 * @param callback
 */
function alipay_payment(req, res, callback) {
    let params = req.body,
        auto_renew = params.auto_renew,
        pay_duration = params.pay_duration,
        products = params.products
    params['method'] = 1
    params['return_url'] = baseConfig.config.alipay_return
    params['quit_url'] = baseConfig.config.alipay_quit
    if (auto_renew == 1 && pay_duration == 1 && products == 1) {
        params['scene'] = 'code_url'
    } else {
        params['scene'] = {
            'pc': 'page_pay',
            'mobile': 'wap_pay'
        } [res.locals.wglobals.device]
    }
    callback(params)
}

function weixin_payment(req, res, callback) {
    let params = req.body
    params['method'] = 2
    params['return_url'] = baseConfig.config.alipay_return
    params['quit_url'] = baseConfig.config.alipay_quit
    // PC端
    if (res.locals.wglobals.device == 'pc') {
        params['scene'] = 'pre_pay_url'
    } else if (res.locals.wglobals.device == 'mobile') {
        if (res.locals.wglobals.is_wechat) {
            let wx_open_id = tools.getCookie(req, 'wx_open_id')
            if (!wx_open_id) {
                return res.send({
                    state: 3002,
                    message: '微信信息获取失败，请刷新当前页面'
                })
            }
            params['wx_open_id'] = wx_open_id
            params['scene'] = 'wap_pay_jsapi'
        } else {
            params['scene'] = 'wap_pay_url'
        }
    }
    if (params.scene == 'ap_pay_jsapi ') {
        params['wap_url'] = baseConfig.config.wx_wap_url
    }
    callback(params)
}

function paypal_payment(req, res, callback) {
    let params = req.body
    params['method'] = 3
    params['return_url'] = baseConfig.config.paypal_return
    params['quit_url'] = baseConfig.config.paypal_quit
    params['scene'] = '*'
    callback(params)
}

//添加订单
router.payment_add = function (req, res) {
    console.log(req.body)
    var method = Number(req.body.method);
    async.waterfall(
        [
            function (callback) {
                payfs[method](req, res, function (params) {
                    tools.postMasterApiQuery('/payment/integration',
                        params, req, res,
                        function (result) {
                            try {
                                callback(null, result)
                            } catch (e) {

                            }
                        }
                    )
                })
            }
        ],
        function (err, results) {
            if (results.state == 1) return res.wabort(404)
            if (results.state != 0) return res.send(results)
            if (method == 2) {
                if (res.locals.wglobals.is_wechat) {
                    return res.send(results)
                }
                if (res.locals.wglobals.device == 'mobile') {
                    res.send({
                        wx_url: results.data.integration.wx_url,
                        state: 0
                    })
                    // res.writeHead(302, {'Location': results.data.integration.wx_url});
                    res.end();
                    return
                }
                return res.wrender('./payment/wx_payment.ejs', {
                    results: results,
                });
            }
            if (method == 1) {
                results.period_url = baseConfig.config.alipay_period
            }
            res.send(results)
        }
    )
}

router.payment_verify = function (req, res) {

    var data = req.body,
        order_no = data['order_no']
    async.waterfall(
        [
            function (callback) {
                tools.getMasterApiQuery('/payment/verify', {
                        order_no: order_no
                    }, req, res,
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

/*周期付款获取sdk参数*/
router.payment_alipay_period = function (req, res) {
    var data = req.query,
        order_no = data['order_no'],
        params = {
            return_url: baseConfig.config.alipay_return,
            quit_url: baseConfig.config.alipay_quit,
            order_no: order_no
        }
    async.waterfall(
        [
            function (callback) {
                tools.getMasterApiQuery('/payment/alipay/period',
                    params, req, res,
                    function (result) {
                        callback(null, result)
                    }
                )
            }
        ],
        function (err, results) {
            results.quit_url = baseConfig.config.alipay_quit
            return res.wrender('./payment/alipay_period_payment.ejs', {
                results: results,
            });
        }
    )
}

/*查询微信子订单且集成支付*/
router.payment_child_weixin = function (req, res) {
    async.waterfall(
        [
            function (callback) {
                weixin_payment(req, res, function (params) {
                    tools.getMasterApiQuery('/payment/wxpay/child/integration',
                        params, req, res,
                        function (result) {
                            callback(null, result)
                        }
                    )
                })
            }
        ],
        function (err, results) {
            res.send(results)
        }
    )
}

/**
 * 未付费子订单
 * @param req
 * @param res
 */
router.unpaid = function (req, res) {
    tools.login_verify(res, 1, function (_user) {

        async.waterfall(
            [
                function (callback) {
                    tools.getMasterApiQuery('/payment/unpaid',
                        null,
                        req, res,
                        function (result) {
                            if (result.state == 0 && result.data.id) {
                                callback(null, result.data)
                            } else {
                                res.status(404).send('error')
                            }
                        }
                    )
                }
            ],
            function (err, results) {
                return res.wrender('./payment/pay_unpaid.ejs', {
                    results: results,
                });
            }
        )
    })
}

/**
 * 未付费子订单提交支付
 * @param req
 * @param res
 */
router.payment_keep = function (req, res) {
    console.log(req.body,"请求参数")
    tools.login_verify(res, 2, function (_user) {
        let method = req.body.method
        async.waterfall(
            [
                function (callback) {
                    payfs[method](req, res, function (params) {
                        tools.postMasterApiQuery('/payment/keep/integration',
                            params, req, res,
                            function (result) {
                                callback(null, result)
                            }
                        )
                    })
                }
            ],
            function (err, results) {
                if (method == 2) {
                    if (res.locals.wglobals.device == "mobile") {
                        res.send({
                            wx_url: results.data.integration.wx_url,
                            state: 0
                        })
                        // res.writeHead(302, {'Location': results.data.integration.wx_url});
                        res.end();
                        return
                    } else {
                        if (res.locals.wglobals.is_wechat) {
                            return res.wrender('./payment/wx_payment.ejs', {
                                results: results,
                            });
                        }
                        return res.wrender('./payment/wx_payment.ejs', {
                            results: results,
                        });
                    }
                }
                res.redirect(results.data.integration.alipay_url)
            }
        )
    })
}

/**
 * 验证订单支付状态（第三方接口验证）
 * @param req
 * @param res
 */
router.check_payment = function (req, res) {
    tools.getMasterApiQuery('/payment/verify/success/by-third-party', {
            order_no: req.query.order_no
        }, req, res,
        function (result) {
            res.send(result)
        }
    )
}
router.recheck_product = function (req, res) {
    tools.postMasterApiQuery('/payment/give-up', {
            order_no: req.query.order_no
        }, req, res,
        function (result) {
            res.send(result)
        }
    )
}

/*支付宝 支付成功返回页面*/
router.payment_alipay_return = function (req, res) {
    return res.wrender('./payment/alipay_return.ejs', {
        results: {
            order_no: req.query.order_no
            // order_no: req.query.out_trade_no
        },
    });
}


/*paypal 支付成功返回页面*/
router.payment_paypal_return = function (req, res) {
    return res.wrender('./payment/paypal_return.ejs', {
        results: {
            order_no: req.query.order_no
        },
    });
}


router.adds_purchased = function (req, res) {

    async.waterfall(
        [
            function (callback) {
                tools.getMasterApiQuery('/payment/add-service/purchased/' + req.params.adds_id, {},
                    req, res,
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

router.sc_submit = function (req, res) {
    let _sc = parseInt(res.locals.wglobals.user.user_functional.sc || 0);
    if (!_sc) return res.send({
        state: 0
    })
    tools.putMasterApiQuery(
        '/payment/service/confirm/' + _sc, {}, req, res,
        function (result) {
            res.send(result)
        }
    )
}


router.bem_js_improve_submit = function (req, res) {

    let form = new multiparty.Form();

    form.parse(req, function (err, fields) {
        if (err) return res.send({
            message: 'error',
            state: 10002
        });
        let benchmark = fields.fget('benchmark'),
            jungle_scout = fields.fget('jungle_scout')
        if (!benchmark && !jungle_scout) return res.send({
            message: 'error',
            state: 10003
        });
        let _user = res.locals.wglobals.user
        let txt_phone = fields.fget('txt_phone'),
            email = _user.user_name;
        if (!email) return res.send({
            message: '邮箱未绑定',
            state: 10004
        });
        if (!txt_phone && !_user.user_phone) return res.send({
            message: '手机号不能为空',
            state: 10004
        });
        let company_name = fields.fget('txt_company_name'),
            company_address = fields.fget('txt_company_address')
        let params = {
            company_name: company_name,
            company_address: company_address
        }

        async.series([
            function (cb) {
                if (jungle_scout) {
                    tools.putMasterApiQuery(
                        '/payment/add-service/jungle_scout/complete', params, req, res,
                        function (result) {
                            try {
                                if (result.state == 0) {
                                    cb(null, {
                                        jungle_scout: result.data
                                    })
                                } else {
                                    cb(null, null)
                                }
                            } catch (e) {
                                cb(null, null)
                            }
                        })
                } else {
                    cb(null, null)
                }
            },
            function (cb) {
                if (benchmark) {
                    tools.putMasterApiQuery(
                        '/payment/add-service/benchmark/complete', params, req, res,
                        function (result) {
                            try {
                                if (result.state == 0) {
                                    cb(null, {
                                        benchmark: 1
                                    })
                                } else {
                                    cb(null, null)
                                }
                            } catch (e) {}
                        })
                } else {
                    cb(null, null)
                }

            }

        ], function (err, results) {
            let data = {}
            results.forEach(function (item, _) {
                if (item) {
                    let key = Object.keys(item)[0]
                    data[key] = item[key]
                }
            })
            res.send({
                email: email,
                state: 0
            })
        })
    })
}

router.surprise_coupon_receive = function (req, res) {
    tools.postMasterApiQuery('/coupon/surprise/receive', {}, req, res, function (result) {
        tools.setCookie(req, res, '_DE', 'hide', 86400)
        return res.send(result)
    })
}

router.surprise_coupon_close = function (req, res) {
    let _user = res.locals.wglobals.user
    if (!_user.id) return res.wabortJson()
    let user_functional = _user.user_functional || {}
    let nssp = user_functional.nssp ? Number(user_functional.nssp) : 0
    if (nssp == 2) return res.send({})
    tools.putMasterApiQuery('/coupon/surprise/close', {
        key: 'nssp',
        value: 3
    }, req, res, function (result) {
        res.send(result)
    })
}


router.df_coupon = function (req, res) {


    tools.getMasterApiQuery('/coupon/df/receive', {}, req, res, function (result) {
        res.send(result)
    })
}

router.df_coupon_receive = function (req, res) {
    tools.postMasterApiQuery('/coupon/df/receive', {
        setting_id: req.body.setting_id
    }, req, res, function (result) {
        return res.send(result)
    })
}


module.exports = router;