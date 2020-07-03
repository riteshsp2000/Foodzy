const requireLogin = require('../middlewares/requireLogin');

module.exports = (app) => {
  app.get('/api/viewRequests', (req, res) => {});

  app.post('/api/newRequest', requireLogin, (req, res) => {});
};
