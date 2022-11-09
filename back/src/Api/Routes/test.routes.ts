import express from "express";
import { TestController } from "../Controllers";

const router = express.Router();

router.get("/", TestController.getTest);

export default router;