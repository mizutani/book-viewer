const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: [path.join(__dirname, 'src', 'index.js')],
  output: {
    path: path.join(__dirname, 'public', 'dist'),
    filename: 'bundle.js'
  },
  eslint: {
    configFile: './.eslintrc.json',
    fix: true,
    formatter: require('eslint-formatter-pretty')
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
        test: /\.(jpg|png)$/,
        loaders: 'url-loader'
      }
    ]
  },
  postcss: function() {
    return [autoprefixer];
  }
};
