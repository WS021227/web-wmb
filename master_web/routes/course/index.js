const express = require('express');
const async = require('async');
const fs = require("fs");
const path = require("path");
const request = require("request");
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
                    }
                )
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
                    }
                )
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
                    }
                )
            },
            function (callback) {
                // 开发课更新节数
                tools.getMasterApiQuery(`/cdc/class/total/1`, {}, req, res,
                    function (result) {
                        console.log(result,"课程节数")
                        results.kc_num = result.data.total || 0;
                        callback(null, 1)
                    }
                )
            },
        ],
        function (err, _) {
            return res.wrender("./course/index.ejs", {
                results: results,
            });
        }
    );
}

// 录播课程列表点击加载更多
router.get_lbkc=function(req,res){
    let start=req.query.start
    let key={
        start:start,
        size:10
    }
    let results={}
    tools.getMasterApiQuery('/course/2023/list', key, req, res,
        function (result) {
            results.lb_list = result.data.list || [];
            result.state = result.state
            res.send(results)
        }
    )
}

// 资源包列表
router.get_tj_or_new=function(req,res){
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

// 下载资源包
router.download_zy=function(req,res){
    let id = parseInt(req.query.pack_id)
    async.waterfall([
        function (cb) {
        // 获取资源包地址(文件名)
        tools.getMasterApiQuery(`/course/2023/information-pack/${id}`, {}, req, res,
            function(result){
                console.log(result)
                if(result.state != 0) return cb(null,1)
                let url = result.data.file
                cb(null,url)
            }
        )
        },
        function (data, cb) {
            // let fileName = data
            let fileName = "483524.rar" ;
            let x_url="C:\\"
            var dirPath = path.join(x_url, "wmb");
            if (!fs.existsSync(dirPath)) {
                fs.mkdirSync(dirPath);
            } else {
                if(fs.existsSync(path.join(dirPath,fileName))){
                    let down={state:0,url:dirPath,title:"已下载该资源"}
                    return cb(null,down)
                }
            }
            let url = "https://static.52wmb.com/wmb_course/2023/courseware/" + fileName;
            let stream = fs.createWriteStream(path.join(dirPath, fileName));
            request(url,function(error, response, body){
                if (error) {
                    return cb(null,1)
                  }
            }).pipe(stream).on("close", function (err) {
                let down={state:0,url:dirPath,title:"下载完成"}
                cb(null,down)
            });
        }
      ], function (err, fun_cb) {
        return res.send({
            fun_cb
        });
      }
    )
}

// 侧拉分页
router.get_side=function(req,res){
    // 资源包列表
    let key={
        start:0,
        size:5,
    }
    key.start=req.query.start
    key.end=req.query.end
    tools.getMasterApiQuery('/course/2023/information-pack', key, req, res,
    function (result) {
            res.wrender('./course/children/side_children.ejs', {
                results: result.data
              },
              function (err, str) {
                if (err) return false
                return res.send({
                  content: str,
                  state: 0
                })
            })
    })
}

module.exports = router;
