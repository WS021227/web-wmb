const express = require('express');
const router = express.Router();
const conf = require("../common/base_config");

// 主页
var home = require('./index');
router.get('/', home.index);
router.get('/test', home.test);
router.get(conf.common.prov_filename, home.prov_file);

// 公司相关路由
const company_url_map = require('./company/url_map');
router.use('/', company_url_map);

// 公共路由
const common_url_map = require('./common/url_map');
router.use('/', common_url_map)

// 贸易数据相关路由
const billsearch_url_map = require('./billsearch/url_map');
router.use('/', billsearch_url_map);

// 数据中心相关路由
const data_center_url_map = require('./home/url_map');
router.use('/',data_center_url_map);

// 报价与服务相关路由
const service_url_map = require('./loft_HD/url_map');
router.use('/', service_url_map);

// 邦课堂相关路由
const bangClass_url_map = require('./bangClass/url_map');
router.use('/', bangClass_url_map);

// 邦商城相关路由
const bangStore_url_map = require('./bangStore/url_map');
router.use('/', bangStore_url_map);

// 用户相关路由
const user_url_map = require('./user/url_map');
router.use('/', user_url_map);

//支付相关路由
const alipay_url_map = require('./payment/url_map');
router.use('/', alipay_url_map);

//帮助中心相关路由
const help_center = require('./help_center/url_map');
router.use('/', help_center);

//解决方案相关路由
const solution = require('./solution/url_map');
router.use('/', solution);

//移动端相关路由
const seo = require('./seo/url_map');
router.use('/', seo);

//移动端相关路由
const minisite = require('./minisite/url_map');
router.use('/', minisite);

//bangline相关路由
const bangline = require('./bangline/url_map');
router.use('/', bangline);

module.exports = router;