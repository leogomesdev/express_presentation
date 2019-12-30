const express = require('express');
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const router = express.Router();

function generateToken(params = {}) { // move to a Model
  return jwt.sign(params, process.env.JWT_SECRET, {
    expiresIn: 86400,
  });
}

router.post('/register', async (req, res) => {
  const { email } = req.body;
  try {
    if (await User.findOne({ email })) { // change to https://github.com/blakehaswell/mongoose-unique-validator
      return res.status(400).send({ error: "Email is already in use" });
    }
    const user = await User.create(req.body);
    user.password = undefined;

    res.send({ user, token: generateToken({ id: user.id }) });
  }
  catch (error) {
    console.error(error);
    return res.status(400).send({ error: "Error while registering user" });
  }
});

router.post('/authenticate', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).select('+password');

  if (!user) {
    return res.status(400).send({ error: "Incorrect email or password" });
  }

  if (!await bcrypt.compare(password, user.password)) {
    return res.status(400).send({ error: "Incorrect email or password" });
  }

  user.password = undefined;

  res.send({ user, token: generateToken({ id: user.id }) });
});

module.exports = app => app.use('/auth', router);