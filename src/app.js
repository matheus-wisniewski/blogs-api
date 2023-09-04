const express = require('express');
const { validateInputs } = require('./middlewares/login.middlewares');
const { loginController } = require('./controllers');

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.post('/login', validateInputs, loginController.login);

// app.post('/user');

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
