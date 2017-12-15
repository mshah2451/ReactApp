const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/config');
const mongoose = require('mongoose');
require('../model/user');
const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {
            done(null, user);
        })
});

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleSecretcode,
            callbackURL: '/auth/google/callback'
        }, async (accessToke, refreshToke, profile, done) => {
            const isExist = await User.findOne({ googleId: profile.id });
            if (isExist) {
                return done(null, isExist);
            }
            const users = await new User(
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
            done(null, users);
        })
);
