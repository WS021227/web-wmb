const express = require('express');
const async = require('async');
const tools = require('../../common/util');
const config = require('../../common/base_config');
const wapi = require('../../common/api');
const multiparty = require("multiparty");
const util = require("../../common/util");
const router = express.Router();

/**
 *  benchmark / Jungle Scout亚马逊工具 资料完善  获取 购买数据
 * @param req
 * @param res
 * @param callback
 */
function get_ben_js_data(req, res, callback) {
    let _lang = res.locals.wglobals.lang,
        _user = res.locals.wglobals.user,
        designation_pop = req.query.designation_pop || ''
    async.series([
        function (cb) {
            if (_lang == 'en') return cb(null, null)
            if (designation_pop && designation_pop != 'ben_perfect_pop') return cb(null, null)
            if (parseInt(_user.benchmark_flag) != 1) return cb(null, null)
            tools.getMasterApiQuery(
                '/payment/add-service/purchased', {
                    adds_name: 'benchmark'
                }, req, res,
                function (result) {
                    let data = result.data || {}
                    if (Object.keys(data).length <= 0) return cb(null, null)
                    data['name'] = 'Benchmark邮件群发'
                    cb(null, {
                        benchmark: data
                    })
                }
            )
        },
        function (cb) {
            if (designation_pop && designation_pop != 'js_perfect_pop') return cb(null, null)
            if (_user.user_functional.pop_js != 1) return cb(null, null)
            tools.getMasterApiQuery(
                '/payment/add-service/purchased', {
                    adds_name: 'jungle_scout'
                }, req, res,
                function (result) {
                    let data = result.data || {}
                    if (Object.keys(data).length <= 0) return cb(null, null)
                    data['name'] = 'Jungle Scout亚马逊选品工具'
                    cb(null, {
                        jungle_scout: data
                    })
                }
            )
        }
    ], function (err, resp) {
        var result = {},
            names = []
        resp.forEach(function (v, _) {
            if (v) {
                let key = Object.keys(v)[0]
                result[key] = v[key]
                names.push(v[key].name)
            }
        })
        if (names.length > 0) {
            result['names'] = names
        }
        callback(result);
    })
}


function vfd_pop(dp, dp_ck){
    if(!dp) return false
    return dp == dp_ck

}

/**
 *
 * @param res
 * @param pop_page_mark
 * @param zd 是否为指定弹窗（主动点击弹窗）
 * @returns {*}
 */
function pop_lead_experience(res, pop_page_mark, zd){
    var _lang = res.locals.wglobals.lang
    if (config.common.experience_lead_mark[pop_page_mark] != 1) return res.send({})
    let _mark = user_functional[pop_page_mark]
    if (_mark && !zd) return res.send({})
    return res.wrender('./full_pop/pop_lead_experience_' + pop_page_mark + '_' + _lang + '.ejs', {},
        function (err, str) {
            res.send({
                content: str,
                state: 0,
                mark: 'experience_ing',
                zd: zd,
            })
        })
}


/**
 * 登录且有效的弹窗
 * 按照弹窗权重依次判断，
 * 不符合弹窗的就用 return callback(null, 1) 进入到下一个弹窗逻辑
 * 符合逻辑的情况， 如果只需要json数据，直接 res.send() 如果需要html则先渲染模板，把模板内容传递到send 方法，在返回json
 * @param req
 * @param res
 */
function login_valid_user_pop(req, res) {
    let pop_mark = req.query.pop_mark,
        pop_page_mark = req.query.pop_page_mark || '',
        _user = res.locals.wglobals.user,
        user_functional = _user.user_functional || {},
        _lang = res.locals.wglobals.lang,
        is_df = res.locals.wglobals.is_df,
        designation_pop = req.query.designation_pop || '',//弹窗名
        pop_module = req.query.pop_module || '' // 弹窗模块
    // 获取用户价格包含等级
    var user_stage = _user['user_stage']
    async.waterfall([
        // 主站模块（前台）
        function (cb) {
            if (pop_module && pop_module != 'master') return cb(null, 1)
            async.waterfall(
                [
                    //防止出错，请勿修改和删除
                    function (callback){callback(null, 1)},
                    // 买一增二弹窗
                    function (data, callback) {
                        let _dty = tools.getCookie(req, '_DTY')
                        if (_dty) return callback(null, 1)
                        var dty = tools.three_year(_user)
                        if (dty == 0) return callback(null, 1)
                        tools.getMasterApiQuery('/payment/dty/price', {}, req, res, function (result) {
                            if (result.state != 0) return callback(null, 1)
                            // 设置续费弹窗不弹
                            tools.setCookie(req, res, '_DE', 'hide', 86400)
                            // 未领取
                            if (dty == 1) {
                                res.wrender('./full_pop/three_years_0.ejs', {
                                    amount: result.data.amount
                                }, function (err, str) {
                                    res.send({
                                        content: str,
                                        state: 0,
                                        mark: 'three_years'
                                    })
                                })
                                return
                            }
                            res.wrender('./full_pop/three_years_1.ejs', {
                                expire: dty,
                                amount: result.data.amount
                            }, function (err, str) {
                                res.send({
                                    content: str,
                                    state: 0,
                                    mark: 'three_years'
                                })
                            })
                        })
                    },
                    // 服务确认单弹窗验证
                    function (data, callback) {
                        if(vfd_pop(designation_pop, 'sc_pop')) return callback(null, 1)
                        if (_lang == 'en') return callback(null, 1)
                        let _sc = parseInt(user_functional.sc || 0);
                        if (!_sc) return callback(null, 1)
                        tools.getMasterApiQuery(
                            '/payment/service/confirm/' + _sc,
                            null, req, res,
                            function (result) {
                                if (!(result.data && result.state == 0)) return callback(null, 1)
                                if (!result.data.arrive) return callback(null, 1)

                                res.wrender('./full_pop/service_confirmation.ejs', {
                                    results: result.data
                                }, function (err, str) {
                                    if (err) return res.status(404).send('error')
                                    res.send({
                                        content: str,
                                        state: 0,
                                        mark: 'sc_pop'
                                    });
                                })
                            }
                        )
                    },
                    // 体验弹窗验证  体验中不弹任何弹窗
                    function (data, callback) {
                        var experience = parseInt(user_functional.experience);
                        // 引导节点
                        let process_flag = parseInt(user_functional.enode) || 0
                        // 引导流程中不弹其他弹窗,中断引导流程的用户,弹窗提示继续引导
                        // 1 已开通未体验
                        if (experience == 1 && process_flag == 0) {
                            if(vfd_pop(designation_pop, 'experience_pop')) return callback(null, 1)
                            res.wrender('./full_pop/experience.ejs', {}, function (err, str) {
                                res.send({
                                    content: str,
                                    state: 0,
                                    mark: 'experience_pop'
                                })
                            })
                            return
                        }
                        // 继续体验
                        if(experience == 1 && process_flag != -1 && process_flag != 0){
                            if(vfd_pop(designation_pop, 'process_toast_jx')) return callback(null, 1)
                            res.wrender('./full_pop/process_toast_jx.ejs', {node_id: process_flag}, function (err, str) {
                                res.send({
                                    content: str,
                                    state: 0,
                                    mark: 'process_toast_jx'
                                })
                            })
                            return
                        }
                        // # 4 体验完成需要弹窗
                        if (experience == 4) {
                            if(vfd_pop(designation_pop, 'experience_end')) return callback(null, 1)
                            // 修改功能参数 experience 为 5 关闭体验结束的弹窗，
                            tools.change_functional(req, res, 'experience', 5, function (_) {
                                res.send({
                                    content: '',
                                    state: 0,
                                    mark: 'experience_end'
                                })
                            })
                            return
                        }
                        if(experience == 6) return res.send({})
                        return callback(null, 1)
                    },
                    // 体验中 自主弹窗
                    function (data, callback) {
                        if(vfd_pop(designation_pop, 'experience_ing')) return callback(null, 1)
                        var experience = parseInt(user_functional.experience);
                        if (experience != 2) return callback(null, 1)
                        if(pop_page_mark){
                            pop_lead_experience(res, pop_page_mark, false)
                            return
                        }
                        // 没有引导弹窗，体验中不弹其他弹窗
                        return res.send({})
                    },
                    function (data, callback){
                        if(designation_pop && designation_pop != 'experience_lead_video_pop') return callback(null, 1)
                        var experience = parseInt(user_functional.experience);
                        if (experience != 2) return callback(null, 1)
                        if(pop_page_mark){
                            pop_lead_experience(res, pop_page_mark, true)
                            return
                        }
                        // 没有引导弹窗，体验中不弹其他弹窗
                        return res.send({})
                    },
                    //benchmark / Jungle Scout亚马逊工具 资料完善弹窗弹窗
                    function (data, callback) {
                        if (designation_pop && designation_pop != 'ben_or_js_perfect') return callback(null, 1)
                        get_ben_js_data(req, res, function (result) {
                            let benchmark = result.benchmark,
                                jungle_scout = result.jungle_scout;
                            if (benchmark || jungle_scout) {
                                return res.wrender('./full_pop/js_ben_perfect.ejs', {
                                    results: result
                                }, function (err, str) {
                                    res.send({
                                        content: str,
                                        state: 0,
                                        mark: 'ben_or_js_perfect',
                                    })
                                })
                            } else {
                                callback(null, 1)
                            }
                        })
                    },
                    // 兑换大课堂弹窗
                    function (data, callback) {
                        if(_lang=='en') return callback(null,1)
                        //兑换码 
                        let big_class_toast_show_code={}
                        //是否兑换过大课堂
                        let big_class_toast_show=_user.user_functional.yue_kt_dh || null
                        // 已兑换或未购买不弹
                        if(!big_class_toast_show) return callback(null,1)
                        // 点过叉不弹
                        if(tools.getCookie(req,'_big_class_show') || null) return callback(null,1)
                        // 获取缓存
                        big_class_toast_show_code.code=tools.getCookie(req,'_big_class') || null
                        big_class_toast_show_code.end_time=tools.getCookie(req,'_big_class_time') || null
                        if(big_class_toast_show_code.code && big_class_toast_show_code.end_time) return toast_show(big_class_toast_show_code)

                        tools.getMasterApiQuery(`/coupon/yue-kt/code/${big_class_toast_show}`, {}, req, res, function (result) {
                            if(result.state!=0) return callback(null,1)
                            // 缓存下兑换码
                            tools.setCookie(req, res, '_big_class', `${result.data.coupon_code}`, 86400)
                            tools.setCookie(req, res, '_big_class_time', `${result.data.coupon_expire}`, 86400)
                            big_class_toast_show_code.code=result.data.coupon_code
                            big_class_toast_show_code.end_time=result.data.coupon_expire
                            toast_show(big_class_toast_show_code)
                        })

                        function toast_show(scode){
                            res.wrender('./full_pop/big_class_exchange.ejs', {
                                exchange_code:scode.code,
                                end_time:scode.end_time,
                            }, function (err, str) {
                                 res.send({
                                    content: str,
                                    state: 0,
                                    mark: 'big_class_exchange'
                                })
                            })
                        }
                    },
                    // bang line 弹窗
                    function (data, callback) {
                        return callback(null, 1)
                        let _blr = tools.getCookie(req, '_BLR')
                        if (_blr) return callback(null, 1)
                        if (!_user.id) return callback(null, 1)
                        if (_user.bang_line) return callback(null, 1)
                        var register_date = new Date(_user.create_time),
                            now_date = new Date(),
                            is_day = register_date.date_format('yyyy-mm-dd') == now_date.date_format('yyyy-mm-dd');
                        // 当日注册不弹
                        if (is_day) return callback(null, 1)
                        res.wrender('./full_pop/bangline_reg.ejs', {}, function (err, str) {
                            res.send({
                                content: str,
                                state: 0,
                                mark: 'bangline_reg'
                            })
                        })

                    },

                    //  即将过期或已过期的钻石用户 续费通知 已弹的使用 _DE cookies
                    function (data, callback) {
                        if (designation_pop && designation_pop != 'diamond_expired') return callback(null, 1)
                        // 0档用户需要调用价格接口
                        let _de = tools.getCookie(req, '_DE')
                        if (_de) return callback(null, 1)
                        // // 设置已弹窗cookies
                        tools.setCookie(req, res, '_DE', 'hide', 86400)
                        if (!tools.verify_vip_level(user_functional.mv, 'bd')) return callback(null, 1)
                        // 非续费用户
                        if (!_user.diamond_renew_user) return callback(null, 1)
                        // 非0档用户弹窗
                        let is_ex = !tools.verify_authority(_user, 'bd', false)
                        if (user_stage > 0) {
                            res.wrender('./full_pop/diamond_expired.ejs', {}, function (err, str) {
                                res.send({
                                    content: str,
                                    state: 0,
                                    mark: 'diamond_expired'
                                })
                            })
                            return
                        }
                        let res_data = {}
                        // 如果当前已经过期，则需要获取过期时间
                        if (is_ex) {
                            // 获取钻石的过期时间
                            let ldet = user_functional.ldet || (user_functional.lvet || '')
                            if (!ldet) return callback(null, 1)
                            let date_ldet = new Date(ldet)
                            if (!(date_ldet instanceof Date)) return callback(null, 1)
                            let _fm = _lang == 'cn' ? 'yyyy-mm-dd' : 'yyyy/mm/dd'
                            // 续费优惠截止日期
                            res_data['rn_end_time'] = new Date(date_ldet.setMonth(date_ldet.getMonth() + 3)).date_format(_fm)
                        }
                        // 0档用户独立弹窗，需要获取价格
                        tools.getMasterApiQuery('/payment/diamond-renewal/price', {}, req, res,
                            function (result) {
                                res_data['list'] = result.data.list
                                return res.wrender('./full_pop/diamond_expired_0.ejs', {
                                    results: res_data
                                }, function (err, str) {
                                    res.send({
                                        content: str,
                                        state: 0,
                                        mark: 'diamond_expired',
                                        title: res.locals.wglobals.temp.title
                                    })
                                })
                            })
                    },
                    //  老用户未激活弹窗限制弹窗  6
                    function (data, callback) {
                        if (designation_pop && designation_pop != 'no_buyer_old') return callback(null, 1)
                        // 老用户弹窗标记  以及在公司详情下的 查看权限
                        let no_buyer_old = parseInt(_user.no_buyer_old || 0);
                        // // 非老用户 /  标记为未付费的用户再次被标记为非老用户，此时状态为3 讲不再标记为老用户
                        if (!no_buyer_old || no_buyer_old == 3) return callback(null, 1)
                        // // 当前是vip不弹
                        if (tools.verify_authority(_user, 'v', false)) return callback(null, 1)
                        // 标记为未付费的用户已经付费，此时状态为2， 但是已过期的情况下需要弹窗
                        res.wrender('./full_pop/no_buyer_old.ejs', {}, function (err, str) {
                            res.send({
                                content: str,
                                state: 0,
                                mark: 'no_buyer_old'
                            })
                        })
                    },

                    // 即将过期或已过期的vip用户 续费通知  _VE cookies
                    function (data, callback) {
                        if (is_df) return callback(null, 1)
                        if (designation_pop && designation_pop != 'vip_expired') return callback(null, 1)
                        let no_buyer_old = parseInt(_user.no_buyer_old || 0);
                        // 超6个月（ no_buyer_old = 4）变成未付费老用户不弹窗，
                        if (no_buyer_old == 1 || no_buyer_old == 2 || no_buyer_old == 4) return callback(null, 1)
                        // 当前为钻石，则不
                        if (tools.verify_authority(_user, 'bd', false)) return callback(null, 1)
                        let _max_vip = user_functional.mv || ''
                        // 购买过的最高等级 不是vip  则不弹窗
                        if (!tools.equal_vip_level(_max_vip, 'v')) return callback(null, 1)
                        // 过期时间
                        let vip_end = _user.vip_end_time || '',
                            _now_date = new Date(),
                            expired_type = 0;
                        if (!vip_end) {
                            // 已过期, 因为已经去掉过期超6个月的，所以这里不需要判断已过期时间
                            // 当日浏览第4个页面 提示每日可查阅3家公司(company_lock)，引导购买会员，给优惠券领取地址。
                            expired_type = pop_mark == 'company_lock' ? 2 : 1
                        } else if (new Date(vip_end) > new Date(_now_date.setDate(_now_date.getDate() + 7))) {
                            // 有效期大于7天不弹
                            return callback(null, 1)
                        }
                        // vip用户过期或即将过期弹窗提示 即将过期：过期时间小于等于7天 已过期： 过期时间小于6个月， 大于6个月就变成未付费老用户
                        let _ve = tools.getCookie(req, '_VE')
                        // 如果是0  表示是即将过期和过期小于6个月时同一天触发， 所以这里不再触发
                        if (_ve == '0') return callback(null, 1)
                        let _ves = []
                        if (_ve) {
                            _ves = _ve.split(',')
                            if (_ves.indexOf(expired_type.toString()) >= 0) return callback(null, 1)
                        }
                        _ves.push(expired_type)

                        tools.setCookie(req, res, '_VE', _ves.join(','), 86400)


                        res.wrender('./full_pop/vip_expired.ejs', {
                            expired_type: expired_type
                        }, function (err, str) {
                            res.send({
                                content: str,
                                state: 0,
                                mark: 'vip_expired'
                            })
                        })
                    },
                    //  专属客服弹窗
                    function (data, callback) {
                        if (designation_pop && designation_pop != 'emp_cs') return callback(null, 1)
                        if (user_functional.emp_cs != 1) return callback(null, 1)
                        // callback(null, 1)
                        tools.getMasterApiQuery('/user/emp', {}, req, res, function (result) {
                            if (result. state != 0) return callback(null, 1)
                            res.wrender('./full_pop/emp_cs.ejs', {
                                results: result.data
                            }, function (err, str) {
                                res.send({
                                    content: str,
                                    state: 0,
                                    mark: 'emp_cs'
                                })
                            })
                        })
                    },
                    //  英文站VIP弹窗  使用 _EV cookies
                    function (data, callback) {
                        return callback(null, 1)
                        // if (designation_pop && designation_pop != 'en_vip') return callback(null, 1)
                        // if (_lang != 'en') return callback(null, 1)
                        // let _evp = tools.getCookie(req, '_EVP')
                        // tools.setCookie(req, res, '_EVP', '1', 86400)
                        // if (_evp) return callback(null, 1)
                        // // 非vip 不弹
                        // if (!tools.equal_real_vip(_user, 'v')) return callback(null, 1)
                        // // 一周内过期不弹
                        // let _now_date = new Date();
                        // if (new Date(_user.vip_end_time) <= new Date(_now_date.setDate(_now_date.getDate() + 7))) {
                        //     return callback(null, 1)
                        // }
                        // res.wrender('./full_pop/en_vip.ejs', {}, function (err, str) {
                        //     res.send({
                        //         content: str,
                        //         state: 0,
                        //         mark: 'en_vip'
                        //     })
                        // })
                    },
                    /***
                     * 30元优惠券
                     * 普通注册用户
                     * 当日注册： 浏览第4个页面    引导购买会员，发放10元优惠券（注册时已发放），当日有效！
                     * 非当日注册： 提示每日可查阅3家公司，引导购买会员。
                     * @param data
                     * @param callback
                     * @returns {*}
                     */
                    function (data, callback) {
                        // 无付费记录且注册时间小于6个月
                        let coupon_30_flag = user_functional.spc_2023
                        // 关闭不弹
                        if(!coupon_30_flag || coupon_30_flag=='1') return callback(null, 1)
                        // 不是日期格式不弹
                        if(!isNaN(coupon_30_flag) || isNaN(Date.parse(coupon_30_flag))) return callback(null, 1)

                        if (designation_pop && designation_pop != 'register_user') return callback(null, 1)
                        if (pop_mark != 'company_lock') return callback(null, 1)
                        let _reg = tools.getCookie(req, '30_REG')
                        if (_reg) return callback(null, 1)
                        tools.setCookie(req, res, '30_REG', '1', 86400)
                        if (_user.vip_level) return callback(null, 1)
                        if (user_functional.mv) return callback(null, 1)
                        res.wrender('./full_pop/register_user.ejs', { end_time : coupon_30_flag }, function (err, str) {
                            res.send({
                                content: str,
                                state: 0,
                                mark: 'register_user'
                            })
                        })
                    },
                        /***
                     * 普通注册用户
                     * 当日注册： 浏览第4个页面    引导购买会员，发放10元优惠券（注册时已发放），当日有效！
                     * 非当日注册： 提示每日可查阅3家公司，引导购买会员。
                     * @param data
                     * @param callback
                     * @returns {*}
                     */
                    function (data, callback) {
                        return callback(null, 1)
                        if (designation_pop && designation_pop != 'register_user') return callback(null, 1)
                        if (pop_mark != 'company_lock') return callback(null, 1)
                        let _reg = tools.getCookie(req, '_REG')
                        if (_reg) return callback(null, 1)
                        tools.setCookie(req, res, '_REG', '1', 86400)
                        if (_user.vip_level) return callback(null, 1)
                        if (user_functional.mv) return callback(null, 1)
                        res.wrender('./full_pop/register_user.ejs', {}, function (err, str) {
                            res.send({
                                content: str,
                                state: 0,
                                mark: 'register_user',
                                title: res.locals.wglobals.temp.title
                            })
                        })
                    }
                ],
                function (err, _) {
                    return cb(null, 1)
                }
            )
        },
        // 主站管理
        function (data, cb) {
            return cb(null, 1)
            if (pop_module && pop_module != 'admin') return cb(null, 1)
            async.waterfall([
                /**
                 * 未开通bang line 弹窗 只弹一次
                 * @param callback
                 */
                function (callback) {
                    let _yol = tools.getCookie(req, '_YOL')
                    if (_user.bang_line == 1 || user_functional.blp || _yol) return callback(null, 1)

                    this.change_functional(req, res, 'blp', 1, function (_) {})
                    tools.setCookie(req, res, '_YOL', '1', 86400)
                    res.send({
                        mark: 'yq_open_line',
                        state: 0
                    })
                },
                /**
                 * 已开通未加入圈子的
                 * @param data
                 * @param callback
                 * @returns {*}
                 */
                function (data, callback) {
                    let _ylc = tools.getCookie(req, '_YLC')
                    // 如果已经加入圈子则不弹
                    if (user_functional.ilc || _ylc) return callback(null, 1)
                    tools.getMasterApiQuery('/line/circle/product/match', {}, req, res, function (result) {
                        let _list = (result.data || {}).list || [];
                        if (_list.length <= 0) return callback(null, 1)
                        res.wrender('./full_pop/yq_line_circle.ejs', {
                            results: {
                                list: _list
                            }
                        }, function (err, str) {
                            res.send({
                                content: str,
                                state: 0,
                                mark: 'yq_line_circle'
                            })
                        })
                    })
                },
                /**
                 * 已加入的圈子未弹窗提示（只针对初始化用户）
                 * @param data
                 * @param callback
                 * @returns {*}
                 */
                function (data, callback) {
                    let _ylced = tools.getCookie(req, '_YLCED')
                    // 如果已经弹窗则不弹
                    if (user_functional.ilc == 2 || _ylced) return callback(null, 1)
                    tools.setCookie(req, res, '_YLCED', '1', 86400)
                    this.change_functional(req, res, 'ilc', 2, function (_) {})
                    tools.getMasterApiQuery('/line/circle/inbound', {
                        user_id: _user.id,
                        start: 0,
                        size: 10
                    }, req, res, function (result) {
                        let _list = (result.data || {}).list || [];
                        if (_list.length <= 0) return callback(null, 1)
                        res.wrender('./full_pop/inbounded_line_circle.ejs', {
                            results: {
                                list: _list
                            }
                        }, function (err, str) {
                            res.send({
                                content: str,
                                state: 0,
                                mark: 'inbounded_line_circle'
                            })
                        })
                    })
                }
            ], function (err, _) {
                cb(null, 1)
            })
        }
    ], function (err, _) {
        return res.send({});
    })
}


/**
 * 游客以及没有验证的用户弹窗
 * @param req
 * @param res
 */
function guest_pop(req, res) {
    let lang = res.locals.wglobals.lang
    async.waterfall(
        [
            // 微信公众号引导
            function (callback) {
                // 英文站不提示绑定
                if (lang == 'en') return callback(null, {});
                // 已经提示过的不在提示
                let wxq = tools.getCookie(req, '_WXQ')
                if (wxq) return callback(null, {})
                tools.setCookie(req, res, '_WXQ', '1', 86400, true)
                let visit_count = parseInt(tools.getCookie(req, 'visit_count') || 0)
                if (visit_count < 3) return callback(null, {})
                res.wrender('./full_pop/wx_service_qrcode.ejs', {},
                    function (err, str) {
                        res.send({
                            content: str,
                            state: 0,
                            mark: 'wxq_pop'
                        });
                    }
                );

            }
        ],
        function (err, results) {
            return res.send(results)
        }
    )
}

router.full_pop = function (req, res) {
    let _user = res.locals.wglobals.user
    if (_user.id && _user.verifi == 1) {
        login_valid_user_pop(req, res)
    } else {
        guest_pop(req, res)
    }
}

/**
 * 右下角弹出
 * @param req
 * @param res
 * @returns {*}
 */
router.lower_right = function (req, res) {

    let _user = res.locals.wglobals.user,
        user_functional = _user.user_functional || {},
        _lang = res.locals.wglobals.lang
    // return res.send({fn: 'line_invite_open'})
    // if (!_user.id) return res.send({fn: 'line_invite_open'})
    // 目前只有bang line
    // if (tools.getCookie(req, '_WLLR')) return res.send({})
    async.waterfall([
        function (cb) {
            if (_user.bang_line) return cb(null, 1)
            // 未开通
            tools.getMasterApiQuery('/line/circle/master/match', {}, req, res, function (result) {
                if (result.state != 0) return res.wabortJson()
                result.fn = result.data.type == 1 ? 'match_circle' : 'line_invite_open'
                return res.send(result)
            })
        },
        /**
         * 已开通bang line
         * @param _
         * @param cb
         * @returns {*}
         */
        function (_, cb) {
            tools.getMasterApiQuery('/line/circle/master/dongtai', {}, req, res, function (result) {
                // 未开通圈子
                if (result.state != 0) return cb(null, 1)
                // 已开通圈子
                result.fn = 'line_circle_data'
                return res.send(result)
            })

        },
        /**
         * 已开通bang line 未开通圈子
         * @param _
         * @param cb
         * @returns {*}
         */
        function (_, cb) {
            // 未开通圈子
            tools.getMasterApiQuery('/line/circle/master/rusers', {}, req, res, function (result) {
                result.fn = 'line_hy_user'
                return res.send(result)
            })
        }
    ], function (err, _) {
        return res.send({})
    })
}

router.wstats = function (req, res) {
    let collect = req.body.collect
    if (!collect) return res.send({})
    tools.wstats(req, res, collect)
    res.send({})
}

async function testFnc(callback) {
    await tools.sleep(5000);
    // return callback();
}

router.test = function (req, res) {
    // 非钻石用户则解密数据，进行数据比对，数据对不上当前用户信息、公司信息 则表示为非法访问 reftoken 为加密数据
    // let reftoken = req.query.reftoken
    // // 加密数据为空  则为非法访问
    // if (!reftoken) return res.send({state: 30000, message: 'Illegal access'})
    // // 解密数据
    // let data = util.decrypt(reftoken), token_data = JSON.parse(data)
    // 解密后的数据对比当前公司以及登录用户信息，  不一致则为非法访问
    // if (token_data.uid != _user.id || token_data.v != _user.vip_level || token_data.cid != company_id) {
    //     return res.send({state: 30000, message: 'Illegal access'})
    // }
    // res.company_perms = token_data.perms || false
    // testFnc(function () {
    //     res.wrender('./index.ejs', {})
    // })
    // res.wrender('./wei404.ejs', {})
    // return
    tools.sleep_start(1000).then(resolve => {
        res.wrender('./wei404.ejs', {})
    })
}

router.country_list = function (req, res) {

    async.waterfall(
        [
            function (callback) {
                var dataarry = {
                    top_count: 7
                }
                //登录时获取最近搜索词，未登录获取热门
                if (res.locals.wglobals.user.id) {
                    //国家列表
                    tools.getMasterApiQuery(
                        '/company/search-log/recent/countries', {
                            top_count: dataarry.top_count
                        }, req, res,
                        function (result) {
                            var state = result.state;
                            if (state == 0) {
                                dataarry.top_country = result.data.list;
                                callback(null, dataarry);
                            } else {
                                callback(result.message, dataarry)
                            }
                        }
                    )
                } else {
                    callback(null, dataarry);
                }
            },
            function (dataarry, callback) {
                //国家列表
                tools.getMasterApiQuery(
                    '/company/search/countries', {
                        tier: req.query['tier']
                    }, req, res,
                    function (result) {
                        var state = result.state;
                        if (state == 0) {
                            dataarry.country_list = result.data.list;
                            callback(null, dataarry);
                        } else {
                            callback(result.message, dataarry)
                        }
                    }
                )
            }
        ],
        function (err, results) {
            return res.send(results);
        }
    )
}

router.country_code_list = function (req, res) {

    //国家列表
    tools.getMasterApiQuery(
        '/common/country/code/list', {}, req, res,
        function (result) {
            res.send(result)
        }
    )
}

// 公司搜索国家统计列表
router.country_stats_list = function (req, res) {
    let search_params = req.query
    if (search_params.search_type == 3) {
        search_params.hs = search_params.hs && search_params.hs != '*' ? search_params.hs : search_params.key
        search_params.key = '*'
    } else if (search_params.search_type == 1) {
        search_params.search_relation = 1
    } else {
        search_params.hs = '*'
    }
    //国家列表
    tools.getMasterApiQuery(
        '/company/search/countries/stats', search_params, req, res,
        function (result) {
            return res.send(result);
        }
    )
}


router.port_list = function (req, res) {

    async.waterfall(
        [
            function (callback) {
                var dataarry = {}
                tools.getMasterApiQuery(
                    '/company/search/ports',
                    req.query,
                    req, res,
                    function (result) {
                        var state = result.state;
                        if (state == 0) {
                            dataarry.list = result.data.list;
                            callback(null, dataarry);
                        } else {
                            callback(result.message, dataarry)
                        }
                    }
                )
            }
        ],
        function (err, results) {
            return res.send(results);
        }
    )
}

router.follow_company_tags = function (req, res) {
    let user = tools.unity_merger_user(res)
    if (!user.id) return res.status(404).send()
    let is_page = (req.extend_params || {}).is_page || false,
        size = 15,
        start = is_page ? Number(req.query.start) : 0

    async.waterfall(
        [
            function (callback) {
                tools.getMasterApiQuery(
                    '/company/follow/tags', {
                        start: start,
                        size: size
                    }, req, res,
                    function (result) {
                        let _list = (result.data || {}).list || [],
                            total = _list.length > 0 ? _list[0].total_count : 0,
                            has_next = total > start + size
                        callback(null, {
                            list: _list,
                            total: total,
                            has_next: has_next
                        })
                    }
                )
            }
        ],
        function (err, results) {
            results.size = size
            if (!is_page) return res.wrender('./company/child/follow_tags.ejs', {
                results: results
            });
            let _list = results.list
            delete results.list
            return res.wrender('./company/child/follow_tags_page.ejs', {
                results: {
                    list: _list
                }
            }, function (err, str) {
                results.content = str
                res.send(results)
            });
        }
    )
}

router.follow_company = function (req, res) {
    let user = tools.unity_merger_user(res)
    if (!user.id) return res.status(404).send({
        'state': 200,
        'message': 'login'
    })

    if (res.locals.wglobals.device !== "mobile") {
        async.waterfall(
            [
                function (callback) {
                    let form = new multiparty.Form();
                    form.parse(req, function (err, fields) {
                        let tags = fields.tags || [],
                            tag_list = [1]
                        if (tags.length > 0) {
                            tag_list = tags.map(a => parseInt(a))
                        }
                        tools.postMasterApiQuery(
                            '/company/follow/follow', {
                                company_id: Number(fields.fget('company_id')),
                                tag_list: tag_list,
                                source: 0
                            },
                            req, res,
                            function (result) {
                                callback(null, result)
                            }, {
                                is_json: true
                            }
                        )
                    })
                }
            ],
            function (err, results) {
                return res.send(results);
            }
        )
    } else {
        async.waterfall(
            [
                function (callback) {
                    tools.postMasterApiQuery(
                        '/company/follow/follow', {
                            company_id: Number(req.body.company_id),
                            tag_list: [],
                            source: 0
                        },
                        req, res,
                        function (result) {
                            callback(null, result)
                        }, {
                            is_json: true
                        }
                    )
                }
            ],
            function (err, results) {
                return res.send(results);
            }
        )
    }

}

router.unfollow_company = function (req, res) {
    let user = tools.unity_merger_user(res)
    if (!user.id) {
        res.status(404).send()
        return false;
    }
    async.waterfall(
        [
            function (callback) {
                tools.deleteMasterApiQuery(
                    '/company/follow/cancel', {
                        company_list: req.body['company_id'].split('|')
                    },
                    req, res,
                    function (result) {
                        callback(null, result)
                    }, {
                        is_json: true
                    }
                )
            }
        ],
        function (err, results) {
            return res.send(results);
        }
    )
}
router.trade_countries = function (req, res) {
    var data = req.query
    async.waterfall(
        [
            function (callback) {
                tools.getMasterApiQuery('/raw/trade/countries',
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
}

/**
 * 数据导出权限以及条数查询
 * @param req
 * @param res
 */
router.export_pers = function (req, res) {
    var data = req.query
    async.waterfall(
        [
            function (callback) {
                tools.getMasterApiQuery('/common/export/pers',
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
}
/**
 * 公司名录导出，实际是添加一条下载记录，下载的数据之间是前端处理
 * @param req
 * @param res
 */
router.export_company_item = function (req, res) {
    async.waterfall(
        [
            function (callback) {
                tools.postMasterApiQuery('/common/export/company/item',
                    req.body, req, res,
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

router.login_out = function (req, res) {
    async.waterfall([

        tools.setCookie(req, res, 'access_token', 'null', '-1', true)

    ], function (err, results) {
        return res.send(results);
    })
}

router.trade_translate = function (req, res) {
    let params = req.query || {},
        user = res.locals.wglobals.user;
    async.waterfall(
        [
            function (callback) {
                if (!params.words || !tools.verify_authority(user, 'v')) {
                    callback(null, {
                        state: 1
                    })
                    return false
                }
                tools.baidu_translate(
                    function (words) {
                        callback(null, {
                            words: words,
                            state: 0
                        })
                    },
                    params.words, params.translate_from || 'auto', params.translate_to || 'zh'
                )
            }
        ],
        function (err, results) {
            res.send(results)
        }
    )
}

function unity_adds_list(req, res, params, callback) {
    tools.getMasterApiQuery('/payment/add-service/list', params, req, res,
        function (result) {
            let _list = (result.data || {}).list || [];
            if (result.state == 0 && _list.length > 0) {
                callback(null, result.data.list)
            } else {
                res.status(200).send({
                    state: 1000
                })
            }
        }
    )
}

router.adds_list = function (req, res) {
    let user = tools.unity_merger_user(res);
    if (!user.id) {
        res.status(404).send({})
        return false
    }
    async.waterfall(
        [
            function (callback) {
                unity_adds_list(req, res, req.query, callback)
            }
        ],
        function (err, _list) {

            res.send({
                list: _list,
                state: 0
            })
        }
    )
}

router.social_media_url = function (req, res) {
    let params = req.query || {},
        user = tools.unity_merger_user(res);
    if (!user.id) return res.status(404).send({})
    async.waterfall(
        [
            function (callback) {
                tools.getMasterApiQuery('/common/wheat-search/url', {
                        keyword: params.keyword || '',
                        scene: params.scene
                    }, req, res,
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


/*图片验证码*/
router.picture_code = function (req, res) {
    var data = req.query
    async.waterfall(
        [
            function (callback) {
                tools.postYueApiQuery('/get_picture_code',
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
}

router.cookie_set = function (req, res) {
    tools.setCookie(req, res, req.query.name, req.query.value, req.query.expire, false)
    res.send({})
}

router.iuc_add = function (req, res) {

    async.waterfall(
        [
            function (callback) {
                tools.postMasterApiQuery('/common/india-user/compensation', {}, req, res,
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

router.recommend_list = function (req, res) {
    var data = req.query
    async.waterfall(
        [
            function (callback) {
                tools.getMasterApiQuery('/line/recommend/master/search',
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
}
// 广告展示条数
const LINE_AD_COUNT = {1: 1, 2: 1}
router.line_ad = function (req, res) {
    var ad_pos =  Number(req.query.ad_pos), params = req.query
    params['top_count'] = LINE_AD_COUNT[ad_pos]
    tools.getMasterApiQuery('/line/master/ad',
        params, req, res,
        function (result) {
            res.send(result)
        }
    )
}
router.email_old = function (req, res) {
    let _user = util.unity_merger_user(res)
    if (tools.verify_authority(_user, 'bd', false) || !tools.verify_vip_level(_user.user_functional.mv, 'bd')) return res.wabort(404)
    res.wrender('./common/email_old.ejs')
}

router.message_old = function (req, res) {
    let _user = util.unity_merger_user(res)
    if (tools.verify_authority(_user, 'bd', false) || !tools.verify_vip_level(_user.user_functional.mv, 'bd')) return res.wabort(404)

    res.wrender('./common/message_old.ejs')

    // let results = {collect: null}, _user = tools.unity_merger_user(res);
    // async.waterfall(
    //     [
    //         function (callback) {
    //             if (!_user.id) return callback(null, 1)
    //             let uf = _user.user_functional || {}, mv = uf.mv || '';
    //             // 判断是否为过期钻石
    //             if (tools.verify_authority(_user, 'bd', false) || !tools.verify_vip_level(mv, 'bd')) {
    //                 return res.wabort(404)
    //             }
    //             tools.getMasterApiQuery('/common/yue-live/collect', null, req, res, function (result) {
    //                 if (result.state === 0) {
    //                     results.collect = result.data
    //                 }
    //                 callback(null, 1)
    //             })
    //         }
    //
    //     ],
    //     function (err, _) {
    //         res.wrender('./common/message_old.ejs', {results: results})
    //     }
    // )

}

router.line_message_stats = function (req, res) {
    tools.getMasterApiQuery('/line/master/message/stats', {}, req, res, function (result) {
        res.send(result)
    })
}

router.line_invite_open = function (req, res) {
    tools.getMasterApiQuery('/line/master/invite/open', {}, req, res, function (result) {
        res.send(result)
    })
}
router.yixiang = function (req, res) {
    res.wrender('./common/yixiang.ejs')
}

router.robot_verify = function (req, res) {

    tools.deleteMasterApiQuery('/common/robot/verify', req.query, req, res, function (result) {
        res.send(result)
    })
}

router.close_qp = function (req, res) {
    tools.change_functional(req, res, 'qp', 1)
}

router.close_df_dec = function (req, res) {
    tools.change_functional(req, res, 'df_dec', 2)
}


router.receive_ty = function (req, res) {

    tools.postMasterApiQuery('/coupon/three/year', {}, req, res, function (result) {
        res.send(result)
    })
}

router.wstats_ccs = function (req, res) {
    var code = req.query.code
    if (!code) return res.wabort()
    tools.getMasterApiQuery('/common/contact/cs', {
        code: code
    }, req, res, function (result) {
        res.send(result)
    })
}

// 曾经的意向用户 (全局head 有奖调研按钮 )
router.prize_research=function (req, res) {
    tools.getMasterApiQuery('/user/pl', {}, req, res, function (result) {
        res.send(result)
    })
}

// 放弃体验、体验流程节点修改
router.ty_node_revise = function(req,res){
    console.log(req.body,"8787887")
    let ty_flag = req.body.ty_flag,key = req.body.key
    tools.putMasterApiQuery('/user/functional', {key: key,value: ty_flag}, req, res, function (result) {
        res.send(result)
    })
}

module.exports = router;