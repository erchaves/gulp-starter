var gulp         = require('gulp');
var browserSync  = require('browser-sync');
var less         = require('gulp-less');
var sourcemaps   = require('gulp-sourcemaps');
var handleErrors = require('../util/handleErrors');
var config       = require('../config').less;
var autoprefixer = require('gulp-autoprefixer');

gulp.task('less', function () {
    console.log('test less');
    console.log('test less');
    console.log(config.src);
    console.log(config.dest);

  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});
