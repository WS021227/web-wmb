const express = require('express');
const router = express.Router();
const decorator = require('../../common/decorator')

const bangStore = require('./bangStore')
//邦商城
router.get('/mall', decorator.only_cn(), bangStore.index)
//海关数据教程
router.get('/customs-data-course/:id?', decorator.only_cn(), bangStore.custom_data_course)
router.get('/async/cdc/class/:id?', decorator.only_cn(), bangStore.custom_data_course_list)
router.get('/async/cdc/class/url/:id?', decorator.only_cn(), bangStore.custom_data_course_url)
router.get('/async/cdc/reply', decorator.only_cn(), bangStore.custom_data_course_reply_list)
router.post('/async/cdc/reply', decorator.only_cn(), bangStore.custom_data_course_reply_add)
router.post('/async/cdc/open', decorator.only_cn(), bangStore.custom_data_course_open_auth)

/*邦阅大课堂*/
const big_classroom = require('./big_classroom')
router.get('/yuekt', decorator.only_cn(), big_classroom.index)
router.get('/async/yuekt/details', decorator.only_cn(), big_classroom.live_details)
router.get('/async/yuekt/list', decorator.only_cn(), big_classroom.live_list)


/*三剑客*/
const san_jian_ke = require('./san_jian_ke')
router.get('/san-jian-ke', decorator.only_cn(), san_jian_ke.index)

/*社媒邮箱采集*/
const social_media = require('./social_media')
router.get('/social-media',social_media.index)

/*benchmark*/
const benchmark = require('./benchmark')
router.get('/benchmark',decorator.only_cn(), benchmark.index)

/*amazon*/
const amazon = require('./amazon');
router.get('/amazon',amazon.index)
router.get('/async/add_service',amazon.add_service)

// xorder 新添加
const xorder = require('./xorder');
router.get('/xorder',decorator.only_cn(), xorder.index)
router.get('/async/xorder/pop',decorator.only_cn(),xorder.pop_trial)
router.post('/async/xorder',decorator.only_cn(),xorder.save_trial)

// 提交表单
router.post('/async/common/js/trial',amazon.js_trial_post)
// 弹窗
router.get("/async/js_trial_toast",amazon.js_trial_toast)
// 邮箱验证
router.post('/async/account/send/email/code',amazon.email)
// 手机号验证
router.post('/async/account/send/phone/code',amazon.phone)

module.exports = router;