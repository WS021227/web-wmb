const express = require('express');
const router = express.Router();

const category_topic = require('./company_list_topic')
router.get('/category/list', category_topic.index)

const category_detail = require('./company_detail_topic')
router.get('/category/:url_key?', category_detail.index)

const category_zimu = require('./company_zimu_list')
router.get('/category/list/:letter?-:page', category_zimu.index)
router.get('/category/list/:letter', category_zimu.index)

module.exports = router;