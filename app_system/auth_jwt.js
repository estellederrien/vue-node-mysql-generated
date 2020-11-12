// ----------------------------------- AUTHENTICATE USER  USING JWT-------------------------------------------


module.exports = function(app, session, bcrypt, logStream, connection, jsonwebtoken) {
    /*
     * Authenticate a Mysql user
     * @params JSON OBJECT - EXAMPLE : {"email":"urEmail","password":"urPassword"}
     * @return JSON OBJECT - dbUser
     * @error  Status 403
     */

    app.post("/auth/signin", function(req, res) {




        // step 1. Getting front end DATA (email and password) - On récupère log in et mot de passe du front end
        var frontEndUser = req.body;

        if (frontEndUser.email && frontEndUser.password) {
            // check if user exists
            connection.query('SELECT * FROM users WHERE email = ? AND password_without_hash = ?', [frontEndUser.email, frontEndUser.password], function(error, results, fields) {

                if (results.length > 0) {

                    // https://livecodestream.dev/post/2020-08-11-a-practical-guide-to-jwt-authentication-with-nodejs/
                    // use the payload to store information about the user such as username, user role, etc.
                    console.log(results[0]);

                    let payload = JSON.parse(JSON.stringify(results[0]));

                    delete payload.password_without_hash;
                    //create the access token with the shorter lifespan
                    let accessToken = jsonwebtoken.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
                        algorithm: "HS256",
                        expiresIn: process.env.ACCESS_TOKEN_LIFE
                    })

                    //create the refresh token with the longer lifespan
                    /*    let refreshToken = jsonwebtoken.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
                           algorithm: "HS256",
                           expiresIn: process.env.REFRESH_TOKEN_LIFE
                       }) */


                    //send the access token to the client inside a cookie
                    // res.cookie("jwt", accessToken, { secure: false, httpOnly: false })
                    res.send(accessToken)
                } else {
                    console.log('debug1')
                    res.sendStatus(403);
                }

            });
        } else {
            console.log('debug2')
            res.sendStatus(403);

        }
    });


    /*
     * Loggin out an APP user  - Delogge un utilisateur
     * @params NONE
     * @return 200
     * @error NONE
     */

    app.post("/api/auth/signout", function(req, res) {

        req.session.loggedIn = false;
        req.session.user = null;
        res.sendStatus(200);

    });


    // -----------------------------------FIN AUTH USER-------------------------------------------
};