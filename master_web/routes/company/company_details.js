/*
 * @Description:
 * @Version: 1.0
 * @Autor: Cong
 * @Date: 2021-12-22 11:57:01
 * @LastEditors: Cong
 * @LastEditTime: 2021-12-27 19:29:46
 */
const express = require("express");
const async = require("async");
const tools = require("../../common/util");
const { query} = require("express");
const util = require("../../common/util");
const router = express.Router();



/**
 * 印度贸易伙伴屏蔽
 * @param res
 * @returns {boolean}
 */
function company_partner_shield_india(res) {
    let _user = tools.unity_merger_user(res)
    // 访客屏蔽
    if (!_user.id) return true
    // 老特殊权限 -相当于黑名单， 屏蔽数据
    if (tools.extended_auth(_user, 'unlock_india_data')) return true
    // 非印度区域的用户不屏蔽贸易伙伴
    if (res.locals.wglobals.ip_area != 'IN') return false
    // 新特殊权限 不屏蔽
    if (tools.extended_auth(_user, 'unlock_india_data_new')) return false
    // 如果是印度用户 且之前开通过特殊权限的，则直接屏蔽
    return true
}

/**
 * 采购公司详情
 * @param req
 * @param res
 */

router.buyer_detail = function (req, res){
    res.locals.wglobals.nav_active='buyer'
    res.locals.wglobals.path = req.path
    res.locals.wglobals.host = req.protocol + '://' + req.hostname
    company_detail(req, res, 0)
}


/**
 * 供应公司详情
 * @param req
 * @param res
 */
router.supplier_detail = function (req, res){
    res.locals.wglobals.nav_active='supplier'
    res.locals.wglobals.path = req.path
    res.locals.wglobals.host = req.protocol + '://' + req.hostname
    company_detail(req, res, 1)
}

//公司详情
router.company_detail = function(req, res) {
    var id=req.query['id'], type=req.query['type'],results = {}
    async.waterfall(
        [
            function (callback) {
                unity_company_detail(req, res, id, type, function (result) {
                    results = Object.assign({}, results, result.company_detail)
                    callback(null,results)
                })
            }
        ], function (err, results) {
            if(err) return res.wabort(404, req, err)
            res.send(results)
        }
    )
}
//公司联系方式
router.company_contacts = function(req, res) {
    let results = {state: 200}
    if(!tools.user_authority(res, 'v')) return res.send(results)
    var id = req.query['id']
    async.waterfall(
        [
            function (callback) {
                tools.getMasterApiQuery('/common/robot/verify', {
                    mark: 'CONTACT', count: 60
                }, req, res, function (result) {
                    if (result.state == 1000) return res.send({state: 10})
                    callback(null, 1)
                })
            },
            function (data, callback) {
                tools.getMasterApiQuery(
                    "/company/detail/contact/" + id,
                    {}, req, res,
                    function (resp) {
                        var data = resp.data || {}
                        if(data.perms){
                            results.data = {
                                contact: data.contact,
                                fax: data.fax,
                                email: data.email,
                                address: data.address,
                                tel: data.tel,
                                web: data.web
                            }
                            results.state = 0
                        }
                        callback(null, 1)
                    }
                );
            }
        ],
        function (err, _) {
            if (err) return res.wabort(404, req, err)
            res.send(results)
        }
    )
}


function unity_company_detail(req, res, company_id, company_type, callback) {
    tools.getMasterApiQuery(
        "/company/detail/" + company_id,
        {}, req, res,
        function (resp) {
            var data = resp.data || {}, mm = resp.mmm || ''
            // if(resp.state != 0 || data.type != company_type){
            //     return res.wabort(404, req, '接口状态不等于0或者公司类型错误，' + resp.state + ', ' + data.type)
            // }
            if(resp.state != 0){
                return res.wabort(404, req, '接口状态不等于0,' + resp.state + ', ' + data.type)
            }
            if (data.type != company_type){
                res.writeHead(301, {'Location': req.protocol + '://' + req.get('host') + '/' + (data.type==0?'buyer':'supplier') + '/' +company_id});
                res.end();
                return
            }
            if(data.url_301) {
                res.writeHead(301, {'Location': req.protocol + '://' + req.get('host') + '/' + (company_type==0?'buyer':'supplier') + '/' +data.url_301});
                res.end();
                return
            }
            data.mm = mm
            data.product = data.product || []
            data.hs = data.hs || []
            screen_verify(res, data, callback, function (result) {
                // 无权查看
                result.company_detail.hs = []
                result.company_detail.hs_count = 0
                result.company_detail.product = []
                result.company_detail.product_count = 0
                return callback(result)
            })
        }
    );
}

/**
 * 屏蔽数据验证
 * @param res
 * @param company_data
 * @param callback
 * @param fail_back
 * @returns {*}
 */
function screen_verify(res, company_data, callback, fail_back){
    let ip_area = res.locals.wglobals.ip_area, _user = tools.unity_merger_user(res)
    let result = {company_detail: company_data}, params = {}
    result.india_offline = tools.india_offline(res, company_data.country_en, 'company_detail')
    params.end_time = company_data.last_trade_date || ''
    // if (!params.end_time) return res.status(404).render('error');
    // 无权查看
    if (result.india_offline == 2) return fail_back?fail_back(result):callback(result)
    if (result.india_offline > 0) {
        params.seo_flag = 0
        params.end_time = {1: '2016-12-31', 3: '2020-12-31'}[result.india_offline]
        result['has_new'] = company_data.last_trade_date && new Date(company_data.last_trade_date) > new Date(params.end_time)
    }
    if (ip_area == 'PH') {
        params.seo_flag = 0
        params.screen = 1
        params.offline_counties = 'philippines'
    } else if ((!tools.extended_auth(_user, 'unlock_india_data_new') && ip_area == 'IN') || tools.extended_auth(_user, 'unlock_india_data')) {
        params.offline_counties = 'india'
        params.screen = 1
    } else if (ip_area == 'ID') {
        params.seo_flag = 0
        params.screen = 1
        params.offline_counties = 'indonesia'
    }
    params.screen = result.india_offline == 3?0:params.screen

    result.params = params
    callback(result)

}
/**
 * 公司详情
 * @param req
 * @param res
 * @param type  公司类型
 */
function company_detail(req, res, type) {
    var id = req.params["id"], search_key = req.query['key'], results = {};
    async.waterfall([
            function (callback) {
                unity_company_detail(req, res, id, type, function (result) {
                    results = Object.assign({}, results, result)
                    // 无权查看
                    if(results.india_offline == 2) return detail_render(res, results)
                    callback(null, 1)
                })
            },
            function (data, callback) {
                let share_params = {
                    seo_flag: results.params.seo_flag != null ? results.params.seo_flag : 1,
                    country: results.company_detail.country_en,
                    company_type: results.company_detail.type,
                    sort: 'bill_count',
                    end_time: results.company_detail.last_trade_date,
                    is_page: true,
                    start: 0,
                    size: 5
                }
                async.series([
                        function (cb) {
                            //提关单数据
                            let trade_params = Object.assign({}, share_params, {
                                size: 15,
                                end_time: results.params.end_time
                            })
                            tools.getMasterApiQuery('/company/detail/trade/' + id,
                                trade_params, req, res,
                                function (result) {
                                    results.bill = result.data
                                    cb(null, 1)
                                }
                            )
                        },
                        function (cb) {
                            //港口统计
                            tools.getMasterApiQuery('/company/detail/port/' + id,
                                share_params, req, res,
                                function (result) {
                                    let data = result.data || {}
                                    data.list = data.list || (data.docs||[])
                                    results.port_data = data;
                                    cb(null, 1)
                                }
                            )
                        },
                        function (cb) {
                            //贸易国 1
                            // let ct_params = Object.assign({}, share_params)
                            // ct_params['creload'] = true
                            tools.getMasterApiQuery('/company/detail/trade-country/' + id,
                                share_params, req, res,
                                function (result) {
                                    let data = result.data || {}
                                    data.list = data.list || (data.docs||[])
                                    results.trade_country = data;
                                    cb(null, 1)
                                }
                            )
                        },
                        function (cb) {
                            //贸易伙伴
                            let partner_params = Object.assign({}, share_params, {})
                            // 印度贸易伙伴屏蔽
                            if (company_partner_shield_india(res)) {
                                partner_params.seo_flag = 0
                                partner_params.offline_counties = 'india'
                            }
                            tools.getMasterApiQuery('/company/detail/partner/' + id,
                                partner_params, req, res,
                                function (result) {
                                    let partner = result.data
                                    partner.list = partner.list || (partner.docs || [])
                                    results.partner = partner
                                    cb(null, 1)
                                }
                            )
                        },
                        function (cb) {
                            let _user = tools.unity_merger_user(res)
                            // 如果是蓝砖以上会员，则不用加密数据
                            if (tools.verify_vip_level(_user.vip_level, 'bd', _user.experience)) return cb(null, 1)

                            let data = {
                                perms: results.company_detail.perms,
                                uid: _user.id || 0, v: _user.vip_level,
                                cid: results.company_detail.id
                            }
                            results.reftoken = tools.encrypt(JSON.stringify(data))
                            cb(null, 1)
                        }
                    ],
                    function (err, _) {
                        callback(null, 1);
                    })
            },
            function (data, callback) {
                //同行
                let params = {
                    size: 5,
                    company_type: results.company_detail.type,
                    country: results.company_detail.country_en.toLocaleLowerCase()
                }
                let bill_list = (results.bill || {}).list || [], descript_list = []
                bill_list.forEach(function (item) {
                    if (item['descript'] != null && item['descript'] != '') {
                        descript_list.push(item['descript'])
                    }
                })
                if (descript_list.length <= 0) return callback(null, 1)
                params['descript'] = descript_list
                let product = results.company_detail.product || []
                if (product.length > 0) {
                    params['product'] = product[0].value
                }
                tools.postMasterApiQuery('/company/detail/peers/' + id,
                    params, req, res,
                    function (result) {
                        results.peers = result.data
                        callback(null, 1)
                    },
                    {is_json: true}
                )

            },
        ],
        function (err, _) {
            results.search_key = search_key
            detail_render(res, results)
        }
    )
}

function detail_render(res, results) {

    res.wrender("./company/company_details.ejs", {
        results: results,
    });
}
/**
 * 贸易港口统计
 * @param req
 * @param res
 */
router.port = function(req, res) {
    var params = req.query, results = {}
    var id=params['id'], scene = Number(params['scene']), last_trade_date = params.last_trade_date
    delete params['scene']
    delete params['last_trade_date']
    // 概述页
    if(scene == 1) {
        params['size'] = 5
        params['is_page'] = true
        params['start'] = 0
    }else{
        params['size'] = 2000
        params['is_page'] = false
    }
    async.waterfall(
        [
            function (callback) {
                let company_data = {last_trade_date: last_trade_date, country_en:params.country}
                screen_verify(res, company_data, function (result){
                    results = Object.assign({}, results, result)
                    // 无权查看
                    if(results.india_offline == 2) return res.send(results)
                    callback(null, 1);

                })
            },
            function (data, callback) {
                tools.getMasterApiQuery('/company/detail/port/'+id,
                    params, req, res,
                    function (result) {
                        results.port = result
                        callback(null, 1)
                    }
                )
            }
        ], function (err, _) {
            if(scene == 2) {
                res.wrender('./company/child/detail_port.ejs', {},
                    function (err, str) {
                        results.content = str
                        res.send(results);
                    }
                );
            }else{
                res.send(results)
            }
        }
    )
}
/**
 * 贸易国统计
 * @param req
 * @param res
 */
router.trade_country = function(req, res) {
    var params = req.query, results = {}
    var id = params['id'], scene = Number(params['scene']), last_trade_date = params.last_trade_date
    delete params['scene']
    delete params['last_trade_date']
    if (scene == 1) {
        params['size'] = 5
        params['start'] = 0
        params['is_page'] = true
    } else {
        params['size'] = 3000
        params['is_page'] = false
    }
    async.waterfall(
        [
            function (callback) {
                let company_data = {last_trade_date: last_trade_date, country_en: params.country}
                screen_verify(res, company_data, function (result) {
                    results = Object.assign({}, results, result)
                    // 无权查看
                    if (results.india_offline == 2) return res.send(results)
                    callback(null, 1);

                })
            },
            function (data, callback) {
                tools.getMasterApiQuery('/company/detail/trade-country/' + id,
                    params, req, res,
                    function (result) {
                        results.country = result
                        callback(null, 1)
                    }
                )

            }
        ], function (err, _) {
            if (scene == 2) {
                res.wrender('./company/child/detail_trade_country.ejs', {},
                    function (err, str) {
                        results.content = str
                        res.send(results);
                    }
                );
            } else {
                res.send(results)
            }
        }
    )
}
/**
 * 产品标签统计
 * @param req
 * @param res
 */
router.product_list = function(req, res) {
    var query = req.query, results = {}, params = {}
    var id = query['id'], scene = Number(query['scene']), last_trade_date = query.last_trade_date
    if(scene == 1){
        params['top_count'] = 5
    }else if(scene == 3){
        params['top_count'] = 1 // 代表获取指定产品
        params.product = query.product
    }else{
        params['top_count'] = 0 // 代表获取全部
    }
    async.waterfall(
        [
            function (callback) {
                let company_data = {last_trade_date: last_trade_date, country_en:query.country}
                screen_verify(res, company_data, function (result){
                    results = Object.assign({}, results, result)
                    // 无权查看
                    if(results.india_offline == 2) return res.send(results)
                    callback(null, 1);

                })
            },
            function (data, callback) {
                tools.getMasterApiQuery('/company/detail/product-list/'+id,
                    params, req, res,
                    function (result) {
                        results.product = result
                        callback(null, 1)
                    }
                )

            }
        ], function (err, _) {
            if(scene == 2) {
                res.wrender('./company/child/detail_product.ejs', {},
                    function (err, str) {
                        results.content = str
                        res.send(results);
                    }
                );
            }else {
                res.send(results)
            }
        }
    )
}

/**
 * 贸易伙伴统计
 * @param req
 * @param res
 */
router.partner = function(req, res) {

    var id = req.query['id'], scene = Number(req.query['scene']), last_trade_date = req.query.last_trade_date
    delete req.query['id']
    delete req.query['scene']
    delete req.query.last_trade_date
    var params = req.query, results = {}
    if (scene != 1) {
        params['size'] = 3000
        params['is_page'] = false
    } else {
        params['size'] = 5
        params['start'] = 0
        params['is_page'] = false
    }
    async.waterfall(
        [
            function (callback) {
                let company_data = {last_trade_date: last_trade_date, country_en:params.country}
                screen_verify(res, company_data, function (result){
                    results = Object.assign({}, results, result)
                    // 无权查看
                    if(results.india_offline == 2) return res.send(results)
                    callback(null, 1);

                })
            },
            function (data, callback) {
                // 屏蔽贸易伙伴中的印度公司
                if (company_partner_shield_india(res)) {
                    params.seo_flag = 0
                    params.offline_counties = 'india'
                }
                tools.getMasterApiQuery('/company/detail/partner/' + id, params,
                    req, res,
                    function (result) {
                        results.partner = result
                        callback(null, 1)
                    }
                )

            }
        ], function (err, _) {
            if (scene == 2) {
                res.wrender('./company/child/detail_partner.ejs', {},
                    function (err, str) {
                        results.content = str
                        res.send(results);
                    }
                );
            } else {
                res.send(results)
            }
        }
    )
}

/**
 * 市场分析数据
 * @param req
 * @param res
 */
router.trends = function(req, res) {
    var id=req.query['id']
    var data=req.query
    async.waterfall(
        [
            function (callback) {
                tools.getMasterApiQuery('/company/detail/trends/'+id,
                    data, req, res,
                    function (result) {
                        callback(null, result)
                    }
                )

            }
        ], function (err, results) {
            res.send(results)
        }
    )
}
router.company_stats = function(req, res) {
    var company_id=req.query['id'], data=req.query
    delete req.query['id']
    async.waterfall(
        [
            function (callback) {
                tools.getMasterApiQuery('/company/detail/report/company/stats/'+company_id,
                    data, req, res,
                    function (result) {
                        callback(null, result)
                    }
                )

            }
        ], function (err, results) {
            res.send(results)
        }
    )
}
/**
 * 提单详情
 * @param req
 * @param res
 */
router.bill = function(req, res) {
    // 有权限才能看这家公司提单， 所有提单
    if(!res.company_perms) {
        let _user = tools.unity_merger_user(res)
        console.error(' >>> user ' + _user + ' not permissions, ['+ res.company_perms +']; request params: ' + req.query)
        return res.send({state: 30000, message: 'Illegal access，not permissions'})
    }
    var bill_id=req.query['bill_id']
    async.waterfall(
        [
            function (callback) {
                tools.getMasterApiQuery('/company/detail/bill/'+bill_id,
                    {}, req, res,
                    function (result) {
                        callback(null, result)
                    }
                )
            }
        ], function (err, results) {
            res.send(results)
        }
    )
}
/**
 * hs统计
 * @param req
 * @param res
 */
router.hs = function (req, res) {
    var params = req.query, results = {}
    var id = params['id'], scene = Number(params['scene']), last_trade_date = params.last_trade_date
    delete params['scene']
    delete params['last_trade_date']
    if (scene != 1) {
        params['size'] = 3000
        params['is_page'] = false
    } else {
        params['size'] = 5
        params['is_page'] = true
        params['start'] = 0
    }
    async.waterfall(
        [
            function (callback) {
                let company_data = {last_trade_date: last_trade_date, country_en: params.country}
                screen_verify(res, company_data, function (result) {
                    results = Object.assign({}, results, result)
                    // 无权查看
                    if (results.india_offline == 2) return res.send(results)
                    callback(null, 1);

                })
            },
            function (data, callback) {
                tools.getMasterApiQuery('/company/detail/hs/' + id,
                    params, req, res,
                    function (result) {
                        results.hs = result
                        callback(null, 1)
                    }
                )
            }
        ],
        function (err, _) {
            if (scene == 2) {
                res.wrender('./company/child/detail_hs.ejs', {},
                    function (err, str) {
                        results.content = str
                        res.send(results);
                    }
                );
            } else {
                res.send(results)
            }
        }
    )
}

/**
 * 贸易数据 贸易数据
 * @param req
 * @param res
 */
router.detail_trade = function (req, res) {
    tools.login_verify(res, 2, function (_user) {
        var id = req.query['id'], scene = req.query['scene'], size = Number(req.query['size']),
            last_trade_date = req.query['last_trade_date']
        delete req.query['id']
        delete req.query['scene']
        delete req.query['last_trade_date']
        var data = req.query
        if(size >20 || isNaN(size)){
            data['size'] = size = 1
        }
        data['is_page'] = true
        var results = {size: size, trade: {}},
            company_data = {last_trade_date: last_trade_date, country_en: data.country}
        screen_verify(res, company_data, function (result) {
            results = Object.assign({}, results, result)

            // 无权查看
            if (results.india_offline == 2) return trade_send(res, scene, results)
            // 有权查看但需要截取时间（如果不需要截取那么就是公司的最新时间），如果传入的时间小于截取的时间，则使用传入的时间
            results.params.end_time = new Date(result.params.end_time) > new Date(data.end_time)?data.end_time:results.params.end_time
            data = Object.assign({}, data, results.params)
            let is_screen = data.screen || 0 // 是否有屏蔽
            delete data.screen
            async.series(
                [
                    function (callback) {
                        tools.getMasterApiQuery('/company/detail/trade/' + id,
                            data, req, res,
                            function (result) {
                                let _data = result.data || {}, _list = _data.list || [];
                                _list.forEach(function (item) {
                                    // 屏蔽 印度尼西亚
                                    if (is_screen == 1) {
                                        let seller_country = (item.seller_country || '').toLocaleLowerCase()
                                        if (seller_country == 'philippines' || seller_country == 'india') {
                                            item.seller = '—'
                                        }
                                        let buyer_country = (item.buyer_country || '').toLocaleLowerCase()
                                        if (buyer_country == 'philippines' || buyer_country == 'india') {
                                            item.buyer = '—'
                                        }
                                    }
                                })
                                _data.list = _list
                                result.data = _data
                                results.trade = result
                                callback(null, 1)
                            }
                        )
                    },
                    function (callback) {
                        if (scene == 2 || scene == 4) {
                            tools.getMasterApiQuery('/company/detail/trade/year/list/' + id,
                                data, req, res,
                                function (result) {
                                    results.year = result.data
                                    callback(null, 1)
                                }
                            )
                        } else {
                            callback(null, null)
                        }
                    },
                    function (callback) {
                        if (scene == 2) {
                            tools.getMasterApiQuery('/raw/trade/countries',
                                {}, req, res,
                                function (result) {
                                    results.countries = result.data
                                    callback(null, 1)
                                }
                            )
                        } else {
                            callback(null, null)
                        }
                    }
                ],
                function (err, _) {
                    trade_send(res, scene, results)
                }
            )

        })
    })
}

function trade_send(res, scene, results) {
    if (scene == 2) {
        res.wrender('./company/child/detail_trade.ejs', {results: results},
            function (err, str) {
                res.send({
                    content: str,
                    state: 0
                });
            }
        );
    } else {
        res.send(results)
    }
}

router.trade_year_list = function (req, res) {
    console.log(req.query)
    var id = req.query['id']
    var company_type= req.query['company_type']
    var end_time=req.query['end_time']
    async.waterfall(
        [
            function (callback) {
                tools.getMasterApiQuery('/company/detail/trade/year/list/' + id,
                    {
                        company_type:company_type,
                        end_time:end_time
                    },
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

router.year_stats = function(req, res){
    var company_id = req.query['id']
    delete req.query['id']

    async.waterfall(
        [
            function (callback) {
                tools.getMasterApiQuery('/company/detail/year/stats/' + company_id,
                    req.query, req, res,
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

router.verify_search_key = function (req, res) {
    let params = req.query, id= params['id'], key = params.key
    delete params.id
    if(!isNaN(Number(key))){
        params.hs = key
        delete params.key
    }
    params['start'] = 0
    params['size'] = 1
    tools.getMasterApiQuery('/company/detail/trade/' + id,
        params, req, res,
        function (result) {
            let _data = result.data || {}
            res.send({count: _data.hits || 0})
        }
    )
}

router.export_trade_perms = function (req, res) {
    async.waterfall(
        [
            function (callback) {
                tools.getMasterApiQuery('/common/export/pers',
                    {export_type: 1},
                    req, res,
                    function (result) {
                        callback(null, result)
                    }
                )
            }
        ],
        function (err, results) {
            res.wrender('./company/child/export.ejs', {
                results: results
            })
        }
    )
}

router.export_trade_count = function (req, res){
    var company_id = req.query['company_id']
    delete req.query['company_id']
    async.waterfall(
        [
            function (callback) {
                tools.getMasterApiQuery('/company/detail-export/trade/count/' + company_id,
                    req.query, req, res,
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

router.export_trade = function (req, res) {
    var company_id = req.query['company_id'], user = tools.unity_merger_user(res)
    if(!util.verify_vip_level(user.vip_level, 'bd'))  return res.send({state: 1000, message: 'not auto'})
    delete req.query['company_id']
    async.waterfall(
        [
            function (callback) {
                tools.getMasterApiQuery('/company/detail-export/trade/' + company_id,
                    req.query, req, res, function (result) {
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
//任务详情
router.task_detail = function (req, res) {
    var company_id = req.query['id']

    async.waterfall(
        [
            function (callback) {
                tools.getMasterApiQuery('/company/email-crawler/task/detail/' + company_id,
                    {}, req, res,
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

router.task_state = function (req, res) {
    var task_id = req.query['task_id']
    async.waterfall(
        [
            function (callback) {
                tools.getMasterApiQuery('/company/email-crawler/task/state/' + task_id,
                    {}, req, res,
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

//添加邮箱爬取任务
router.add_task_email = function (req, res) {
    var company_id = req.body['id']
    var data = {}
    if (req.body['url_type']) {
        data.url_type = req.body['url_type']
    }
    if (req.body['url_id']) {
        data.url_id = req.body['url_id']
    }
    if (req.body['url']) {
        data.url = req.body['url']
    }

    async.waterfall(
        [
            function (callback) {
                tools.postMasterApiQuery('/company/email-crawler/task/email/' + company_id,
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

//添加网址爬取任务
router.add_task_url = function (req, res) {
    var company_id = req.body['id']

    async.waterfall(
        [
            function (callback) {
                tools.postMasterApiQuery('/company/email-crawler/task/url/' + company_id,
                    {}, req, res,
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
//邮箱采集列表
router.task_get_email = function (req, res) {
    let params = req.query, task_id = params.task_id
    delete params.task_id
    params['size'] = 10
    async.waterfall(
        [
            function (callback) {
                tools.getMasterApiQuery('/company/email-crawler/task/email/' + task_id,
                    params, req, res,
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
//网址采集列表
router.task_get_url = function (req, res) {
    var company_id = req.query['id']
    var data=req.query
    async.waterfall(
        [
            function (callback) {
                tools.getMasterApiQuery('/company/email-crawler/task/url/' + company_id,
                    data,
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

//邮箱采集列表
router.crawler_email_export = function (req, res) {
    var task_id = req.query['task_id'], _user = tools.unity_merger_user(res);
    if(!tools.verify_authority(_user, 'yd')){
        res.status(404).render('error')
        return false
    }
    async.waterfall(
        [
            function (callback) {
                tools.getMasterApiQuery('/company/email-crawler/task/email/export/' + task_id,
                    {},
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

//获取标签列表
router.customize_tag_list = function(req, res){
    var company_id=req.query['company_id']
    async.waterfall(
        [
            function (callback) {
                tools.getMasterApiQuery('/company/detail-customize-tag/tags/' + company_id,
                    {start: 0, size: 30},
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
//添加标签
router.add_customize_tag = function (req, res) {
    var data=req.body
    async.waterfall(
        [
            function (callback) {
                tools.postMasterApiQuery('/company/detail-customize-tag/tag',
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
//修改标签
router.change_customize_tag = function (req, res) {
    var data=req.body, tag_id = data['tag_id']
    delete data['tag_id']
    async.waterfall(
        [
            function (callback) {
                tools.putMasterApiQuery('/company/detail-customize-tag/tag/' + tag_id,
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
//用户标签列表
router.detail_customize_tag_user = function (req, res) {
    var data=req.query
    data['size'] = 10
    async.waterfall(
        [
            function (callback) {
                tools.getMasterApiQuery('/company/detail-customize-tag/tags',
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
/**
 * 公司下指定标签关联
 * @param req
 * @param res
 */
router.detail_customize_tag_join = function (req, res) {
    tools.login_verify(res, 2, function (_user) {
        let params = req.body, company_id = params['id'], tag_id = params['tag_id']
        delete params['id']
        delete params['tag_id']
        async.waterfall(
            [
                function (callback) {
                    tools.postMasterApiQuery('/company/detail-customize-tag/tag/' + company_id + '/join/' + tag_id,
                        params, req, res,
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
/**
 * 解除公司下指定标签的关联
 * @param req
 * @param res
 */
router.detail_customize_tag_dissociate = function (req, res) {
    var company_id = req.body['id']
    var tag_id = req.body['tag_id']
    async.waterfall(
        [
            function (callback) {
                tools.postMasterApiQuery('/company/detail-customize-tag/tag/'+company_id+'/dissociate/'+tag_id,
                    {}, req, res,
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
//删除自定义标签
router.detail_customize_tag_delete = function (req, res) {
    var tag_id = req.body['tag_id']
    async.waterfall(
        [
            function (callback) {

                tools.deleteMasterApiQuery('/company/detail-customize-tag/tag/'+tag_id,
                    {}, req, res,
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

router.to_soso = function (req, res){
    async.waterfall(
        [
            function (callback) {

                tools.postMasterApiQuery('/company/extend/to-soso/'+ req.query.company_id,
                    {}, req, res,
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

module.exports = router;
