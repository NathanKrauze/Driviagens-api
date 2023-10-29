import { Router } from "express";
import { createPassenger, getPassengers } from "../controllers/passengers.controllers.js";

const passengersRouter = Router();

passengersRouter.post('/passengers', createPassenger);
passengersRouter.get('/passengers/travels', getPassengers );

export default passengersRouter;