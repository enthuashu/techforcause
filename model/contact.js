const mongoose = require('mongoose');
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')


const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    subject: {
        type: String,
        required: true
    }
})




const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;

