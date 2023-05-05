const express = require('express');
const async = require('async');
const fs = require("fs");
const path = require("path");
const request = require("request");
const tools = require('../../common/util.js')
const router = express.Router();

// 课程详情页
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
                console.log(str,"7887")
              return res.wrender("./course/recording_detail.ejs", {
                results:results
              });
            }
        );
}

// 课程领取
router.course_2023_receive=function(req,res){
    let id = req.body.id
    console.log(id,"0000")
    tools.postMasterApiQuery(`/course/2023/receive/${id}`, {}, req, res,
        function (result) {
            tools.getMasterApiQuery(`/course/2023/detail/${id}`, {}, req, res,
                function (result) {
                    results.xq_data = result || {};
                    callback(null,1)
                }
            )
            res.send(result)
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

// 下载ppt
router.down_ppt=function(req,res){
    // let fileName = data
    let fileName = "483524.rar" ;
    let x_url="C:\\"
    var dirPath = path.join(x_url, "wmb");
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath);
    } else {
        if(fs.existsSync(path.join(dirPath,fileName))){
            let down={state:0,url:dirPath,title:"已下载该资源"}
            return res.send(down)
        }
    }

    let url = "https://static.52wmb.com/wmb_course/2023/courseware/" + fileName;
    let stream = fs.createWriteStream(path.join(dirPath, fileName));
    request(url,function(error, response, body){
        if (error) {
            return res.send({
                staet:1,
                title:"下载失败"
            })
          }
    }).pipe(stream).on("close", function (err) {
        let down={state:0,url:dirPath,title:"下载完成"}
        res.send(down)
    });
}

//课程问答
router.get_kcwd=function(req,res){
    console.log(req.query.id)
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
    console.log(req.query.id,req.query.num)
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

module.exports = router;