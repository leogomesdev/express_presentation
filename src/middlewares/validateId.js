const mongoose = require('mongoose');

module.exports = (req, res, next) => {
  if (req.params.id === undefined) {
    return next();
  }
  const validateId = mongoose.Types.ObjectId.isValid(req.params.id);
  if (!validateId) {
    return res.status(400).send({ error: "Malformed ID" });
  }
  return next();
};