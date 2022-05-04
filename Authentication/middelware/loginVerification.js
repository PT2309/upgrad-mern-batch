const jwt = require("jsonwebtoken");


module.exports = function(req, res, next){
    // req.Header will contain the token. 
    // x-access-token (for bearer) || Authorisation (basic auth)

    const token = req.headers["x-access-token"]?.split(" ")[1];

    if(token){
        jwt.verify(token, 'myprivateKEy', (err, decoded) => {
            console.log(decoded);
            if(err){
                return res.json({
                    isLoggedIn: false,
                    message: "Problem in decoding token"})
            }
            req.user = {};
            req.user.id = decoded.id;
            req.user.username = decoded.username;
            next();
        })
    }else{
        return res.json({ 
            isLoggedIn: false,
            message: "Incorrect token"})
    }
}