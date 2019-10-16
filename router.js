/**
 * router.js 路由模块
 * 职责：
 *    处理路由
 *    根据不同请求方法 + 请求路径设置具体的请求处理函数
 */

var Student = require('./student')

// express 有专门包装路由的方式  => 简化操作
var express = require('express')
// - 创建一个路由容器
var router = express.Router()
// - 把路由都挂载都 router 路由容器中

// 获取数据
// 响应处理（curd）
//    - 持久化
// 发送响应

router.get('/students', function(req, res) {
  Student.find(function(err, students) {
    if (err) {
      return res.status(500).send('server error.')
    }
    res.render('index.html', {
      list: ['low', 'mediu', 'heigh', 'to heigh'],
      students: students
    })
  })
})

router.get('/students/new', function(req, res) {
  res.render('./new.html')
})

router.post('/students/new', function(req, res) {
  new Student(req.body).save(function(err) {
    if (err) {
      return res.status(500).send('server error.')
    }
    res.redirect('/students')
  })
})

router.get('/students/edit', function(req, res) {
  Student.findById(req.query.id, function(err, student) {
    if (err) {
      return res.status(500).send('server error.')
    }
    res.render('./edit.html', {
      student: student
    })
  })
})

router.post('/students/edit', function(req, res) {
  Student.findByIdAndUpdate(req.body.id, req.body, function(err) {
    if (err) {
      return res.status(500).send('server error.')
    }
    res.redirect('/students')
  })
})

router.get('/students/delete', function(req, res) {
  Student.findByIdAndRemove(req.query.id, function(err) {
    if (err) {
      return res.status(500).send('server error.')
    }
    res.redirect('/students')
  })
})

// 导出router
module.exports = router
