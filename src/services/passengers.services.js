import passengersDB from "../repositories/passengers.repository.js";

async function createPassenger(firstName, lastName){
    const passenger = await passengersDB.createPassenger(firstName, lastName);
    return passenger.rows[0];
}

const passengersServices = {createPassenger};
export default passengersServices