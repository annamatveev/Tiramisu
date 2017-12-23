const webpack = require('webpack'),
    path = require('path'),
    fs = require('fs')

const SRC = path.resolve(__dirname, "src"),
    NODE_MODULES = path.resolve(__dirname, "node_modules")

const config = {
    entry: "./app/index.js",

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
    output: {
        path: path.resolve(__dirname, 'public', 'javascripts'),
        publicPath: '/public',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        }),
    ]
};

if (process.env.NODE_ENV === 'production') {
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin({})
    )
} else {
    config.devtool = "#cheap-module-source-map"
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin()
    );
}

module.exports = config