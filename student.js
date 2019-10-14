/**
 * student.js
 * 数据操作文件模块
 * 职责：操作文件中的数据，只处理数据，不关心业务
 */
var fs = require('fs')
var dbPath = './db.json'
/**
 * 获取所有学生列表
 * return []
 */
exports.find = function(callback) {
  // 如果需要获取一个函数中异步操作的结果，必须通过回调函数获取
  fs.readFile(dbPath, 'utf8', function(err, data) {
    if (err) {
      return callback(err)
    }
    callback(null, JSON.parse(data).students)
  })
}
/**
 * 通过Id获取学生信息对象
 *
 * @param {number} id 学生id
 * @param {function} callback 回调函数
 */
exports.findById = function(id, callback) {
  fs.readFile(dbPath, 'utf8', function(err, data) {
    if (err) {
      return callback(err)
    }
    var students = JSON.parse(data).students
    var student = students.find(function(item) {
      return item.id === parseInt(id)
    })
    callback(null, student)
  })
}
/**
 * 添加保存
 */
exports.save = function(student, callback) {
  fs.readFile(dbPath, 'utf8', function(err, data) {
    if (err) {
      return callback(err)
    }
    var students = JSON.parse(data).students
    student.id = students[students.length - 1].id + 1
    students.push(student)
    var fileData = JSON.stringify({
      students: students
    })
    fs.writeFile(dbPath, fileData, function(err) {
      if (err) {
        return callback(err)
      }
      callback(null)
    })
  })
}
/**
 * 更新
 */
exports.updateById = function(student, callback) {
  fs.readFile(dbPath, 'utf8', function(err, data) {
    if (err) {
      return callback(err)
    }
    var students = JSON.parse(data).students
    student.id = parseInt(student.id)
    var stu = students.find(function(item) {
      return item.id === parseInt(student.id)
    })
    for (var key in student) {
      stu[key] = student[key]
    }
    var fileData = JSON.stringify({
      students: students
    })
    fs.writeFile(dbPath, fileData, function(err) {
      if (err) {
        return callback(err)
      }
      callback(null)
    })
  })
}

/**
 * 删除
 */
exports.deleteById = function(id, callback) {
  fs.readFile(dbPath, 'utf8', function(err, data) {
    if (err) {
      return callback(err)
    }
    var students = JSON.parse(data).students
    var index = students.findIndex(function(item) {
      return item.id === parseInt(id)
    })
    students.splice(index, 1)
    var fileData = JSON.stringify({
      students: students
    })
    fs.writeFile(dbPath, fileData, function(err) {
      return callback(err)
    })
    callback(null)
  })
}
