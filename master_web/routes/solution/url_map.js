const express = require('express');
const router = express.Router();
/*公司报告*/
const companies= require('./companies')
router.get('/companies',companies.index)

/*行业报告*/
const industry= require('./industry')
router.get('/industry',industry.index)

/*贸易数据*/
const tradedata= require('./tradedata')
router.get('/tradedata',tradedata.index)

/*使用群体*/
const usergroups= require('./usergroups')
router.get('/usergroups',usergroups.index)

/*成功案例*/
const sucess= require('./sucess')
router.get('/sucess',sucess.index)


module.exports = router;