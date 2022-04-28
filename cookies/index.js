const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.get('/', (req, res) => {
    // Setting of cookies
    res.cookie('testing', 'cookie parsing')
    res.cookie('testing 2', 'expire test', { expire: 36000 + Date.now()})


    res.send('Setting Cookies');
    console.log('Cookies', req.cookies);
})

app.listen(3000);

