const express = require('express');
const router = express.Router();
const db = require('./../db');


router.route('/testimonials').get((req, res) => {
    res.json(db.testimonials);
  });

router.route('/testimonials/random').get((req, res) => {
  res.json(db.testimonials[Math.floor(Math.random() * db.testimonials.length)]);
});

router.route('/testimonials/:id').get((req, res) => {
  res.json(db.testimonials[req.params.id -1 ]);
});

router.route('/testimonials').post((req, res) => {
  res.json({ message: 'ok' });
});


router.route('/testimonials/:id').put((req, res) => {
  res.json({ message: 'ok' });
});

router.route('/testimonials/:id').delete((req, res) => {
  res.json({ message: 'ok' });
});

router.route('/testimonials').get((req, res) => {
  res.json(db.testimonials);
});

  module.exports = router;

  