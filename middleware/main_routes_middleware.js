// LOGGED IN MIDDLEWARE
module.exports = (app, express, jsonwebtoken) => {
    app.use('/api', function(req, res, next) {


        var token = req.body.token || req.query.token || req.headers['x-access-token'];
        // console.log(token)

        if (token) {
            jsonwebtoken.verify(token, process.env.ACCESS_TOKEN_SECRET, function(err, decoded) {
                if (err) {
                    return res.json({ status: 403, success: false, message: 'Failed to authenticate token.' });
                } else {
                    req.decoded = decoded;
                    next();
                }
            });
        } else {
            return res.json({
                status: 403,
                success: false,
                message: 'No token provided.'
            });
        }

    });



}