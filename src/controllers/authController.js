const express = require('express');

const User = require('../models/user');

const router = express.Router();

router.post('/register', async (req, res) => {
    try {
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