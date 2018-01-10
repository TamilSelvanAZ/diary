var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Diary = require('../models/diary.js');

/* GET ALL DiaryS */
router.get('/', function(req, res, next) {
  Diary.find(function (err, Diarys) {
    if (err) return next(err);
    res.json(Diarys);
  });
});

/* GET SINGLE Diary BY ID */
router.get('/:id', function(req, res, next) {
  Diary.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE Diary */
router.post('/', function(req, res, next) {
  Diary.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE Diary */
router.put('/:id', function(req, res, next) {
  Diary.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE Diary */
router.delete('/:id', function(req, res, next) {
  Diary.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;