const mysql = require("mysql2");


// Connect to database
const db = mysql.createConnection({
    host: 'localhost',
    // Your MySQL username,
    user: 'root',
    // Your MySQL password 
    password: '{HF3fD4WA8C2GAF1',
    database: 'election'
  });

  module.exports = db;