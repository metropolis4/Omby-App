// Generated by CoffeeScript 1.9.2
(function() {
  var app, bodyParser, cookieParser, express, flash, indexController, mongoConfig, mongoose, passport, passportConfig, port, server, session;

  express = require('express');

  bodyParser = require('body-parser');

  mongoose = require('mongoose');

  session = require('express-session');

  cookieParser = require('cookie-parser');

  flash = require('flash');

  passport = require('passport');

  passportConfig = require('./config/passport');

  mongoConfig = require('./config/mongo');

  indexController = require('./controllers/index');

  mongoose.connect(mongoConfig.stage || mongoConfig.dev);

  app = express();

  app.set('view engine', 'jade');

  app.set('views', __dirname + '/views');

  app.use(express["static"](__dirname + '/public'));

  app.use(bodyParser.json());

  app.use(bodyParser.urlencoded({
    extended: false
  }));

  app.use(cookieParser());

  app.use(flash());

  app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
  }));

  app.use(passport.initialize());

  app.use(passport.session());

  app.get('/', indexController.index);

  app.get('/auth/linkedin', passport.authenticate('linkedin', {
    state: "SOME STATE"
  }, function(req, res) {}));

  app.get('/auth/linkedin/callback', passport.authenticate('linkedin', {
    successRedirect: '/',
    failureRedirect: '/login'
  }));

  port = process.env.PORT || 5150;

  server = app.listen(port, function() {
    return console.log("Express listening on port " + (server.address().port));
  });

  module.exports = app;

}).call(this);
