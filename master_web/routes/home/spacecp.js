
const express = require('express');
const async = require('async');
const tools = require('../../common/util.js')
const path = require('path');
const router = express.Router();

// 常规用户字段保存， 防注入， 这里要验证合法字段，因为接口是传数据库字段的
let GENERAL_FIELDS = ['contact', 'company_name', 'position', 'website']

router.index = function (req, res) {
    res.locals.wglobals.nav_active = 'datacenter'
    return res.wrender('./home/spacecp.ejs', {
        results: {dc_active: 'spacecp'}
    });
}

/*获取用户产品关键词*/
router.user_product = function (req, res) {
    tools.login_verify(res, 2, function (_user) {
        let category_id = req.query['user_type']
        async.waterfall(
            [
                function (callback) {
                    tools.getMasterApiQuery('/user/category/' + category_id, {},
                        req, res,
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
/**
 * 修改用户类型相关信息
 * @param req
 * @param res
 */
router.user_product_update = function (req, res) {
    tools.login_verify(res, 2, function (_user) {
        let params = {
            'type_id': req.body['type_id'],
            'category': req.body['category']
        }
        async.waterfall(
            [
                function (callback) {
                    tools.putMasterApiQuery('/user/info',
                        params, req, res,
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

/*登录记录*/
router.user_spacecp_login_records = function (req, res) {
    tools.login_verify(res, 2, function (_user) {
        let params = {start: 0, size: 10}
        async.waterfall(
            [
                function (callback) {
                    tools.getMasterApiQuery('/user/login/records',
                        params, req, res,
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
//修改密码
router.user_spacecp_password_change = function (req, res) {
    tools.login_verify(res, 2, function (_user) {
        var data = req.body
        async.waterfall(
            [
                function (callback) {
                    tools.putMasterApiQuery('/account/password/change', data,
                        req, res,
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

/**
 * 修改常规用户信息
 * @param req
 * @param res
 */
router.user_spacecp_user_info = function (req, res) {
    tools.login_verify(res, 2, function (_user) {
        var value = req.body['value'], field = req.body['field']
        if(!value){
            res.send({state: 10000})
            return false
        }
        if (GENERAL_FIELDS.indexOf(field) < 0) {
            res.send({'message':'参数不合法', state: 10001})
            return false
        }
        let params = {}
        params[field] = value
        async.waterfall(
            [
                function (callback) {
                    tools.putMasterApiQuery('/user/info',
                        params, req, res,
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


/*更换绑定邮箱时验证当前邮箱验证码*/
router.user_spacecp_old_email_verify_code = function (req, res) {
    tools.login_verify(res, 2, function (_user) {
        var data = req.query
        async.waterfall(
            [
                function (callback) {
                    tools.getMasterApiQuery('/account/bind/old-email/verify/code', data,
                        req, res,
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
/*更换绑定邮箱时验证当前邮箱验证码*/
router.user_spacecp_old_email_send_verify_code = function (req, res) {
    tools.login_verify(res, 2, function (_user) {
        var data = req.query
        async.waterfall(
            [
                function (callback) {
                    tools.getMasterApiQuery('/account/bind/old-email/send/verify/code', data,
                        req, res,
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

/*更换绑定邮箱时发送新邮箱验证码*/
router.user_spacecp_new_email_code = function (req, res) {
    tools.login_verify(res, 2, function () {
        var data = req.query
        async.waterfall(
            [
                function (callback) {
                    tools.getMasterApiQuery('/account/bind/email/send/verify/code',
                        data, req, res,
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


/*更换绑定手机号时验证当前手机验证码*/
router.user_spacecp_old_phone_verify_code = function (req, res) {
    tools.login_verify(res, 2, function (_user) {
        var data = req.query
        async.waterfall(
            [
                function (callback) {
                    tools.getMasterApiQuery('/account/bind/old-phone/verify/code', data,
                        req, res,
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
/*更换绑定手机号时获取当前手机验证码*/
router.user_spacecp_old_phone_send_verify_code = function (req, res) {
    tools.login_verify(res, 2, function (_user) {
        var data = req.query
        async.waterfall(
            [
                function (callback) {
                    tools.getMasterApiQuery('/account/bind/old-phone/send/verify/code', data,
                        req, res,
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

/*更换绑定手机时发送新手机验证码*/
router.user_spacecp_change_bind_phone_send_verify_code = function (req, res) {
    tools.login_verify(res, 2, function (_user) {
        var data = req.query
        async.waterfall(
            [
                function (callback) {
                    tools.getMasterApiQuery('/account/bind/phone/send/verify/code',
                        data, req, res,
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


router.upload_photo = function (req, res) {
    tools.login_verify(res, 2, function (_user) {
        async.waterfall(
            [
                function (callback) {
                    tools.api_upload_file('/user/photo', req, res, {
                        file_field: 'avatar_file',
                        eFields: ['crop_data'],
                        is_login: true,
                        callback: function (resp) {
                            callback(null, {result: 'https://static.52wmb.com/images/userphoto/190_' + resp.data.filename})
                        }

                    })
                }
            ],
            function (err, results) {
                res.send(results)
            }
        )
    })
}


module.exports = router;