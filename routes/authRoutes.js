const passport = require('passport');

module.exports = (app) => {
  // Route to handle google login.
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email'],
    })
  );

  // Callback route for google to redirect after login.
  app.get('/auth/google/callback', passport.authenticate('google'));
};
