import db from "../database.connection.js";

function createCity(name){
    return db.query(`
    INSERT INTO cities (name) VALUES ($1) RETURNING *;
    `, [name])
}

function getCity(name){
    return db.query(`
    SELECT * FROM cities WHERE name = name;
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

const flightsDB = {createCity, getCity, checkCities, createFlight, getFlightById, createTravel};
export default flightsDB;