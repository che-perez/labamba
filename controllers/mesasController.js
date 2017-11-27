const Mesas = require('../models/Mesas')

const mesasController = {}

mesasController.index = (req, res) => {
    Mesas.findAll()
    	.then(mesas => {
	    	res.json({
		    	message: 'ok',
		    	data: { mesas },
	    	});
    	}).catch(err => {
	    	console.log(err);
	    	res.status(400).json({message: '400', err});
    	});
    };

module.exports = mesasController;
