const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

if (process.env.NODE_ENV !== 'production') {
  require('dotenv/config');
}

require('./controllers/index')(app);

const port = process.env.APP_PORT || 3000;
app.listen(port, () => {
  console.log('\n Server started - http://localhost:' + port + '/ \n');
});
