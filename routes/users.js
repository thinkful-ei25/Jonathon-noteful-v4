'use strict';

const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const User = require('../models/user');

const router = express.Router();

router.post('/', (req, res, next) => {
  const { fullname, username, password } = req.body;
  const requiredFields = ['username', 'password'];
  let map = {};
  for(let fields in req.body){
    map[fields] = 1;
  }
  let errorMessage = undefined;
  for(let fields in requiredFields){
    let field = requiredFields[fields];
    if(map[field] !== 1){
      errorMessage === undefined ? errorMessage = field : errorMessage += ', '  + field;
    }
  }
  if(errorMessage !== undefined) {
    const err = new Error(`fields: '${errorMessage}' can not be empty`);
    err.status = 422;
    return next(err);
  }

  const checkIfStringFields = requiredFields.find(field => field in req.body && typeof req.body[field] !== 'string');

  if (checkIfStringFields) {
    const err = new Error(`field: '${checkIfStringFields}' must be a string`);
    err.status = 422;
    return next(err);
  }

  const checkIfTrimmed = requiredFields.find(field => req.body[field].trim() !== req.body[field]);

  if (checkIfTrimmed) {
    const err = new Error(`field: '${checkIfTrimmed}' can not have leading or trailing white spaces`);
    err.status = 422;
    return next(err);
  }


  
  if (username.length < 2){
    const err = new Error('field: \'username\' must be at least 2 characters long');
    err.status = 422;
    return next(err);
  }

  const passwordLength = password.length;
  if (passwordLength < 8 || passwordLength > 72){
    const err = new Error('password must be between 8 and 72 characters long');
    err.status = 422;
    return next(err);
  }

  
    
  return User.hashPassword(password)
    .then(digest => {
      const newUser = {
        username,
        password: digest,
        fullname: fullname.trim()
      };
      return User.create(newUser);
    })
    .then(result => {
      return res.status(201).location(`/api/users/${result.id}`).json(result);
    })
    .catch(err => {
      if (err.code === 11000) {
        err = new Error('The username already exists');
        err.status = 400;
      }
      next(err);
    });
});

module.exports = router;