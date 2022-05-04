const express = require('express');
const User = require('../models/user');
const bcrypt = require('bcrypt');
const router = express.Router();

router.post('/register', async (req, res)=> {
    const user = req.body;

    const takenUsername = await User.findOne({ username: user.username});
    const takenEmail = await User.findOne({ email: user.email});

    if( takenUsername || takenEmail){
        res.json({ message: 'User already taken'});
    }else{
        const hash = await bcrypt.hash(user.password, 10);

        const dbUser = new User({
            username: user.username,
            email: user.email,
            password: hash,
        })

        dbUser.save()
        res.json({ message: 'registration Successful'});
    }
})

module.exports = router;