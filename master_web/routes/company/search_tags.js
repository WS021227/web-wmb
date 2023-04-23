const express = require('express');
const async = require('async');
const tools = require('../../common/util');
const baseConfig = require("../../common/base_config");
const { query } = require('express');
const router = express.Router();

/**
 * 标签统计共用方法
 * @param req
 * @param res
 * @param callback
 * @param _type
 */
function tags_stats(req, res, _type, callback) {
    var country = req.query['country'] || '*', country_list =country && country!='*'?country.split('|'):[],results = {}
    var search_type = parseInt(req.query['search_type'] || 2)
    var company_type = parseInt(req.query['company_type'] || 0)
    var key = req.query['key'] || '*'
    var hs = req.query['hs'] || '*'


    if(search_type == 3){
        hs = key
        key = '*'
    }
    var params = {
        search_type: search_type,
        company_type: company_type,
        country: country,
        key: key,
        hs: hs
    }
    if (_type != null) params['company_type'] = _type
    tools.country_offline(res, null,'company_search', function (result, _params) {
        results = Object.assign({}, results, result)
        if(results.screen == 'india'){
            if (country_list.length == 1 && country == 'india') return callback(null, 1)

            if(country_list.length > 1){
                let _index = country_list.indexOf(results.screen)
                country_list.slice(_index)
                params.country = country_list.join('|')
            }
        }

        params = Object.assign({}, params, _params)

        tools.getMasterApiQuery(
            '/company/search/tags/stats',
            params, req, res,
            function (result) {
                results.searchTagsList = result.state == 0 ? result.data.list || [] : []
                callback(results, params)
            }
        )
    }, 'company_search')
}

/**
 * 公司搜索标签主页
 * @param req
 *  query: 接收查询参数
 *    key: 关键词
 *    search_type: 搜索类型 2为产品描述， 3为 HS标签
 *    country: 国家
 * @param res
 *
 */
router.index = function (req, res) {
    res.locals.wglobals.nav_active = req.params[0]
    res.locals.wglobals.path = req.path
    var _type = req.params[0], company_type = baseConfig.common.company_type[_type], results = {company: null}
    var  now_date = new Date(),
        filter_date = new Date(now_date.setDate(now_date.getDate() - 1)).format('yyyy-MM-dd'),
        start_time = filter_date + ' 00:00:00',
        end_time = filter_date + ' 23:59:59'

    async.waterfall(
        [
            function (callback) {
                // 调用统一
                tags_stats(req, res, company_type, function (result, _params) {
                    results = Object.assign({}, results, result)
                    if(_params.search_type == 3){
                        results.search_hs = _params.hs && _params.hs != '*' ? _params.hs : ''
                    }else {
                        results.search_key = _params.key && _params.key != '*' ? _params.key : ''
                    }
                    results.search_type = _params.search_type
                    results.company_type = _params.company_type
                    callback(null, 1)
                })
            }
        ], function (err, _) {
          
            return res.wrender('./company/tags.ejs', {
                results: results
            });
        }
    )
}

/**
 * 异步获取标签统计信息
 * @param req
 * @param res
 */
router.tag_stats_list = function(req, res) {
    let results = {}
    async.waterfall([
            function (callback) {
                tags_stats(req, res, null, function (result, _params) {
                    results = Object.assign({}, results, result)
                    results.search_key = _params.key && _params.key != '*' ? _params.key : (_params.hs && _params.hs != '*' ? _params.hs:'')
                    results.search_type = _params.search_type
                    results.company_type = _params.company_type
                    callback(null, 1)
                })
            }
        ], function (err, _) {
          
            return res.wrender('./company/child/tag_stats_list.ejs', {
                results: results
            });
        }
    )
}

router.tagsList = function(req, res) {
    let data = req.query
    data['size'] = 10
    async.waterfall(
        [
            function (callback) {
                tools.getMasterApiQuery('/company/search-tag/tags',
                    data, req, res,
                    function (result) {
                        callback(null, result)
                    })
            }
        ], function (err, results) {
            res.send(results)
        }
    )
}
/*
创建标签
 */
router.create = function (req, res) {
    if (!tools.verify_real_vip(res, 'yd')) return res.send({state: 200});
    async.waterfall([
        function (callback) {
            //关注
            var data = req.body
            data['size'] = 1   // 标签只读取第一页，
            data['filter_bill_count_min'] = data['filter_bill_count_min'] == '0' ? '*' : data['filter_bill_count_min']
            data['filter_bill_count_max'] = data['filter_bill_count_max'] == '0' ? '*' : data['filter_bill_count_max']
            tools.postMasterApiQuery('/company/search-tag/tag',
                data, req, res,
                function (result) {
                    callback(null, result);
                })
        }
    ], function (err, results) {
        return res.send(results);
    })
}
/*
创建标签
 */
router.edit = function (req, res) {
    if (!tools.verify_real_vip(res, 'yd')) return res.send({});

    async.waterfall([
        function (callback) {
            //关注
            var data = req.body
            data['size'] = 1   // 标签只读取第一页，
            data['filter_bill_count_min'] = data['filter_bill_count_min'] == '0' ? '*' : data['filter_bill_count_min']
            data['filter_bill_count_max'] = data['filter_bill_count_max'] == '0' ? '*' : data['filter_bill_count_max']
            let id = data['tag_id']
            delete data['tag_id']
            tools.putMasterApiQuery('/company/search-tag/tags/' + id,
                data, req, res,
                function (result) {
                    callback(null, result);
                })
        }
    ], function (err, results) {
        return res.send(results);
    })
}

router.delete_tag = function (req, res) {
    if (!tools.verify_real_vip(res, 'yd')) return res.send({});
    var id = req.body['tagsId']
    async.waterfall([
        function (callback) {
            //关注
            var data = req.body
            tools.deleteMasterApiQuery('/company/search-tag/tag/' + id,
                null, req, res,
                function (result) {
                    callback(null, result);
                })
        }
    ], function (err, results) {
        return res.send(results);
    })

}

/**
 * 搜搜标签页的收藏公司和标签数量 统计
 */
router.stats_count = function(req, res) {
    var stats_fields = req.query['stats_fields'].split("|"), _user = tools.unity_merger_user(res)
    async.series(
        [
            function (callback) {
                let data={}
                if(_user.id && stats_fields.indexOf('tag') >= 0){
                    tools.getMasterApiQuery(
                        '/company/search-tag/count', null, req, res,
                        function (result) {
                            if(result.state == 0){
                                data.tags = result.data.count
                            }
                            callback(null, data)
                        }
                    )
                }else {
                    callback(null, data)
                }
            },
            function (callback) {
                let data={}
                if(_user.id && stats_fields.indexOf('follow') >= 0){
                    tools.getMasterApiQuery(
                        '/company/follow/count', null, req, res,
                        function (result) {
                            if(result.state == 0){
                                data.follow = result.data.count
                            }
                            callback(null, data)
                        }
                    )
                }else {
                    callback(null, data)
                }
            }
        ], function (err, results) {
            res.send(results)
        }
    )
}

module.exports = router;