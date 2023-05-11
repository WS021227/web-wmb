const express = require('express');
const async = require('async');
const tools = require('../../common/util.js')
const router = express.Router();

router.index = function (req, res) {
    let results={dc_active:'store'}
    res.wrender('./bangStore/index.ejs',{results:results});
}


router.custom_data_course = function (req, res) {
    let series_id = req.params.id
    res.locals.wglobals.nav_active = 'course'
    let results = {}
    results.series_id = series_id
    async.series([
            function (cb){
                tools.getMasterApiQuery('/cdc/catalog', {start: 0, size: 100 ,series: series_id}, req, res, function (result){
                    console.log(result.data,"88888")
                    results.data = result.data
                    cb(null, 1)
                })
            },
            function (cb){
                unity_reply_list(req, res, 1,series_id, function (result){
                    results.reply = result
                    console.log(result,"课程列表")
                    cb(null, 1)
                })
            }
        ],
        function (err, _){
            res.wrender('./bangStore/cdc_index.ejs', {results: results});
    })
}


router.custom_data_course_list = function (req, res) {
    let catalog_id = req.params.id
    tools.getMasterApiQuery('/cdc/class/' + catalog_id, {start: 0, size: 100}, req, res,
        function (result) {
            res.send(result)
        })
}
router.custom_data_course_url = function (req, res) {
    let class_id = req.params.id

    tools.getMasterApiQuery('/cdc/class/url/' + class_id, {}, req, res,
        function (result) {
            res.send(result)
        })
}

function unity_reply_list(req, res, page,series_id, callback) {
    let size = 15, start = (page - 1) * size

    tools.getMasterApiQuery('/cdc/reply', {start: start, size: size,series:series_id}, req, res,
        function (result) {
            let _list = (result.data || {}).list || [], total = _list.length > 0 ? _list[0].total : 0
            result.total = total
            result.has_next = total > page * size
            callback(result)
        })
}

router.custom_data_course_reply_list = function (req, res) {
    let page = Number(req.query.page || 1),series_id = Number(req.query.series_id)
    unity_reply_list(req, res, page,series_id, function (result){
        res.send(result)
    })
}
router.custom_data_course_reply_add = function (req, res) {
    let content = req.body.content,series_id=req.body.series_id
    tools.postMasterApiQuery('/cdc/reply', {content: content,series:series_id}, req, res,
        function (result) {
            res.send(result)
        })
}
router.custom_data_course_open_auth = function (req, res) {
    var series = req.body.series || 1
    console.log(series,"222")
    tools.postMasterApiQuery('/cdc/open/permission', {series: series}, req, res,
        function (result) {
            console.log(result)
            res.send(result)
    })
}


module.exports = router;