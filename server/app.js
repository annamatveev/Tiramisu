var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// HMR
var webpack = require('webpack');
var webpackConfig = require('../webpack.dev.config');

var app = express();

if (process.env.NODE_ENV === 'dev') {

    var compiler = webpack(webpackConfig);
    app.use(require("webpack-hot-middleware")(compiler));
}

var index = require('./routes/index');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

module.exports = app;