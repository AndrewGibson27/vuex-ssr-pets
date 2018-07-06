const mongoose = require('mongoose')

const { Schema } = mongoose

const schema = new Schema({
  name: String,
  created: { type: Date, default: Date.now },
  description: String,
  chef: String,
  image: String,
  category: { type: String, enum: ['sweet', 'savory'] },
  savoryVotes: [{ type: Schema.Types.ObjectId, ref: 'Vote' }],
  sweetVotes: [{ type: Schema.Types.ObjectId, ref: 'Vote' }],
  overallVotes: [{ type: Schema.Types.ObjectId, ref: 'Vote' }]
})

module.exports = mongoose.model('Pie', schema)
