'use strict';

require('dotenv').config();

const { start } = require('./src/server');

const { sequelizeDatabase } = require('./src/auth/models');

sequelizeDatabase.sync()
  .then(() => {
    console.log('Successful Connection!');
    start();
  })
  .catch(e => console.error(e));