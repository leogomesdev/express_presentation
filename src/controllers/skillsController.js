const authMiddleware = require('../middlewares/auth');
const express = require('express');
const router = express.Router();
const Skill = require('../models/skill');
const mongoose = require('mongoose');

router.use(authMiddleware);

router.get('/', async (req, res) => {
  const skills = await Skill.find();
  res.send({ skills });
});

router.post('/', async (req, res) => {
  var skill = new Skill(req.body);

  await skill.save(function (error) {
    if (error) {
      return res.status(400).send(error);
    }
    res.send({ skill });
  });
});

router.get('/:skillId', async (req, res) => {
  var valid = mongoose.Types.ObjectId.isValid(req.params.skillId);
  if (!valid) {
    return res.status(400).send({ error: "Malformed ID" });
  }
  const skill = await Skill.findById(req.params.skillId);
  if (!skill) {
    return res.status(404).send();
  }
  res.send({ skill });
});

router.put('/:skillId', async (req, res) => {
  var valid = mongoose.Types.ObjectId.isValid(req.params.skillId);
  if (!valid) {
    return res.status(400).send({ error: "Malformed ID" });
  }
  const skill = await Skill.findByIdAndUpdate(req.params.skillId, req.body, { new: true }, function (error) {
    if (error) {
      return res.status(500).send(error);
    }
  });

  if (!skill) {
    res.status(404).send();
  }

  res.send({ skill });
});

router.delete('/:skillId', async (req, res) => {
  var valid = mongoose.Types.ObjectId.isValid(req.params.skillId);
  if (!valid) {
    return res.status(400).send({ error: "Malformed ID" });
  }
  const skill = await Skill.findById(req.params.skillId);
  if (!skill) {
    return res.status(404).send();
  }
  await skill.remove(error => {
    if (error) {
      return res.status(500).send(error);
    }
    res.send();
  });
});

module.exports = app => app.use('/skills', router);