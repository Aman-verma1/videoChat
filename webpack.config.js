const path = require('path');

module.exports = {
  entry: './server.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'server.js',
  },
  target: 'node',
  mode: 'production',
  resolve: {
    fallback: {
      bufferutil: false,
      'utf-8-validate': false,
    },
  },
};
