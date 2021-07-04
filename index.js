'use strict';

const server = require('./src/server');
require('dotenv').config();
const mongoose = require('mongoose');
const port = process.env.PORT;

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false,
}).then(() => server.start(port || 6666)).catch(e => console.error(e.message));
