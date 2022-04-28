const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const signature = 'ABX12we56tR9'
app.use(cookieParser(signature));

app.get('/', (req, res) => {
    // Setting of cookies
    res.cookie('testing', 'cookie parsing')
    res.cookie('testing 2', 'expire test', { expire: 36000 + Date.now()}) // {maxAge: 36000}

    // Signed Cookie
    res.cookie('signature-cookie', 'testing signed cookies', { signed: true} );

    // clear cookie
    res.clearCookie('testing 2')
    res.clearCookie('signature-cookie')


    res.send('Setting Cookies');
    console.log('Cookies', req.cookies);
    console.log('Signed Cookies', req.signedCookies);
})

app.listen(3000);

