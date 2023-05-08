const express = require('express');
const async = require('async');
const fs = require("fs");
const urlencode = require("urlencode")
const mime=require("mime")
const tools = require('../../common/util.js')
const router = express.Router();

// 课程详情页
router.recording_detail = function(req,res){
    res.locals.wglobals.nav_active='course'
    let id=req.params.id
    let results={}
    async.series(
        [
            function (callback) {
                // 直播课预约数据
                tools.getMasterApiQuery(`/course/2023/detail/${id}`, {}, req, res,
                    function (result) {
                        results.xq_data = result.data || {};
                        callback(null,1)
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
                        results.wd_data_list = result.data.list || {};
                        results.wd_data_list_num = result.data.total || 0
                        callback(null, 1)
                    }
                )
            },
            function(callback) {
                res.wrender('./course/children/js_box.ejs', {
                    results: results
                  },
                  function (err, str) {
                    if (err) return false
                    results.content=str
                    callback(null, 1)
                })
            }
        ],
            function (err, str) {
              return res.wrender("./course/recording_detail.ejs", {
                results:results
              });
            }
        );
}

// 课程领取
router.course_2023_receive=function(req,res){
    let id = req.body.id
    // 领取课程
    tools.postMasterApiQuery(`/course/2023/receive/${id}`, {}, req, res,
        function (result) {
            if(result.state!=0) return res.send({state:1})
            res.send({state:0})
        }
    )
}

// 课程介绍
router.get_kcjs=function(req,res){
    let results={},id=req.query.id
    let key={
        start:0,
        size:5
    }
    // 暂时借用这个接口
    tools.getMasterApiQuery(`/course/2023/reply/${id}`, key, req, res,
        function (result) {
            results.wd_data_list = result.data.list || {};
            results.wd_data_list_num = result.data.total || 0
            res.wrender('./course/children/js_box.ejs', {
                results: results
              },
              function (err, str) {
                if (err) return false
                return res.send({
                  content: str,
                  state: 0
                })
            })
        }
    )
}
//课程问答
router.get_kcwd=function(req,res){
    let results={},id=req.query.id
    let key={
        start:0,
        size:10
    }
    tools.getMasterApiQuery(`/course/2023/reply/${id}`, key, req, res,
        function (result) {
            results.wd_data_list = result.data.list || {};
            results.wd_data_list_num = result.data.total || 0;
            results.id = id
            res.wrender('./course/children/wd_list.ejs', {
                results: results,
              },
              function (err, str) {
                if (err) return false
                return res.send({
                  content: str,
                  state: 0
                })
            })
        }
    )
}

//课程问答
router.get_kcwd_children=function(req,res){
    let results={},id=req.query.id,num=parseInt(req.query.num)
    let key={
        start:num,
        size:10
    }
    tools.getMasterApiQuery(`/course/2023/reply/${id}`, key, req, res,
        function (result) {
            results.wd_data_list = result.data.list || {};
            results.wd_data_list_num = result.data.total || 0;
            results.id = id
            res.wrender('./course/children/wd_list_children.ejs', {
                results: results,
              },
              function (err, str) {
                if (err) return false
                return res.send({
                  content: str,
                  length:result.data.list.length,
                  state: 0
                })
            })
        }
    )
}

// 发布评论
router.post_pl=function(req,res){
    let results={},id=req.body.id,pl_content=req.body.content
    let key={
        content:pl_content,
    }
    tools.postMasterApiQuery(`/course/2023/reply/${id}`, key, req, res,
    function (result) {
       res.send(result)
    }
    )
}

// 下载ppt
router.down_ppt=function(req,res){
    let file_name=req.query.name,fname=req.query.fname
    let kzm = file_name.substring(file_name.lastIndexOf("."))
    fname = fname + kzm
    let f_name = urlencode(fname, "utf-8");
    

    let filePath = '\\\\10.20.53.222\\static_no_cdn\\wmb_course\\2023\\courseware\\' + file_name
    // 查询文件类型
    var mimetype = mime.lookup(file_name);
    res.setHeader('Content-Disposition', "attachment; filename* = UTF-8''" + f_name);
    res.setHeader('Content-type', mimetype);
    var filestream = fs.createReadStream(filePath);
    filestream.pipe(res);
}

module.exports = router;