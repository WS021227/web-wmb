const express = require('express');
const router = express.Router();

const course = require('./index')

router.get('/course', course.index)
// 录播课详情页面
router.get('/recording_detail', course.recording_detail)

module.exports = router;