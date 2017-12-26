var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();

var index = require('./routes/index');

const isProd = process.env.NODE_ENV === 'production';

if (!isProd) {
    const webpackConfig = require('../webpack.dev.config');
    const addDevMiddlewares = require('./middleware/devMiddleware');
    addDevMiddlewares(app, webpackConfig);
}

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

module.exports = app;