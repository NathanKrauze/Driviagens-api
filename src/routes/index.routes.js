import { Router } from "express";
import passengersRouter from "./passengers.routes.js";
import flightsRouter from "./flights.routes.js";

const router = Router();

router.use(passengersRouter);
router.use(flightsRouter);

export default router;