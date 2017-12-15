const passport = require('passport');
const mongoose = require('mongoose');
const Profiledetail = mongoose.model('Profiledetail');
module.exports = (app) => {

    app.get('/api/Userdetail', async (req, res) => {
        Profiledetail.findById(req.query.ID)
        .then(
            res.send(req.Profiledetail)   
        )
    });

    app.put('/api/Userdetail', async (req, res) => {
        const { UserId, About, Phone, Email } = req.body;
        const update = await Profiledetail.findOne({ UserId: UserId }, function (err, doc) {
            doc.About = About;
            doc.save();
        });
    });
};

