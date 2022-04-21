const dBConnect = require('./Database');
const mongoose = require('mongoose');

//instance 
const UserSchema = new mongoose.Schema({
    firstname: String,
    lastname: String
})

// Instance Method
UserSchema.methods.getInitials = function(){
    return this.firstname[0] + this.lastname[0]
}

// Static Method
UserSchema.statics.findByName = function(value){
    this.find( { firstname: value}, (err, data) => console.log(data))
}

const userModel= mongoose.model('User', UserSchema);

const userdata = new userModel({
    firstname: 'John',
    lastname: 'Wick'
})

const userdata2 = new userModel({
    firstname: 'Bane',
    lastname: 'Valentine'
})

// userdata.save().then( data => console.log(data)).catch( err => console.log(err))

// userdata2.save().then( data => console.log(data)).catch( err => console.log(err))


userModel.findByName('Bane');

// console.log(userdata.getInitials());
// console.log(userdata2.getInitials());


