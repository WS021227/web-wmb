const express = require('express');
const router = express.Router();
const decorator = require('../../common/decorator');
/*关于我们*/
const aboutus= require('./aboutus')
router.get('/help/aboutus',aboutus.index)

/*联系我们*/
const contactus= require('./contactus')
router.get('/help/contactus',contactus.index)

/*网站招聘*/
const joboffers= require('./joboffers')
router.get('/help/joboffers', decorator.only_cn(), joboffers.index)

/*用户协议*/
const user_agreement= require('./user_agreement')
router.get('/help/user_agreement',user_agreement.index)

/*用户隐私*/
const privacy_policy= require('./privacy_policy')
router.get('/help/privacy_policy',privacy_policy.index)

/*广告招募*/
const price= require('./price')
router.get('/help/price',price.index)

/*产品手册*/
const product_manual= require('./product_manual')
router.get('/help/product_manual',product_manual.index)

module.exports = router;