const express = require('express');
const async = require('async');
const tools = require('../../common/util.js')
const router = express.Router();

function tutorial_list(req, res, params, callback) {
    console.log(params,"参数")
    tools.getMasterApiQuery('/tutorial/list', params, req, res, function (result) {
        if (result.state != 0) return res.status(404).render('error')
        let _list = (result.data || {}).list || [],
            total_count = _list.length > 0 ? _list[0].total_count : 0,
            has_next = total_count > Number(params.start) + Number(params.size)
        callback(_list, has_next)
    })
}

router.index = function (req, res) {
    var dataarry = {};
    dataarry.dc_active = 'class'
    async.waterfall([function (callback) {
        /*教程分类目录*/
        tools.getMasterApiQuery('/tutorial/category/item', {
            has_child: 1,
            route: 'kfjq'
        }, req, res, function (result) {
            var list = result.data.list || [],
                item = list.length > 0 ? list[0] : null
            dataarry.tutorial_category_item = item.child_list || []
            dataarry.tutorial_category_id = dataarry.tutorial_category_item.length > 0 ? item.id : null
            callback(null, dataarry)
        })
    }, function (_, callback) {
        /*教程列表*/
        // 没有指定的分类数据则不请求
        if (dataarry.tutorial_category_id) {
            tutorial_list(req, res, {
                start: 0,
                size: 15,
                category: dataarry.tutorial_category_id
            }, function (_list, has_next) {
                dataarry.tutorial_list = _list
                dataarry.has_next = has_next
                callback(null, 1)
            })
        } else {
            callback(null, 1)
        }
    }, function (_, callback) {
        /*热门*/
        tools.getMasterApiQuery('/tutorial/hot', {
            size: 5
        }, req, res, function (result) {
            dataarry.tutorial_hot_list = result.data.list || [];
            callback(null, 1);
        })
    }, function (_, callback) {
        // randomness
        tools.getMasterApiQuery('/tutorial/randomness', {
                top_count: 1,
                category: 82
            }, req, res,
            function (result) {
                let list = result.state == 0 ? result.data.list || [] : []
                dataarry.tutorial_kfkc_item = list.length > 0 ? list[0] : null
                callback(null, 1)
            })
    }], function (err, _) {
        return res.wrender('./bangClass/index.ejs', {
            results: dataarry
        });
    })
}


/*教程列表*/
router.tutorial_list = function (req, res) {
    var dataarry = {},
        data = req.query,
        source = data.pop('source'),
        size = 15
    dataarry.dc_active = 'class',
    data['size'] = size
    async.waterfall([function (callback) {
        tutorial_list(req, res, data, function (_list, has_next) {
            dataarry.tutorial_list = _list
            dataarry.has_next = has_next
            callback(null, 1)
        })
    }], function (err, _) {
        let has_next = dataarry.pop('has_next'),
            result = {
                results: dataarry
            }
        res.wrender('./bangClass/child/' + source + '.ejs', result, function (err, str) {
            if (err) return res.wrender('./bangClass/child/default.ejs', result, function (err, str) {
                unity_list_send(res, str, has_next)
            })
            unity_list_send(res, str, has_next)
        })
    })
}

function unity_list_send(res, str, has_next) {
    res.send({
        content: str,
        has_next: has_next
    })
}

/*教程分类目录*/
router.category_item = function (req, res) {
    var data = req.query
    async.waterfall([function (callback) {
        tools.getMasterApiQuery('/tutorial/category/item', data, req, res, function (result) {
            callback(null, result)
        })
    }], function (err, results) {
        res.send(results)
    })
}

router.category_index = function (req, res) {
    var dataarry = {
        route: req.params.route
    }
    dataarry.dc_active = 'class',
    async.waterfall([function (callback) {
            /*专题列表*/
            tools.getMasterApiQuery('/tutorial/category/item', {
                has_child: 1,
                route: req.params.route
            }, req, res, function (result) {
                var _list = result.data.list || []
                if (_list.length <= 0) return res.status(404).render('error')
                dataarry.tutorial_category_item = _list[0]
                callback(null, 1)
            })
        }, function (data, callback) {

            async.series([

                function (cb) {
                    /*教程列表*/
                    tutorial_list(req, res, {
                        start: 0,
                        size: 15,
                        category: dataarry.tutorial_category_item.id
                    }, function (_list, has_next) {
                        dataarry.tutorial_list = _list
                        dataarry.has_next = has_next
                        cb(null, 1)
                    })
                },
                function (cb) {
                    /*热门*/
                    tools.getMasterApiQuery('/tutorial/hot', {
                        size: 5
                    }, req, res, function (result) {
                        dataarry.tutorial_hot_list = result.data.list || [];
                        cb(null, 1)
                    })
                }
            ], function (err, res) {
                callback(null, 1);
            })

        }

    ], function (err, _) {
        return res.wrender('./bangClass/category_index.ejs', {
            results: dataarry
        });
    })
}

router.czsc = function (req, res) {
    return res.wrender('./bangClass/czsc.ejs', {
        results: '服务与报价'
    });
}

router.kfkc = function (req, res) {
    var dataarry = {}
    dataarry.dc_active = 'class',
    async.waterfall([function (callback) {
            /*教程列表*/

            if (res.locals.wglobals.device !== "mobile") {
                tutorial_list(req, res, {
                    start: 0,
                    size: 9,
                    category: 82
                }, function (_list, has_next) {
                    dataarry.tutorial_list = _list
                    dataarry.has_next = has_next
                    callback(null, 1)
                })
            } else {
                tutorial_list(req, res, {
                    start: 0,
                    size: 8,
                    category: 82
                }, function (_list, has_next) {
                    dataarry.tutorial_list = _list
                    dataarry.has_next = has_next
                    callback(null, 1)
                })
            }
        }

    ], function (err, _) {
        return res.wrender('./bangClass/kfkc.ejs', {
            results: dataarry
        });
    })
}

router.fwzc = function (req, res) {
    var dataarry = {}
    dataarry.dc_active = 'class',
    async.waterfall([function (callback) {
            /*教程列表*/
            tutorial_list(req, res, {
                start: 0,
                size: 15,
                category: 3
            }, function (_list, has_next) {
                dataarry.tutorial_list = _list
                dataarry.has_next = has_next
                callback(null, 1)
            })
        }, function (_, callback) {
            /*热门*/
            tools.getMasterApiQuery('/tutorial/hot', {
                size: 5
            }, req, res, function (result) {
                dataarry.tutorial_hot_list = result.data.list || [];
                callback(null, 1);
            })
        }

    ], function (err, _) {
        return res.wrender('./bangClass/fwzc.ejs', {
            results: dataarry
        });
    })
}

router.detail = function (req, res) {
    var id = req.params.id,
        dataarry = {};
        dataarry.dc_active = 'class',
        category = ''
    async.waterfall([function (callback) {
            tools.getMasterApiQuery('/tutorial/' + id, {}, req, res, function (result) {
                if (result.state != 0) return res.status(404).render('error')
                dataarry.detail = result.data
                callback(null, 1);
            })
        }, function (data, callback) {
            category = dataarry.detail.detail.cid

            async.series([function (cb) {
                /*相关文章推荐最热*/
                tutorial_list(req, res, {
                    start: 0,
                    size: 6,
                    category: category
                }, function (_list, has_next) {
                    dataarry.tutorial_hot_list = _list
                    dataarry.has_next = has_next
                    cb(null, 1)
                })
            }, function (cb) {
                /*相关文章推荐最新*/
                tutorial_list(req, res, {
                    start: 0,
                    size: 6,
                    category: category,
                    sort: 1
                }, function (_list, _) {
                    dataarry.tutorial_new_list = _list
                    cb(null, 1)
                })
            }], function (err, _) {
                callback(null, 1);
            })
        }

    ], function (err, _) {
        dataarry.category = category
        return res.wrender('./bangClass/new_detail.ejs', {
            results: dataarry
        });
    })
}
module.exports = router;