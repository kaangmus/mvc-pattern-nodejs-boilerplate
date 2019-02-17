var mysql = require('mysql');

let config = {
      host     :  '127.0.0.1',
      port : 3306,
      user     : 'root',
      password : '',
      database : 'node-db',
  }

var connection = mysql.createConnection(config);
  
module.exports =  connection ;


