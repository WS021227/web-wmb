const express = require('express');
const router = express.Router();

const course = require('./index')

router.get('/course', course.index)
router.get('/async/get_tj_or_new',course.get_tj_or_new)
// 录播课详情页面
router.get('/recording_detail/:id', course.recording_detail)

module.exports = router;