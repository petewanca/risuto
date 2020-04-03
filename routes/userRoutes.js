const passport = require('passport');
const { RegisterController, LoginController } = require('../controllers/userController');

module.exports = (app) => {
    app.post('/api/user/up', RegisterController);

    app.post('/api/user/in', LoginController);

    app.use('/api/user/auth', passport.authenticate('jwt', { session: false }), (req, res) => {
        res.status(200).send('Authorized.');
    });

    // consider creating a sign out api that adds token to list of invalid tokens in db
    // app.use('/api/user/out', (req, res) => {});
};
