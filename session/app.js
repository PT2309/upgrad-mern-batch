const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
let secret = 'MYSEcrEtKey****';

const app = express();

//Middelwares
app.use(cookieParser());

app.use(session({
    secret: secret,
    resave: false,
    saveUninitialized: true
}));

// person = { name: 'abc}
// person.age = 34;  { name: 'abc', age: 34}
app.get('/', (req, res) => {
    console.log('Client Id is:', req.session.id);
    if(req.session.page_view){
        req.session.page_view++;
        res.send('You have vistied this page ' + req.session.page_view + 'times');
    }else{
        req.session.page_view = 1;
        res.send('Welcome to our homepage for the first time');
    }
});

app.listen(3001, () => console.log('Listening at port 3001'));