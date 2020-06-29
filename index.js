const express = require('express');
const cookieSession = require('cookie-session');
const passport = require('passport');

const keys = require('./config/key');
// Order of requiring user and passport must be kept like this
// as passport uses an instance of user model.
require('./models/User');
require('./services/passport');
require('./services/mongoose');

const app = express();

// Handling cookies with cookie session. And alerting passport to
// use cookies while authenticating.
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Importing all the routes
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
