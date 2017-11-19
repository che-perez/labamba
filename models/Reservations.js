const db = require('../db/config');

const Reservations = {};

Reservations.findAll = () => {
	return db.query(
		`SELECT * FROM reservations
		ORDER BY reserve_date ASC`
	);
};

Reservations.findById = (id) => {
	return db.oneOrNone(
		`SELECT * FROM reservations
		WHERE id = $1`,
		[id]
	);
};

Reservations.create = (reservation) => {
	return db.one(
		`INSERT INTO reservations (first_name, last_name, email, telephone, made_time, reserve_date, reserve_time, seats)
		VALUES ($1,$2, $3, $4, $5, $6, $7, $8)
		RETURNING *`,
		[reservation.first_name, reservation.last_name, reservation.email, reservation.telephone, reservation.made_time, reservation.reserve_date, reservation.reserve_time, reservation.seats]
	);
};

Reservations.update = (reservation, id) => {
	return db.one(
		`UPDATE reservations SET
		first_name = $1,
		last_name = $2,
		email = $3,
		telephone = $4,
		made_time = $5,
		reserve_date = $6,
		reserve_time = $7,
		seats = $8
		WHERE id = $9
		RETURNING *`,
		[reservation.first_name, reservation.last_name, reservation.email, reservation.telephone, reservation.made_time, reservation.reserve_date, reservation.reserve_time, reservation.seats, id]
	);
};

Reservations.destroy = id => {
	return db.none(
		`DELETE FROM reservations
		WHERE id = $1`, [id]
	);
};

module.exports = Reservations;