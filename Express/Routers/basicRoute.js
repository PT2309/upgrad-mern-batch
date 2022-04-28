const express = require('express')
const router = express.Router();

router.get('/user', (req, res) => {
    res.send('User route');
})

router.get('/products', (req, res) => {
    res.send('Product route');
})

module.exports=router;
