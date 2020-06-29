// Configure the file to figure out which set of credentials to return ie dev or prod

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./prod');
} else {
  module.exports = require('./dev');
}
