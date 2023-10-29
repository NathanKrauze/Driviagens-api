import db from "../database.connection.js";

function createPassenger(firstName, lastName){
    return db.query(`INSERT INTO passengers ("firstName", "lastName") VALUES ( $1, $2 ) RETURNING *;`, [firstName, lastName])
};

const passengersDB = {createPassenger};
export default passengersDB;