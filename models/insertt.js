

var connection = require('./connection');

  connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected...')
      connection.query("INSERT INTO students (id,nama,email) VALUES ('','Erico Riyandika','Erico@gmail.com')", 
      	function(err,results) {
        	if (err) throw err
        	console.log('data berhasil ditambah')
              connection.query('SELECT * FROM students', function(err, results) {
		        if (err) throw err
		        console.log(results)
		      })




      })
    
})
 
