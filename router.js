/**
 * router.js 路由模块
 * 职责：
 *    处理路由
 *    根据不同请求方法 + 请求路径设置具体的请求处理函数
 */

var fs = require('fs')
// express 有专门包装路由的方式  => 简化操作
var express = require('express')
// - 创建一个路由容器
var router = express.Router()
// - 把路由都挂载都 router 路由容器中

router.get('/students', function(req, res) {
  fs.readFile('./db.json', 'utf8', function(err, data) {
    if (err) {
      return res.status(500).send('server error.')
    }
    res.render('index.html', {
      list: ['low', 'mediu', 'heigh', 'to heigh'],
      students: JSON.parse(data).students
    })
  })
})

router.get('/students/new', function(req, res) {})

router.get('/students/new', function(req, res) {})

router.get('/students/new', function(req, res) {})

router.get('/students/new', function(req, res) {})

router.get('/students/new', function(req, res) {})

// 导出router
module.exports = router
