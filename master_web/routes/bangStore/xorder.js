const express = require('express');
const async = require('async');
const tools = require('../../common/util.js')
const multiparty = require("multiparty");
const router = express.Router();
router.index = function (req, res) {
    res.wrender('./bangStore/xorder.ejs', {
        results: {}
    });
}

router.pop_trial = function (req, res) {
    tools.getMasterApiQuery('/common/xorder/trial', {}, req, res, function (result) {
        if (result.state != 0) return res.send({state: result.state})
        res.wrender('./bangStore/xorder_trial.ejs', {}, function (err, str) {
            if(!err) return res.send({content: str, state: 0})
            return res.send({state: 1})
        })
    })
}
router.save_trial = function (req, res) {
    tools.login_verify(res, 2, function (_user) {
        let _from = new multiparty.Form()
        _from.parse(req, function (err, fields, files) {
            let params = {}
            Object.keys(fields).forEach(function (item){
                params[item] = fields.fget(item)
            })
            tools.postMasterApiQuery('/common/xorder/trial', params, req, res, function (result){
                res.send(result)
            })
        })
    })
}


module.exports = router;