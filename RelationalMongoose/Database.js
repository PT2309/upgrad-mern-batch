const mongoose = require('mongoose');

const server= 'mongodb://localhost:27017';
const dB = 'relationalDb';

class Database{
    constructor(){
        this._connect()
    }

    _connect(){
        mongoose.connect(`${server}/${dB}`)
            .then(() => console.log('Connection to dB Successful!'))
            .catch(err => console.log('Error', err))
    }
}

module.exports = new Database;