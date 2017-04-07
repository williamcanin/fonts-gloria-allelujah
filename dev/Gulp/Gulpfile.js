var gulp  = require('gulp');
   clean = require('gulp-clean'),
   sass = require('gulp-sass'),
   less = require('gulp-less'),
   path = require('path')
   cssmin = require('gulp-cssmin'),
// Alternative Minify
// minifyCSS = require('gulp-minify-css'),
   rename = require('gulp-rename'),
   taskListing = require('gulp-task-listing');


gulp.task('clean', function () {
  return gulp.src('css', {read: false})
    .pipe(clean());
});

gulp.task('minify', function () {
  gulp.src('css/gloria-allelujah.css')
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./css'));
});

gulp.task('build-sass', function () {
  gulp.src('scss/gloria-allelujah.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('build-less', function () {
  return gulp.src('less/gloria-allelujah.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./css'));
});

// Help tasks
gulp.task('help', taskListing);
gulp.task('sass', ['clean','build-sass','minify']);
gulp.task('less', ['clean','build-less','minify']);

