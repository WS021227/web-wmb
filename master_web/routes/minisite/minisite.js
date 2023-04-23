const tools = require("../../common/util");

const router = require("express").Router();

router.df = function (req, res) {

    tools.wstats(req, res, '2022_data_festival_home')
    res.wrender('./minisite/df_'+ res.locals.wglobals.lang +'.ejs');
}


router.df_sweepstakes = function (req, res) {
    tools.getMasterApiQuery('/activities/df/sweepstakes', {}, req, res, function (result) {
        res.send(result)
    })
}

router.df_giveaways_address = function (req, res) {
    tools.postMasterApiQuery('/activities/df/giveaways/address', {
        address: req.body.address,
        prize_id: req.body.id
    }, req, res, function (result) {
        return res.send(result)
    })
}


module.exports = router;
