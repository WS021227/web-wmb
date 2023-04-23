const express = require('express');
const async = require('async');
const tools = require('../../common/util.js')
const router = express.Router();
const buyer_params = {
    key: '*',
    hs: '*',
    sort: 'default',
    start: 0,
    size: 10,
    company_type: 0,
    country: '*',
    filter_bill_count_min: 0,
    filter_bill_count_max: 0,
    filter_weight: 'default',
    filter_date_start: '*',
    filter_date_end: '*',
    search_type: 2,
    search_language: 0,
    search_relation: 0,
    trade_countries: '*',
    buyer_ports: '*',
    seller_ports: '*',
    company_mark: '*',
    off_line_counties: '*',
    is_add_log: false

}
const supplier_params = {
    key: '*',
    hs: '*',
    sort: 'default',
    start: 0,
    size: 10,
    company_type: 1,
    country: '*',
    filter_bill_count_min: 0,
    filter_bill_count_max: 0,
    filter_weight: 'default',
    filter_date_start: '*',
    filter_date_end: '*',
    search_type: 2,
    search_language: 0,
    search_relation: 0,
    trade_countries: '*',
    buyer_ports: '*',
    seller_ports: '*',
    company_mark: '*',
    off_line_counties: '*',
    is_add_log: false
}

router.index = function (req, res) {
    res.locals.wglobals.path = req.path
    var url_key = req.params.url_key || '', _buyer_params = null, _supplier_params = null,
        clear_key = url_key.toClear(), results = {clear_key: clear_key}
     
    async.waterfall([function (callback) {
        tools.getMasterApiQuery('/company/extend/topic/detail/' + url_key, {
            start: 0,
            size: 50
        }, req, res, function (result) {
            if (result.state != 0) return res.status(404).render('error')
            let data = result.data || {}
            results.topic_detail = data

            if (data.type == 0) {
                let buyer_pm = data.pop('buyer'), supplier_pm = data.pop('seller')

                if (buyer_pm) {
                    _buyer_params = Object.assign(buyer_params, buyer_pm)
                }

                if (supplier_pm) {
                    _supplier_params = Object.assign(supplier_params, supplier_pm)
                }
            } else {
                _buyer_params = Object.assign(buyer_params, {key: clear_key})
                _supplier_params = Object.assign(supplier_params, {key: clear_key})
            }
            callback(null, 1);
        })
    }, function (data, callback) {
        async.series(
            [function (cb) { /*相关文章推荐*/
                tools.getMasterApiQuery('/company/extend/topic/hot', {size: 5}, req, res, function (result) {
                    results.topic_hot_list = result.state == 0 ? result.data.list || [] : [];
                    cb(null, 1)
                })
            }, function (cb) { /*相关专题列表*/
                // if (results.topic_detail == 1) {
                    tools.getMasterApiQuery('/company/extend/topic/similar', {
                        key: url_key, size: 10
                    }, req, res, function (result) {
                        results.topic_similar_list = result.state == 0 ? result.data.list || [] : [];
                        cb(null, 1)
                    })
                // } else {
                //     cb(null, 1)
                // }
            }, function (cb) {//搜索列表

                if (_buyer_params) {
                    tools.getMasterApiQuery('/company/search/list', _buyer_params, req, res, function (result) {
                        results.buyer = result.state == 0 ? result.data : null
                        cb(null, 1)
                    })
                } else {
                    cb(null, 1)
                }
            }, function (cb) {
                ////搜索列表
                if (_supplier_params) {
                    tools.getMasterApiQuery('/company/search/list', _supplier_params, req, res, function (result) {
                        results.supplier = result.state == 0 ? result.data : null
                        cb(null, 1)
                    })
                } else {
                    cb(null, 1)
                }
            },], function (err, _) {
                callback(null, 1);
            })
    }], function (err, _) {
        results.search_key = clear_key
        return res.wrender("./seo/company_detail_topic.ejs", {
            results: results,
        });
    })
};

module.exports = router;