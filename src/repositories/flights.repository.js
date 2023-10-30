import db from "../database.connection.js";

function createCity(name){
    return db.query(`
    INSERT INTO cities (name) VALUES ($1) RETURNING *;
    `, [name])
}

function getCity(name){
    return db.query(`
    SELECT * FROM cities WHERE name = $1;
    `, [name])
}

function checkCities(origin, destination){
    return db.query(`
    SELECT * FROM cities WHERE id IN ($1, $2);
    `,[origin, destination])
}

function createFlight(origin, destination, date){
    return db.query(`
    INSERT INTO flights (origin, destination, date) VALUES ($1, $2, $3) RETURNING id, origin, destination, TO_CHAR(date, 'DD-MM-YYYY') AS date;
    `,[origin, destination, date])
}

function getFlightById(id){
    return db.query(`SELECT id FROM flights WHERE id = $1`,[id])
}

function createTravel(passengerId, flightId){
    return db.query(`
    INSERT INTO travels ("passengerId", "flightId") VALUES ($1, $2) RETURNING *;
    `,[passengerId, flightId])
}

function getFlights(origin, destination){
    return db.query(`
    SELECT flights.id, origin.name AS origin , destination.name AS destination , TO_CHAR(flights.date, 'DD-MM-YYYY') AS date
        FROM flights
        INNER JOIN cities AS origin ON flights.origin = origin.id
        INNER JOIN cities AS destination ON flights.destination = destination.id
        WHERE origin.name ILIKE $1 AND destination.name ILIKE $2;
    `,[origin, destination])
}

const flightsDB = {createCity, getCity, checkCities, createFlight, getFlightById, createTravel, getFlights};
export default flightsDB;