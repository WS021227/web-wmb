const express = require('express');
const async = require('async');
const tools = require('../../common/util.js')
const pagination = require('../../common/pageing')
const router = express.Router();

router.index = function (req, res) {
    res.locals.wglobals.path = req.path
    let letter = req.params.letter, page = parseInt(req.params.page || 1), size = 72,
        start = (page - 1) * size ,
        params = {start: start, size: size}
    if(letter !== 'new'){
        // 非字母返回404
        if(letter.length > 1 || !isNaN(parseInt(letter))) return res.status(404).render('error')
        params['letter'] = letter.toLowerCase()
       
    }
    async.waterfall([
        function (callback) {
            tools.getMasterApiQuery('/company/search-log/letter',
                params, req, res,
                function (result) {
                    var data = result.state == 0?result.data:{}
                    callback(null, data);
                }
            )
        },
    ], function (err, results) {
        let list = results.list||[], item = list.length>0?list[0]:{}, total = item.total_count||0
        results['pagination'] = pagination.render(total,size,page,'/category/list/' + letter + '-', 'letter_page');
        results['letter'] = letter
        results['start'] =page
        return res.wrender('./seo/company_zimu_list.ejs', {
            results:results
        });
    })
}


module.exports = router;