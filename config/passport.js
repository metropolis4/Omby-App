// Generated by CoffeeScript 1.9.2
(function() {
  var LinkedInStrategy, User, passport;

  passport = require('passport');

  LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;

  User = require('../models/person');

  passport.use(new LinkedInStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "https://omby.herokuapp.com/auth/linkedin/callback",
    scope: ['r_basicprofile']
  }, function(accessToken, refreshToken, profile, done) {
    return process.nextTick(function() {
      var user;
      user = new User({
        profile: profile
      });
      return user.save(function(err, user) {
        return done(null, user);
      });
    });
  }));

}).call(this);
