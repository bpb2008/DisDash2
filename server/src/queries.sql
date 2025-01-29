CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    auth0_id VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE trips (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    name VARCHAR(255) NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL
);

CREATE TABLE flights (
    id SERIAL PRIMARY KEY,
    trip_id INT REFERENCES trips(id),
    airline VARCHAR(255),
    flight_number VARCHAR(50),
    departure_time TIMESTAMP,
    arrival_time TIMESTAMP,
    confirmation_number VARCHAR(255)
);

CREATE TABLE hotels (
    id SERIAL PRIMARY KEY,
    trip_id INT REFERENCES trips(id),
    name VARCHAR(255),
    check_in_date DATE,
    check_out_date DATE
);

CREATE TABLE rental_cars (
    id SERIAL PRIMARY KEY,
    trip_id INT REFERENCES trips(id),
    agency VARCHAR(255),
    pick_up_date DATE,
    drop_off_date DATE
);

CREATE TABLE reservations (
    id SERIAL PRIMARY KEY,
    trip_id INT REFERENCES trips(id),
    name VARCHAR(255),
    reservation_time TIMESTAMP
);

CREATE TABLE excursions (
    id SERIAL PRIMARY KEY,
    trip_id INT REFERENCES trips(id),
    name VARCHAR(255),
    start_time TIMESTAMP,
    end_time TIMESTAMP,
    details TEXT
);
