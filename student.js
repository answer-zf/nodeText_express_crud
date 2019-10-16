var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/zf')
var Schema = mongoose.Schema
var studentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  gender: {
    type: Number,
    enum: [0, 1], // 枚举 必须是0 或者1
    dafault: 0
  },
  age: {
    type: Number
  },
  hobbies: {
    type: String
  }
})
module.exports = mongoose.model('Student', studentSchema)
