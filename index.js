const express = require('express');
const service=require('./service/services');
const mongoose=require('mongoose');
const keys=require('./config/config');
const poassport=require('passport');
const cookieSession=require('cookie-session');
const BodyParser=require('body-parser');
const app = express();

app.use(
cookieSession({
    maxAge:30*24*60*60*1000,
    keys:[keys.cookieKey]
})
);
app.use(BodyParser.json());
app.use(poassport.initialize());
app.use(poassport.session());
require('./model/user.js');
require('./model/userProfiledetail.js');
mongoose.connect(keys.mongooseURL);
require('./rout/rout')(app);
 require('./rout/profileUpdate')(app);

const PORT = process.env.PORT | 3000
app.listen(PORT);