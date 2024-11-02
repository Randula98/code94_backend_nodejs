import mongoose from "mongoose";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv/config";

import { sessionMiddleware } from './middlewares/session.middleware.js'

import routes from "./routers/index.js";

const app = express();
const PORT = process.env.PORT;
app.use(cors());
app.use(bodyParser.json());

app.use(sessionMiddleware);

routes(app);

const URL = process.env.MONGODB_URL;

mongoose.connect(URL)

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB connection established successfully");
});

app.get("/", (req, res) => {
    res.send("Hello World from Backend");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});