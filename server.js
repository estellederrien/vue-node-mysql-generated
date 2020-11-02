// ------------------------------- 
// LOAD APP CONFIG ( FTP TOKEN,CLOUDINARY TOKEN,MYSQL TOKEN, etc ...)- ON CHARGE LA CONFIGURATION DE L'APP 
// -------------------------------
const config = require("./config.json");

// ------------------------------
// LOAD OFFICIAL NODE MODULES - CHARGEMENT DES MODULES NODES ...
// -------------------------------
const express = require("express");
const cors = require("cors");
const path = require("path");
const serveStatic = require("serve-static");
const session = require("express-session");
const bcrypt = require("bcryptjs");
const fs = require("fs");
const logStream = fs.createWriteStream(config.logs_path, { flags: "a" });
const { Sequelize } = require('sequelize'); // Relational DBS
const mysql = require('mysql2/promise');
const system = require('system-commands')

// -------------------------------
// THIS IS AN EXPRESS APP
// -------------------------------
const app = express();

// -------------------------------
// MANAGING SERVER PORT - GESTION DES PORTS
// -------------------------------
const port = process.env.PORT || 80;

// -------------------------------
// CORS - GESTION DE LA PROTECTION CORS 
// -------------------------------
if (port == 80) {
    // LOCALHOST AND OPENODE 
    app.use(
        require("cors")({
            origin: function(origin, callback) {
                callback(null, origin);
            },
            credentials: true,
        })
    );
} else {
    // AZURE AND HEROKU
    app.use(cors());
}

// -------------------------------
// OTHER RELATED PORTS FUNCTIONS  (CONNEXION TO OTHERS DATABASE IF LOCALHOST)
// -------------------------------
if (port == 80) {
    // LOCALHOST AND OPENODE 
    mysql_initialize();
    import_models();
    // mysql_crud_routes_generation();
} else {
    mysql_initialize();
    import_models();
    // It's heroku, so we need this to hide credentials: 
    get_heroku_env_vars();
}
// -------------------------------
// USING SESSIONS - UTILISATION DES SESSIONS
// -------------------------------             
app.use(session({ secret: "ssshhhhh", saveUninitialized: true, resave: true }));

// -------------------------------
// MANAGING FILES AND STATICS DIRECTORIES 
// -------------------------------
// VUE APP DIRECTORY ( GENERATED WITH NPM RUN BUILD ) // SERVING THE VUE.JS APP
app.use(serveStatic(__dirname + "/dist"));
// UPLOADS : IMAGES STORING DIRECTORY
app.use(express.static(__dirname + "/tmp"));
// UPLOADS : FILES STORING DIRECTORY
app.use(express.static(__dirname + "/tmp/files"));

// -------------------------------
// MANAGING JSON AND BODY PARSER PARAMS 
// -------------------------------
const bodyParser = require("body-parser");
app.use(
    bodyParser.urlencoded({
        extended: true,
        limit: "50mb",
    })
);
// create application/json parser
const jsonParser = bodyParser.json();
app.use(
    bodyParser.json({
        limit: "50mb",
        inflate: true,
        strict: false,
    })
);


// -------------------------------
// RELATIONAL DATABASES HANDLINGS (MYSQL,SQLITE)
// -------------------------------

/*
 * Connect mysql using sequelize
 
    Pool : max :Never have more than five open connections (max: 5)
    min : At a minimum, have zero open connections/maintain no minimum number of connections (min: 0)
    idle: Remove a connection from the pool after the connection has been idle (not been used) for 10 seconds (idle: 10000)

 * @params config.json
 * @return none
 * @error  none
 */
function mysql_connect() {

    const sequelize = new Sequelize(config.mysql.db_name, config.mysql.user, config.mysql.password, {
        dialect: config.mysql.dialect,
        host: config.mysql.host,
        port: config.mysql.port,
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        }
    });
    sequelize
        .authenticate()
        .then(() => {
            console.log('Connection to MYSQL by SEQUELIZE has been established successfully.');

            var x = require('./models/init-models.js');
            x.initModels(sequelize);

        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
        });

}

function import_models() {


}

/*
 * Create db if no exist.
 * @params config.json
 * @return none
 * @error  none
 */
async function mysql_initialize() {
    // create db if it doesn't already exist
    const token = { "user": config.mysql.user, "password": config.mysql.password, "host": config.mysql.host };
    const connection = await mysql.createConnection(token);
    await connection.query('CREATE DATABASE IF NOT EXISTS ' + config.mysql.name + ';');
    mysql_connect();
    write_connexion_to_logs()
}

/*
 * Create all Mysql DB Cruds and Routes  automatically from an existing database HIIK !! - See https://github.com/o1lab/xmysql
 * Crée toutes les routes ( Post, Put, Delete, Read) et cruds NODE EXPRESS automatiquement, à partir d'une database MYSQL existante !
 * No need to write generic back ends .
 *  GET 	/ 	Gets all REST APIs
    GET 	/api/tableName 	Lists rows of table
    POST 	/api/tableName 	Create a new row
    PUT 	/api/tableName 	Replaces existing row with new row
    POST 🔥 /api/tableName/bulk 	Create multiple rows - send object array in request body
    GET 🔥 	/api/tableName/bulk 	Lists multiple rows - /api/tableName/bulk?_ids=1,2,3
    DELETE 🔥 /api/tableName/bulk 	Deletes multiple rows - /api/tableName/bulk?_ids=1,2,3
 * @params config.json
 * @return none
 * @error  none
 */
async function mysql_crud_routes_generation() {
    system('xmysql -h ' + config.mysql.host + ' -u ' + config.mysql.user + ' -p ' + config.mysql.password + ' -n 3000  -d ' + config.mysql.name).then(output => {
            console.log(output)
            write_connexion_to_logs()
        }).catch(error => {
            console.error(error)
        })
        // -------------------------------
        // PROXY ALL API ROUTES QUERIES TO PORT 3000 TO USE WITH MYSQL ROUTES GENERATOR https://stackoverflow.com/questions/10435407/proxy-with-express-js
        // -------------------------------
    var proxy = require('express-proxy-server');
    app.use('xmysql/api', proxy('http://localhost:3000/api'));
}
/*
 * Create models if no exist
 * @params none
 * @return none
 * @error  none
 */
async function mysql_models() {
    // init models and add them to the exported db object
    // db.User = require('../users/user.model')(sequelize);

    // sync all models with database
    // await sequelize.sync();
}

/*
 * Connect sqlite using sequelize
 * @params db
 * @return none
 * @error  none
 */
function connect_sqlite() {
    const sequelize = new Sequelize({
        dialect: 'sqlite',
        storage: 'db/database.sqlite'
    });
    sequelize
        .authenticate()
        .then(() => {
            console.log('Connection to SQLITE has been established successfully.');
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
        });
}


// -------------------------------
// HELPER FUNCTIONS
// -------------------------------


/*
 * Write db connexion to logs file - On journalise la connexion
 * @params none
 * @return none
 * @error  none
 */
function write_connexion_to_logs() {
    var d = new Date(Date.now());
    logStream.write("DB CONNEXION AT " + d.toString() + "\r\n");
    // logStream.end(''); TODO
}
/*
 * HEROKU ENV VARS : NEEDED TO HIDE ALL CREDENTIALS IN A HEROKU / GITHUB ENV . 
 * On récupère nos mots de passe des variables d'environnement stockés sur heroku, sinon, tout le monde verrait nos mots de passe .
 * @params none
 * @return none
 * @error  none
 */
function get_heroku_env_vars() {
    config.cloudinary_token.api_secret = process.env.cloudinary_password;
}
// -------------------------------
// STARTING NODE SERVER
// -------------------------------
app.listen(port);
console.log("server started " + port);