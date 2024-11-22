"use strict";

import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import router from "./routes/api.js";

const app = express();
const port = 8000;
const ip = "127.0.0.1";

app.use(cors());
app.use(bodyParser.json());
app.use("/api",router);
app.listen(port, ip, () => {
    console.log(`Server running at http://${ip}:${port}/`);
});