const express = require('express');
const router = express.Router();
const db = require('../db.js');
const uuidv1 = require('uuid/v1');

router.route('/seats').get((req, res) => {
  res.json(db.seats);
});

router.route('/seats').post((req, res) => {
    const { day, seat, client, email } = req.body;
    const id = uuidv1();
    res.json(db.seats.push({ id: id, day: day, seat: seat, client: client, email: email }));
    if (!db.seats.some(data => data.day == req.body.day && data.seat == req.body.seat)) { 
        db.seats.push(newData);
        res.json({ message: 'OK' });
    } else { 
        res.status(418).json({ message: "The slot is already taken"})
    };
});

router.route('/seats/:id').get((req, res) => {
  res.json(db.seats[req.params.id - 1]);
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