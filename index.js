const express = require('express');
const mongoose = require('mongoose');

require('./services/mongoose');
require('./services/passport');

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
