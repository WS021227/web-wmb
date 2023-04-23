const express = require('express');
const router = express.Router();
const decorator = require('../../common/decorator')

const bangClass = require('./bangClass')
//大课堂
router.get('/new', bangClass.index)
//教程列表
router.get('/async/new/tutorial/list', bangClass.tutorial_list)
//教程分类目录
router.get('/async/new/tutorial/category/item', bangClass.category_item)
//热门
// router.get('/async/new/tutorial/hot', bangClass.category_item)
//操作手册
router.get('/new/category-czsc', bangClass.czsc)
//网站通告
router.get('/new/category-fwzc', decorator.only_cn(), bangClass.fwzc)
//课程
router.get('/new/category-kfkc', bangClass.kfkc)
// 指定分类下的教程列表
router.get('/new/category-:route?', bangClass.category_index)
//详情
router.get('/new/:id?', bangClass.detail)
module.exports = router;