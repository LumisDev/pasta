const webpack = require('webpack');

/** @type {webpack.Configuration} */
module.exports = {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        port: 3000,
        open: true,
        historyApiFallback: true,
        hot: true,
        static: {
            directory: __dirname+'/dist'
        }
    },
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        path: __dirname+'/dist'
    },
    module:{
        rules:[
            {
                test: /\.svelte$/,
                use: 'svelte-loader'
            }
        ]
    },
    resolve: {
        alias: {
            svelte: __dirname + '/node_modules/svelte/src/runtime',
            sveltec: __dirname + '/node_modules/svelte/src/compiler'
        },
        extensions: ['.mjs', '.js', '.svelte'],
        conditionNames: ['svelte']
    }
}