const express = require('express');
const async = require('async');
const tools = require('../../common/util.js')
const router = express.Router();

router.index = function (req, res) {
    var results = {}
    async.waterfall([
            function (callback) {
                if (!res.locals.wglobals.user.id) {
                    tools.getMasterApiQuery('/payment/add-service/list',
                        {adds_name: 'jungle_scout'}, req, res,
                        function (result) {
                            results.add_service = result.state === 0 ? result.data.list : []
                            callback(null, 1);
                        }
                    )
                } else {
                    tools.getMasterApiQuery('/payment/add-service/buyer/items',
                        {adds_name: 'jungle_scout'}, req, res,
                        function (result) {
                            if (result.state == 0) {
                                results.add_service = result.state === 0 ? result.data.list : []
                                callback(null, 1);
                            } else {
                                var message = result.message;
                                callback(message, 1);
                            }
                        }
                    )
                }
            }
        ],
        function (err, _) {
            return res.wrender('./bangStore/amazon.ejs', {
                results: results
            });
        }
    )
}

router.add_service = function (req, res) {
    let cook=tools.getCookie(req,'_JS_experience')
    if(cook) return res.send({data:{}})
    tools.getMasterApiQuery('/payment/add-service/purchased', {adds_name: 'jungle_scout'}, req, res, function (result){
        if(!result.data.account){
            tools.setCookie(req, res, '_JS_experience','true', 86400)
        }
        res.send(result)
    })
}

router.js_trial_post = function (req, res) {
    let key=req.body
    if(key.fb){
        if(key.fb=='Facebook'){
            key.fb=key.fb_value
            key.whatapp=""
        }else{
            key.fb=""
            key.whatapp=key.fb_value
        }
    }
    let {fb_value,...new_key} = key
    console.log(new_key,"提交")
    tools.postMasterApiQuery('/common/js/trial', new_key, req, res, function (result){
        res.send(result)
    })
}

router.js_trial_toast = function (req, res) {
    let _user=req.query
    let results={
        phone:_user.phone,
        email:_user.email
    }
    async.waterfall([
        function (callback) {
            tools.getMasterApiQuery('/common/js/trial',
                {}, req, res,
                function (result) {
                    let flag=result.state
                    callback(null, flag);
                }
            )
        }
    ],
    function (err, a) {
        results.show_flag=a
            return res.wrender('./full_pop/jungle_scout_experience.ejs', {
                results: results
            }, function (err, str) {
                res.send({
                    content:str,
                    state:a
                })
            })
        }
    )
}

// 邮箱校验 send_type=5
router.email=function(req,res){
    let key={
        picture_code:"",
        email:req.body.email || "",
        send_type:5
    }
    tools.postMasterApiQuery('/account/send/email/code', key, req, res,
        function (result) {
            res.send(result)
    })
}
// 手机校验 send_type=5
router.phone=function(req,res){
    let key={
        picture_code:"",
        phone:req.body.phone || "",
        send_type:5
    }
    tools.postMasterApiQuery('/account/send/phone/code', key, req, res,
        function (result) {
            res.send(result)
    })
}

module.exports = router;