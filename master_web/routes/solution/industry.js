const express = require('express');
const async = require('async');
const tools = require('../../common/util.js')
const router = express.Router();

router.index = function (req, res) {
    var dataarry = {solution: "industry"};
    res.wrender('./solution/industry.ejs', {
        results:dataarry
    });
}


module.exports = router;
