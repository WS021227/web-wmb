
const express = require('express');
const async = require('async');
const tools = require("../../common/util");
const router = express.Router();



router.intention_push = function (req, res) {
    let key = req.query.key || '', lang = res.locals.wglobals.lang
    if (!key) return res.wabort()
    tools.postMasterApiQuery('/user/intention/push',
        {key: key}, req, res,
        function (result) {
            if(result.state != 0) return res.wabort()
            let data = result.data || {}
            res.wrender('./user/intention_push_'+ lang +'.ejs', {results: data});
        }
    )
}

router.test = function(req, res){
    // 请求接口
    let results = {}
    // tools.postMasterApiQuery('/user/intention/push',
    //     {key: key}, req, res,
    //     function (result) {
            // 响应数据到前端
            // results.xxx = result            
            // res.send(results)

            // res.send(result)
    //     }
    // )
    // 响应数据到前端
    res.send({state: 0})
}

module.exports = router;