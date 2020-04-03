const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 3001;
const passport = require('passport');
require('dotenv').config();

// EXPRESS RESPONSE MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// PASSPORT CONFIG
app.use(passport.initialize());
require('./config/passport')(passport);

// API ROUTES
require('./routes/userRoutes')(app);

// DB CONNECTION
mongoose
    .connect(process.env.DB_LINK, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(console.log('DB connected'))
    .catch((err) => console.log(err));

// SERVER LISTENER
app.listen(port, () => console.log(`SERVER up on PORT:${port}`));
