var mongoose = require('mongoose');

var UsersSchema = new mongoose.Schema({
  email_id:{ type: String },
  password: { type: String }
}, { collection: 'users' });


module.exports = mongoose.model('User', UsersSchema);
