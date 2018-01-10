var mongoose = require('mongoose');

var DiarySchema = new mongoose.Schema({
  user_id:{ type: Number },
  name: { type: String },
  description: { type: String },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  
}, { collection: 'diaries' });

module.exports = mongoose.model('Diary', DiarySchema);