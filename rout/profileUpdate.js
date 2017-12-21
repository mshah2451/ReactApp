const passport = require('passport');
const mongoose = require('mongoose');
const Profiledetail = mongoose.model('Profiledetail');
module.exports = (app) => {

    app.get('/api/GetUserdetail',async(req, res) => {
   const data= await Profiledetail.findOne({ UserId: req.query.ID },(err,doc)=>{return doc});
     res.send(data);
    });

    app.put('/api/Userdetail', async (req, res) => {
        const { UserId, About, Phone, Email } = req.body;
        const update = await Profiledetail.findOne({ UserId: UserId }, function (err, doc) {
            doc.About = About;
            doc.save();
        });
        const data= await Profiledetail.findOne({ UserId:UserId },(err,doc)=>{return doc});
        res.send(data);
      //  res.send(update);
      
    }); 
}

