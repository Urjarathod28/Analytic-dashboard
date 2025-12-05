
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js"
import cors from "cors"
import analyticsRoutes from "./routes/salesRouter.js"

dotenv.config();

const app = express();
app.use(cors())
app.use(express.json());

connectDB();

app.use("/api/analytics", analyticsRoutes);

app.listen(process.env.PORT ,()=>{
    console.log(`Server running on port ${process.env.PORT}`)
})