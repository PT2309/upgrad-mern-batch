const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    gender: String
})

const Student = mongoose.model('StudentEmbedded', StudentSchema);

module.exports = {Student, StudentSchema};