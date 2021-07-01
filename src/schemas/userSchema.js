const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema({
    phoneNumber: { type: String },
}, { timestamps: true });

module.exports = model('users', userSchema);