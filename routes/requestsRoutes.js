const mongoose = require('mongoose');

const requireLogin = require('../middlewares/requireLogin');

const Request = mongoose.model('requests');

module.exports = (app) => {
  app.get('/api/viewRequests', (req, res) => {
    res.send('Hi there');
  });

  app.post('/api/newRequest', requireLogin, async (req, res) => {
    // console.log(req.body);
    const { name, contactNumber, deliveryLocation, items } = req.body;

    const request = new Request({
      name,
      contactNumber,
      deliveryLocation,
      items,
      _user: req.user.id,
      dateAdded: Date.now(),
    });

    try {
      await request.save();
      const user = await req.user.save();
      res.send(user);
    } catch (error) {
      res.status(422).send(error);
    }
  });
};
