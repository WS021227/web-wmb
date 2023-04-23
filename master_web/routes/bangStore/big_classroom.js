const express = require('express');
const async = require('async');
const tools = require('../../common/util.js')
const router = express.Router();
router.index = function (req, res) {
    var results = {add_service: null},page_size
    res.locals.wglobals.device == "mobile"?page_size=6:page_size=9

    async.series([function (cb) {/*邦阅大课堂*/
        if (!res.locals.wglobals.user.id) {
            tools.getMasterApiQuery('/payment/add-service/list',
                {adds_name: 'yue_kt'}, req, res,
                function (result) {
                    results.add_service = result.state === 0 ? result.data.list : []
                    cb(null, 1);
                }
            )

        } else {
            tools.getMasterApiQuery('/payment/add-service/buyer/items', {
                adds_name: 'yue_kt'
            }, req, res, function (result) {
                if (result.state == 0) {
                    results.add_service = result.data.list || [];
                }
                cb(null, 1);
            })
        }
    }, 
    function (cb) { /*热门*/
        tools.postYueApiQuery('/wmb_live_list', {
            page_size: page_size, page_current: 0
        }, req, res, function (result) {
            results.wmb_bangclass = result.data || {};
            cb(null, 1)
        })
    }], function (err, _) {
        return res.wrender('./bangStore/big_classroom.ejs', {
            results: results
        });
    })
}

/*直播详情*/
router.live_details = function (req, res) {
    var id = req.query.id
    
    async.waterfall([function (callback) {
        tools.postYueApiQuery('/wmb_live_detail', {id: id}, req, res, function (result) {
            callback(null, result)
        })
    }], function (err, results) {
        res.send(results)
    })
}
/*live列表*/
router.live_list = function (req, res) {
    var data = req.query
    res.locals.wglobals.device == "mobile"?page_size=6:page_size=9

    data['page_size'] = page_size
    
    async.waterfall([function (callback) {
        tools.postYueApiQuery('/wmb_live_list', data, req, res, function (result) {
            callback(null, result)
        })
    }], function (err, results) {
        res.send(results)
    })
}

module.exports = router;