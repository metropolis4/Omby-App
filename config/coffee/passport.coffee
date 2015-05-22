passport = require 'passport'
LinkedInStrategy = require('passport-linkedin-oauth2').Strategy
User = require '../models/person'

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
