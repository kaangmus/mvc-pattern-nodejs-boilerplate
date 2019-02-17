
var express = require('express');
var http = require('http');
var path = require('path');
var handlebars  = require('express-handlebars'), hbs;
var bodyParser = require('body-parser');
var multer = require('multer');

var app = express();
app.set('port', 1337);

var upload = multer({ dest: 'uploads/' })

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));

hbs = handlebars.create({
   defaultLayout: 'main'
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

require('./router')(app);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
