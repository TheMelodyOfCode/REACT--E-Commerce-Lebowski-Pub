// esm way to import modules
import mysql from 'mysql2';

/** WITHOUT esm you would write:
 *  const mysql = require('mysql2'); */

 export const db =  mysql.createConnection({
    host: "localhost",
    user: "testus",
    password: "12345",
    database: "lebowski",
})


module.exports = db.promise();