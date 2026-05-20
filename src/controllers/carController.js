import Car from "../models/carModel.js";

export const addCar = async (req, res) => {
  try {
    console.log("REQ BODY:", req.body); // ✅ DEBUG

    const newCar = new Car({
      ...req.body, // ✅ VERY IMPORTANT (takes everything)
    });

    await newCar.save();

    res.status(201).json({
      message: "Car added successfully",
      car: newCar,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error adding car",
      error: error.message,
    });
  }
};
export const getAllCars = async (req, res) => {
  try {
    const cars = await Car.find();

    res.status(200).json(cars);
  } catch (error) {
    res.status(500).json({ message: "Error fetching cars" });
  }
};