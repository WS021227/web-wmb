const express = require('express');
const async = require('async');
const tools = require('../../common/util.js')
const router = express.Router();

router.index = function (req, res) {
    tools.login_verify(res, 1, function (_user) {
        res.locals.wglobals.nav_active = 'datacenter'
        return res.wrender('./home/browsing_history.ejs', {
            results: {dc_active: "view_log"}
        });
    })
}
/*浏览历史*/
router.browsing_history_list = function (req, res) {
    tools.login_verify(res, 2, function (_user) {
        var data = req.query, size = 50
        data.size = size
        data.year = data.year?data.year:new Date().getFullYear()
        async.waterfall(
            [
                function (callback) {
                    tools.getMasterApiQuery('/company/detail/view/records',
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
//删除浏览历史
router.browsing_history_list_delet = function (req, res) {
    tools.login_verify(res, 2, function (_user) {
        var company_id = req.body['company_id']
        async.waterfall([
            function (callback) {
                tools.deleteMasterApiQuery('/company/detail/view/record/' + company_id,
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