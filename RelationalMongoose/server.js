const dBConnect = require('./Database');
const EmailModel = require('./models/EmailModel');

// let email_v1 = new EmailModel({
//     email: '9047@gmail.com'
// });

// email_v1.save()
//     .then( data => console.log(data))
//     .catch( err => console.log(err))


// fetch records

// EmailModel
//     .find()
//     .then( result => console.log(result))
//     .catch( err => console.log(err));


// Update record
// EmailModel
//     .findOneAndUpdate(
//         {email: 'abhi9047gmail.com'},
//         {email: 9047}
//         )
//     .then( result => console.log(result))
//     .catch( err => console.log(err));


// Delete Record

EmailModel
    .findOneAndRemove( { email: '9047'})
    .then( result => console.log(result))
    .catch(err => console.log(err));

