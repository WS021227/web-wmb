const express = require('express');
const async = require('async');
const tools = require('../../common/util.js')
const router = express.Router();
router.index = function (req, res) {
    async.waterfall([
       
 
], function (err, results) {
    return res.wrender('./loft_HD/index.ejs', {
        results: '服务与报价'
    });
})
}


module.exports = router;