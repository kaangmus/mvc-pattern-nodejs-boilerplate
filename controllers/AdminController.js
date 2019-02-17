const Model = require('./../models/Model');


exports.Get = (req, res)=>{
    console.log(Model.Get());
};

exports.Insert = (req, res)=>{
    res.data = {};
    res.data.nama = requ.body.nama; 
    res.data.email = req.body.email; 
    Model.Insert(res.data,(err,results)=>{
        if(err) throw err
        Model.ViewData((err,results)=>{
                    if (err) throw err 
                    res.render('home/Index', {data:results})            
            });
    });
};


exports.ViewData = (req, res)=>{
    Model.ViewData((err,results)=>{
            if (err) throw err 
            res.render('home/Index', {data:results})            
    });
 
};

exports.Edit = (req, res)=>{
      var id = req.params.id;
    Model.getId(id,(err,results)=>{
            if (err) throw err 
            res.render('home/Edit', {data:results})            
    });
 
};


exports.Index = (req, res)=>{
    res.pageInfo = {};
    res.pageInfo.title = 'My Name is Musliadi';
    res.render('home/Index', res.pageInfo);
};

exports.Index3 = (req, res)=>{
            var data = {
          name: "Jack",
          date: "12/04/12",
          comment: "This is a really <strong>awesome</strong> tutorial. Thanks.",
          social: [
            {
              site: "Twitter",
              name: "Jack_Franklin"
            },
            {
              site: "Github",
              name: "jackfranklin"
            }
          ],
           arr: [
                '<a>a</a>',
                '<i>italic</i>',
                '<strong>bold</strong>'
            ]
        };


    res.render('home/Index3',data);
};





exports.Index = (req, res)=>{
    res.pageInfo = {};
    res.pageInfo.title = 'My Name is Musliadi';
    res.render('home/Index', res.pageInfo);
};


exports.ById = (req, res) => {
    res.pageInfo = {};
    res.pageInfo.title = 'My Name is Musliadi';
    res.pageInfo.id = req.params.id;
 	res.render('home/Index', res.pageInfo);
};

exports.Form = (req, res)=>{
 	res.render('home/Form');
};


exports.View = (req, res) => {
    res.pageInfo = {};
    res.pageInfo.username = req.body.username;
    res.pageInfo.password = req.body.password; 
 	res.render('home/View', res.pageInfo);
};


exports.Welcome = (req, res) => {
	res.pageInfo = {};
	res.pageInfo.title = 'Musliadi';
 	res.render('home/Welcome',res.pageInfo);
};

