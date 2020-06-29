const mongoose = require('mongoose');

const keys = require('../config/keys');

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
