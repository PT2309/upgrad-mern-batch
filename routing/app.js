const express = require('express');
const morgan = require('morgan');

const app = express();
const port = 3001;

//listen
app.listen(port, 'localhost', () => {
    console.log(`Listening at ${port}`)
})

// Middleware
app.use(morgan('dev'));

app.get('/', (req, res, next) =>{
    res.sendFile(__dirname + '/views/index.html');
    next();
});

// app.use(express.static('public'))



app.get('/about', (req, res) =>{
    res.sendFile(__dirname + '/views/about.html');
});

// about-us redirect
app.get('/about-us', (req, res) => {
    res.redirect('/about')
})

//middleware
app.use((req, res)=>{
    res.status(404).sendFile(__dirname + '/views/404.html')
})

