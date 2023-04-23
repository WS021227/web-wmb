const express = require('express');
const async = require('async');
const tools = require('../../common/util.js')
const router = express.Router();
router.index = function (req, res) {
    tools.login_verify(res, 1, function (_user) {
        var dataarry={dc_active: "vouchers",}

        async.waterfall([
            function (callback) {
                tools.getMasterApiQuery('/coupon/list',
                    {start:0,size:10}, req, res,
                    function (result) {
                        var state = result.state;
                        if (state == 0) {
                            dataarry.coupon_list=result.data
                            callback(null, dataarry);
                        } else {
                            var message = result.message;
                            callback(message, dataarry);
                        }



                    }
                )
            }
        ], function (err, results) {

            res.wrender('./home/vouchers.ejs', {
                results: results
            });
        })
    })
}
//获取优惠券
router.get_coupon = function (req, res) {
        var data = req.body
    console.log(data,'领取优惠券参数')
        async.waterfall([function (callback) {
            tools.postMasterApiQuery('/coupon/receive', data, req, res, function (result) {
                callback(null, result)
            })
        }], function (err, results) {
            res.send(results)
        })

}
module.exports = router;