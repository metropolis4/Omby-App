gulp = require 'gulp'
coffee = require 'gulp-coffee'
concat = require 'gulp-concat'
gutil = require 'gulp-util'

gulp.task 'coffee', ->
  gulp.src 'public/scripts/*.coffee'
  .pipe coffee bare: true
  .pipe coffee()
  .pipe gulp.dest 'public/scripts'
  .on 'error', gutil.log
