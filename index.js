const express = require('express');
const passport = reqire('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const keys = require('./config/key');

const app = express();

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
    },
    (accessToken) => {
      console.log(accessToken);
    }
  )
);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
