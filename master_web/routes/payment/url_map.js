const express = require('express');
const router = express.Router();

const payment = require('./pay')
//支付页面/Alipay/:country?
router.get('/Alipay', payment.index)
// 未支付的订单
router.get('/payment/unpaid', payment.unpaid)
/*产品价格列表*/
router.get('/payment/products/price',payment.payment_products_price)
/*支付价格详情*/
router.get('/payment/price/details',payment.payment_products_details)
/*添加订单*/
router.post('/payment/add',payment.payment_add)
// 验证订单的支付成功
router.post('/async/payment/verify', payment.payment_verify)

/*支付宝周期付款获取sdk参数*/
router.get('/alipay/period',payment.payment_alipay_period)
/*支付成功返回页面*/
router.get('/alipay/return',payment.payment_alipay_return)

/*查询微信子订单且集成支付*/
router.post('/payment/child/weixin',payment.payment_child_weixin)

// 未支付子订单继续支付
router.post('/payment/keep', payment.payment_keep)

// 未支付订单查询状态
router.get('/async/check/payment', payment.check_payment)
// 未支付订单放弃支付
router.get('/async/recheck/product', payment.recheck_product)

// paypal 支付成功返回頁面
router.get('/paypal/return',payment.payment_paypal_return)


router.post('/async/sc/submit', payment.sc_submit)
router.post('/async/bem_js_improve/submit', payment.bem_js_improve_submit)

//单品购买
router.get('/product', payment.product)

//领取惊喜券
router.get('/async/surprise/coupon/receive', payment.surprise_coupon_receive)
router.get('/async/surprise/coupon/close', payment.surprise_coupon_close)

router.get('/async/payment/df/coupon', payment.df_coupon)
router.post('/async/payment/df/coupon', payment.df_coupon_receive)

module.exports = router;