const mongoose = require('mongoose');

const StudentModel = mongoose.model('Student', new mongoose.Schema({
    name: String,
    age: Number,
    gender: String
}));

module.exports = StudentModel;