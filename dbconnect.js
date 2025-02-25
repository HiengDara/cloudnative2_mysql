// STEP-1 : IMPORT MySQL2 PACKAGE
const mysql = require('mysql2');

// Database Connection URL
const dbconnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "your_new_password",
    database: "assignment2cloud",
});

// STEP-2 : ESTABLISH CONNECTION WITH Mysql
// err is callback function Parameter. ARROW OPERATOR.
dbconnection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database');
});

// STEP-3 : EXPORT MODULE dbconnection because we need it in other JS file
module.exports = dbconnection;
