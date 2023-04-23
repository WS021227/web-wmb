const express = require('express');
const async = require('async');
const tools = require('../../common/util.js')
const router = express.Router();

router.index = function (req, res) {

    res.wrender('./minisite/weixin.ejs');
}


module.exports = router;