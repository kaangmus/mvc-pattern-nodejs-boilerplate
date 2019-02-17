var connection = require('./connection');


exports.Insert = (data,callback) => {
      var sql="INSERT INTO students (id,nama,email) VALUES (?,?,?)";
      return connection.query(sql,['',data.nama,data.email],callback); 
};


exports.UploadGambar = (data,callback) => {
        const sql="INSERT INTO foto (id,nama_foto,token) VALUES (?,?,?)";
        return connection.query(sql,['',data.nama_foto,data.token],callback); 
};


exports.ViewData = callback =>{
       return connection.query('SELECT * FROM students',callback);      
};


exports.getId = (id, callback) =>{
       return connection.query('SELECT * FROM students where id='+id,callback);      
};






















// exports.Get = function(){
//    console.log('aku get');
// };


// exports.Insertt = function(data){
//   connection.connect(function(err) {
//   if (err) throw err
//      var sql="INSERT INTO students (id,nama,email) VALUES (?,?,?)";
//       connection.query(sql,['',data.nama,data.email], 
//        function(err,results) {
//          if (err) throw err
//          console.log('data berhasil ditambah')
//               connection.query('SELECT * FROM students', function(err, results) {
//            if (err) throw err
//            console.log(results)
//          })
//       })
// }) 
// };

