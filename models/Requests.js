const mongoose = require('mongoose');

const { Schema } = mongoose;

const surveySchema = new Schema({
  name: String,
  contactNo: Number,
  items: [Object],
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  dateAdded: Date,
  accepted: { type: Boolean, default: false },
});

mongoose.model('surveys', surveySchema);
