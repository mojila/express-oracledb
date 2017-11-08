const express = require('express');
const app = express();

// Controllers
const index = require('./controllers/index'); 
const developers = require('./controllers/developers');

// Routers 
app.use('/', index);
app.use('/developers', developers);


module.exports = app;