const webpackMerge = require('webpack-merge');
const AotPlugin = require('@ngtools/webpack');
const commonConfig = require('./webpack.config');

module.exports = webpackMerge(commonConfig, {
    // Bug - need this uncommented for AOT
    // module: {
    //     rules: [
    //         {
    //             test: /\.ts$/,
    //             loader: '@ngtools/webpack'
    //         }
    //     ]
    // },

    plugins: [
        // pre-compile angular
        new AotPlugin.AotPlugin({
            tsConfigPath: './tsconfig.json'
        })
    ]
});