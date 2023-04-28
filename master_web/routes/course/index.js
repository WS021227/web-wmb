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
        ],
            function (err, _) {
              return res.wrender("./course/index.ejs", {
                results: results,
              });
            }
        );
}

// 点击加载更多
router.get_lbkc=function(req,res){
    let start=req.query.start,end=req.query.end
    // 录播课程列表
    let key={
        start:start,
        size:end
    }
    let results={}

    tools.getMasterApiQuery('/course/2023/list', key, req, res,
        function (result) {
            results.lb_list = result.data || {};
            res.send({
                results:results
            })
        }
    )
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
                        results.wd_data_list = result.data.list || {};
                        results.wd_data_list_num = result.data.total || 0
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
        size:5,
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
            var dirPath = path.join(__dirname, "file");
            if (!fs.existsSync(dirPath)) {
                fs.mkdirSync(dirPath);
                console.log("文件夹创建成功");
            } else {
                console.log(dirPath,"文件夹已存在");
            }

            let fileName = "cover_16825010105251746.jpg" ;
            let url = "https://static.52wmb.com/wmb_course/2023/images/" + fileName;
            let stream = fs.createWriteStream(path.join(dirPath, fileName));
            request(url,function(error, response, body){
                if (error) {
                    return cb(null,1)
                  }
            }).pipe(stream).on("close", function (err) {
                let down={state:0,url:dirPath}
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

// 课程领取
router.get_kc=function(req,res){
    let id=req.body.id
    tools.postMasterApiQuery(`/course/2023/reply/${id}`, key, req, res,
        function (result) {
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

//课程问答
router.get_kcwd=function(req,res){
    console.log(req.query.id)
    let results={},id=req.query.id
    let key={
        start:0,
        size:5
    }
    tools.getMasterApiQuery(`/course/2023/reply/${id}`, key, req, res,
        function (result) {
            results.wd_data_list = result.data.list || {};
            results.wd_data_list_num = result.data.total || 0
            res.wrender('./course/children/wd_list.ejs', {
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

// 发布评论
router.post_pl=function(req,res){
    console.log(req.body,"0000000")
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