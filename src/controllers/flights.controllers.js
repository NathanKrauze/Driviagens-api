import httpStatus from "http-status";
import flightServices from "../services/flights.services.js";

export async function createCity(req, res){
    const{name} = req.body;
    const result = await flightServices.createCity(name);
    res.status(httpStatus.CREATED).send(result);
};

export async function createFlight(req, res){
    const{origin, destination, date} = req.body;
    const result = await flightServices.createFlight(origin, destination, date);
    res.status(httpStatus.CREATED).send(result);
};

export async function createTravel(req, res){
    const {passengerId, flightId} = req.body;
    const result = await flightServices.createTravel(passengerId, flightId);
    res.status(httpStatus.CREATED).send(result);
};

export async function getFlights(req, res){
    const origin = req.query.origin? '%' + req.query.origin + '%' : '%%';
    const destination = req.query.destination? '%' + req.query.destination + '%' : '%%';
    const result = await flightServices.getFlights(origin, destination);
    res.status(httpStatus.OK).send(result)
};