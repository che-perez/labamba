const express = require('express')
const reservationController = require('../controllers/reservationController');
const mesasController = require('../controllers/mesasController');

const reservationRoutes = express.Router()

reservationRoutes.get('/',reservationController.index);
reservationRoutes.get('/mesas',mesasController.index);
reservationRoutes.get('/:id', reservationController.show);
reservationRoutes.get('/email/:email', reservationController.find);
reservationRoutes.post('/', reservationController.create);
reservationRoutes.put('/:id', reservationController.update);
reservationRoutes.delete('/:id', reservationController.destroy);



module.exports = reservationRoutes;
