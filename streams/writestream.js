const fs = require('fs');

let myReadStream = fs.createReadStream( __dirname + '/readme.txt');

let myWriteStream = fs.createWriteStream(__dirname + '/writeme.txt');

myReadStream.on('data', (dataBlock) => {
    console.log('******* DATA CHUNK INCOMING ********************');
    myWriteStream.write(dataBlock);
})

