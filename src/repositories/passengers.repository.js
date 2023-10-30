import db from "../database.connection.js";

function createPassenger(firstName, lastName){
    return db.query(`INSERT INTO passengers ("firstName", "lastName") VALUES ( $1, $2 ) RETURNING *;`, [firstName, lastName])
};

function getPassengerById(id){
    return db.query(`SELECT id FROM passengers WHERE id = $1`, [id])
}

function getPassengers(name){
    return db.query(`
    SELECT passengers."firstName" || ' ' || passengers."lastName" AS passenger, COUNT(travels."passengerId") AS travels
        FROM travels
        RIGHT JOIN passengers ON passengers.id = travels."passengerId"
        WHERE passengers."firstName" ILIKE $1 OR passengers."lastName" ILIKE $1
        GROUP BY passengers.id
        ORDER BY travels DESC;
    `,[name])
}

const passengersDB = {createPassenger, getPassengerById, getPassengers};
export default passengersDB;