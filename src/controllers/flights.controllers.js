import httpStatus from "http-status";
import flightServices from "../services/flights.services.js";

export async function createCity(req, res){
    const{name} = req.body;
    const result = await flightServices.createCity(name);
    res.status(httpStatus.OK).send(result);
}

export async function createFlight(req, res){
    res.send('ok')
}

export async function createTravel(req, res){
    res.send('ok')
}

export async function getFlights(req, res){
    res.send('ok')
}