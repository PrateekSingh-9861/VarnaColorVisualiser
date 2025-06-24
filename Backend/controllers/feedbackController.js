// feedbackController.js
const Feedback = require('../models/Feedback');

const submitFeedback = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    const newFeedback = new Feedback({ name, email, message });
    await newFeedback.save();

    res.status(201).json({ message: 'Feedback submitted successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Server error.' });
  }
};

module.exports = { submitFeedback };
