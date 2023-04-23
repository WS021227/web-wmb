const express = require('express');
const router = express.Router();

//海关数据详情
const customs_data= require('./customs_data')
//国家更新列表
router.get('/billsearch', customs_data.customs)

router.get('/customs-data/:country?',customs_data.index)
router.get('/test/:country?',customs_data.index_test)
// 搜索字段
router.get('/async/raw/search/fields',customs_data.search_fields)
// 分析字段
router.get('/async/raw/analyse/fields',customs_data.analyse_fields)
//搜索列表
router.get('/async/raw/trade/list',customs_data.trade_list)
//市场分析
router.get('/raw/trade/analyse/market',customs_data.trade_analyse_market) 
//维度分析
router.get('/raw/trade/analyse',customs_data.trade_analyse)
//标签列表
router.get('/async/raw/trade-tags/tags',customs_data.trade_tags)
//添加标签
router.post('/async/raw/trade-tags/tags',customs_data.add_trade_tags)
//添加标签
router.post('/async/raw/trade-tags/tags/change',customs_data.change_trade_tags)
//删除标签
router.post('/async/raw/trade-tags/tags/delete',customs_data.delete_trade_tags)
//海关数据导出提单条数获取
router.get('/async/raw/trade-export/trade/count',customs_data.trade_export_count)
//海关数据、数据导出
router.get('/async/raw/trade-export/trade',customs_data.trade_export_trade)         
//提单详情
router.get('/async/raw/bill/detail',customs_data.detail_raw_bill)

module.exports = router;