const webpack = require('webpack');

/** @type {webpack.Configuration} */
module.exports = {
    mode: 'production',
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