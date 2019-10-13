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
 * 添加保存
 */
exports.save = function() {}
/**
 * 更新
 */
exports.updata = function() {}
/**
 * 删除
 */
exports.delete = function() {}
