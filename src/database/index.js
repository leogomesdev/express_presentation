const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

module.exports = async function connect() {
  console.log(`Connecting to MongoDB: ${process.env.MONGO_URI}`);
  const uri = process.env.MONGO_URI;
  const mongooseOpts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  };

  await mongoose
    .connect(uri, mongooseOpts)
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch(err => {
      console.log(`Error on connecting to database: ${err}`);
    });
};
