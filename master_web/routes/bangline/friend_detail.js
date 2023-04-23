const express = require('express');
const async = require('async');
const tools = require('../../common/util.js')
const router = express.Router();
router.index = function (req, res) {
   var user_id= req.params.id
    var dataarry={}
    async.waterfall([
        function (callback) {
            tools.getMasterApiQuery('/user/friend/detail',
                { start:0,size:20,user_id:user_id},req, res,
                function (result) {
                    var state = result.state;
                    if (state == 0) {
                        dataarry.user_info = result.data;
                        callback(null, dataarry);
                    } else {
                        var message = result.message;
                        callback(message, dataarry);
                    }
                }
            )
        },

    ], function (err, results) {
        return res.wrender('./bangline/friend_detail.ejs', {
            results: results
        });
    })
}


module.exports = router;