const mongoose = require('mongoose');

const CustDiary = mongoose.Schema({
   ////data im the schema

    name: String,
    age: Number,
    fname:String,
    lname:String,
    address:String,
    gender:String,
    inquiry:String,
    phoneno:Number,
    email:String,
    city:String,
    state:String,
    productImage: { data: Buffer, contentType: String },
    


    
}, {
    timestamps: true
});

module.exports = mongoose.model('customerDetails2', CustDiary);