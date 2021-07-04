'use strict';
const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./auth/routes/user.route');
const errorHandler = require('./auth/middleware/500');
const notFoundHandler = require('./auth/middleware/404');
const userValidator = require('./auth/middleware/signin.validator');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/signin', userValidator, router.signIn);
app.use('/signup', router.signUp);

app.get('/', (req, res) => {
  res.status(200).send('WoW !! you are opening a stupid lab app');
});

app.use('*', errorHandler);
app.use(notFoundHandler);

module.exports = {
  app,
  start: port => {
    app.listen(port, () => console.log(`server starts at ${port}`));
  },
};

