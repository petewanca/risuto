const bcrypt = require('bcryptjs');
const User = require('../models/User');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const joi = require('@hapi/joi');

module.exports = (app) => {
    app.use('/', (req, res) => {
        res.json('hello');
    });
};
