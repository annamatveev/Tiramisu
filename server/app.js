const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();
const setup = require('./middleware/frontendMiddlewareSetup');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

const api = require('./routes/api');
app.use('/api', api);

const staticFilesPath = path.join(__dirname, 'public');

app.use(express.static(staticFilesPath));
setup(app, {
    outputPath: staticFilesPath,
    publicPath: '/',
});

module.exports = app;