const Reservation = require('../models/labamba')

const reservationController = {}

reservationController.index = (req, res) => {
    // console.log('showing index')
    Reservation.findAll().then((labamba)) => {
      console.log(labamba)
      res.render('labamba/labamba-index', {
        data: xxxxx,
      })
    }).catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
  };
  reservationController.create = (req, res) => {
    Reservation.create({
      firstname: req.body.firstname
      lastname:  req.body.lastname
      email:     req.body.email
      telephone: req.body.telephone
      date:      req.body.date
      time:      req.body.time
    }).then((labamba) => {
      res.send(labamba)
    }).catch(err=>{
      console.log(err)
      res.status(500).json(err)
    })
  }
  reservationController.show = (req, res) => {
    Reservation.findById(req.params.id)
    .then((labamba) => {
      res.render('labamba/labamba-single', {
        data: res
      })
    }).catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
  }
  reservationController.update = (req, res) => {
    Monofogo.update(
       [req.body.firstname
       req.body.lastname
       req.body.email
       req.body.telephone
       req.body.date
       req.body.time])
    .then((labamba) => {
      res.redirect('back')
    }).catch(err => {
        console.log(err)
        res.status(500).json(err)
      })
  }
  reservationController.delete = (req,res) => {
    Reservation.delete(req.params.id).then(
      res.redirect('/labamba')).catch(err => {
        console.log(err)
        res.status(500).json(err)
      })
  }
module.exports = reservationController
