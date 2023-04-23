const express = require('express');
const async = require('async');
const tools = require('../../common/util.js')
const conf = require('../../common/base_config.js')
const md5 = require('md5-node');
const router = express.Router();
router.index = function (req, res) {
    var results = {},
        now_date = new Date(),
        filter_date = new Date(now_date.setDate(now_date.getDate() - 1)).format('yyyy-MM-dd'),
        start_time = filter_date + ' 00:00:00',
        end_time = filter_date + ' 23:59:59'
    async.series([
        function (callback) {
            /*教程列表*/
            tools.getMasterApiQuery('/tutorial/list', {
                    start: 0,
                    //  判断PC端返回数据，移动端返回数据
                    // size: res.locals.wglobals.device == 'pc'?8:4,
                    size: 8,
                    category: 2,
                },
                req, res,
                function (result) {
                    let data = result.state == 0 ? result.data || {} : {}
                    results.tutorial_list = data.list || []
                    callback(null, 1);
                }
            )
        },
        function (cb) {
            /*数据更新*/
            tools.getMasterApiQuery('/raw/trade/countries', {
                    scene: 1
                }, req, res,
                function (result) {
                    let data = result.state == 0 ? result.data || {} : {},
                        _list = data.list || []
                    results.countries_list = _list.length > 8 ? _list.slice(0, 8) : _list
                    cb(null, 1)
                }
            )
        },
        function (cb) {
            /*采购商热门搜索词*/
            tools.getMasterApiQuery('/company/search-log/hot/keys', {
                    top_count: 8,
                    company_type: 0,
                    start_time: start_time,
                    end_time: end_time,
                    cache_expires: 86400
                },
                req, res,
                function (result) {
                    let data = result.state == 0 ? result.data || {} : {}
                    results.search_log_buyer_key = data.list || []
                    cb(null, 1)
                }
            )
            // results.search_log_buyer_key = []
            // cb(null, 1)
        },
        function (cb) {
            /*供应商热门搜索词*/
            tools.getMasterApiQuery('/company/search-log/hot/keys', {
                    top_count: 8,
                    company_type: 1,
                    start_time: start_time,
                    end_time: end_time,
                    cache_expires: 86400
                },
                req, res,
                function (result) {
                    let data = result.state == 0 ? result.data || {} : {}
                    results.search_log_supply_key = data.list || []
                    cb(null, 1)
                }
            )
            // results.search_log_supply_key = []
            // cb(null, 1)
        },
        function (cb) {
            /*采购商热门公司*/
            tools.getMasterApiQuery('/company/detail/view/records/top', {
                    top_count: 8,
                    company_type: 0,
                    sort: 0,
                    // start_time: start_time,
                    start_time: '2023-03-01 00:00:00',
                    // end_time: end_time,
                    end_time: '2023-03-01 23:59:59',
                },
                req, res,
                function (result) {
                    let data = result.state == 0 ? result.data || {} : {}

                    results.search_company_buyer_records = data.list || []
                    cb(null, 1)
                }
            )
        },
        function (cb) {
            /*供应商热门公司*/
            tools.getMasterApiQuery('/company/detail/view/records/top', {
                    top_count: 8,
                    company_type: 1,
                    sort: 0,
                    // start_time: start_time,
                    start_time: '2023-03-01 00:00:00',
                    // end_time: end_time,
                    end_time: '2023-03-01 23:59:59',
                },
                req, res,
                function (result) {
                    let data = result.state == 0 ? result.data || {} : {}
                    results.search_company_supply_records = data.list || []
                    cb(null, 1)
                }
            )
        },
        function (cb) {

            tools.postYueApiQuery('/wmb_live_list', {
                    page_size: 1,
                    page_current: 0
                }, req, res,
                function (result) {
                    let data = result.data || {},
                        _list = data.playback_list || [];
                    results.yuekt = _list.length > 0 ? _list[0] : null
                    cb(null, 1)
                })
        },
        function (cb) {
            tools.getMasterApiQuery('/line/recommend/master/home', {
                    top_count: 4,
                    creload: 1
                }, req, res,
                function (result) {
                    let data = result.data || {};
                    results.line_users = data.list || []
                    cb(null, 1)
                })
        },
        function (cb) {
            tools.getMasterApiQuery('/line/circle/master/home', {
                    top_count: 2
                }, req, res,
                function (result) {
                    let data = result.data || {};
                    results.line_group = data.list || []
                    cb(null, 1)
                })
        }
    ], function (err, _) {
        return res.wrender('./index/index.ejs', {
            results: results
        });
    })
}

router.prov_file = function (req, res) {
    try {
        var v = Number(req.query.v)
        if (!v) return res.wabort(404)
        // 版本号
        if (Date.now() - v > 600000) return res.wabort(404)
        var str_file = conf.common.prov_file
            .replace('@wmb_spider_replace', tools.prov_md5(req))
            .replace('@wmb_certi_replace', tools.encrypt(new Date().getTime().toString()))
            .replace('@wmb_domain', conf.config.domain)
        res.send(str_file)
    } catch (e) {
        res.wabort(404)
    }
}

router.test = function (req, res) {
    return res.wrender('./test.ejs', {
        results: {}
    });
}

module.exports = router;