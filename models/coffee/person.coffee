mongoose = require 'mongoose'

userSchema = mongoose.Schema
  profile: Object

module.exports = mongoose.model 'user', userSchema
