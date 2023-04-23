const express = require('express');
const async = require('async');
const tools = require('../../common/util.js')
const router = express.Router();
router.index = function (req, res) {
    var results = {}
    async.waterfall([
        function (callback) {
            if (res.locals.wglobals.user.id) {
                tools.getMasterApiQuery('/payment/add-service/buyer/items',
                    {adds_name: 'benchmark'}, req, res,
                    function (result) {
                        if (result.state == 0) {
                            results.add_service = result.state === 0 ? result.data.list || []:[];
                            callback(null, 1);
                        } else {
                            var message = result.message;
                            callback(message, 1);
                        }
                    }
                )
            } else {
                tools.getMasterApiQuery('/payment/add-service/list',
                    {adds_name: 'benchmark'}, req, res,
                    function (result) {
                        results.add_service = result.state === 0 ? result.data.list : []
                        callback(null, 1);
                    }
                )

            }
        }

    ], function (err, _) {
        return res.wrender('./bangStore/benchmark.ejs', {
            results: results
        });
    })
}


module.exports = router;