import express from "express";
import { sendMessage, getMessages } from "../controllers/chatController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

// send message
router.post("/send", protect, sendMessage);

// get chat between logged-in user and another user
router.get("/:userId", protect, getMessages);

export default router;