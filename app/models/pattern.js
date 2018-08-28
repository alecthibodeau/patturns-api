const mongoose = require('mongoose')

const patternSchema = new mongoose.Schema({
  info: {
    type: String,
    required: false
  },
  grid: {
    type: Array,
    default: Array(100),
    required: true
  },
  niceDate: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Pattern', patternSchema)
