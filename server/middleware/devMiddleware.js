const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

function createWebpackMiddleware(compiler) {
    return webpackDevMiddleware(compiler, {
        noInfo: true,
        publishPath: compiler.publicPath,
        silent: true,
        stats: 'errors-only',
    });
}

function addWebpackHotMiddleWare(app, compiler, middleware){
    app.use(webpackHotMiddleware(compiler));
    const filename = path.join(compiler.outputPath, "index.html");

    app.get('*', (req, res) => {
        console.log(filename);
        middleware.fileSystem.readFile(filename, (err, file) => {
            if (err) {
                console.log(err);
                res.sendStatus(404);
            } else {
                res.send(file.toString());
            }
        });
    });
}

module.exports = function addDevMiddlewares(app) {
    const compiler = webpack(require('../../webpack.dev.config'));
    const middleware = createWebpackMiddleware(compiler);
    app.use(middleware);

    addWebpackHotMiddleWare(app, compiler, middleware)
};