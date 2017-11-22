const Reservation = require('../models/Reservations')

const reservationController = {}

reservationController.index = (req, res) => {
    // console.log('showing index')
    Reservation.findAll()
    	.then(reservations => {
	    	res.json({
		    	message: 'ok',
		    	data: { reservations },
	    	});
    	}).catch(err => {
	    	console.log(err);
	    	res.status(400).json({message: '400', err});
    	});
    };

reservationController.create = (req, res) => {
    Reservation.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      telephone: req.body.telephone,
      made_time: Date.now(),
      reserve_date: req.body.reserve_date,
      reserve_time: req.body.reserve_time,
      seats: req.body.seats,
      mesa_id: req.body.mesa_id,
    }).then(reservation => {
      res.json({
	      message: 'ok',
	      data: { reservation }
      });
    }).catch(err=>{
      console.log(err)
      res.status(400).json({
	      message: '400', err
      });
    });
  };
  
reservationController.show = (req, res) => {
	Reservation.findById(req.params.id)
		.then(reservation => {
			res.json({
				message: 'ok',
				data: { reservation, },
			});
		}).catch(err => {
			res.status(400).json({message: '400',err});
		});
  };
  
reservationController.find = (req, res) => {
	Reservation.findByEmail(req.params.email)
		.then(reservation => {
			res.json({
				message: 'ok',
				data: { reservation, },
			});
		}).catch(err => {
			res.status(400).json({message: '400',err});
		});
  };
  
  reservationController.update = (req, res) => {
    Reservation.update({
	  first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      telephone: req.body.telephone,
      made_time: Date.now(),
      reserve_date: req.body.reserve_date,
      reserve_time: req.body.reserve_time,
      seats: req.body.seats,
    }, req.params.id)
      .then(reservation => {
	      res.json({
		      message: 'ok',
		      data: { reservation },
	      });
      }).catch(err => {
	      console.log(err);
	      res.status(400).json(err);
      });
  };
  
reservationController.destroy = (req,res) => {
    Reservation.destroy(req.params.id)
    .then(() => {
	    res.json({ message: 'reservation deleted' });
    }).catch(err => {
	    console.log(err);
	    res.status(400).json(err);
    });
  };
  
module.exports = reservationController;