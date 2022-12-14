const { Schema, model } = require('mongoose');

const Premiums = new Schema({
    users: Array
});

module.exports = model('Premiums', Premiums);
