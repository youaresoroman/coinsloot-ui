var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));

function buildStyles() {
  return gulp.src('./src/scss/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/css/'));
};

// function buildGlobal() {
//   return gulp.src('./src/scss/global.scss')
//     .pipe(sass().on('error', sass.logError))
//     .pipe(gulp.dest('./src/components'))
// }

exports.buildStyles = buildStyles;
// exports.buildGlobal = buildGlobal;
exports.watch = function () {
  gulp.watch('./src/**/*.scss', buildStyles);
  // gulp.watch('./src/scss/global.scss', buildStyles);
};