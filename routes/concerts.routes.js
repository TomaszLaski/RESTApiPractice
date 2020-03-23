  
const express = require('express');
const router = express.Router();
const concertControllers = require('./controllers/concerts.controller');

router.get('/concerts', concertControllers.getAll);

router.get('/concerts/random', concertControllers.getRandom);

router.get('/concerts/:id', concertControllers.getById);

router.post('/concerts', concertControllers.postNew);

router.put('/concerts/:id', concertControllers.modifyById);

router.delete('/concerts/:id', concertControllers.deleteById);

router.get('/concerts/performer/:performer', concertControllers.getByPerformer)

router.get('/concerts/genre/:genre', concertControllers.getByGenre)

router.get('/concerts/price/:price_min/:price_max', concertControllers.getByPrice)

router.get('/concerts/day/:day', concertControllers.getByDay)

module.exports = router;