import { Router } from "express";
import { createCity, createFlight, createTravel, getFlights } from "../controllers/flights.controllers.js";
import { validateSchema } from "../middlewares/validateSchemas.js";
import { citySchema, flightSchema } from "../schemas/flights.schemas.js";

const flightsRouter = Router();

flightsRouter.post('/cities', validateSchema(citySchema), createCity);
flightsRouter.post('/flights', validateSchema(flightSchema), createFlight);
flightsRouter.post('/travels', createTravel);
flightsRouter.get('/flights', getFlights);

export default flightsRouter;