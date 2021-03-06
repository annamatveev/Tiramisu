const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const fs = require('fs');

module.exports = {
    entry: [
        'babel-polyfill',
        'eventsource-polyfill', // Necessary for hot reloading with IE
        'webpack-hot-middleware/client?reload=true',
        path.join(process.cwd(), 'app/index.js'), // Start with js/app.js
        ],
    output: {
        path: path.resolve(process.cwd(), 'server/public'),
        filename: "bundle.js",
        publicPath: "/"
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['env', 'stage-0', 'react', 'babel-preset-react-hmre']
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
                test: /\.(jpg|png|gif)$/,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            progressive: true,
                            optimizationLevel: 7,
                            interlaced: false,
                            pngquant: {
                                quality: '65-90',
                                speed: 4,
                            },
                        },
                    },
                ],
            },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({
            inject: true, // Inject all files that are generated by webpack, e.g. bundle.js
            templateContent: templateContent(), // eslint-disable-line no-use-before-define
        })
    ],
}

/**
 * We dynamically generate the HTML content in development so that the different
 * DLL Javascript files are loaded in script tags and available to our application.
 */
function templateContent() {
    const html = fs.readFileSync(
        path.resolve(process.cwd(), 'app/index.html')
    ).toString();

    return html;
    // if (!dllPlugin) { return html; }
    //
    // const doc = cheerio(html);
    // const body = doc.find('body');
    // const dllNames = !dllPlugin.dlls ? ['reactBoilerplateDeps'] : Object.keys(dllPlugin.dlls);
    //
    // dllNames.forEach((dllName) => body.append(`<script data-dll='true' src='/${dllName}.dll.js'></script>`));
    //
    // return doc.toString();
}
