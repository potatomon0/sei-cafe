require('dotenv').config()
require('./config/database')
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');//serve-favicon is the logo that shows up on the browser tab
const logger = require('morgan');
const app = express();//instantiate express app

//----Middleware-------------------
//express.urlencoded middleware is used to process data submitted by the form - and we dont submit forms in a SPA. 'Form' data is submitted as AJAX
app.use(logger('dev'));
app.use(express.json());//have express work with JSON
// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));//accesss certain favicon.icon
app.use(express.static(path.join(__dirname, 'build')));
// Middleware to verify token and assign user object of payload to req.user.
// Be sure to mount before routes
app.use(require('./config/checkToken'));
// Put API routes here, before the "catch all" route
app.use('/api/users', require('./routes/api/users'));

//----Catch All Route------------------
// The following "catch all" route (note the *) is necessary
// to return the index.html from build on all non-AJAX requests
// // * stand for 'any'
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


//------PORT---------------------
// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.PORT || 3001;

app.listen(port, function () {
    console.log(`Express app running on port ${port}`)
});