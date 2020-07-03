const requireLogin = require('../middlewares/requireLogin');

module.exports = (app) => {
  app.post('/api/newRequest', requireLogin, (req, res) => {});

  app.get('/api/viewRequests', (req, res) => {});
};
