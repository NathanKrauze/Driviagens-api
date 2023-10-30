import db from "../database.connection.js";

function createPassenger(firstName, lastName){
    return db.query(`INSERT INTO passengers ("firstName", "lastName") VALUES ( $1, $2 ) RETURNING *;`, [firstName, lastName])
};

function getPassengerById(id){
    return db.query(`SELECT id FROM passengers WHERE id = $1`, [id])
}

const passengersDB = {createPassenger, getPassengerById};
export default passengersDB;