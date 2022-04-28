const express = require('express');

const app = express();
app.listen(3001);

// /userInfo/user
app.use('/userInfo', require('./basicRoute'));