const express = require('express');
const router = express.Router();

const service = require('./loft_HD')
//国家更新列表
router.get('/loft_HD', service.index)


module.exports = router;