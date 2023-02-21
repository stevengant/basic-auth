'use strict';

const express = require('express');

const router = express.Router();

const bcrypt = require('bcrypt');
const { userModel } = require('./models/users-model');
const basicAuth = require('./middleware/basic');



router.post('/signup', async (req, res, next) => {

  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const record = await userModel.create(req.body);
    res.status(200).json(record);
  } catch (e) { res.status(403).send('Error Creating User'); }
});

router.post('/signin', basicAuth, async (req, res, next) => {
  res.status(200).json(req.user);

});

module.exports = router;