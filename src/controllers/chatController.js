import Message from "../models/messageModel.js";

// SEND MESSAGE (SECURE)
export const sendMessage = async (req, res) => {
  try {
    const sender = req.user.id; // 🔐 from JWT (IMPORTANT)
    const { receiver, text } = req.body;

    const message = await Message.create({
      sender,
      receiver,
      text,
    });

    res.status(201).json(message);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET CHAT BETWEEN 2 USERS
export const getMessages = async (req, res) => {
  try {
    const user1 = req.user.id;
    const user2 = req.params.userId;

    const messages = await Message.find({
      $or: [
        { sender: user1, receiver: user2 },
        { sender: user2, receiver: user1 },
      ],
    }).sort({ createdAt: 1 });

    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};