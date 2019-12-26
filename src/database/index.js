const mongoose = require('mongoose');

mongoose.connect("mongodb://10.13.0.5/skills2", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

mongoose.Promise = global.Promise;

module.exports = mongoose;