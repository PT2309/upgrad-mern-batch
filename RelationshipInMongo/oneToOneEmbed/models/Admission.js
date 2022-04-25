const mongoose = require('mongoose');
const { StudentSchema } = require('./Student');

const AdmissionModel = mongoose.model('Admission', new mongoose.Schema({
    enrollmentCode: String,
    student: StudentSchema //Schema
}));

module.exports = AdmissionModel;