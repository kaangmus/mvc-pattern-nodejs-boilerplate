

var connection = require('./connection');

  connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected...')
      connection.query('DELETE FROM students WHERE id>5', function(err, results) {
        if (err) throw err
        console.log(results)
      })
    
})
 
