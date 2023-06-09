const express = require('express');
const async = require('async');
const fs = require("fs");
const urlencode = require("urlencode")
const mime=require("mime")
const tools = require('../../common/util.js');
const { cache } = require('ejs');
const router = express.Router();

router.index = function (req, res) {
    if (res.locals.wglobals.lang != 'cn') return res.status(404).render('error')
    res.locals.wglobals.nav_active='course'
    let results={}
    async.series(
        [
            function (callback) {
                // 直播课预约数据
                tools.getMasterApiQuery('/course/2023/live', {}, req, res,
                    function (result) {
                        console.log(result,"77777")
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
                tools.getMasterApiQuery(`/cdc/class/total/2`, {}, req, res,
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
    // 权限验证
    let id = parseInt(req.params.pack_id)
    // 获取资源包地址(文件名)
    tools.getMasterApiQuery(`/course/2023/information-pack/${id}`, {}, req, res,
        function(result){
            if(result.state != 0) return res.send({state:1})
            var name = result.data.file// 待下载的文件名
            let kzm = name.substring(name.lastIndexOf("."))
            let xz_name = result.data.name + kzm

            let f_name = urlencode(xz_name, "utf-8");
            let filePath = '\\\\10.20.53.222\\static_no_cdn\\wmb_course\\2023\\courseware\\' + name
            // 查询文件类型
            var mimetype = mime.lookup(name);
            res.setHeader('Content-Disposition', "attachment; filename* = UTF-8''" + f_name);
            res.setHeader('Content-type', mimetype);
            var filestream = fs.createReadStream(filePath);
            filestream.pipe(res);
            filestream.on('data', (data) => {
                console.log('传输中');
            }); 
            filestream.on('error', function() {
                console.log('下载失败');
            });
            filestream.on('end', () => {
                console.log('下载结束');
            }); 
        }
    )
}

// 侧拉分页
router.get_side=function(req,res){
    // 资源包列表
    let key={
        start:0,
        size:8,
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

// 校验
router.jy_down_zy=function(req,res){
    let vip = req.body.vip || "",user_level = res.locals.wglobals.simple_user.vip_level
    let vip_jy = {
        "":0,
        'v':1,
        'bd':2,
        'yd':3
    }
    let vip_jy1 = {
        0:"",
        1:'v',
        2:'bd',
        3:'yd'
    }
    if(vip_jy[user_level] < vip_jy[vip]) return res.send({state:1,v:vip_jy1[vip_jy[vip]]})
    res.send({state:0})
}

module.exports = router;
