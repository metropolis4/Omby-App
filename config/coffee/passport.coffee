passport = require 'passport'
LinkedInStrategy = require('passport-linkedin-oauth2').Strategy
User = require '../models/person'

passport.serializeUser (user,done) ->
  done null, user.id
passport.deserializeUser (id,done) ->
  User.findById id, (err,user) ->
    done err, user

passport.use new LinkedInStrategy
  clientID: process.env.CLIENT_ID
  clientSecret: process.env.CLIENT_SECRET
  callbackURL: "https://omby.herokuapp.com/auth/linkedin/callback"
  scope: ['r_basicprofile']
  (accessToken, refreshToken, profile, done) ->
    process.nextTick ->
      user = new User
        profile: profile
      user.save (err,user) ->
        done null, user
passport.use LinkedInStrategy

module.exports =
  ensureAuthenticated: (req,res,next) ->
    if req.isAuthenticated()
      next()
    res.redirect '/oops'
