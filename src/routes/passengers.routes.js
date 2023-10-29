import { Router } from "express";
import { createPassenger, getPassengers } from "../controllers/passengers.controllers.js";
import { validateSchema } from "../middlewares/validateSchemas.js";
import { passengerSchema } from "../schemas/passengers.schemas.js";

const passengersRouter = Router();

passengersRouter.post('/passengers', validateSchema(passengerSchema), createPassenger);
passengersRouter.get('/passengers/travels', getPassengers );

export default passengersRouter;