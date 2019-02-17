const Model = require('./../models/Model');
var multer = require('multer');

exports.Uploadd =(req,res)=>{
    const storage = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, 'uploads/')
      },
      filename: function (req, file, cb) {
        cb(null, file.originalname)
      }
    });
    const upload = multer({storage: storage}).single('userfile');

    upload(req, res, function(err){
          if(err) throw err
            res.data={};
            res.data.token=req.body.token;
            res.data.nama_foto=req.file.filename;

            Model.UploadGambar(res.data,function(err,results){
              console.log(results);
            })
    });

};


exports.Index5 = (req, res)=>{
    res.render('home/Index5');
};
