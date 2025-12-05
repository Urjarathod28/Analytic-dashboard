import Sales from "../models/salesModel.js";

//get all data
export const getAnalyticsData = async (req, res) => {
  try {
    const data = await Sales.find();
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};


//inset data in db
export const insertSalesData = async (req, res) => {
  try {
    const data = req.body;

    if (!Array.isArray(data)) {
      return res.status(400).json({ message: "Data must be an array" });
    }

    const inserted = await Sales.insertMany(data);

    res.json({
      message: "Sales Data Inserted Successfully",
      inserted,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};