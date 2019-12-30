const authMiddleware = require('../middlewares/auth');
const express = require('express');
const router = express.Router();

router.use(authMiddleware);

router.get('/', async (req, res) => {
  res.send({ ok: true, user: { id: req.userId } });
});

module.exports = app => app.use('/skills', router);