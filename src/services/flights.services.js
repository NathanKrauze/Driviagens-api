import { conflictError } from "../errors/errors.js";
import flightsDB from "../repositories/flights.repository.js";

async function createCity(name){
    const cityExists = await flightsDB.getCity(name);
    if(cityExists.rowCount > 0) throw conflictError('this city already exists');

    const result = await flightsDB.createCity(name);
    return result.rows[0]
}

const flightServices = {createCity};
export default flightServices;