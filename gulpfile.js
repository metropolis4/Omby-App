// Generated by CoffeeScript 1.9.2
(function() {
  var coffee, concat, gulp, gutil;

  gulp = require('gulp');

  coffee = require('gulp-coffee');

  concat = require('gulp-concat');

  gutil = require('gulp-util');

  gulp.task('coffee', function() {
    return gulp.src('public/scripts/*.coffee').pipe(coffee({
      bare: true
    })).pipe(coffee()).pipe(gulp.dest('public/scripts')).on('error', gutil.log);
  });

}).call(this);
