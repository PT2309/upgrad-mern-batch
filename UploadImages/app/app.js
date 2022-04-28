const express = require('express');
const app = express();
const initRoutes = require('./routes/routes');

app.use(express.urlencoded({ extended: true}));

app.use(initRoutes);
// initRoutes(app);


app.listen(3000, () => {
    console.log('Listening to port 3000');
})
