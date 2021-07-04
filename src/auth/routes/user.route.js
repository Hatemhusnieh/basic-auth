'use strict';
const express = require('express');
const router = express.Router();
const base64 = require('base-64');
const bcrypt = require('bcrypt');
const User = require('../models/user.model');


router.post('/signin', signIn);
router.post('/signup', signUp);

async function signIn(req, res) {
  try {
    const headers = req.headers.authorization.split(' ');
    const decodedPass = base64.decode(headers[1]);
    const [username] = decodedPass.split(':');
    const user = await User.findOne({ username });
    res.status(201).json(user);
  } catch (error) {
    res.status(403).json(error.message);
  }
}

async function signUp(req, res, next) {
  try {
    const pass = await bcrypt.hash(req.body.password, 10);
    req.body.password = pass;
    const checkUser = await User.findOne({ username: req.body.username });
    if (checkUser) {
      next('user already exist');
      return;
    }
    const user = new User(req.body);
    user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(403).json(error.message);
  }
}

module.exports = {
  signIn,
  signUp,
};