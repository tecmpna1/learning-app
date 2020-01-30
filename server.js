const express = require('express');
var cors = require('cors')
const bodyParser = require('body-parser');
const dbConfig = require('./configurations/db.config.js');

const mongoose = require('mongoose');
// create express app
const app = express();
const cust = require('./app/models/custdiary.model.js');
app.use(cors())

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())


////////////////////////////////////////
//app.use('/api/', indexRouter);
// var multer = require('multer');

// var image = multer({ dest:'./app/public/' });



var multer  = require('multer');
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './public/images');
    },
    filename: (req, file, cb) => {
      console.log(file);
      var filetype = '';
      if(file.mimetype === 'image/gif') {
        filetype = 'gif';
      }
      if(file.mimetype === 'image/png') {
        filetype = 'png';
      }
      if(file.mimetype === 'image/jpeg') {
        filetype = 'jpg';
      }
      cb(null, 'image-' + Date.now() + '.' + filetype);
    }
});
var upload = multer({storage: storage});

// var storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(null, './path/to/file')
//     },
//     filename: (req, file, cb) => {
//     //   cb(null, "PDFS-"+file.originalname.substring(0, file.originalname.lastIndexOf('.')) + '-' +   Date.now()+(path.extname(file.originalname)).toLowerCase())
//     }
//   });
//   var upload = multer({
//     storage: storage,
//     fileFilter: function (req, file, callback) {
//       var ext = (path.extname(file.originalname)).toLowerCase();
//       if(ext !== '.pdf') {
//           return callback(new Error('Only pdf format files are allowed!'))
//       }
//       callback(null, true)
//     },
//     limits:{
//         fileSize: 1024*1024
//     }
//   });
  
  

/////////////////////////////////////////////////

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// define a simple route
app.use('/', (req, res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed

    console.log(res);
    next();

 
});



// app.post('/customer',upload.single('file'), (req, res) => {
//     var eventData = req.body;
//    var pdata=JSON.stringify(req.body);
//     var event = new cust(JSON.parse(pdata));
 
//     event.save((err, result) => {
//         if (err) {
//             console.log("error saving event.")
//         }
 
//         res.send(result);
    
//     })
// })


// app.get('/customer', (req, res) => {
// //    var eventData = req.body;
// //   var pdata=JSON.stringify(req.body);
// //    var event = new cust(JSON.parse(pdata));
 
//     cust.find((err, result) => {
//         if (err) {
//             console.log("error getting event.")
//         }
//         res.send(result);
//     })

// })
//require('./app/controllers/custdiary.controller.js')(app);

// var model = mongo.model('customerDetails', UsersSchema, 'CustDiary');  

// app.post("customer",function(req,res){   
//     var mod = new model(req.body);  
//     if(req.body.mode =="Save")  
//     {  
//        mod.save(function(err,data){  
//          if(err){  
//             res.send(err);                
//          }  
//          else{        
//              res.send({data:"Record has been Inserted..!!"});  
//          }  
//     });  
//    } 
// } 

// app.get('/', (req, res) => {

//     res.json({
//         name: res.body.name,
//         age: res.body.age,
//         fname:res.body.fname,
//         lname:res.body.lname,
//         address:res.body.address,
//         gender:res.body.gender,
//         inquiry:res.body.inquiry,
//         phoneno:res.body.phoneno,
//         email:res.body.email,
//         city:res.body.city,
//         state:res.body.state
//         });
//     console.log(res);
// });

//app.get('/customer', custDiary.findAll);

  
// listen for requests
require('./app/routes/custdiary.routes.js')(app);/////put before app.listen

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});