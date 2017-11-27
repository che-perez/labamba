const db = require('../db/config');

const Mesas = {};

Mesas.findAll = () => {
	return db.query(
		`SELECT * FROM mesas`
	);
};

module.exports = Mesas;
