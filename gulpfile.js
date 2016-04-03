var gulp = require('gulp');
var jade = require('gulp-jade');

gulp.task('hello', function() {
  console.log('hello ruben');
});

gulp.task('jade', function(){
  var LOCALS = {}

  gulp.src('app/jade/*.jade')
    .pipe(jade({
      locals: LOCALS
    }))
    .pipe(gulp.dest('build/'))
});
