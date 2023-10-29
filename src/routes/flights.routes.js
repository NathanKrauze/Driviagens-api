import { Router } from "express";
import { createCity, createFlight, createTravel, getFlights } from "../controllers/flights.controllers.js";

const flightsRouter = Router();

flightsRouter.post('/cities', createCity);
flightsRouter.post('/flights', createFlight);
flightsRouter.post('/travels', createTravel);
flightsRouter.get('/flights', getFlights);

export default flightsRouter;