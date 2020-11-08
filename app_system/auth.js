// ----------------------------------- AUTHENTICATE USER  -------------------------------------------
module.exports = function(app, session, bcrypt, logStream, connection) {
    /*
     * Authenticate a Mysql user
     * @params JSON OBJECT - EXAMPLE : {"email":"urEmail","password":"urPassword"}
     * @return JSON OBJECT - dbUser
     * @error  Status 403
     */
    app.post("/api/auth/signin", function(req, res) {
        // AN ANONYMOUS USER ALREADY HAS A BACK END SESSION ID, WE LOOK AT IT - Un utilisateur anonyme possède déjà un id de session , gràce au module node session
        console.log("reqsessionId ; " + req.sessionID);

        // step 1. Getting front end DATA (email and password) - On récupère log in et mot de passe du front end
        var frontEndUser = req.body;

        if (frontEndUser.email && frontEndUser.password) {
            // check if user exists
            connection.query('SELECT * FROM users WHERE email = ? AND password_without_hash = ?', [frontEndUser.email, frontEndUser.password], function(error, results, fields) {
                console.log(results)
                if (results.length > 0) {
                    // step 4. BUILDING THE BACKEND USER SESSION - AJOUT DES DATAS DU USER A LA SESSION ET LE FAIT QUIL EST LOGGE
                    req.session.loggedIn = true;
                    req.session.user = results[0];

                    // step 5. SENDING USER DATA TO FRONT END ENVOI DU USER AU FRONT END
                    res.send(results[0]);
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