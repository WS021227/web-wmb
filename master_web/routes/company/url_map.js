/*
 * @Description:
 * @Version: 1.0
 * @Autor: Cong
 * @Date: 2021-12-27 11:41:37
 * @LastEditors: Cong
 * @LastEditTime: 2021-12-27 19:03:52
 */
const express = require('express');
const router = express.Router();
const decorator = require('../../common/decorator');

const searchTags = require('./search_tags')
// ----------------------------------------------------------标签搜索
// 标签搜索入口
router.get(/^\/(buyer|supplier)\/tags$/, searchTags.index)
// 异步搜索标签统计
router.get('/async/tags', searchTags.tag_stats_list)
//获取标签列表
router.get('/async/tags/list', searchTags.tagsList);
//创建搜索标签
router.post('/async/tags/create', searchTags.create);
//修改搜索标签
router.post('/async/tags/edit', searchTags.edit);
//删除搜索标签
router.post('/async/tags/delete', searchTags.delete_tag);
//页面上需要统计的数量
router.get('/async/stats/count', searchTags.stats_count)
// ---------------------------------------------------------公司搜索
const company_search = require('./search')

// const _ttt = route_extent({})
//采购商
router.get('/buyer', decorator.res_extend({head: 1}), company_search.buyer_list)
router.get('/buy-:key?', decorator.res_extend({head: 4}), company_search.buyer_list)
router.get('/cb-:country?', decorator.res_extend({head: 2}), company_search.buyer_list)
router.get('/cb-:country?/:key?', decorator.res_extend({head: 3}), company_search.buyer_list)
// 供应商
router.get('/supplier', decorator.res_extend({head: 1}), company_search.supplier_list)
router.get('/sup-:key?', decorator.res_extend({head: 4}), company_search.supplier_list)
router.get('/cs-:country?', decorator.res_extend({head: 2}), company_search.supplier_list)
router.get('/cs-:country?/:key?', decorator.res_extend({head: 3}), company_search.supplier_list)
// 统一搜索
router.get('/async/company/search', company_search.company_search)
// 批量关注
router.post('/async/company/follow/bulk', company_search.company_follow_bulk)
//历史搜索词
router.get('/async/historyKeys', company_search.historyKeys);
router.get('/async/search/autocomplete', company_search.autocomplete);
router.get('/async/hotKeys', company_search.hotKeys);
// 搜索同类推荐
router.get('/async/recommend-products/similar', company_search.recommend_products_similar);

//公司详情
const company_details= require('./company_details')
//详情
router.get('/buyer/:id?',company_details.buyer_detail)
router.get('/supplier/:id?',company_details.supplier_detail)
router.get('/async/company/contacts',company_details.company_contacts)
router.get('/company/details',company_details.company_detail)
//港口统计
router.get('/company/detail/port', decorator.company_detail_reftoken_verify(), company_details.port)
//贸易国
router.get('/company/detail/trade-country',decorator.company_detail_reftoken_verify(),company_details.trade_country)
//贸易伙伴
router.get('/company/detail/partner',decorator.company_detail_reftoken_verify(),company_details.partner)
//贸易数据
router.get('/company/detail/trends',company_details.trends)
//进出口报告公司统计
router.get('/async/detail/report/company/stats',decorator.company_detail_reftoken_verify(),company_details.company_stats)
//提单详情
router.get('/company/detail/bill',decorator.company_detail_reftoken_verify(),company_details.bill)
//HS统计
router.get('/company/detail/hs',decorator.company_detail_reftoken_verify(),company_details.hs)
//产品标签
router.get('/async/detail/product-list',decorator.company_detail_reftoken_verify(),company_details.product_list)
//贸易数据
router.get('/company/detail/trade', decorator.company_detail_reftoken_verify(),company_details.detail_trade)
//贸易数据日期列表
router.get('/company/detail/trade/year/list',company_details.trade_year_list)
//贸易数据日期列表
router.get('/company/detail/year/stats',company_details.year_stats)
// 校验传入的关键词是否有数据
router.get('/async/detail/verify/search_key',company_details.verify_search_key)

router.get('/async/company/export-trade/perms',company_details.export_trade_perms)
router.get('/async/company-export/trade/count',company_details.export_trade_count)
router.get('/async/company-export/trade',company_details.export_trade)
// 获取已关联的自定义标签列表
router.get('/async/detail-customize-tag/tag',company_details.customize_tag_list)
//公司关联标签
router.post('/async/detail-customize-tag/join',company_details.detail_customize_tag_join)
//解除公司关联标签
router.post('/async/detail-customize-tag/dissociate',company_details.detail_customize_tag_dissociate)
//用户标签列表
router.get('/async/detail-customize-tag/user',company_details.detail_customize_tag_user)
//添加标签
router.post('/async/detail-customize-tag/add',company_details.add_customize_tag)
//修改标签
router.post('/async/detail-customize-tag/change',company_details.change_customize_tag)
//删除标签
router.post('/async/detail-customize-tag/delete',company_details.detail_customize_tag_delete)
//任务详情
router.get('/company/email-crawler/task/detail',company_details.task_detail)
//任务状态
router.get('/async/email-crawler/task/state',company_details.task_state)
//添加邮箱爬取任务
router.post('/async/email-crawler/task/email/add',company_details.add_task_email)
//添加网址爬取任务
router.post('/async/email-crawler/task/url/add',company_details.add_task_url)
//邮箱采集列表
router.get('/company/email-crawler/task/get-email',company_details.task_get_email)
//网址采集列表
router.get('/company/email-crawler/task/get-url',company_details.task_get_url)
//网址采集列表
router.get('/async/email-crawler/export',company_details.crawler_email_export)
//添加跳转到社媒搜搜的记录

router.get('/async/to-soso',company_details.to_soso)
module.exports = router;