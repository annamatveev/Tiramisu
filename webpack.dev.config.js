const webpack = require('webpack');

module.exports = {
    entry: [
        'webpack-hot-middleware/client',
        "./app/index.js"
        ],
    output: {
        filename: "./server/public/javascripts/bundle.js",
        publicPath: "/"
    },
    devtool: '#source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['env', 'stage-0', 'react']
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader', {
                    loader: 'postcss-loader',
                    options: {
                        plugins: () => [require('autoprefixer')]
                    }}]
            }
        ]
    },
    watch: true,
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
}