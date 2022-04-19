const mongoose = require('mongoose') ;

const emailSchema = new mongoose.Schema({
    email: String
})

const model = mongoose.model('Email', emailSchema);

module.exports = model;