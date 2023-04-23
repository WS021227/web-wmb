const express = require('express');
const async = require('async');
const tools = require('../../common/util.js')
const baseConfig = require("../../common/base_config");
const router = express.Router();
router.index = function (req, res) {
    tools.login_verify(res, 1, function (_user) {
        res.locals.wglobals.nav_active = 'datacenter'
        let results = {dc_active: "home", redirectUrl: req.query.redirectUrl};
        async.waterfall([
            function (callback) {
                tools.getMasterApiQuery('/user/info',
                    {}, req, res,
                    function (result) {
                        results.user = result;
                        callback(null, 1);
                    }
                )
            }
        ], function (err, _) {
            res.wrender('./home/home.ejs', {
                results: results
            });
        })
    })
}
/*权限明细*/
router.permissions_datails = function (req, res) {
    tools.login_verify(res, 2, function (_user) {
        async.waterfall(
            [
                function (callback) {
                    tools.getMasterApiQuery('/permissions/details',
                        {}, req, res,
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

/*公司报告统计*/
router.company_report_stats = function (req, res) {
    tools.login_verify(res, 2, function (_user) {
        async.waterfall(
            [
                function (callback) {
                    tools.getMasterApiQuery('/common/company/report/stats',
                        {}, req, res,
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

/*标签统计*/
router.tags_stats = function (req, res) {
    tools.login_verify(res, 2, function (_user) {
        async.waterfall(
            [
                function (callback) {
                    tools.getMasterApiQuery('/common/tags/stats',
                        {}, req, res,
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

/*增值服务列表*/
router.add_service_list = function (req, res) {
    tools.login_verify(res, 2, function (_user) {
        async.waterfall(
            [
                function (callback) {
                    tools.getMasterApiQuery('/payment/add-service/list',
                        {}, req, res,
                        function (result) {
                            callback(null, result)
                        }
                    )
                }
            ],
            function (err, results) {
                results.static = baseConfig.config.static
                res.send(results)
            }
        )
    })
}

/*平台公告*/
router.platform_notice_list = function (req, res) {
    tools.login_verify(res, 2, function (_user) {
        var data = req.query
        data['size'] = 10
        async.waterfall(
            [
                function (callback) {
                    tools.getMasterApiQuery('/tutorial/list',
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

/*热门搜索词*/
router.recent_keys = function (req, res) {
    tools.login_verify(res, 2, function (_user) {
        let data = req.query;
        data['top_count'] = 5
        async.waterfall(
            [
                function (callback) {
                    tools.getMasterApiQuery('/company/search-log/recent/keys',
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

/*公司搜索*/
router.company_search_list = function (req, res) {
    tools.login_verify(res, 2, function (_user) {
        var data = req.query
        data['size'] = 8
        async.waterfall(
            [
                function (callback) {
                    tools.getMasterApiQuery('/company/search/list',
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


/*页面推送*/
router.recommend_mine = function (req, res) {
    tools.login_verify(res, 2, function (_user) {
        var data = req.query
        async.waterfall(
            [
                function (callback) {
                    tools.getMasterApiQuery('/line/recommend/master/mine',
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

/*专属客服*/
router.employee = function (req, res) {
    tools.login_verify(res, 2, function (_user) {
        async.waterfall(
            [
                function (callback) {
                    tools.getMasterApiQuery('/user/employee',
                        {}, req, res,
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

// 不显示提示框并且弹窗不显示
router.del_redemption_toast = function (req, res) {
    let key={
        key:'yue_kt_dh',
        value:null
    }
   tools.putMasterApiQuery('/user/functional', key, req, res,
        function (result) {
            if(result.state==0){
                res.send({
                    state:0
                })
            }
        }
    )
}

// res.state==0显示 1不显示
router.get_redemption_code = function (req, res) {
    let _user=req.query
     //兑换码 
     let big_class_toast_show_code={}
     //是否兑换过大课堂
     let big_class_toast_show=_user.user_functional.yue_kt_dh || null
     
     // 已兑换或未购买不弹
     if(!big_class_toast_show) return toast_show(1,null)
     // 获取缓存
     big_class_toast_show_code.code=tools.getCookie(req,'_home_big_class') || null
     big_class_toast_show_code.time=tools.getCookie(req,'_home_big_class_time') || null
     if(big_class_toast_show_code.code && big_class_toast_show_code.time) return toast_show(0,big_class_toast_show_code)
 
     tools.getMasterApiQuery(`/coupon/yue-kt/code/${big_class_toast_show}`, {}, req, res, function (result) {
        if(result.state!=0) return toast_show(1,null)
            // 缓存下兑换码
            tools.setCookie(req, res, '_home_big_class', `${result.data.coupon_code}`, 86400)
            tools.setCookie(req, res, '_home_big_class_time', `${result.data.coupon_expire}`, 86400)
            big_class_toast_show_code.code=result.data.coupon_code
            big_class_toast_show_code.time=result.data.coupon_expire
            toast_show(0,big_class_toast_show_code)
     })
 
     function toast_show(sshow,scode){
        res.send({
            state:sshow,
            end_time:scode.time,
            code:scode.code
        })
     }
}

module.exports = router;