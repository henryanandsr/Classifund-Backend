"use strict";

import { Router } from "express";
import { getAllTransaction } from "../controller/transaction.js";

const router = Router();

router.get("/", (req, res) => {
    res.send("Express X Hello world");
});

router.get("/get-transactions", getAllTransaction);
// router.post("/register", registerHandler);
// router.post("/login", loginHandler);
// router.get("/users", getAllUserHandler);

export default router;