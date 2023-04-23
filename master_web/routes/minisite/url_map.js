const express = require('express');
const router = express.Router();
const decorator = require("../../common/decorator");

const weixin = require('./weixin')
//国家更新列表
router.get('/weixin', weixin.index)

const mini = require('./minisite')
const payment = require("../payment/pay");
//数据节主会场
router.get('/2022-data-festival',  decorator.login_required(),mini.df)

// 抽奖数据
router.get('/async/payment/df/sweepstakes',mini.df_sweepstakes)
// 上传抽奖奖品地址

// 上传阳光普照奖品地址
router.post('/async/payment/df/giveaways/address',mini.df_giveaways_address)

module.exports = router;