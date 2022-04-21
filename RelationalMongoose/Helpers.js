const dBConnect = require('./Database');
const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    name: {type: String},
    marks: {type: Number},
    remarks: {type: String}
})
const StudentModel = mongoose.model('StudentModel', StudentSchema);

// StudentModel.insertMany([
//     {name: 'John', marks: 99.00},
//     {name: 'Jane', marks: 98.90},
//     {name: 'Jack', marks: 99.70},
//     {name: 'Jones', marks: 99.80},
// ]).then( result => console.log(result)).catch( err => console.log(err))

// Update Many Documents

StudentModel
    .updateMany( 
        { marks: {$gte:99}}, 
        { remarks: 'excellent'}
        )
        .then( result => console.log(result))
        .catch( err => console.log(err))

