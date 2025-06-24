const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"]
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    validate: {
      validator: function (v) {
          return /\S+@\S+\.\S+/.test(v); // Basic email validation
      },
      message: props => `${props.value} is not a valid email!`
  }
  },
  message: {
    type: String,
    required: [true, "Message is required"],
    maxlength: 200 // Maximum length for message
  },
  
}, { timestamps: true });

module.exports = mongoose.model("Feedback",feedbackSchema);