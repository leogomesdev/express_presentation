const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

if (process.env.NODE_ENV !== 'production') {
  require('dotenv/config');
}

app.get('/', (request, response) => {
  response.send('ok');
});

require('./controllers/authController')(app);
require('./controllers/skillsController')(app);

app.listen(3000);
