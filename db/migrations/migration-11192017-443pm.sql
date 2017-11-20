DROP TABLE mesas;
CREATE TABLE IF NOT EXISTS mesas (
	id SERIAL PRIMARY KEY,
	seats INTEGER
	
);



ALTER TABLE reservations
ALTER COLUMN telephone TYPE VARCHAR(20),
ALTER COLUMN telephone SET DEFAULT '',
DROP COLUMN reserve_date,
ADD reserve_date DATE NOT NULL,
DROP COLUMN reserve_time,
ADD reserve_time TIME NOT NULL,
ADD mesa_id INT REFERENCES mesas(id),
ADD CONSTRAINT UQ_Mesa UNIQUE (reserve_date,reserve_time,mesa_id);