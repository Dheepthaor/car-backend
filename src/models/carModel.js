import mongoose from "mongoose";

const carSchema = new mongoose.Schema(
  {
    brand: String,
    model: String,
    year: String,
    type: String,
    bodyType: String,
    location: String,

    // ✅ ADD THESE
    price: String,
    mileage: String,
    image: String,
    description: String,
    color: String,
    gear: String,
    fuel: String,
  },
  { timestamps: true }
);

export default mongoose.model("Car", carSchema);