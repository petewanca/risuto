const bcrypt = require('bcryptjs');
const User = require('../models/User');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const joi = require('@hapi/joi');
const { secret } = require('../config/keys');

const registerValidation = (data) => {
    const schema = joi.object({
        firstName: joi
            .string()
            .min(2)
            .required(),
        lastName: joi
            .string()
            .min(2)
            .required(),
        email: joi
            .string()
            .email()
            .min(6)
            .required(),
        password: joi
            .string()
            .min(6)
            .required()
    });
    return schema.validate(data);
};

const loginValidation = (data) => {
    const schema = joi.object({
        email: joi
            .string()
            .email()
            .min(6)
            .required(),
        password: joi
            .string()
            .min(6)
            .required()
    });
    return schema.validate(data);
};

module.exports = (app) => {
    app.post('/api/user/up', async (req, res) => {
        const { firstName, lastName, email, password } = req.body;

        const { error } = await registerValidation(req.body);
        if (error) return res.status(400).send(error.details[0].message);

        const emailRegisterd = await User.findOne({ email });
        if (emailRegisterd) return res.status(400).send('Email already in use.');

        const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hash(password, salt);

        const newUserEntry = new User({ firstName, lastName, email, password: hash });

        try {
            await newUserEntry.save();
            res.status(200).send(`Welcome aboard, ${firstName}.`);
        } catch (error) {
            res.status(400).send(error);
        }
    });

    app.post('/api/user/in', async (req, res) => {
        const { email, password } = req.body;

        const { error } = await loginValidation(req.body);
        if (error) return res.status(400).send(error.details[0].message);

        const userExists = await User.findOne({ email });
        if (!userExists) return res.status(400).send('Email/password incorrect.');

        const match = await bcrypt.compare(password, userExists.password);
        if (!match) return res.status(400).send('Email/password incorrect.');

        const payload = {
            id: userExists._id,
            email: userExists.email
        };

        const token = await jwt.sign(payload, secret, { expiresIn: '1hr' });
        res.status(200).send({ token: `Bearer ${token}` });
    });

    app.use('/api/user/auth', passport.authenticate('jwt', { session: false }), (req, res) => {
        res.status(200).send('Authorized.');
    });

    // consider creating a sign out api that adds token to list of invalid tokens in db
    // app.use('/api/user/out', (req, res) => {});
};
