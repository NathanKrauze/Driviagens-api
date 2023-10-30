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

const flightsDB = {createCity, getCity};
export default flightsDB;