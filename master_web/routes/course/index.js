const express = require('express');
const async = require('async');
const fs = require("fs");
const urlencode = require("urlencode")
const mime=require("mime")
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
    let id = parseInt(req.params.pack_id)
    // 获取资源包地址(文件名)
    tools.getMasterApiQuery(`/course/2023/information-pack/${id}`, {}, req, res,
        function(result){
            if(result.state != 0) return res.send({state:1})
            var name = result.data.file// 待下载的文件名
            let f_name = urlencode(name, "utf-8");
            let filePath = '\\\\10.20.53.222\\static_no_cdn\\wmb_course\\2023\\courseware\\' + name
            // 查询文件类型
            var mimetype = mime.lookup(name);
            res.setHeader('Content-Disposition', "attachment; filename* = UTF-8''" + f_name);
            res.setHeader('Content-type', mimetype);
            var filestream = fs.createReadStream(filePath);
            console.log(res)
            filestream.pipe(res);
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
