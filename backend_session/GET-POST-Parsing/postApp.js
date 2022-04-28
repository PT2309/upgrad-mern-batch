const express = require('express');
const app = express();

const bodyParser = require('body-parser');

// Form data 
app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname+ '/post-form.html');
});

app.post('/', (req, res) => {
    console.log(req.body);
    console.log('Name of the user:', req.body.name);
    console.log('Message from the user', req.body.message);
    res.send('<h3>Thank you for Signing up!!!</h3>')
})

app.listen(5000, () => {console.log('Listening @ 5000')});
