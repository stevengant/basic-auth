'use strict';

require('dotenv').config();

const express = require('express');
const userRouter = require('./auth/router');
const errorHandler = require('./auth/error-handlers/500');
const notFound = require('./auth/error-handlers/404');


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);

app.use(express.urlencoded({ extended: true }));



function start() {
  app.listen(PORT, () => console.log(`listening on port ${PORT}`));

}

app.use('*', notFound);
app.use(errorHandler);

module.exports = { start, app };