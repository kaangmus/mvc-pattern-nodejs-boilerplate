

var connection = require('./connection');

  connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected...')
      connection.query('UPDATE students SET nama="Hafiz",email="Hafiz@gmail.com" WHERE id=5', function(err, results) {
        if (err) throw err
        console.log(getAll())
      })
    
})

  var getAll = function (){ 
	  connection.query('SELECT * FROM students', function(err, results) {
	        if (err) throw err
	        console.log(results)
	    })
  }


 
