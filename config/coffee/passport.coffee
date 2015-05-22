passport = require 'passport'
LinedInStrategy = require('passport-linkedin-oauth2').Strategy

passport.use new LinkedInStrategy
