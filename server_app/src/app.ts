import { config } from 'dotenv';
import express, { Application, NextFunction, Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from "./routes";

config();

const app: Application = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api', routes);

const PORT = process.env.PORT || 4050;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});