const cust = require('../models/cust.model.js');


// Create and Save a new cust
exports.create = (req, res) => {
    // Validate request
    // if(!req.body.content) {
    //     return res.status(400).send({
    //         message: "customer content can not be empty"
    //     });
    // }

    // Create a Note
    const custinfo = new cust({

        name: req.body.name,
        age: req.body.age,
        fname:req.body.fname,
        lname:req.body.lname,
        address:req.body.address,
        gender:req.body.gender,
        inquiry:req.body.inquiry,
        phoneno:req.body.phoneno,
        email:req.body.email,
        city:req.body.city,
        state:req.body.state,
        //productImage:req.body.productImage
        // "name": "AARTI P DAVE",
        // "age": "23",
        // "fname":"AARTI",
        // "lname":"DAVE",
        // "address":"GORAI 1 BORIVALI",
        // "gender":"FEMALE",
        // "inquiry":"INQUIRY FOR LOTION SOAPS",
        // "phoneno":"5362896531",
        // "email":"AA@GMAIL.COM",
        // "city":"MUMBAI",
        // "state":"MAHARASHTRA"
        
    });
  //  custinfo.productImage.data = fs.readFileSync(req.file.productimage);
  //  custinfo.productImage.contentType = 'jpg';
    

    // Save cust in the database
    custinfo.save().then(data => {
      //  res.send(data);
        res.send({
            message:"Record saved"
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred "
        });
    });

///////////////find all customers//////////




}

 exports.findAll = (req, res) => {
        cust.find()
        .then(data => {
            console.log(data);
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving notes."
            });
        });
        // cust.find().then(data=>{
        //   res.send("hello");
        
        // })
 }

 
exports.findOne = (req, res) => {
    cust.findById(req.params.customerId)
    .then(note => {
        if(!note) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.customerId
            });            
        }
        res.send(note);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.customerId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.customerId
        });
    });
};