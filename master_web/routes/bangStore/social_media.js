const express = require('express');
const async = require('async');
const tools = require('../../common/util.js')
const router = express.Router();

router.index = function (req, res) {
    var results = {add_service: null, perms: false}
    async.waterfall([
        function (callback) {
            // 未登录则获取增值服务列表
            if (!res.locals.wglobals.user.id) {
                tools.getMasterApiQuery('/payment/add-service/list',
                    {adds_name: 'soso'}, req, res,
                    function (result) {
                        results.add_service = result.state === 0 ? result.data.list : []
                        callback(null, 1);
                    }
                )
            }else {
                // 已登录则获取购买明细
                tools.getMasterApiQuery('/payment/add-service/buyer/items',
                    {adds_name: 'soso'}, req, res,
                    function (result) {
                        results.add_service = result.state === 0 ? result.data.list : []
                        results.perms = (result.data||{}).perms||false
                        callback(null, 1);
                    }
                )
            }
        }
    ], function (err, _) {
        return res.wrender('./bangStore/social_media.ejs', {
            results: results
        });
    })
}


module.exports = router;