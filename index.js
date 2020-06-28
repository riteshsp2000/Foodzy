const express = require('express');
const mongoose = require('mongoose');

// Order of requiring user and passport must be kept like this
// as passport uses an instance of user model.
require('./models/User');
require('./services/passport');
require('./services/mongoose');
// const keys = require('./config/key');

// mongoose.connect(keys.mongoURI, {
//   useNewUrlParser: true,
//   useFindAndModify: false,
//   useCreateIndex: true,
//   useUnifiedTopology: true,
// });

const app = express();

// Importing all the routes
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
