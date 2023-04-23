const express = require('express');
const async = require('async');
const tools = require('../../common/util.js')
const router = express.Router();
router.index = function (req, res) {
    var dataarry={}
    async.waterfall([
        function (callback) {
            tools.getMasterApiQuery('/user/friends',
                { start:0,size:12},req, res,
                function (result) {
                    var state = result.state;
                    if (state == 0) {
                        dataarry.friend_list = result.data;
                        callback(null, dataarry);
                    } else {
                        var message = result.message;
                        callback(message, dataarry);
                    }
                }
            )
        },

    ], function (err, results) {
        return res.wrender('./bangline/friend.ejs', {
            results: results
        });
    })
}

/**
 * 指定子账号的全部权限列表
 */
router.friend_list = function (req, res){
        let page = req.query['page'], size = 12, start = (page -1) * size
        async.waterfall(
            [
                function (callback) {
                    tools.getMasterApiQuery('/user/friends' ,
                        {start:start,size:size}, req, res,
                        function (result) {
                            callback(null, result);
                        })
                }
            ],
            function (err, results) {
                res.send(results)
            }
        )


}
module.exports = router;