const mongoose = require('mongoose');

const planToWatchSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    order: {
        type: Number,
        required: false,
    },
    created: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('PlanToWatchList', planToWatchSchema);
