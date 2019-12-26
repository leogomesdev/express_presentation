const express = require('express');

const User = require('../models/user');

const router = express.Router();

router.post('/register', async (req, res) => {
    const { email } = req.body;
    try {
        if (await User.findOne({ email })) { // change to https://github.com/blakehaswell/mongoose-unique-validator
            return res.status(400).send({ error: "Email already in yse" });
        }
        const user = await User.create(req.body);
        user.password = undefined;
        return res.send({ user });
    }
    catch (error) {
        console.error(error);
        return res.status(400).send({ error: "Error while registering user" });
    }
});

module.exports = app => app.use('/auth', router);