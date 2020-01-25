const express = require('express');
const User = require('../models/user');
const bcrypt = require('bcryptjs');

const router = express.Router();

router.post('/register', async (req, res) => {
  var user = new User(req.body);

  await user.save(function(error) {
    if (error) {
      return res.status(400).send(error);
    }
    user.password = undefined;

    res.send({ user, token: user.generateToken() });
  });
});

router.post('/authenticate', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).select('+password');

  if (!user) {
    return res.status(400).send({ error: 'Incorrect email or password' });
  }

  if (!(await bcrypt.compare(password, user.password))) {
    return res.status(400).send({ error: 'Incorrect email or password' });
  }

  user.password = undefined;

  res.send({ user, token: user.generateToken() });
});

module.exports = app => app.use('/auth', router);
