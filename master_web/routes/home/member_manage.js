const express = require('express');
const async = require('async');
const tools = require('../../common/util.js')
const multiparty = require("multiparty");
const baseConfig = require('../../common/base_config.js');
const router = express.Router();

router.index = function (req, res) {
    tools.login_verify(res, 1, function (_user) {
        if (_user.account_type != 1 || !tools.verify_authority(_user, 'bd')) {
            res.status(404).render('error')
            return false
        }
        return res.wrender('./home/member_manage.ejs', {

            results: {dc_active: "account"}

        });
    })
}

/**
 * 指定子账号的全部权限列表
 */
router.user_member_child_account_perms = function (req, res){
    tools.login_verify(res, 2, function (_user) {
        if (_user.account_type != 1 || !tools.verify_authority(_user, 'bd')) {
            res.status(404).render('error')
            return false
        }
        let union_id = req.query['union_id']
        async.waterfall(
            [
                function (callback) {
                    tools.getMasterApiQuery('/account/child/' + union_id,
                        null, req, res,
                        function (result) {
                            callback(null, result);
                        })
                }
            ],
            function (err, results) {
                res.send(results)
            }
        )
    })

}

//添加子账号
router.user_member_account_child = function (req, res) {
    tools.login_verify(res, 2, function (_user) {
        if (_user.account_type != 1 || !tools.verify_authority(_user, 'bd')) {
            res.status(404).render('error')
            return false
        }
        async.waterfall(
            [
                function (callback) {
                    let form = new multiparty.Form();
                    form.parse(req, function (err, fields) {
                        console.log(fields)
                        tools.postMasterApiQuery('/account/child', {
                            account: fields.fget('account'),
                            role: fields.fget('role'),
                            perms: fields.faget('perms'),
                        }, req, res, function (result) {
                            callback(null, result)
                        }, {is_json: true})
                    })
                }
            ],
            function (err, results) {
                res.send(results)
            }
        )
    })
}

//删除子账号
router.user_member_account_delete_child = function (req, res) {
    tools.login_verify(res, 2, function (_user) {
        if (_user.account_type != 1 || !tools.verify_authority(_user, 'bd')) {
            res.status(404).render('error')
            return false
        }
        var union_id = req.body['union_id']
        async.waterfall([
            function (callback) {
                //关注
                var data = req.body
                tools.deleteMasterApiQuery('/account/child/' + union_id,
                    null, req, res,
                    function (result) {
                        callback(null, result);
                    })
            }
        ], function (err, results) {
            return res.send(results);
        })
    })
}

//修改子账号
router.user_member_account_edit_child = function (req, res) {
    tools.login_verify(res, 2, function (_user) {
        if (_user.account_type != 1 || !tools.verify_authority(_user, 'bd')) return res.status(404).render('error')
        async.waterfall(
            [
                function (callback) {

                    let form = new multiparty.Form();
                    form.parse(req, function (err, fields) {
                        var union_id = fields.fget('union_id')
                        tools.putMasterApiQuery('/account/child/' + union_id, {
                            role: fields.fget('role'),
                            perms: fields.faget('perms'),
                        }, req, res, function (result) {
                            callback(null, result)
                        }, {is_json: true})
                    })
                }
            ],
            function (err, results) {
                res.send(results)
            }
        )
    })
}
/*获取账号列表*/
router.user_member_account_list = function (req, res) {
    tools.login_verify(res, 1, function (_user) {
        if (_user.account_type != 1 || !tools.verify_authority(_user, 'bd')) return res.status(404).render('error')
        async.waterfall(
            [
                function (callback) {
                    tools.getMasterApiQuery('/account/list',
                        {}, req, res,
                        function (result) {
                            callback(null, result)
                        }
                    )
                }
            ],
            function (err, results) {
               
                res.send(results)
            }
        )
    })
}
/*获取权限列表*/
router.user_member_account_perms = function (req, res) {
    let _user = tools.unity_merger_user(res)
    if(!tools.verify_authority(_user, 'bd', false)) return res.statusCode(404).send({})
    let vip_level = baseConfig.common.permsVipMarkLevel[_user.vip_level]
    async.waterfall(
        [
            function (callback) {
                tools.getMasterApiQuery('/permissions/child',
                    {vip_level: vip_level}, req, res,
                    function (result) {
                        callback(null, result)
                    }
                )
            }
        ],
        function (err, results) {
            res.send(results)
        }
    )
}

module.exports = router;