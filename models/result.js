

var connection = require('./connection');

  connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected...')
      connection.query('SELECT * FROM students ', function(err, results) {
        if (err) throw err
		 	  Object.keys(results).forEach(function(key) {
		      var row = results[key];
		      console.log(row.nama)
      })
})
  })
 
