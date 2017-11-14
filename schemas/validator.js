//SCHEMA VALIDATION FILE
"use strict";
const validate = require('mongoose-validator');
module.exports = {

  nameValidator : [
    validate({
      validator: 'isLength',
      arguments: [3, 50],
      message: 'Name should be between {ARGS[0]} and {ARGS[1]} characters'
    }),
    validate({
      validator: 'isAlpha',
      passIfEmpty: true,
      message: 'Name should contain alphabets only'
    })
  ],

  emailValidator : [
    validate({
      validator: 'isEmail',
      message: 'Email validation failed'
    })
  ],

  usernameValidator : [
      validate({
          validator: 'isLength',
          arguments: [4, 50],
          message: 'Username should contain atleast {ARGS[0]} characters'
      })
  ],

  roleValidator : [
      validate({
          validator: 'isIn',
          arguments: [['admin','fan','artist']],
          message: 'Role should be fan or artist'
      })
  ]
}
