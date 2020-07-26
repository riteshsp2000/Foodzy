const mongoose = require('mongoose');
const { Schema } = mongoose;

// Creating the user Schema defining the different property
// to be stored for each individual user.
const userSchema = new Schema({
  googleId: String,
  displayName: String,
  emails: Array,
  photos: String,
});

mongoose.model('users', userSchema);
