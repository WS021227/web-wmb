const express = require('express');
const async = require('async');
const tools = require('../../common/util.js')
const router = express.Router();

router.index = function (req, res) {
    tools.login_verify(res, 1, function (_user) {
        res.locals.wglobals.nav_active = 'datacenter'
        return res.wrender('./home/label_manage.ejs', {
            results: {dc_active: "label_manage"}
        });
    })
}
/*搜索标签*/
router.user_label_search_taglist = function (req, res) {
    tools.login_verify(res, 1, function (_user) {
        var data = req.query, size =15
        data['size'] = size
        async.waterfall(
            [
                function (callback) {
                    tools.getMasterApiQuery('/company/search-tag/tags',
                        data, req, res,
                        function (result) {
                            callback(null, result)
                        }
                    )
                }
            ],
            function (err, results) {
                results.size = size
                res.send(results)
            }
        )
    })
}
/*删除搜索标签*/
router.user_label_search_delete_taglist = function (req, res) {
    tools.login_verify(res, 1, function (_user) {
        var id = req.body['id']
        async.waterfall([
            function (callback) {
                tools.deleteMasterApiQuery('/company/search-tag/tag/' + id,
                    null, req, res,
                    function (result) {
                        callback(null, result);
                    })
            }
        ], function (err, results) {
            return res.send(results);
        })
    })
}

/**
 * 产品标签
 * @param req
 * @param res
 */
router.user_label_product_taglist = function (req, res) {
    tools.login_verify(res, 1, function (_user) {
        var data = req.query, size = 15
        data['size'] = size
        async.waterfall(
            [
                function (callback) {
                    tools.getMasterApiQuery('/company/detail-customize-tag/tags/stats',
                        data, req, res,
                        function (result) {
                            callback(null, result)
                        }
                    )
                }
            ],
            function (err, results) {
                results.size = size
                res.send(results)
            }
        )
    })
}
/**
 * 公司详情自定义标签下公司列表
 * @param req
 * @param res
 */
router.customize_tag_company_list = function (req, res) {
    tools.login_verify(res, 2, function (_user) {
        var tag_id = req.query['tag_id'], params = req.query
        delete params['tag_id']
        params['size'] = 15
        async.waterfall([
            function (callback) {
                tools.getMasterApiQuery('/company/detail-customize-tag/tag/company/list/' + tag_id,
                    params, req, res,
                    function (result) {
                        callback(null, result);
                    })
            }
        ], function (err, results) {
            return res.send(results);
        })
    })
}

/*行业标签*/
router.user_label_trade_tagslist = function (req, res) {
    tools.login_verify(res, 1, function (_user) {
        var data = req.query, size = 15
        data['size'] = size
        async.waterfall(
            [
                function (callback) {
                    tools.getMasterApiQuery('/raw/trade-tags/all',
                        data, req, res,
                        function (result) {
                            callback(null, result)
                        }
                    )
                }
            ],
            function (err, results) {
                results.size = size
                res.send(results)
            }
        )
    })
}

router.raw_
/*删除行业标签*/
router.user_label_trade_delete_tagslist = function (req, res) {
    tools.login_verify(res, 1, function (_user) {
        var tag_id = req.body['tag_id']
        async.waterfall([
            function (callback) {
                tools.deleteMasterApiQuery('/raw/trade-tags/tags/' + tag_id,
                    null, req, res,
                    function (result) {
                        callback(null, result);
                    })
            }
        ], function (err, results) {
            return res.send(results);
        })
    })
}

module.exports = router;