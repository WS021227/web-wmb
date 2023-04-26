const express = require('express');
const async = require('async');
const tools = require('../../common/util.js')

const router = express.Router();

router.index = function (req, res) {
    res.locals.wglobals.nav_active='course'
    let results={}
    async.series(
        [
            function (callback) {
                // 直播课预约数据
                tools.getMasterApiQuery('/course/2023/live', {}, req, res,
                    function (result) {
                        results.top_live_data = result.data || {};
                        callback(null, 1)
                    })
            },
            function (callback) {
                // 资源包列表
                let key={
                    start:0,
                    size:4,
                    is_rec:1
                }
                tools.getMasterApiQuery('/course/2023/information-pack', key, req, res,
                    function (result) {
                        results.zyb_list = result.data || {};
                        callback(null, 1)
                    })
            },
            function (callback) {
                // 录播课程列表
                let key={
                    start:0,
                    size:10
                }
                tools.getMasterApiQuery('/course/2023/list', key, req, res,
                    function (result) {
                        results.lb_list = result.data || {};
                        callback(null, 1)
                    })
            },
        ],
            function (err, _) {
              return res.wrender("./course/index.ejs", {
                results: results,
              });
            }
        );
}

router.recording_detail = function(req,res){
    let id=req.params.id
    let results={}
    async.series(
        [
            function (callback) {
                // 直播课预约数据
                tools.getMasterApiQuery(`/course/2023/detail/${id}`, {}, req, res,
                    function (result) {
                        results.xq_data = result || {};
                        callback(null, 1)
                    }
                )
            },
            function (callback) {
                // 问答列表数据
                let key={
                    start:0,
                    size:5
                }
                tools.getMasterApiQuery(`/course/2023/reply/${id}`, key, req, res,
                    function (result) {
                        results.wd_data_list = result || {};
                        callback(null, 1)
                    }
                )
            },
        ],
            function (err, _) {
              return res.wrender("./course/recording_detail.ejs", {
                results: results,
              });
            }
        );
}

router.get_tj_or_new=function(req,res){
    // 资源包列表
    let key={
        start:0,
        size:4,
    }
    let id = req.query.id || null
    id ? key.is_rec=id : ""
    tools.getMasterApiQuery('/course/2023/information-pack', key, req, res,
    function (result) {
        if(id){
            res.send(result)
        }else{
            res.wrender('./course/children/side.ejs', {
                results: result.data
              },
              function (err, str) {
                if (err) return false
                return res.send({
                  content: str,
                  state: 0
                })
            })
        } 
    })
}

module.exports = router;