// dependencies:
const mysql = require('mysql');


require('dotenv').config();


const connection = process.env.JAWSDB_URL
  ? mysql.createConnection(process.env.JAWSDB_URL)
  : mysql.createConnection({
    host: 'us-cdbr-east-02.cleardb.com',
    port: 3306,
    user: bc0dae49105ef7,
    password: acb52a99,
    database: heroku_4f4d3a323adc514
  });

  
  module.exports = connection;