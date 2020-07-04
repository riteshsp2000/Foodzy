const mongoose = require('mongoose');

const requireLogin = require('../middlewares/requireLogin');

const Request = mongoose.model('requests');

module.exports = (app) => {
  app.get('/api/viewRequests', (req, res) => {});

  app.post('/api/newRequest', requireLogin, async (req, res) => {
    const { name, contactNumber, location, items } = req.body;

    const request = new Request({
      name,
      contactNumber,
      location,
      items,
      _user: req.user.id,
      dateAdded: Date.now(),
    });

    try {
      await request.save();
      res.send('New Request created!');
    } catch (error) {
      res.status(422).send(error);
    }
  });
};
