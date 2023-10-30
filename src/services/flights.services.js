import { conflictError, notFoundError } from "../errors/errors.js";
import flightsDB from "../repositories/flights.repository.js";
import passengersDB from "../repositories/passengers.repository.js";

async function createCity(name){
    const cityExists = await flightsDB.getCity(name);
    if(cityExists.rowCount > 0) throw conflictError('this city already exists');

    const result = await flightsDB.createCity(name);
    return result.rows[0]
}

async function createFlight(origin, destination, date){
    const checkCities = await flightsDB.checkCities(origin, destination);
    if (checkCities.rowCount < 2 ) {
        if(checkCities.rowCount === 0){
            throw notFoundError('Origin and destination not founded')
        }
        const cityNotFound = checkCities.rows[0].id === origin ? 'destination' : 'origin';
        throw notFoundError(`${cityNotFound} not found`)
    }

    const result = await flightsDB.createFlight(origin, destination, date);
    return result.rows[0];
}

async function createTravel(passengerId, flightId){
    const checkPassenger = await passengersDB.getPassengerById(passengerId);
    if(checkPassenger.rowCount === 0) throw notFoundError('passenger not found');

    const checkFlight = await flightsDB.getFlightById(flightId);
    if(checkFlight.rowCount === 0) throw notFoundError('flight not found');

    const result = await flightsDB.createTravel(passengerId, flightId);
    return result.rows[0]
}

const flightServices = {createCity, createFlight, createTravel};
export default flightServices;