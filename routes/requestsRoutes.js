const mongoose = require('mongoose');

const requireLogin = require('../middlewares/requireLogin');

const Request = mongoose.model('requests');

module.exports = (app) => {
  app.get('/api/viewRequests', async (req, res) => {
    const requests = await Request.find({ accepted: false });

    res.send(requests.reverse());
  });

  app.get('/api/profile/viewRequests', requireLogin, async (req, res) => {
    const requests = await Request.find({ _user: req.user.id });

    res.send(requests.reverse());
  });

  app.patch('/api/acceptRequest/:id', requireLogin, async (req, res) => {
    const { name, contactNumber } = req.body;
    const id = req.query.id;

    const request = await Request.findOneAndUpdate(
      { _id: id },
      { accepted: true, _acceptedUser: { name, contactNumber } }
    );

    try {
      const updatedRequest = await request.save();
      res.send(updatedRequest);
    } catch (error) {
      res.status(422).send(error);
    }
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
