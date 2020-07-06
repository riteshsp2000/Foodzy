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
  _acceptedUser: { Object },
});

mongoose.model('requests', requestSchema);
