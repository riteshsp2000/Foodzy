const mongoose = require('mongoose');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const keys = require('../config/key');

// Creating a model instance of user model. One parameter
// to the model method indicates fetching something out of
// mongoose, two arguments indicates we are trying to load something in it.
const User = mongoose.model('users');

// A function to generate cookie for the particular user. Handled by passport
// the user argument passed to the callback function is the same user
// returned after createing new user/returning existing user.
passport.serializeUser((user, done) => {
  // the user.id in the following argument aint the google profile.id
  // this id is the one that mongodb creates for each user.
  // the profile id by google is used to just authenticate the user.
  // Once authenticated, we will always use our own mongodb generated id
  // in future other oauths can also be added and hence it is better to use mongodb id
  done(null, user.id);
});

// A function to authenticate the incoming cookie and return a user.
// the id passed as argument to the callback, is the id provided by mongodb/
// the id passed to the done callback in serializeUser function.
passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

// Creating a google strategy for google login
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }).then((existingUser) => {
        if (existingUser) {
          // Conditional to check if the user exists.
          // The done callback needs 2 arguments - error and the user record
          done(null, existingUser);
        } else {
          // If no user exists then create one.
          new User({
            googleId: profile.id,
            displayName: profile.displayName,
            emails: profile.emails,
            photos: profile.photos[0].value,
          })
            .save()
            .then((user) => done(null, user));
          // By using new User we get a new instance there. Along
          // with that we alse get a instance in the then callback.
          // By convention we use the instance in the then callback as
          // it is the latest one and has all the changes that took place while
          // saving the user. The later one might not have it.
        }
      });
    }
  )
);
