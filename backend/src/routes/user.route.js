import express from "express";

import { getAllUsers } from "../controller/user.contoller.js";

const router = express.Router();

router.get("/", getAllUsers);

export default router;