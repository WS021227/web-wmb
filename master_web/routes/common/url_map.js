const express = require('express');
const router = express.Router();
const decorator = require('../../common/decorator');

const common = require('./common')

router.get('/async/full/pop', common.full_pop)
router.get('/async/lower/right', common.lower_right)
router.post('/async/wstats', common.wstats)
router.get('/test', common.test)

router.get('/async/common/countries', common.country_list)
router.get('/async/common/country/code/list', common.country_code_list)
router.get('/async/common/country/stats', common.country_stats_list)
router.get('/async/common/ports', common.port_list)
router.get('/async/common/company/follow/tags', common.follow_company_tags)
router.get('/async/common/company/follow/tags/page', decorator.req_extend({is_page: 1}),  common.follow_company_tags)
router.post('/async/common/company/follow', common.follow_company)
router.post('/async/common/company/unfollow', common.unfollow_company)
router.get('/async/raw/trade/countries', common.trade_countries)
router.get('/async/export/pers', common.export_pers)
router.post('/async/export/company/item', common.export_company_item)
router.get('/async/login/out', common.login_out)
router.get('/async/trade/translate', common.trade_translate)
// 验证是否购买社媒搜搜并获取跳转链接
router.get('/async/social-media/url',common.social_media_url)
// 验证是否购买某个产品
router.get('/async/adds-list',common.adds_list)
router.get('/async/picture-code',common.picture_code)

router.get('/async/cookie/set', common.cookie_set)

// 印度用户补偿信息录入
router.get('/async/iuc/add', common.iuc_add)
//邦line推荐列表
router.get('/async/recommend/master/search',common.recommend_list)
//bang line 广告
router.get('/async/line/ad',common.line_ad)

router.get('/email_old', decorator.login_required(), common.email_old)
router.get('/message_old', decorator.login_required(), common.message_old)

router.get('/async/line/message/stats', decorator.login_required(), common.line_message_stats)
router.get('/async/line/invite/open', decorator.sign_required(), common.line_invite_open)



router.get('/yixiang', common.yixiang)
router.get('/async/robot/verify', common.robot_verify)
router.get('/async/close/qp', decorator.sign_required(), common.close_qp)
router.get('/async/close/df-dec', decorator.sign_required(), common.close_df_dec)


router.post('/async/receive/ty', common.receive_ty)
router.get('/async/wstats/ccs', common.wstats_ccs)
module.exports = router;