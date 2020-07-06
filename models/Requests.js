const mongoose = require('mongoose');

const { Schema } = mongoose;

const requestSchema = new Schema({
  name: String,
  contactNumber: Number,
  deliveryLocation: String,
  items: [Object],
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  dateAdded: Date,
  accepted: { type: Boolean, default: false },
  _acceptedUser: { type: Schema.Types.ObjectId, ref: 'User', default: null },
});

mongoose.model('requests', requestSchema);
