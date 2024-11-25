const path = require('path');

module.exports = {
  entry: './server.js', // or your app's entry point
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'server.js',
  },
  target: 'node',
  mode: 'production',
};
