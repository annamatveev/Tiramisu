const webpack = require('webpack');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')


// UNCOMMENT TO RUN
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = (env) => {
    const cssLoaders = [
        {
            loader: 'css-loader',
            options: {
                modules: true,
                importLoaders: 2,
                sourceMap: true,
                localIdentName: process.env.NODE_ENV === 'production'
                    ? '[hash:base64]'
                    : '[name]__[local]___[hash:base64:5]',
            },
        },
        {
            loader: 'sass-loader',
            options: {
                sourceMap: true,
            },
        },
        {
            loader: 'postcss-loader',
        },
    ];
    return ({
        resolve: {
            extensions: ['.js', '.jsx'],
        },
        devtool: process.env.NODE_ENV === 'production' ? 'source-map' : 'cheap-eval-source-map',

        entry: "./app/index.js",
        output: {
            filename: process.env.NODE_ENV === 'production' ? '[name].[chunkhash].bundle.js' :
                '[name].bundle.js',
            path: path.resolve(__dirname, 'server/public/javascripts'),
        },
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
                },
                {
                    test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                    },
                },
            ],
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            }),
            new UglifyJSPlugin({ sourceMap: true }),
            new ExtractTextPlugin({
                allChunks: true,
                filename: 'styles.[contenthash].css',
            }),
            new CleanWebpackPlugin([path.resolve(__dirname, 'server/public/javascripts')]),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor',
                minChunks: ({ resource }) => (
                    resource !== undefined &&
                    resource.indexOf('node_modules') !== -1
                ),
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'main',
                children: true,
                async: true,
                minChunks: ({ resource }) => (
                    resource !== undefined &&
                    resource.indexOf('node_modules') !== -1
                ),
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'manifest',
                minChunks: Infinity,
            }),
            new UglifyJsPlugin({
                test: /\bundle.js($|\?)/i,
                cache: true
            }),
            // UNCOMMENT TO RUN
            // new BundleAnalyzerPlugin(),
        ],
    });
};