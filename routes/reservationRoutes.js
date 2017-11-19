const express = require('express')
const reservationController = require('../controllers/reservationController');

const reservationRoutes = express.Router()

reservationRoutes.get('/',reservationController.index);
reservationRoutes.get('/:id', reservationController.show);
reservationRoutes.post('/', reservationController.create);
reservationRoutes.put('/:id', reservationController.update);
reservationRoutes.delete('/:id', reservationController.destroy);

module.exports = reservationRoutes;