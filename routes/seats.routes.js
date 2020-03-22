const express = require('express');
const router = express.Router();
const db = require('../db.js');
const uuid = require('uuid');

router.route('/seats').get((req, res) => {
  res.json(db.seats);
});

router.route('/seats').post((req, res) => {
  const seatsData = {
      id: uuid.v1(),
      day: req.body.day,
      seat: req.body.seat,
      client: req.body.client,
      email: req.body.email,
  };
  if (!db.seats.some(data => data.day == req.body.day && data.seat == req.body.seat)) { 
      db.seats.push(seatsData);
      req.io.emit('seatsUpdated', db.seats);
      res.json({ message: 'OK' });
  } else { 
      res.status(418).json({ message: "The slot is already taken"})
  };
});

  router.route('/seats/:id').get((req, res) => {
    const id = req.params.id;  
    res.json(db.seats[db.seats.findIndex(index => (index.id == id))]);
  });



router.route('/seats:id').delete((req, res) => {
  res.json({ message: 'ok' });
});

router.route('/seats/:id').put((req, res) => {
  res.json({ message: 'ok' });
});

router.route('/seats').get((req, res) => {
    res.json(db.seats);
  });

module.exports = router;