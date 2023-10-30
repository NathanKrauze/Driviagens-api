import express from "express";
import "express-async-errors";
import cors from 'cors';
import router from './routes/index.routes.js';
import { handleErrors } from './middlewares/errorsMiddleware.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
app.use(handleErrors);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`)
});