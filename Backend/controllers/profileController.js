const User = require("../models/User");
const UpdateHistory = require("../models/UpdateHistory");

exports.updateProfile = async (req, res) => {
  const userId = req.user.id;
  const updates = req.body;

  try {
    await User.findByIdAndUpdate(userId, updates);

    // Save history
    const history = new UpdateHistory({
      userId,
      updatedFields: updates,
    });
    await history.save();

    res.json({ message: "Profile updated successfully" });
  } catch (err) {
    res.status(500).json({ message: "Profile update failed" });
  }
};

exports.getUpdateHistory = async (req, res) => {
  const history = await UpdateHistory.find().populate("userId", "name email");
  res.json(history);
};
