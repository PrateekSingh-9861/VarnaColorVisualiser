const User = require("../models/User");
const Contact = require("../models/Contact");
const Feedback = require("../models/Feedback");

exports.getAllUsers = async (req, res) => {
  const users = await User.find().sort({ createdAt: -1 });
  res.json(users);
};

exports.deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted" });
};

exports.getAllContacts = async (req, res) => {
  const contacts = await Contact.find().sort({ createdAt: -1 });
  res.json(contacts);
};

exports.getAllFeedbacks = async (req, res) => {
  const feedbacks = await Feedback.find().sort({ createdAt: -1 });
  res.json(feedbacks);
};

exports.deleteContact = async (req, res) => {
  await Contact.findByIdAndDelete(req.params.id);
  res.json({ message: "Contact deleted" });
};

exports.deleteFeedback = async (req, res) => {
  await Feedback.findByIdAndDelete(req.params.id);
  res.json({ message: "Feedback deleted" });
};
