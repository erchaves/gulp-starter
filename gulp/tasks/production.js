var gulp = require('gulp');

gulp.task('production', ['karma'], function(){
  // This runs only if the karma tests pass
  gulp.start(['markup', 'images', 'minifyCss', 'uglifyJs'])
});
