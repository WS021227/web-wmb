const express = require('express');
const de = require('../../common/decorator');
const router = express.Router();
/*我的主页*/
const  user_home= require('./home')
router.get('/user/datacenter/home', user_home.index)
//权限明细
router.get('/permissions/details', user_home.permissions_datails)
//公司报告统计
router.get('/user_home/company/report/stats', user_home.company_report_stats)
//标签统计
router.get('/user_home/tags/stats', user_home.tags_stats)
//增值服务列表
router.get('/user_home/add-service/list', user_home.add_service_list)
//平台公告
router.get('/user_home/tutorial/list', user_home.platform_notice_list)
//热门搜索词
router.get('/user_home/search-log/recent/keys', user_home.recent_keys)
//公司搜索
router.get('/user_home/company/search/list', user_home.company_search_list)
//页面推送
router.get('/user_home/recommend/master/mine', user_home.recommend_mine)
//页面推送
router.get('/async/user_home/employee', user_home.employee)

// 大课堂兑换码
// 删除按钮 此处需要删除全站弹窗
router.get('/async/del_redemption_toast', user_home.del_redemption_toast)
// 获取兑换码
router.get('/async/get_redemption_code', user_home.get_redemption_code)



/*收藏公司*/
const user_collection_company= require('./collection_company')
router.get('/user/datacenter/potential',user_collection_company.index)
// 联系方式导出
router.post('/async/follow/export/contact',user_collection_company.export_contact)
/*关注标签(分类)统计列表*/
router.get('/async/user_collection/follow/tags/stats',user_collection_company.company_follow_tags_stats)
/*添加新的收藏分组*/
router.post('/async/user_collection/company/follow/tag',user_collection_company.user_collection_new_follow_tag)
/*取消收藏分组*/
router.post('/async/user_collection/follow/delete_tag',user_collection_company.user_collection_delete_tag)
/*修改收藏分组*/
router.post('/async/user_collection/follow/edit_tag',user_collection_company.user_collection_edit_tag)
/*关注分类详情*/
router.get('/async/user_collection/company/follow/list',user_collection_company.company_follow_list)
/*取消关注*/
router.post('/async/user_collection/company/follow/cancel',user_collection_company.user_follow_cancel)
/*获取全部国家*/
router.get('/async/user_collection/countries',user_collection_company.user_follow_countries)
/*批量分组*/
router.post('/async/user_collection/company/follow/bulk',user_collection_company.user_follow_bulk)

/*标签管理*/
const user_label_manage= require('./label_manage')
router.get('/user/datacenter/label',user_label_manage.index)
/*搜索标签*/
router.get('/user-label-manage/search-tag/tag',user_label_manage.user_label_search_taglist)
/*自定义公司详情标签*/
router.get('/user-label-manage/product-tag/tag',user_label_manage.user_label_product_taglist)
/*自定义公司详情标签下的公司列表*/
router.get('/async/customize_tag/company/list',user_label_manage.customize_tag_company_list)
/*行业标签*/
router.get('/user-label-manage/trade-tags/tag',user_label_manage.user_label_trade_tagslist)
/*删除搜索标签*/
router.post('/user-label-manage/search-tag/tag_delete',user_label_manage.user_label_search_delete_taglist)
/*删除产品标签*/
// router.get('/user-label-manage/product-tag/tag',user_label_manage.user_label_product_taglist)
/*删除行业标签*/
router.post('/user-label-manage/trade-tags/tag_delete',user_label_manage.user_label_trade_delete_tagslist)

/*下载记录*/
const user_download_record= require('./download_record')
router.get('/user/datacenter/exportlog',user_download_record.index)
/*导出记录*/
router.get('/user-download/export/records',user_download_record.export_records)
/*删除导出记录*/
router.post('/user-download/export/delete_records',user_download_record.export_records_delete)
/*导出数据*/
router.get('/async/user-download/record/export',user_download_record.record_export)

/*浏览历史*/
const user_browsing_history= require('./browsing_history')
router.get('/user/datacenter/viewlog',user_browsing_history.index)
/*浏览历史列表*/
router.get('/async/user-browsing-history/records',user_browsing_history.browsing_history_list)
/*浏览历史删除*/
router.post('/async/user-browsing-history/delete_records',user_browsing_history.browsing_history_list_delet)


/*成员管理*/
const user_member_manage= require('./member_manage')
router.get('/user/datacenter/member_manage',user_member_manage.index)
/*添加子账号*/
router.post('/async/user_member/account/child',user_member_manage.user_member_account_child)
/*添加子账号*/
router.get('/async/user_member/account/child/perms',user_member_manage.user_member_child_account_perms)
/*删除子账号*/
router.post('/async/user_member/account/delete_child',user_member_manage.user_member_account_delete_child)
/*修改子账号*/
router.post('/async/user_member/account/edit_child',user_member_manage.user_member_account_edit_child)
/*子账号列表*/
router.get('/async/user_member/account/child_list',user_member_manage.user_member_account_list)
/*子账号权限列表*/
router.get('/async/user_member/account/child_perms',user_member_manage.user_member_account_perms)



/*订单管理*/
const user_order_manage= require('./order_manage')
router.get('/user/datacenter/order_manage',user_order_manage.index)
/*订单列表*/
router.get('/async/user-order/orders-list',user_order_manage.user_order_list)
/*发票信息列表*/
router.get('/async/user-order/invoice/info/list',user_order_manage.user_order_invoice_info_list)
/*开票*/
router.post('/async/user-order/invoice/apply',user_order_manage.user_order_invoice_apply)
/*添加发票信息*/
router.post('/async/user-order/invoice/info',user_order_manage.user_order_invoice_info)
/*添加发票信息*/
router.get('/async/delete/invoice/info',user_order_manage.delete_invoice_info)



/*我的客服*/
const user_my_support= require('./my_support')
router.get('/user/datacenter/support',user_my_support.index)



/*个人设置*/
const user_spacecp= require('./spacecp')
router.get('/user/datacenter/spacecp',user_spacecp.index)
/*修改用户信息*/
router.post('/async/user-spacecp/user/info',user_spacecp.user_spacecp_user_info)
// 获取用户产品关键词
router.get('/async/user/datacenter/product',user_spacecp.user_product)
// 修改用户类型相关信息
router.post('/async/user/datacenter/product/update',user_spacecp.user_product_update)
/*登录记录*/
router.get('/async/user-spacecp/login/records',user_spacecp.user_spacecp_login_records)
/*修改密码*/
router.post('/async/user-spacecp/password/change',user_spacecp.user_spacecp_password_change)

///*更换绑定邮箱时验证当前验证码*/
 router.get('/async/user-spacecp/account/bind/old-email/verify/code',user_spacecp.user_spacecp_old_email_verify_code)
 /*更换绑定邮箱时获取当前邮箱验证码*/
router.get('/async/user-spacecp/account/bind/old-email/send/verify/code',user_spacecp.user_spacecp_old_email_send_verify_code)
 /*更换绑定邮箱时发送新邮箱验证码*/
 router.get('/async/user-spacecp/account/change-bind/email/send/verify/code',user_spacecp.user_spacecp_new_email_code)


 /*更换绑定手机号时获取当前手机验证码*/
router.get('/async/user-spacecp/account/bind/old-phone/send/verify/code',user_spacecp.user_spacecp_old_phone_send_verify_code)
/*更换绑定手机号时验证当前手机验证码*/
router.get('/async/user-spacecp/account/bind/old-phone/verify/code',user_spacecp.user_spacecp_old_phone_verify_code)
/*更换绑定手机时发送新手机验证码*/
router.get('/async/user-spacecp/account/change-bind/phone/send/verify/code',user_spacecp.user_spacecp_change_bind_phone_send_verify_code)


router.post('/async/photo/upload', user_spacecp.upload_photo)


/*优惠券领取地址*/
const coupon= require('./coupon')
router.get('/couponreceive',coupon.index)

/*会员代金券*/
const vouchers= require('./vouchers')
router.get('/user/datacenter/vouchers',vouchers.index)
/*领取优惠券*/
router.post('/async/coupon/receive',vouchers.get_coupon)

////  邦line
const line= require('./line')
router.get('/user/line/index', de.login_required(), de.line_status(), line.line)
router.get('/async/line/stats',line.stats)
router.get('/async/line/group',line.group_list)
router.get('/async/line/member',line.member_list)
router.get('/async/line/follow', line.follow)
router.get('/async/line/unfollow', line.unfollow)
router.get('/async/line/follow/list', line.follow_list)
router.get('/async/nav/notification', line.nav_notification);

router.get('/user/line/group', de.login_required(),de.line_status(), line.group)
router.get('/async/line/group/inbound', line.group_inbounded)
router.post('/async/line/group/inbound', line.group_inbound)
router.get('/async/line/circle/topic', line.circle_topic)
router.get('/async/line/circle/items', line.circle_items)
router.get('/async/line/topic/delete', line.topic_delete)
router.get('/async/line/reply', line.reply)
// router.get('/async/line/topic/delete', line.topic_delete)
router.get('/async/line/reply/my', line.reply_my)
router.get('/async/line/group/message', line.group_message)

// 动态
router.get('/user/line/dynamic', de.login_required(),de.line_status(), line.dynamic)
router.get('/async/line/dynamic/topic', line.dynamic_topic)
router.post('/async/line/upload/topic/image', line.upload_topic_image)
router.post('/async/line/topic/add', line.topic_add)
router.post('/async/line/topic/delete', line.topic_delete)
router.get('/async/line/dynamic/topic/reply', line.dynamic_topic_reply)
router.post('/async/topic/reply', line.topic_reply_add)
router.get('/async/reply/delete', line.reply_delete)

router.get('/async/view/my/top', line.view_my_top)

router.get('/user/line/related', de.login_required(),de.line_status(), line.related)
router.get('/async/line/fans', line.fans)
router.get('/async/line/view', line.view)
router.get('/async/line/view/my', line.view_my)
router.get('/async/line/related/message', line.related_message)

router.get('/user/line/letter', de.login_required(),de.line_status(), line.letter)
router.get('/async/line/letter', line.letter_users)
router.get('/async/line/letter/records', line.letter_records)
router.post('/async/letter/upload/image', line.letter_upload_image)
router.post('/async/letter/send', line.letter_send)
router.post('/async/letter/hello', line.letter_hello)

router.get('/user/line/system/message', de.login_required(),de.line_status(), line.system_message)
router.get('/async/line/system/message', line.system_message_list)

router.get('/user/line/edit', line.edit)
router.get('/async/line/company/type', line.company_types)
router.post('/async/edit/upload/image', line.edit_info_upload_image)
router.post('/async/save/info', line.save_info)

router.get('/async/not/open/recommend/users', line.not_open_recommend_users)



module.exports = router;