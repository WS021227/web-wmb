const express = require('express');
const async = require('async');
const tools = require('../../common/util.js')
const router = express.Router();

router.index = function (req, res) {
    var dataarry = {help_center: "joboffers"};
    res.wrender('./help_center/joboffers.ejs', {
        results: dataarry
    });
}


module.exports = router;