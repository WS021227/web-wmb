const express = require('express');
const async = require('async');
const tools = require('../../common/util.js')
const router = express.Router();
router.index = function (req, res) {
    tools.login_verify(res, 1, function (_user) {
        res.locals.wglobals.nav_active = 'datacenter'
        return res.wrender('./home/download_record.ejs', {
            results: {dc_active: "export_log"}
        });
    })
}
/*导出记录*/
router.export_records = function (req, res) {
    tools.login_verify(res, 2, function (_user) {
        var data = req.query, size = 15
        data['size'] = size
        async.waterfall(
            [
                function (callback) {
                    tools.getMasterApiQuery('/common/export/records',
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
//删除导出记录
router.export_records_delete = function (req, res) {
    tools.login_verify(res, 2, function (_user) {
        var data = req.body
        async.waterfall([
            function (callback) {
                tools.deleteMasterApiQuery('/common/export/record',
                    data, req, res,
                    function (result) {
                        callback(null, result);
                    })
            }
        ], function (err, results) {
            return res.send(results);
        })
    })
}

let export_api = {
    0:'/company/detail-export/contact/record/',
    1:'/company/detail-export/trade/record/',
    3:'/raw/trade-export/record/'
}
/*导出数据*/
router.record_export = function (req, res) {
    tools.login_verify(res, 2, function (_user) {
        var id = req.query.id, type=parseInt(req.query.type)
        async.waterfall(
            [
                function (callback) {
                    tools.getMasterApiQuery(export_api[type] + id,
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
    })
}

module.exports = router;