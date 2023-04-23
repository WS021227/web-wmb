const express = require('express');
const router = express.Router();

const friend = require('./friend')
router.get('/friend', friend.index)
router.get('/async/friend/list',friend.friend_list)

const friend_detail = require('./friend_detail')
router.get('/m:id?', friend_detail.index)



module.exports = router;