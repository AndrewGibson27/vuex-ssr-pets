const mongoose = require('mongoose')

const { Schema } = mongoose

const schema = new Schema({
  name: String,
  created: { type: Date, default: Date.now },
  pie: { type: Schema.Types.ObjectId, ref: 'Pie' }
})

module.exports = mongoose.model('Vote', schema)
