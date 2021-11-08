const menuRouter = require('.controllers/menus');
const express = require('express');
const cors = require('cors');
const config = require('./utils/config');
const middleware = require('./utils/middleware');
const app = express();

app.use(cors());
app.use(express.json());
app.use(middleware.requestLogger);
app.use('/api/menus', menuRouter);
app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;