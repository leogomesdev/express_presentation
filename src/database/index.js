const mongoose = require('mongoose');

mongoose.connect("mongodb://" + process.env.MONGO_HOST + "/" + process.env.DATABASE_NAME, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

mongoose.Promise = global.Promise;

module.exports = mongoose;