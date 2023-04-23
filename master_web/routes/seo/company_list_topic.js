const express = require('express');
const async = require('async');
const tools = require('../../common/util.js')
const router = express.Router();
router.index = function (req, res) {
    res.locals.wglobals.path = req.path
    var dataarry={}
    async.waterfall([
        function (callback) {
            tools.getMasterApiQuery('/company/extend/topic/list',
                { start:0,size:50},req, res,
                function (result) {
                    var state = result.state;
                    if (state == 0) {
                        dataarry.topic_list = result.data;
                        callback(null, dataarry);
                    } else {
                        var message = result.message;
                        callback(message, dataarry);
                    }
                }
            )
        },
        function (dataarry,callback) {/*相关文章推荐*/
            tools.getMasterApiQuery('/company/extend/topic/hot',
                {size:5},req, res,
                function (result) {
                    var state = result.state;
                    if (state == 0) {
                        dataarry.topic_hot_list = result.data;
                        callback(null, dataarry);
                    } else {
                        var message = result.message;
                        callback(message, dataarry);
                    }
                }
            )
        },
    ], function (err, results) {
        
        return res.wrender('./seo/company_list_topic.ejs', {
            results: results
        });
    })
}


module.exports = router;