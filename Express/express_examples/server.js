const express = require('express');

// Creating an instance of express app.
const app = express();
const port = 3001;

app.get('/', (req, res, next) => {
    res.send('Testing Middlewares');
    next();
})

// middleware
app.use( (req, res, next) => { 
    console.log('Middleware') 
    next();
});

app.use( () => { console.log('Middleware 2')});

// //Routes
// app.get('/', (req, res) => {
//     // res.send('Hello from my express app!!!!')
//     console.log(req.query); // http://localhost:3001/?name=Palash&age=23
//     res.sendFile( __dirname + '/form.html');
// })

// // localhost/john/24
// // app.get('/:name/:age', (req, res) => {
// //     console.log(req.params);
// // })




// Listen to the requests
app.listen(port, 'localhost' , () => console.log(`Express app listening at ${port}`));