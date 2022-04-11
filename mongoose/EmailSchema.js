const mongoose = require('mongoose') ;

const Schema = new mongoose.Schema({
    email: { 
        type: String, 
        required: true
    }
})

const model = mongoose.model('Email', Schema);

module.exports = model;