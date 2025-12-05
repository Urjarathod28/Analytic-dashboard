import mongoose from "mongoose";

const salesSchema = new mongoose.Schema({
  month: String,
  sales: Number,
  users: Number,
});

export default mongoose.model("Sales", salesSchema);
