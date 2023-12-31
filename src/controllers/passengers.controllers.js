import httpStatus from "http-status";
import passengersServices from "../services/passengers.services.js";

export async function createPassenger(req, res){
    const {firstName, lastName} = req.body;
    const result = await passengersServices.createPassenger(firstName, lastName);
    res.status(httpStatus.CREATED).send(result);
}

export async function getPassengers (req, res){
    const name = req.query.name? '%' + req.query.name + '%' : '%%';
    const result = await passengersServices.getPassengers(name);
    res.status(httpStatus.OK).send(result)
}
