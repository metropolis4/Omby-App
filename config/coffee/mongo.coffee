module.exports =
  test : 'mongodb://localhost/omb-test',
  dev  : 'mongodb://localhost/omb',
  stage: process.env.MONGOLAB_URI
