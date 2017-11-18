const express = require('express')

const reservationRoutes = express.Router()
const reservationController = require('../controlllers/reservationController')

reservationRoutes.get('/',reservationController.index)
reservationRoutes.post('/', reservationController.create)

reservationRoutes.get('/:id', reservationController.show)
reservationRoutes.put('/', reservationController.update)
reservationRoutes.delete('/:id', reservationController.delete)

module.exports = reservationRoutes
