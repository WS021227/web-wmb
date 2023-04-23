const express = require('express');
const async = require('async');
const tools = require('../../common/util.js')
const router = express.Router();

router.index = function (req, res) {
    var dataarry = {help_center: "user_agreement"};
    res.wrender('./help_center/user_agreement.ejs', {
        results: dataarry
    });
}


module.exports = router;