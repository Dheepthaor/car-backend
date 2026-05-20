import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

// routes
import authRoutes from "./routes/user/auth.js"
import chatRoutes from "./routes/chatRoutes.js";
import carRoutes from "./routes/carRoutes.js";

app.use("/api/auth",authRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/cars", carRoutes);

export default app;