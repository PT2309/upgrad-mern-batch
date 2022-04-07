const fs = require('fs');

// fs.readFile('./readme.txt', (err, data) => {
//     console.log(data);
// })

let myReadStream = fs.createReadStream( __dirname + '/readme.txt');


myReadStream.on('data', (dataBlock) => {
    console.log('******* DATA CHUNK INCOMING ********************');
    console.log(dataBlock);
})