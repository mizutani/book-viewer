const path = require('path');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');

var config = {
  entry: [path.join(__dirname, 'src', 'index.js')],
  output: {
    path: path.join(__dirname, 'public', 'dist'),
    filename: 'bundle.js'
  },
  eslint: {
    configFile: './.eslintrc.json',
    fix: true,
  },
  resolve: {
    extensions: [
      '', '.js', '.jsx'
    ],
    root: [path.resolve(__dirname, 'src')]
  },
  progress: true,
  devtool: 'inline-source-map',
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-2', 'react']
        }
      }, {
        test: /\.css$/,
        loader: 'style-loader'
      }, {
        test: /\.css$/,
        loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[path][name]__[local]___[hash:base64:5]'
        }
      }, {
        test: /\.(jpg|png|zip)$/,
        loaders: 'url-loader'
      }, {
        test: /\.(jpg|png|gif|zip)$/,
        loder: 'file-loader',
        query: {
          name: 'images/[name].[ext]',
        }
      }
    ]
  },
  postcss: function() {
    return [autoprefixer];
  }
};

// config.plugins.push(new webpack.ProvidePlugin({
//   'JSZip': 'jszip',
//   'window.JSZip': 'jszip' // this doesn't expose JSZip property for window, but exposes it to every module
// }));

module.exports = config;
