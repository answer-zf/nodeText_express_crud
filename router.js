var fs = require('fs')
module.exports = function(app) {
  app.get('/students', function(req, res) {
    // readFile 的第二个参数是可选的，传入 utf8 就是告诉他把读取到的文件直接按照 utf8 编码转成字符串
    // 等价于 data.toString()
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
  app.get('/students/new', function(req, res) {})

  app.get('/students/new', function(req, res) {})

  app.get('/students/new', function(req, res) {})

  app.get('/students/new', function(req, res) {})

  app.get('/students/new', function(req, res) {})
}
