const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: {
    type: String, required: true, unique: true,
    match: [/^\S+@\S+\.\S+$/, 'Email is invalid']
  },
  telephone: {
    type: String, required: true,
    match: [/^\d{10}$/, 'Phone number must be 10 digits']
  },
  password: { type: String, required: true },
  role: { type: String, default: 'user' }
},{ timestamps: true });

module.exports = mongoose.model('User', userSchema);
