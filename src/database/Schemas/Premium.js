const { Schema, model } = require('mongoose');

const Premium = new Schema({
    userID: String,
    startDate: Date,
    finishData: Date
});

module.exports = model('Premium', Premium);
