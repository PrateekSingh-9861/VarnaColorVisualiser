const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return /\S+@\S+\.\S+/.test(v); // Basic email validation
            },
            message: props => `${props.value} is not a valid email!`
        }
    },
    phone: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return /^[0-9]{10}$/.test(v); // Indian phone number format (10 digits)
            },
            message: props => `${props.value} is not a valid phone number!`
        }
    },
    message: {
        type: String,
        required: true,
        maxlength: 200 // Maximum length for message
    },
}, { timestamps: true });

module.exports = mongoose.model("Contact", contactSchema);
