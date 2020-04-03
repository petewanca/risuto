const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        min: 2,
        required: true
    },
    lastName: {
        type: String,
        min: 2,
        required: true
    },
    email: {
        type: String,
        max: 100,
        required: true
    },
    password: {
        type: String,
        min: 6,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', userSchema);
