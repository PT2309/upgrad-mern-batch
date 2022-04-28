const express = require('express');
const app = express();

const bodyParser = require('body-parser');

// Form data 
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname+ '/index.html');
});

app.post('/userDetails', (req, res) => {
    console.log(req.body);
    // console.log('Name of the user:', req.body.fullname);
    // console.log('email of the user', req.body.email);
    res.send('<h3>Thank you for Signing up!!!</h3>')
})

app.listen(5000, () => {console.log('Listening @ 5000')});
