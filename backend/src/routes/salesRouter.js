
import express from "express";
import { getAnalyticsData, insertSalesData } from "../controllers/salesController.js";

const router = express.Router();

router.post("/create",insertSalesData);
router.get("/data",getAnalyticsData);

export default router;