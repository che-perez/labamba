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

Reservations.findByEmail = (email) => {
	return db.query(
		`SELECT * FROM reservations
		WHERE email = $1
		ORDER BY reserve_date ASC`,
		[email]
	);
};

Reservations.create = (reservation) => {
	return db.one(
		`INSERT INTO reservations (first_name, last_name, email, telephone, made_time, reserve_date, reserve_time, seats, mesa_id)
		VALUES ($1,$2, $3, $4, $5, $6, $7, $8, $9)
		RETURNING *`,
		[reservation.first_name, reservation.last_name, reservation.email, reservation.telephone, reservation.made_time, reservation.reserve_date, reservation.reserve_time, reservation.seats, reservation.mesa_id]
	);
};

Reservations.update = (reservation, id) => {
	return db.one(
		`UPDATE reservations SET
		first_name = $1,
		last_name = $2,
		email = $3,
		telephone = $4,
		reserve_date = $5,
		reserve_time = $6,
		seats = $7
		WHERE id = $8
		RETURNING *`,
		[reservation.first_name, reservation.last_name, reservation.email, reservation.telephone, reservation.reserve_date, reservation.reserve_time, reservation.seats, id]
	);
};

Reservations.destroy = id => {
	return db.none(
		`DELETE FROM reservations
		WHERE id = $1`, [id]
	);
};

module.exports = Reservations;
