const path = require('path')
const webpack = require('webpack');

module.exports = {
    entry: {
        main1: './src/main1.js',
        main2: './src/main2.js'
    },

    output: {
    	path: path.resolve(__dirname, './dist'),
    	filename: '[name].js',
    },

    module: {
        loaders: [
            { test: /\.(js|jsx)$/, loaders: ['babel'], exclude: /node_modules/ }
        ]
    },

    plugins: [
        new  webpack.optimize.CommonsChunkPlugin('common.js', ['main1', 'main2'])
    ]
}
