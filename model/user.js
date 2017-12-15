
const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema =
    new Schema({
        googleId: String,
        displayName:String,
        name:Object,
        image:Object,
        language:String,
        photo: Array,
        emails:Array
    });

 mongoose.model("users",userSchema);