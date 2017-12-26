const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: "./app/index.js",
    output: {
        filename: "./server/public/bundle.js"
    },
    devtool: 'source-map',
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
    plugins:
        [
            new UglifyJsPlugin()
        ]

}