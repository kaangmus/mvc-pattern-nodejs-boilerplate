var mysql = require('mysql');


let config = {
	  host     :  '127.0.0.1',
	  port : 3306,
      user     : 'root',
      password : '',
      database : 'node-db',
}
 
let connection = mysql.createConnection(config);
 
let sql = `SELECT * FROM students`;
connection.query(sql, (error, results, fields) => {
  if (error) {
    return console.error(error.message);
  }

    for (var i in results) {
        console.log('Post Titles: ', results[i].nama);

      }

});
 
connection.end(); 