// module.exports = {
//   // Use the src/index.js file as entry point to bundle it
//   // If the src/index.js file imports other JavaScript files, bundle them as well
//   entry: './client/src/index.jsx',
//   // The bundled source code files shall result in a bundle.js file in the /dist folder
//   output: {
//     path: `${__dirname}/dist`,
//     publicPath: '/',
//     filename: 'bundle.js',
//   },
//   // The /dist folder will be used to serve our application to the browser
//   devServer: {
//     contentBase: './client/dist',
//   },
// };

const path = require('path');

const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  devtool: 'eval-source-map',
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
};
