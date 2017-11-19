DROP TABLE reservations;
CREATE TABLE IF NOT EXISTS reservations(
	id SERIAL PRIMARY KEY,
	first_name VARCHAR(255) NOT NULL,
	last_name VARCHAR(255) NOT NULL,
	email VARCHAR(255) NOT NULL,
	telephone BIGINT,
	made_time BIGINT NOT NULL,
	reserve_date TEXT NOT NULL,
	reserve_time INTEGER NOT NULL,
	seats INTEGER NOT NULL,
	CONSTRAINT Unique_Reserve UNIQUE (reserve_date,reserve_time)
);