const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

const urlEncodedParser = bodyParser.urlencoded({extended: false});
app.use(bodyParser.json(), urlEncodedParser);

const dBURI = 'mongodb://localhost:27017/userauth';

mongoose.connect(dBURI).then( res => {
    app.listen( 3001, () => { console.log('Server is live')});
}).catch(err => {
    console.log(err);
});

app.use('/', require('./routes/register'));

