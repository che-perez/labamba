CREATE TABLE IF NOT EXISTS reservations(
	id SERIAL PRIMARY KEY,
	first_name VARCHAR(255) NOT NULL,
	last_name VARCHAR(255) NOT NULL,
	email VARCHAR(255) NOT NULL,
	telephone INTEGER,
	made_time BIGINT NOT NULL,
	reserve_date TEXT NOT NULL,
	rserve_time INTEGER NOT NULL,
	seats INTEGER NOT NULL
);