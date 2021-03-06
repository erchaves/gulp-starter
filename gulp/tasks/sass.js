var gulp         = require('gulp');
var browserSync  = require('browser-sync');
var sass         = require('gulp-sass');
var sourcemaps   = require('gulp-sourcemaps');
var handleErrors = require('../util/handleErrors');
var config       = require('../config').sass;
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
    console.log(config.src);
    console.log(config.dest);
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});
