const express = require('express');
const router = express.Router();

const course = require('./index')

router.get('/course', course.index)
router.get('/async/get_tj_or_new',course.get_tj_or_new)
// 录播课详情页面
router.get('/recording_detail/:id', course.recording_detail)
router.get("/async/get_kcwd",course.get_kcwd)
router.get("/async/get_kcjs",course.get_kcjs)
// 发布评论
router.post("/async/post_pl",course.post_pl)

module.exports = router;