const mongoose = require('mongoose');
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')


const volunteerSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    phone: {
        type: Number,
    },
    resource: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true

    }
})




const Volunteer = mongoose.model('VolunteerResource', volunteerSchema);

module.exports = Volunteer;

