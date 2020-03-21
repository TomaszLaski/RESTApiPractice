const express = require('express');
const router = express.Router();
const db = require('./../db');


router.route('/concerts').get((req, res) => {
    res.json(db.concerts);
  });

router.route('/concerts/random').get((req, res) => {
  res.json(db.concerts[Math.floor(Math.random() * db.concerts.length)]);
});

router.route('/concerts/:id').get((req, res) => {
  res.json(db.concerts[req.params.id -1 ]);
});

router.route('/concerts').post((req, res) => {
  res.json({ message: 'ok' });
});


router.route('/concerts/:id').put((req, res) => {
  res.json({ message: 'ok' });
});

router.route('/concerts/:id').delete((req, res) => {
  res.json({ message: 'ok' });
});

router.route('/concerts').get((req, res) => {
  res.json(db.concerts);
});

  module.exports = router;

  