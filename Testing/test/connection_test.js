const mongoose = require('mongoose');

before(function(done){
    mongoose.connect('mongodb://localhost:27017/testingDb')

    mongoose.connection.once("open", () => {
        console.log('Connection made to the Database')
        done();
    }).on("error", (error) => { 
        console.log('Connection error...')
    })
})


