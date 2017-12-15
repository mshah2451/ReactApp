const keys = require('../config/config');
const mongoose = require('mongoose');
require('../model/userProfiledetail');

const users =  new Profiledetail(
    {
        googleId: profile.id,
        displayName: profile.displayName,
        name: profile.name,
        image: profile._json.image,
        language: profile._json.language,
        photo: profile.photos,
        emails: profile.emails
    }
).save();