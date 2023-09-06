const express = require('express');
const { validateInputs } = require('./middlewares/login.middlewares');
const { loginController, userController, categoryController } = require('./controllers');
const authentication = require('./middlewares/auth.middlewares');

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

// Login
app.post('/login', validateInputs, loginController.login);

// User
app.post('/user', userController.insert);
app.get('/user', authentication, userController.findAll);
app.get('/user/:id', authentication, userController.findById);

// Categories
app.post('/categories', authentication, categoryController.insert);
app.get('/categories', authentication, categoryController.findAll);

module.exports = app;
