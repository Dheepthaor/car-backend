import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./config/db.js";

dotenv.config();

// connect DB
connectDB();

const PORT = process.env.PORT || 5000;

// ✅ USE app (NOT express())
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});