const connect = require('./database/index');
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv/config');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./controllers/index')(app);
connect();
const port = process.env.APP_PORT || 3000;
app.listen(port, () => {
  console.log('\n Server started - http://localhost:' + port + '/ \n');
});
