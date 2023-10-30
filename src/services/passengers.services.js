import passengersDB from "../repositories/passengers.repository.js";

async function createPassenger(firstName, lastName){
    const passenger = await passengersDB.createPassenger(firstName, lastName);
    return passenger.rows[0];
}

async function getPassengers(name){
    const result = await passengersDB.getPassengers(name);
    return result.rows;
}

const passengersServices = {createPassenger, getPassengers};
export default passengersServices