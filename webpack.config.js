var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
      "0001_0010": './src/presentations/0001_0010.js'
    },
    output: {
        path: path.join(__dirname, "docs/"),
        filename: "[name]/[name].bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};
