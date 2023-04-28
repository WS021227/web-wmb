const express = require('express');
const router = express.Router();

const course = require('./index')
router.get('/course', course.index)
router.get('/async/get_tj_or_new',course.get_tj_or_new)
router.get('/async/get_side',course.get_side)
router.get("/async/get_lbkc",course.get_lbkc)
// 下载资源包
router.get("/async/download_zy",course.download_zy)

// 录播课详情页面
const recording_detail = require('./recording_detail')
router.get('/recording_detail/:id', recording_detail.recording_detail)
router.get("/async/get_kcwd",recording_detail.get_kcwd)
router.get("/async/get_kcwd_children",recording_detail.get_kcwd_children)
router.get("/async/get_kcjs",recording_detail.get_kcjs)
// 下载ppt
router.get('/async/down_ppt',recording_detail.down_ppt)
// 发布评论
router.post("/async/post_pl",recording_detail.post_pl)

module.exports = router;