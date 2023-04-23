const express = require('express');
const async = require('async');
const tools = require('../../common/util.js')
const router = express.Router();
router.index = function (req, res) {
    res.locals.wglobals.nav_active = 'datacenter'
    res.wrender('./home/couponreceive.ejs');
}

module.exports = router;