const mongoose = require('mongoose')

const Tutorials = mongoose.model('Tutorial', new mongoose.Schema({
    title: String,
    author: String,
    images: []
}));

module.exports = Tutorials;