const mongoose = require('mongoose');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const keys = require('../config/key');

// Creating a model instance of user model. One parameter
// to the model method indicates fetching something out of
// mongoose, two arguments indicates we are trying to load something in it.
const User = mongoose.model('users');

// Creating a google strategy for google login
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
    },
    (accessToken, refreshToken, profile, done) => {
      new User({
        googleId: profile.id,
        displayName: profile.displayName,
        emails: profile.emails,
        photos: profile.photos[0].value,
      }).save();
    }
  )
);
