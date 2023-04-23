const express = require('express');
const async = require('async');
const tools = require('../../common/util.js')
const router = express.Router();


router.index = function (req, res) {
    return res.wrender('./bangStore/san_jian_ke.ejs');
}


module.exports = router;