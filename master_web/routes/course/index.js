const express = require('express');
const async = require('async');
const tools = require('../../common/util.js')

const router = express.Router();

router.index = function (req, res) {
    res.locals.wglobals.nav_active='course'
    // tools.getMasterApiQuery('/line/circle/master/home', {
    //         top_count: 2
    //     }, req, res,
    //     function (result) {
    //         let data = result.data || {};
    //         results.line_group = data.list || []
    //         cb(null, 1)
    //     })
    res.wrender('./course/index.ejs', {
        results: '新版开发课'
    });
}

router.recording_detail = function(req,res){
    res.wrender('./course/recording_detail.ejs', {
        results: '录播课详情'
    });
}

module.exports = router;