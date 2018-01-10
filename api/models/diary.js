var mongoose = require('mongoose');

var DiarySchema = new mongoose.Schema({
  dir_name: String,
  dir_desc: String,
  dir_price: Number,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Diary', DiarySchema);