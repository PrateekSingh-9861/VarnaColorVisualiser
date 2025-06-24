const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const Contact = require("./models/Contact");
const authRoutes = require("./routes/authRoutes");
const feedbackRoutes = require("./routes/feedbackRoutes");

dotenv.config();

if (!process.env.MONGO_URI) {
    console.error("❌ MONGO_URI not defined in .env file");
    process.exit(1);
}

const app = express();
app.use(cors());
app.use(express.json());

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected!"))
  .catch(err => console.error("❌ MongoDB connection error:", err))

// Contact Route
app.post("/api/contact", async (req, res) => {
    const { fullName, email, phone, message } = req.body;

    if (!fullName || !email || !phone || !message) {
        return res.status(400).json({ error: "Please fill all fields." });
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ error: "Invalid email format." });
    }

    try {
        const newContact = new Contact({ fullName, email, phone, message });
        await newContact.save();
        res.status(201).json({ message: "Contact form submitted successfully." });
    } catch (error) {
        console.error("Error details:", error.message);
        res.status(500).json({ error: "Server error." });
    }
});

const adminRoutes = require("./routes/adminRoutes");
app.use('/api/Admin', adminRoutes);

// Routes
app.use('/api', authRoutes);
app.use('/api/feedback', feedbackRoutes);

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
