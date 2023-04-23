const express = require('express');
const async = require('async');
const tools = require('../../common/util.js')
const router = express.Router();

router.index = function (req, res) {
    var dataarry = {help_center: "aboutus"};
    res.wrender('./help_center/aboutus.ejs', {
        results:dataarry
    });
}


module.exports = router;
