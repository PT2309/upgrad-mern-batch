const mongoose = require('mongoose');
const validator = require('validator');

/* Email conditions 
    
    1. String
    2. lowercase
    3. unique
    4. !Empty String
*/

let emailSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: (value) => { 
            return validator.isEmail(value)
        }
    }
})

module.exports = mongoose.model('ValidatedEmail', emailSchema);