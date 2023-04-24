const express = require('express');
const router = express.Router();

const course = require('./index')
//国家更新列表
router.get('/course', course.index)


module.exports = router;