const express = require('express');
const async = require('async');
const tools = require('../../common/util.js')
const router = express.Router();

router.index = function (req, res) {
    tools.login_verify(res, 1, function (_user) {
        res.locals.wglobals.nav_active = 'datacenter'
        return res.wrender('./home/order_manage.ejs', {
            results: {dc_active: "order"}
        });
    })
}

/*订单列表*/
router.user_order_list = function (req, res) {
    tools.login_verify(res, 2, function (_user) {
        var data = req.query
        data['size'] = 50
        async.waterfall(
            [
                function (callback) {
                    tools.getMasterApiQuery('/orders/list',
                        data, req, res,
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
/*发票信息列表*/
router.user_order_invoice_info_list = function (req, res) {
    tools.login_verify(res, 2, function (_user) {
        async.waterfall(
            [
                function (callback) {
                    tools.getMasterApiQuery('/orders/invoice/info/list',
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

//开票
router.user_order_invoice_apply = function (req, res) {

    tools.login_verify(res, 2, function (_user) {
        var data = req.body
        async.waterfall(
            [
                function (callback) {
                    tools.postMasterApiQuery('/orders/invoice/apply', data,
                        req, res,
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

//添加发票信息
router.user_order_invoice_info = function (req, res) {
    tools.login_verify(res, 2, function (_user) {
        var data = req.body
        async.waterfall(
            [
                function (callback) {
                    tools.postMasterApiQuery('/orders/invoice/info', data,
                        req, res,
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

router.delete_invoice_info = function (req, res) {
    tools.login_verify(res, 2, function (_user) {
        async.waterfall(
            [
                function (callback) {
                    tools.deleteMasterApiQuery('/orders/invoice/info/' + req.query['title_id'],
                        {},req, res,
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