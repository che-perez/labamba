const express = require('express')
const reservationController = require('../controllers/reservationController');

const reservationRoutes = express.Router()

reservationRoutes.get('/',reservationController.index);
reservationRoutes.post('/', reservationController.create);

reservationRoutes.get('/:id', reservationController.show);
reservationRoutes.put('/:id', reservationController.update);
reservationRoutes.delete('/:id', reservationController.destroy);

module.exports = reservationRoutes;