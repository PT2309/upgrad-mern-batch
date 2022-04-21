const mongoose = require('mongoose');

const AdmissionModel = mongoose.model('Admission', new mongoose.Schema({
    enrollmentCode: String,
    child: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    }
}));

module.exports = AdmissionModel;