const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/relationalDb', () => {
    console.log('Connected to MongoDb Environment');   
});

const Student = require('./models/Student')
const Admission = require('./models/Admission')

// function to save a new student
const createStudentDetails = function(name, age, gender){
    const student =new Student({
        name, 
        age, 
        gender
    })
    return student.save();
}

// function for admission
const createAdmissionDetails = function(enrollmentCode, student){
    const admission =new Admission({
        enrollmentCode, 
        student
    })

    return admission.save();
}

// Creating new Student

createStudentDetails('Jack', 18, 'Male')
    .then( studentData => {
        console.log('*****A new student data is created******', studentData);
        let enrollmentCode = studentData._id.toString();

        return createAdmissionDetails(enrollmentCode.substring(0,10).toUpperCase(), studentData)
    })
    .then( enrollmentData => {
        console.log('####### Admission Details are #######', enrollmentData);
    }).catch( err => console.log(err));