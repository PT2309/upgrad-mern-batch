const mongoose = require('mongoose');
const EmailSchema = require('./EmailSchema');

mongoose.connect('mongodb://localhost:27017/mongooseTest', () => {
    console.log('Connected to MongoDb Environment');   
})

const msg = new EmailSchema({ email: 9087});

msg.save().then( result => console.log(result)).catch( err => console.log(err._message));