var express = require('express');
var app = express();

app.get('/',(request,response)=>{
  response.send('Hellow word');
});


function sayHello(request,response,next){
  console.log('I must be called');
  next();
}


function sum(request,response,next){
  console.log(1+2);
  next();
}


app.get('/say', sayHello, (request, response)=>{
  response.send('sayHello');
});

app.get('/sum', sum, (request, response)=>{ // memanggil fungsi sum
  response.send('sayHello');
});


app.get('/:name/:age', (request, response)=>{
   response.send(request.params);
});

//route serves both the form page and processes form data
app.get('/form', (request, response)=>{
  
  response.sendFile(__dirname +'/index.html');
});

//Binding the server to a port(3000)
app.listen(3000,()=>console.log('express server started at port 3000'));