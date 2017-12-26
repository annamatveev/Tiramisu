module.exports = (app, options) => {
    const isProd = process.env.NODE_ENV === 'production';

    if (isProd) {
        const prodMiddleware = require('./prodMiddlewares');
        prodMiddleware(app, options);
    } else {
        const devMiddleware = require('./devMiddleware');
        devMiddleware(app);
    }

    return app;
};