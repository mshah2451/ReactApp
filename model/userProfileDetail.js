const mongoose = require('mongoose');
const { Schema } = mongoose;

const userProfiledetail =
    new Schema({
        UserId:String,
        About:String,
        Phone:String,
        Email:String
    })
    mongoose.model("Profiledetail",userProfiledetail);