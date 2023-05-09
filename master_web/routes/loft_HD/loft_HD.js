const express = require('express');
const async = require("async");
const tools = require("../../common/util");
const router = express.Router();


router.index = function (req, res) {
    res.locals.wglobals.nav_active = 'loft_hd'
    let results = {}
    async.waterfall(
        [
            function (callback) {
                tools.getMasterApiQuery('/payment/products/price',
                    {is_payment: false, all: true},
                    req, res,
                    function (result) {
                        let list = (result.data || {}).list || [];
                        if(list.length > 0) {
                            for (let i = 0; i <list.length; i++) {
                                results[list[i].mark] = list[i]
                            }
                        }
                        callback(null, 1)
                    }
                )
            }
        ],
        function (err, _) {
            return res.wrender('./loft_HD/index.ejs', {results: results});

        }
    )
}


module.exports = router;