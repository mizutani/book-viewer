const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    path.join(__dirname, 'src', 'app.js'),
  ],
  output: {
    path: path.join(__dirname, 'public', 'dist'),
    filename: 'bundle.js',
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
  ],
  eslint: {
    configFile: './.eslintrc.json',
    fix: true,
  },
  resolve: {
    modulesDirectories: ['node_modules', 'shared'],
    extensions: ['', '.js', '.jsx'],
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
          presets: ['es2015', 'stage-2', 'react'],
        },
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css?modules', 'postcss'],
        include: path.resolve(__dirname, './src'),
      },
    ],
  },
};
