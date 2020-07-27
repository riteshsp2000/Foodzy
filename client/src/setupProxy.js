const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(
    [
      '/api',
      '/auth/google',
      '/api/current_user',
      '/api/logout',
      '/api/newRequest',
      '/api/viewRequests',
      '/api/profile/viewRequests',
      '/api/profile/acceptedRequests',
      '/api/**',
    ],
    createProxyMiddleware({
      target: 'http://localhost:5000',
    })
  );
};
