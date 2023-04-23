const express = require('express');
const async = require('async');
const dayjs = require('dayjs');
const tools = require('../../common/util.js')
const router = express.Router();
let bill_size = 20

router.customs = function (req, res) {
    res.locals.wglobals.nav_active = 'customs'
    let results = {}
    tools.country_offline(res, null, 'raw_trade',function (result, _) {
        results = Object.assign({}, results, result)
        async.waterfall([
            function (callback) {
                tools.getMasterApiQuery('/raw/trade/countries',
                    {}, req, res,
                    function (result) {
                        results.data = result.data || {}
                        callback(null, 1)
                    }
                )
            }

        ], function (err, _) {
            return res.wrender('./billsearch/index.ejs', {
                results: results,
            });
        })
    })
}

router.index = function (req, res) {
    res.locals.wglobals.nav_active = 'customs'
    res.locals.wglobals.path = req.path
    let _query = req.query, country = req.params['country'], data_ie = _query['ie'] || 0, params = {}
    var results = {data_ie: data_ie, size: bill_size};
    if (tools.user_authority(res, 'yd')) {
        params = Object.assign({}, _query)
    }

    tools.country_offline(res, country, 'raw_trade',function (result, _) {
        if (result.raw_screen == country) return res.wrender('wei404.ejs')
        results.india_offline = result.india_offline
        params['ie'] = data_ie
        params['start'] = data_ie
        params['size'] = bill_size
        params['is_pers'] = res.locals.wglobals.user.account_type==2  // 首页分子账号不需要校验权限
        params['not_cache'] = false // 首页需要缓存
        params['pers_return'] = true // 首页如果需要验证权限 则返回权限状态，
        async.waterfall([
                function (callback) {
                    let ct_date = new Date()
                    tools.getMasterApiQuery('/raw/trade/countries',
                        {country: country.replace('_', ' ')},
                        req, res,
                        function (result) {
                            results.ct_date = (new Date() - ct_date) / 1000
                            let data = result.data || {}, _list = data.list || [];
                            if (_list.length > 0) {
                                results.countries = _list[0];
                                return callback(null, 1);
                            }
                            return res.wabort()
                        }
                    )
                },
                function (_, callback) {
                    try {
                        if (results.india_offline == 3) results.countries.import_date = '2020-12-31'
                        var end_date = dayjs(results.countries.import_date).format('YYYY-MM-DD')
                        var start_date = dayjs(end_date).subtract(1, 'year').format('YYYY-MM-DD')
                        params['country'] = results.countries.country
                        params['start_date'] = start_date
                        params['end_date'] = end_date
                        let st_date = new Date()
                        tools.getMasterApiQuery('/raw/trade/list',
                            params, req, res,
                            function (result) {
                                results.search_date = (new Date() - st_date) / 1000
                                try {
                                    let data = result.data, perms = data.perms
                                    delete data.perms
                                    results.trade = data
                                    results.perms = perms
                                    callback(null, 1)
                                } catch (e) {
                                    return res.wabort()
                                }
                            }
                        )
                    } catch (e) {
                        return res.wabort()
                    }
                },
            ],
            function (err, _) {
                res.wrender('./billsearch/customs_data.ejs', {
                    results: results,
                });
            }
        )
    })
}

router.index_test = function (req, res) {
    res.locals.wglobals.nav_active = 'customs'
    res.locals.wglobals.path = req.path
    let _query = req.query, country = req.params['country'], data_ie = _query['ie'] || 0, params = {}
    var results = {data_ie: data_ie};
    if (tools.user_authority(res, 'yd')) {
        params = Object.assign({}, _query)
    }

    tools.country_offline(res, country, 'raw_trade', function (result, _) {
        if (result.raw_screen) return res.wrender('wei404.ejs')
        results.india_offline = result.india_offline
        params['ie'] = data_ie
        params['start'] = data_ie
        params['size'] = bill_size
        params['is_pers'] = res.locals.wglobals.user.account_type==2  // 首页分子账号不需要校验权限
        params['not_cache'] = false // 首页需要缓存
        params['pers_return'] = true // 首页如果需要验证权限 则返回权限状态，
        async.waterfall([
                function (callback) {
                    let ct_date = new Date()
                    tools.getMasterApiQuery('/raw/trade/countries',
                        {country: country.replace('_', ' ')},
                        req, res,
                        function (result) {
                            results.ct_date = (new Date() - ct_date) / 1000
                            let data = result.data || {}, _list = data.list || [];
                            if (_list.length > 0) {
                                results.countries = _list[0];
                                return callback(null, 1);
                            }
                            return res.wabort()
                        }
                    )
                },
                function (_, callback) {
                    try {
                        if (results.india_offline == 3) results.countries.import_date = '2020-12-31'
                        var end_date = dayjs(results.countries.import_date).format('YYYY-MM-DD')
                        var start_date = dayjs(end_date).subtract(1, 'year').format('YYYY-MM-DD')
                        params['country'] = results.countries.country
                        params['start_date'] = start_date
                        params['end_date'] = end_date
                        let st_date = new Date()
                        tools.getMasterApiQuery('/raw/trade/list',
                            params, req, res,
                            function (result) {
                                results.search_date = (new Date() - st_date) / 1000
                                try {
                                    let data = result.data, perms = data.perms
                                    delete data.perms
                                    results.trade = data
                                    results.perms = perms
                                    callback(null, 1)
                                } catch (e) {
                                    return res.wabort()
                                }
                            }
                        )
                    } catch (e) {
                        return res.wabort()
                    }
                },
            ],
            function (err, _) {
                let xr_date = new Date()
                res.wrender('./billsearch/customs_data_test.ejs', {
                    results: results,
                }, function (err, str){
                    res.send({
                        content: str,
                        xr_date: (new Date() - xr_date) / 1000
                    })
                });
            }
        )
    })
}


router.search_fields = function(req, res) {
    var data = req.query
    async.waterfall(
        [
            function (callback) {
                tools.getMasterApiQuery('/raw/trade/search/fields',
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

router.analyse_fields = function(req, res) {
    var data = req.query
    async.waterfall(
        [
            function (callback) {
                tools.getMasterApiQuery('/raw/trade/analyse/fields',
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

const default_trade_params = {'ie': 1, 'start_date': 1, 'end_date': 1, 'tag_id': 1, 'start': 1, 'country': 1}

//搜索列表
router.trade_list = function (req, res) {
    var data = req.query, _user = tools.unity_merger_user(res), results = {ptoken: ''},
        authority = tools.user_authority(res, 'yd')
    data['size'] = bill_size
    // 如果有权限并且是主账户 则不用验证子账户权限
    data['is_pers'] = !(authority && _user.account_type==1)
    data['pers_return'] = true
    // data['creload'] = true
    async.waterfall(
        [
            function (callback) {
                tools.getMasterApiQuery('/raw/trade/list',
                    data, req, res,
                    function (result) {
                        if (result.state != 0) return res.send(result)
                        results.trade = result.data || {}
                        if (authority) return callback(null, 1)
                        let _encrypt = JSON.stringify({
                            is_sample: results.trade.is_sample,
                            uid: _user.id || 0,
                            d: new Date().getTime(),
                            ip: res.locals.wglobals.client_ip
                        })
                        results.ptoken = tools.encrypt(_encrypt)
                        callback(null, 1)
                    }
                )
            }
        ],
        function (err, _) {

            tools.sleep_start(1000).then(resolve => {
                res.wrender('./billsearch/child_trade_list.ejs', {
                    results: results,
                }, function (err, str) {
                    if (err) return res.send({state: 1})
                    res.send({
                        content: str,
                        hits: results.trade.hits,
                        ptoken: results.ptoken || '',
                        state: 0
                    })
                });
            })
        }
    )
}
let not_auth = {state: 3000, message: 'not auth'}
let anti_crawl = {state: 3001}
/**
 * 权限验证， 海关数据都是需要黄钻才能查看， 除样本数据外
 * @param req
 * @param res
 * @param callback
 */
function unity_auth_verify(req, res, callback) {
    // 如果账号为黄钻，则不验证是否为样本标签
    if (tools.user_authority(res, 'yd')) return callback(false)

    let ptoken = req.query.ptoken, _user = tools.unity_merger_user(res), user_id = _user.id || 0,
        ip = res.locals.wglobals.client_ip
    // 如果不是黄钻，且没有加密数据，则为无权查看
    if (!ptoken) return res.send(anti_crawl)
    let pdata = tools.decrypt(ptoken), token_data = {}
    try{
        token_data = JSON.parse(pdata)
    }catch (e){}
    // 非样本数据 则为无权查看
    if (!token_data.is_sample) return res.send(anti_crawl)
    // 如果是样本数据则需要验证加密数据
    let token_date = token_data.d, diff = Math.abs(new Date().getTime() - token_date) / 1000 / 60
    if (token_data.ip != ip || token_data.uid != user_id || diff > 10) return res.send(anti_crawl)
    callback(true)
}
//市场分析
router.trade_analyse_market = function (req, res) {
    unity_auth_verify(req, res, function () {
        var data = req.query
        async.waterfall(
            [
                function (callback) {
                    tools.getMasterApiQuery('/raw/trade/analyse/market',
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
//维度分析
router.trade_analyse = function (req, res) {
    unity_auth_verify(req, res, function () {
        var data = req.query
        async.waterfall(
            [
                function (callback) {
                    tools.getMasterApiQuery('/raw/trade/analyse',
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
    })
}
//标签列表
router.trade_tags = function (req, res) {
    var data=req.query, scene = Number(data.scene);
    delete data.scene
    // 前5个
    if(scene == 1){
        data['size'] = 5
    }else{
        data['size'] = 20
    }
    // data['sample'] = true
    async.waterfall(
        [
            function (callback) {
                tools.getMasterApiQuery('/raw/trade-tags/tags',
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
//添加标签
router.add_trade_tags = function (req, res) {
    var data=req.body
    async.waterfall(
        [
            function (callback) {
                tools.postMasterApiQuery('/raw/trade-tags/tags' , data,
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
//修改标签
router.change_trade_tags = function (req, res) {
    var data=req.body, tag_id = data['tag_id'];
    delete data['tag_id']
    async.waterfall(
        [
            function (callback) {
                tools.putMasterApiQuery('/raw/trade-tags/tags/' + tag_id , data,
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
//删除标签
router.delete_trade_tags = function (req, res) {
    var id = req.body['tag_id']
    async.waterfall([
        function (callback) {
            tools.deleteMasterApiQuery('/raw/trade-tags/tags/' + id,
                null, req, res,
                function (result) {
                    callback(null, result);
                })
        }
    ], function (err, results) {
        return res.send(results);
    })
}


//海关数据、数据导出
router.trade_export_count = function (req, res) {
    var data=req.query
    async.waterfall(
        [
            function (callback) {
                tools.getMasterApiQuery('/raw/trade-export/trade/count',
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

//海关数据、数据导出
router.trade_export_trade = function (req, res) {
    if (!tools.user_authority(res, 'yd')) return res.statusCode(404).send({})
    // 验证下载权限
    tools.verify_child_perms(req, res, 'customs_trade_download', function () {
        var data = req.query
        data['start'] = 0
        async.waterfall(
            [
                function (callback) {
                    tools.getMasterApiQuery('/raw/trade-export/trade',
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

//提单详情
router.detail_raw_bill = function (req, res) {
    // 先验证统一权限
    unity_auth_verify(req, res, function (ck_sample){
        // idata： {id: bill_id, uid: this.wglobals.user.id || 0, sp: is_sample, ip:this.wglobals.client_ip, d:new Date().getTime()}
        var id = req.query['id'], text = tools.decrypt(id), idata = {}
        try{
            idata = JSON.parse(text)
        }catch (e){}
        // 是否验证样本数据
        if(ck_sample){
            let token_date = idata.d, diff = Math.abs(new Date().getTime() - token_date) / 1000 / 60,
                _user = tools.unity_merger_user(res), user_id = _user.id||0, ip=res.locals.wglobals.client_ip
            if(idata.uid != user_id || idata.ip != ip || diff > 10) {
                return res.send(not_auth)
            }
        }
        delete req.query['id']

        async.waterfall(
            [
                function (callback) {
                    tools.getMasterApiQuery('/raw/trade/detail/'+idata.id,
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
    })
}


module.exports = router;