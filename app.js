var express = require('express')
var app = express()

app.engine('html', require('express-art-template'))

app.use('/public/', express.static('./public/'))
app.use('/node_modules/', express.static('./node_modules/'))

app.listen(3000, function() {
  console.log('node express is running')
})

module.exports = app
