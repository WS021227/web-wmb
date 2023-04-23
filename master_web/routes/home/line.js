const express = require('express');
const async = require('async');
const tools = require('../../common/util.js')
const router = express.Router();
const multiparty = require("multiparty");
const path = require("path");
const fs = require("fs");
const images = require('images')

router.line = function (req, res) {
    tools.login_verify(res, 1, function (_user) {
        var results={dc_active: "index"}

        async.waterfall([
            function (callback){
                tools.getMasterApiQuery('/line/info/' + _user.id, {}, req, res, function (result) {
                    if (result.state != 0) return res.wabort()
                    results.line_user = result.data
                    callback(null, 1)
                })

            }
        ], function (err, _) {

            res.wrender('./home/line/line.ejs', {
                results: results
            });
        })
    })
}


router.follow = function (req, res) {
    tools.postMasterApiQuery('/line/follow/' + req.query.user_id, {}, req, res, function (result) {
        return res.send(result)
    })
}

router.unfollow = function (req, res){
    tools.deleteMasterApiQuery('/line/follow/' + req.query.user_id, {}, req, res, function (result){

        return res.send(result)
    })
}

router.stats = function (req, res) {
    tools.login_verify(res, 2, function (_user) {
        let dimension = 'promote|today_promote|today_view|view|uncheck_view|all_letter|today_letter|unread_letter|follow|today_follow|fans|today_fans|uncheck_fans'
        tools.getMasterApiQuery('/line/stats', {dimension:dimension}, req, res, function (result) {
            res.send(result)
        })
    })
}

/**
 * 小组列表
 * @param req
 * @param res
 */
router.group_list = function (req, res){
    tools.login_verify(res, 2, function (_user) {

        tools.getMasterApiQuery('/line/circle/master/admin', {start: 0, size: 10}, req, res, function (result) {
            res.send(result)
        })
    })
}

/**
 * 推荐用户
 * @param req
 * @param res
 */
router.member_list = function (req, res){
    let page = Math.max(1, Number(req.query.page || 1)), size = 45, start = (page -1) * size
    tools.login_verify(res, 2, function (_user) {

        tools.getMasterApiQuery('/line/master/admin/users/recommend', {start: start, size: size}, req, res, function (result) {
            res.send(result)
        })
    })
}

function follow_list(req, res, callback){
    let page = Math.max(1, Number(req.query.page || 1)), size = 15, start = (page -1) * size
    tools.getMasterApiQuery('/line/follow', {start: start, size: size, sort: 1}, req, res, function (result) {
        let list = result.data.list, total = list.length > 0 ? list[0].total_count : 0
        result.has_next = total > page * size ? 1 : 0
        callback(result)
    })

}
router.follow_list = function (req, res){
    follow_list(req, res, function (result){
        res.send(result)
    })
}

router.nav_notification = function (req, res) {
    tools.login_verify(res, 2, function (_user) {
        tools.getMasterApiQuery('/line/nav/stats', {}, req, res, function (result) {
            res.send(result)
        })
    })
}

router.group = function (req, res){

    tools.login_verify(res, 1, function (_user) {
        var results={dc_active: "group"}
        res.wrender('./home/line/group.ejs', {
            results: results
        });
    })
}
/**
 * 已入驻的圈子
 * @param req
 * @param res
 */
router.group_inbounded = function (req, res) {

    tools.login_verify(res, 2, function (_user) {
        tools.getMasterApiQuery('/line/circle/inbound',
            {start: 0, size: 10, has_all: 0, users: 6, user_id: _user.id},
            req, res, function (result) {
                res.send(result)
            })

    })
}
/**
 * 入驻圈子
 * @param req
 * @param res
 */
router.group_inbound = function (req, res) {
    tools.login_verify(res, 2, function (_user) {
        tools.postMasterApiQuery('/line/circle/inbound/' + req.body.group_id,
            {}, req, res, function (result) {
                res.send(result)
            })
    })
}


function unity_topic(req, res, has_reply, is_manage, is_circle,callback){
    tools.login_verify(res, 2, function (_user) {
        let page = Math.max(1, Number(req.query.page || 1)), size = 15, start = (page - 1) * size,
            circle_id = req.query.group_id || 0
        tools.getMasterApiQuery('/line/circle/topic', {
            start: start, size: size, sort: 1, user_id: _user.id,has_reply: has_reply,circle_id: circle_id,
            is_manage: is_manage, is_circle: is_circle
        }, req, res, function (result) {
            let list = (result.data || {}).list || [], total = list.length > 0 ? list[0].total_count : 0
            result.has_next = total > page * size ? 1 : 0
            callback(result)
        })
    })

}
/**
 * 贴子列表
 * @param req
 * @param res
 */
router.circle_topic = function (req, res) {
    unity_topic(req, res, 0, 0, 1,function (result) {
        res.send(result)
    })
}
/**
 * 入驻的圈子 items
 * @param req
 * @param res
 */
router.circle_items = function (req, res) {
    let exist_topic = req.query.exist_topic || 0
    tools.getMasterApiQuery('/line/circle/items',
        {start: 0, size: 10, exist_topic: exist_topic}, req, res,
        function (result) {
            res.send(result)
        })
}

/**
 * 贴子删除
 * @param req
 * @param res
 */
router.topic_delete = function (req, res){
    tools.deleteMasterApiQuery('/line/circle/topic/' + req.query.topic_id, {}, req, res, function (result){
        res.send(result)
    })
}

router.reply = function (req, res){

    tools.login_verify(res, 2, function (_user) {
        let page = Math.max(1, Number(req.query.page || 1)), size = 15, start = (page - 1) * size,
            is_group = req.query.is_group || 1
        tools.getMasterApiQuery('/line/circle/topic/my/reply', {
            start: start, size: size, is_circle: is_group
        }, req, res, function (result) {
            res.send(result)
        })
    })
}

router.reply_my = function (req, res){

    tools.login_verify(res, 2, function (_user) {
        let page = Math.max(1, Number(req.query.page || 1)), size = 15, start = (page - 1) * size,
            is_group = req.query.is_group || 1
        tools.getMasterApiQuery('/line/circle/topic/reply/my', {
            start: start, size: size, is_circle: is_group
        }, req, res, function (result) {
            res.send(result)
        })
    })
}
router.group_message = function (req, res){

    tools.login_verify(res, 2, function (_user) {
        let page = Math.max(1, Number(req.query.page || 1)), size = 15, start = (page - 1) * size
        tools.getMasterApiQuery('/line/circle/message', {
            start: start, size: size
        }, req, res, function (result) {
            let list = (result.data || {}).list || [], total = list.length > 0 ? list[0].total_count : 0
            result.has_next = total > page * size ? 1 : 0
            res.send(result)
        })
    })
}

router.dynamic = function (req, res){

    tools.login_verify(res, 1, function (_user) {
        var results={dc_active: "dynamic"}
        res.wrender('./home/line/dynamic.ejs', {
            results: results
        });
    })

}

router.dynamic_topic = function (req, res){
    unity_topic(req, res, 1, 1, 0,function (result){
        res.send(result)
    })
}
router.upload_topic_image = function (req, res) {
    // return res.send({file_name: 'topic_1661940869.png'})
    tools.login_verify(res, 2, function (_user) {
        tools.api_upload_file('/line/upload/image', req, res, {
            file_field: 'topic_image_file',
            params: {'base_name': 'topic', rewidth: 350},
            callback: function (resp) {
                if (resp.state != 0) {
                    return res.wabortJson()
                }
                res.send({file_name: resp.data.filename})
            }
        })
    })
}

router.topic_add = function (req, res) {
    tools.login_verify(res, 2, function (_user) {

        let form = new multiparty.Form();
        form.parse(req, function (err, fields) {
            tools.postMasterApiQuery('/line/circle/topic', {
                circle_id: fields.fget('group_id') || 0,
                contents: fields.fget('contents'),
                images: fields.fget('images'),
                video: fields.fget('video')
            }, req, res, function (result) {
                res.send(result)
            })
        })
    })
}

router.dynamic_topic_reply = function (req, res){
    let topic_id = req.query.topic_id, _start =  Math.max(0, Number(req.query.start || 0)),
        page = Math.max(1, req.query.page || 1),
        size = 10, start = (page - 1) * size + _start

    tools.getMasterApiQuery('/line/circle/topic/reply/' + topic_id, {
        start: start, size: size
    }, req, res, function (result){
        let list = (result.data || {}).list || [], total = list.length > 0 ? list[0].total_count : 0
        result.data.has_next = total > page * size ? 1 : 0
        res.send(result)
    })
}

router.topic_reply_add = function (req, res) {
    let topic_id = req.body.topic_id
    tools.postMasterApiQuery('/line/circle/topic/reply/' + topic_id, {content: req.body.content}, req, res,
        function (result) {
            res.send(result)
        })
}

router.reply_delete = function (req, res){
    let reply_id =req.query.reply_id
    if(!reply_id) return res.wabortJson()
    tools.deleteMasterApiQuery('/line/circle/topic/reply/' + reply_id, {reply_id: reply_id}, req, res, function (result){
        res.send(result)
    })
}

router.view_my_top = function (req, res){
    tools.getMasterApiQuery('/line/view/my/top', {top_count: 3}, req, res, function (result){
        res.send(result)
    })
}
router.related = function (req, res){

    tools.login_verify(res, 1, function (_user) {
        var results={dc_active: "related"}
        res.wrender('./home/line/related.ejs', {
            results: results
        });
    })
}
router.fans = function (req, res){

    tools.login_verify(res, 2, function (_user) {
        let page = Math.max(1, req.query.page || 1), size = 15, start = (page - 1) * size

        tools.getMasterApiQuery('/line/fans', {start: start, size: size, sort: 2},req, res, function (result){
            let list = (result.data || {}).list || [], total = list.length > 0 ? list[0].total_count : 0
            result.has_next = total > page * size ? 1 : 0
            res.send(result)
        })
    })
}
router.view = function (req, res){

    tools.login_verify(res, 2, function (_user) {
        let page = Math.max(1, req.query.page || 1), size = 15, start = (page - 1) * size

        tools.getMasterApiQuery('/line/views', {start: start, size: size},req, res, function (result){
            let list = (result.data || {}).list || [], total = list.length > 0 ? list[0].total_count : 0
            result.has_next = total > page * size ? 1 : 0
            res.send(result)
        })
    })

}
router.view_my = function (req, res){

    tools.login_verify(res, 2, function (_user) {
        let page = Math.max(1, req.query.page || 1), size = 15, start = (page - 1) * size

        tools.getMasterApiQuery('/line/views/my', {start: start, size: size},req, res, function (result){
            let list = (result.data || {}).list || [], total = list.length > 0 ? list[0].total_count : 0
            result.has_next = total > page * size ? 1 : 0
            res.send(result)
        })
    })
}
router.related_message = function (req, res){
    tools.login_verify(res, 2, function (_user) {
        let page = Math.max(1, req.query.page || 1), size = 15, start = (page - 1) * size

        tools.getMasterApiQuery('/line/notification', {start: start, size: size},req, res, function (result){
            let list = (result.data || {}).list || [], total = list.length > 0 ? list[0].total_count : 0
            result.has_next = total > page * size ? 1 : 0
            res.send(result)
        })
    })
}
router.letter = function (req, res){
    tools.login_verify(res, 1, function (_user) {
        var results={dc_active: "letter"}
        tools.getMasterApiQuery('/line/info/' + _user.id, {}, req, res, function (result) {
            results.line_user = result.data
            res.wrender('./home/line/letter.ejs', {
                results: results
            });
        })
    })
}
router.letter_users = function (req, res) {
    let page = Math.max(1, req.query.page || 1), size = 15, start = (page - 1) * size,
        user_id = req.query.user_id || 0, key = req.query.key || ''
    tools.getMasterApiQuery('/line/letter', {start: start, size: size, user_id: user_id, key: key}, req, res,
        function (result) {
            let list = (result.data || {}).list || [], total = list.length > 0 ? list[0].total_count : 0
            result.has_next = total > page * size ? 1 : 0
            res.send(result)
        })
}
router.letter_records = function (req, res) {
    let page = Math.max(1, req.query.page || 1), size = 15, start = (page - 1) * size,
        user_id = req.query.user_id
    if (!user_id) res.wabortJson()
    tools.getMasterApiQuery('/line/letter/records/' + user_id,
        {start: start, size: size}, req, res,
        function (result) {
            let list = (result.data || {}).list || [], total = list.length > 0 ? list[0].total_count : 0
            result.data.has_next = total > page * size ? 1 : 0
            res.send(result)
        })
}

router.letter_upload_image = function (req, res){

    tools.api_upload_file('/line/letter/upload/image', req, res, {
        file_field: 'letter_image',
        eFields: ['user_id'],
        params: {'base_name': 'letter', 'rewidth': 250, },
        callback: function (resp) {
            if (resp.state != 0) return res.wabortJson()
            res.send({file_name:  resp.data.content})
        }
    })

}

/***
 * 发送对话消息
 * @param req
 * @param res
 * @param letter_type 0为对话 1为消息
 * @param message
 * @param callback
 */
function letter_send(req, res, letter_type, message, callback) {
    let user_id = req.body.user_id
    tools.postMasterApiQuery('/line/letter/massage',
        {content: message, user_id: user_id, letter_type: letter_type}, req, res,
        function (result) {
            callback(result)
        })
}
router.letter_send = function (req, res) {
    let message = req.body.message
    letter_send(req, res, 1, message,
        function (result) {
            res.send(result)
        })
}

router.letter_hello = function (req, res) {
    letter_send(req, res, 0, '',
        function (result) {
            res.send(result)
        })
}

router.system_message = function (req, res){
    tools.login_verify(res, 1, function (_user) {
        var results={dc_active: "system"}
        res.wrender('./home/line/system_message.ejs', {
            results: results
        });
    })
}
router.system_message_list = function (req, res) {
    tools.login_verify(res, 1, function (_user) {
        let page = Math.max(1, req.query.page || 1), size = 15, start = (page - 1) * size
        tools.getMasterApiQuery('/line/system/notification',
            {start: start, size: size}, req, res,
            function (result) {
                let list = (result.data || {}).list || [], total = list.length > 0 ? list[0].total_count : 0
                result.data.has_next = total > page * size ? 1 : 0
                res.send(result)
            }
        )
    })
}
router.edit = function (req, res){
    tools.login_verify(res, 1, function (_user) {
        var results={dc_active: "edit"}
        tools.getMasterApiQuery('/line/user/edit/data', {}, req, res, function (result){
            results.data = result.data
            res.wrender('./home/line/edit.ejs', {
                results: results
            });
        })
    })
}

router.company_types = function (req, res){

    tools.getMasterApiQuery('/line/company/types', {}, req, res, function (result){
        res.send(result.data)
    })
}
const resizes = {
    cover: {rewidth: 940,reheight: 280},
    avatar: {rewidth: 200,reheight: 200},
    company_cover: {rewidth: 300,reheight: 200}
}
router.edit_info_upload_image = function (req, res) {
    let tp = req.query.tp, reparams = resizes[tp]
    if(!reparams) return res.wabortJson()
    tools.api_upload_file('/line/upload/image', req, res, {
        // tools.api_upload_file('/user/photo', req, res, {
        file_field: 'image_file',
        eFields: ['crop_data', 'base_name'],
        params: reparams,
        callback: function (resp) {
            if (resp.state != 0) return res.wabortJson()
            res.send({file_name: resp.data.filename, state: 0})
        }
    })
}

router.save_info = function (req, res){
    tools.login_verify(res, 2, function (_user) {
        let _from = new multiparty.Form()
        _from.parse(req, function (err, fields, files) {
            let params = {}
            Object.keys(fields).forEach(function (item){
                params[item] = fields.fget(item)
            })
            console.log(params)
            tools.postMasterApiQuery('/line/save', params, req, res, function (result){
                res.send(result)
            })
        })
    })
}

router.not_open_recommend_users = function (req, res) {
    tools.getMasterApiQuery('/line/users', {start: 0, size: 6, sort: 1},
        req, res, function (result) {
            res.send(result)
        })
}
module.exports = router;