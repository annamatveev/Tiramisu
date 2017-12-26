const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

function createWebpackMiddleware(compiler, publicPath) {
    return webpackDevMiddleware(compiler, {
        noInfo: true,
        publicPath,
        silent: true,
        stats: 'errors-only',
    });
}

module.exports = function addDevMiddlewares(app, webpackConfig) {
    const compiler = webpack(webpackConfig);
    const middleware = createWebpackMiddleware(compiler, webpackConfig.output.publicPath);

    app.use(middleware);
    app.use(webpackHotMiddleware(compiler));

};