var HomeController = require('./controllers/HomeController');
var AdminController = require('./controllers/AdminController');
var UploadController = require('./controllers/UploadController');
// var Natural = require('./controllers/Natural');



// Routes
module.exports = app => {
    
    // Main Routes
    
    app.get('/', HomeController.Index);
    app.get('/other', HomeController.Other);   
    app.get('/admin', AdminController.Index); 
    app.get('/other/:id', AdminController.ById);   
    app.get('/form', AdminController.Form); 
    app.get('/welcome', AdminController.Welcome);  
    app.get('/ambil', AdminController.Get);  
    app.post('/insert', AdminController.Insert);   
    app.post('/view', AdminController.View); 
    app.get('/edit/:id', AdminController.Edit);     
    app.get('/viewdata', AdminController.ViewData);  
    app.get('/index3', AdminController.Index3);     



    // app.get('/natural', Natural.Natural);   
    // Upload controller
    // app.get('/index4', UploadController.Index4); 
    app.get('/index5', UploadController.Index5); 
    // app.post('/upload', UploadController.upload); 



    //
    app.post('/proses_upload', UploadController.Uploadd);



};
