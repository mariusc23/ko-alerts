var gulp    = require('gulp');
var jshint  = require('gulp-jshint');
var karma   = require('karma').server;
var connect = require('gulp-connect');

gulp.task('default', ['test']);

gulp.task('connect', function() {
  connect.server({
    root: ['test', './']
  });
});

gulp.task('test', ['karma'], function() {
 return gulp.src(['./lib/*.js', '!**/*.spec.js'])
            .pipe(jshint())
            .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('karma', function(done) {
  karma.start({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done);
});
