const authMiddleware = require('../middlewares/auth');
const validateIdMiddleware = require('../middlewares/validateId');
const express = require('express');
const router = express.Router();
const Skill = require('../models/skill');

router.use(authMiddleware);

router.get('/', async (req, res) => {
  const skills = await Skill.find();
  res.send({ skills });
});

router.post('/', async (req, res) => {
  var skill = new Skill(req.body);

  await skill.save(function(error) {
    if (error) {
      return res.status(400).send(error);
    }
    res.status(201).send({ skill });
  });
});

router.get('/:id', validateIdMiddleware, async (req, res) => {
  const skill = await Skill.findById(req.params.id);
  if (!skill) {
    return res.status(404).send();
  }
  res.send({ skill });
});

router.put('/:id', validateIdMiddleware, async (req, res) => {
  await Skill.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { runValidators: true, context: 'query', new: true }
  )
    .then(skill => {
      if (!skill) {
        return res.status(404).send();
      }
      res.send({ skill });
    })
    .catch(error => {
      return res.status(400).send(error);
    });
});

router.delete('/:id', validateIdMiddleware, async (req, res) => {
  const skill = await Skill.findById(req.params.id);
  if (!skill) {
    return res.status(404).send();
  }
  await skill.remove(error => {
    if (error) {
      return res.status(500).send(error);
    }
    res.status(204).send();
  });
});

module.exports = app => app.use('/skills', router);
