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
  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/user');
    }
  );

  // route to logout user
  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  // Route to get the current logged in user
  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
