// Gulp
var gulp = require('gulp');

// preprocessors plugins
var jade = require("gulp-jade");
var sass = require('gulp-sass');


// preprocessors
// sass
gulp.task('sass', function () {
  return gulp.src('./lib/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/assets/css'));
});

// jade

gulp.task('jade', function() {

    var YOUR_LOCALS = {};

    return gulp.src('./lib/jade/**/*.jade')
        .pipe(jade({
            locals: YOUR_LOCALS
        }))
        .pipe(gulp.dest('./build/'))
});


// web server

	//


// files watcher

gulp.task('watch', function () {
  gulp.watch('./lib/sass/**/*.scss', ['sass']);
  gulp.watch('./lib/jade/**/*.jade', ['jade']);


});

// Default

gulp.task('default', ['sass', 'jade'], function () {

    gulp.watch('./lib/sass/**/*.scss', ['sass']);
    gulp.watch('./lib/jade/**/*.jade', ['jade']);
});