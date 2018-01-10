var express = require('express');
var router = express.Router();
const User = require('../models/users.js');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// router.post('/login', validate({ body: User[0].LoginSchema }), function (req, res, next) {
//   var query = req.body;
//   console.log(query);
//   var db_call = db_connect.db_connect('users', query, 'login', res, next);
//   //console.log(db_call);
// })

module.exports = router;
