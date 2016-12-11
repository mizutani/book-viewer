// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add addional webpack configurations.
// For more information refer the docs: https://goo.gl/qPbSyX

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.
const path = require('path')

module.exports = {
    plugins: [
        // your custom plugins
    ],
    resolve: {
        extensions: ['', '.js', '.jsx'],
        root: [path.resolve(__dirname, '../src')],
    },
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'stage-2', 'react'],
            },
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
            loader: 'url-loader'
        }],
    },
};
