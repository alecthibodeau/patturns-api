const mongoose = require('mongoose')

const patternSchema = new mongoose.Schema({
  info: {
    type: String,
    required: true
  },
  grid: {
    type: Array,
    default: undefined,
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