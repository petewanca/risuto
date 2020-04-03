const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { registerValidation, loginValidation } = require('./validation');
const { secret } = require('../config/keys');

module.exports = {
    RegisterController: async (req, res) => {
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
    },

    LoginController: async (req, res) => {
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
    }
};
