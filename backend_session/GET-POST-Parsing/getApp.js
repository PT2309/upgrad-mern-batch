const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname+ '/get-form.html');
});

app.get('/process', (req, res) => {
   console.log(req.query.name);
   console.log(req.query.message);
   res.send('Thank You!')
})

app.listen(5000, () => {console.log('Listening @ 5000')});