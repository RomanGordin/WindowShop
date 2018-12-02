const path = require('path');

module.exports = {
  entry: './src/js/bundle/script.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};