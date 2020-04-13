const passport = require('passport');
const { RegisterController, LoginController } = require('../controllers/userController');

module.exports = (app) => {
    app.post('/api/user/register', RegisterController);

    app.post('/api/user/login', LoginController);

    app.get('/api/user/validate', passport.authenticate('jwt', { session: false }), (req, res) => {
        res.status(200).send('Authorized.');
    });

    // consider creating a sign out api that adds token to list of invalid tokens in db
    // app.use('/api/user/signout', (req, res) => {});
};
