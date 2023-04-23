const express = require('express');
const async = require('async');
const tools = require('../../common/util.js')
const multiparty = require("multiparty");
const router = express.Router();

router.index = function (req, res) {
    tools.login_verify(res, 1, function () {
        res.locals.wglobals.nav_active = 'datacenter'
        var dataarry = {dc_active: "collection"};
        return res.wrender('./home/collection_company.ejs', {
            results: dataarry
        });
    })
}

router.export_contact = function (req, res) {
    tools.login_verify(res, 2, function (_user) {
        if(!tools.verify_real_vip(res, 'yd')) return res.send({state: 300, message:'not auth'})
        async.waterfall([function (callback) {
            let form = new multiparty.Form();
            form.parse(req, function (err, fields) {
                tools.postMasterApiQuery('/company/detail-export/contact',
                    {ids: fields.faget('company_id').join(',')}, req, res,
                    function (result) {
                        callback(null, result)
                    })
            })
        }], function (err, results) {
            res.send(results)
        })
    })
}

/*关注标签(分类)列表*/
router.company_follow_tags_stats = function (req, res) {
    tools.login_verify(res, 2, function () {
        var data = req.query, size = 15
        data['size'] = size
        async.waterfall([function (callback) {
            tools.getMasterApiQuery('/company/follow/tags/stats', data, req, res, function (result) {
                callback(null, result)
            })
        }], function (err, results) {
            results.size = size
            res.send(results)
        })
    })
}
//添加新的分类
router.user_collection_new_follow_tag = function (req, res) {
    tools.login_verify(res, 2, function () {
        var tag_name = req.body ['tag_name']
        
        async.waterfall([function (callback) {
            tools.postMasterApiQuery('/company/follow/tag', {
                tag_name: tag_name
            }, req, res, function (result) {
                callback(null, result)
            })
        }], function (err, results) {
            res.send(results)
        })
    })
}
//删除标签
router.user_collection_delete_tag = function (req, res) {
    tools.login_verify(res, 2, function () {
        var tag_id = req.body['tag_id']
        async.waterfall([function (callback) {
            //关注
            var data = req.body
            tools.deleteMasterApiQuery('/company/follow/tag/' + tag_id, null, req, res, function (result) {
                callback(null, result);
            })
        }], function (err, results) {
            return res.send(results);
        })
    })
}

//修改收藏分组
router.user_collection_edit_tag = function (req, res) {
    tools.login_verify(res, 2, function () {
        var tag_name = req.body ['tag_name']
        var tag_id = req.body ['tag_id']
        async.waterfall([function (callback) {
            tools.putMasterApiQuery('/company/follow/tag/' + tag_id, {
                tag_name: tag_name
            }, req, res, function (result) {
                callback(null, result)
            })
        }], function (err, results) {
            res.send(results)
        })
    })
}

/*关注分类详情*/
router.company_follow_list = function (req, res) {
    tools.login_verify(res, 2, function () {
        var data = req.query, rsize= parseInt(data['size']||20),
            size = [20, 100, 200].indexOf(rsize) >=0?rsize:20
        data['down_country'] = res.locals.wglobals.ip_area != 'IN'?'':"'india'"
        data['size'] = size
        async.waterfall([function (callback) {
            tools.getMasterApiQuery('/company/follow/list', data, req, res, function (result) {
                callback(null, result)
            })
        }], function (err, results) {
            res.send(results)
        })
    })
}

//删除标签
router.user_follow_cancel = function (req, res) {
    tools.login_verify(res, 2, function () {
        var company_list = JSON.parse(req.body.company_list);
        async.waterfall([function (callback) {
            tools.deleteMasterApiQuery('/company/follow/cancel', {company_list: company_list}, req, res,
                function (result) {
                    callback(null, result);
                }, {is_json: true})
        }], function (err, results) {
            return res.send(results);
        })
    })
}

/*全部国家*/
router.user_follow_countries = function (req, res) {

    tools.login_verify(res, 2, function () {
        async.waterfall([function (callback) {
            tools.getMasterApiQuery('/company/follow/country/list', {}, req, res, function (result) {
                callback(null, result)
            })
        }], function (err, results) {
            res.send(results)
        })
    })
}

//批量分组
router.user_follow_bulk = function (req, res) {
    tools.login_verify(res, 2, function () {
        let company_list = JSON.parse(req.body.company_list);
        let tag_list = JSON.parse(req.body.tag_list);
        async.waterfall([function (callback) {
            tools.postMasterApiQuery('/company/follow/tag/change/join', {
                company_list: company_list, tag_list: tag_list
            }, req, res, function (result) {
                callback(null, result)
            }, {
                is_json: true
            })
        }], function (err, results) {
            res.send(results)
        })
    })
}
module.exports = router;