const express = require('express');
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();
const verify = require('../middelware/loginVerification');

router.post('/login', (req, res) => {
    //req.body =  { username: '', password: 'abc@123'}
    const loggedInUser = req.body;

    User.findOne({ username: loggedInUser.username})
        .then( dbUser => {
            if(!dbUser){
                return res.json({ message: "Invalid username"})
            }else{
                bcrypt.compare( loggedInUser.password, dbUser.password)
                    .then( isCorrect => {
                        if(isCorrect){
                            let payload = {
                                id: dbUser._id,
                                username: dbUser.username
                            }

                            jwt.sign(
                                payload, 
                                'myprivateKEy', 
                                {expiresIn : 36000},
                                (err, token) => {
                                    console.log(token);
                                    if(err){
                                        return res.json({message: err})
                                    }else{
                                        return res.json({
                                            message: "Login Successful",
                                            //basic auth username:password Basic Auth
                                            // RFC Bearer (more secure) using OAuth 2.0 framework
                                            token: "Bearer " + token
                                        })
                                    }
                                } )
                        }else{
                            return res.json({message: "Invalid credentials"})
                        }
                    })
                }
            })
    })


    // Home route
router.get('/home', verify, (req, res) => {
        res.json({message: `Welcome ${req.user.username} you are authorised!!!` })
})

module.exports = router;

/**
 * "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNzI4YzNhMTI3OGI0N2E3ZGVmZTg2ZCIsInVzZXJuYW1lIjoidW4yIiwiaWF0IjoxNjUxNjc1NzA0LCJleHAiOjE2NTE3MTE3MDR9.TIDYKt3iMzd-zCGIFOjeWtIZR0wzJuj4BQFecsSdzWA"
 */