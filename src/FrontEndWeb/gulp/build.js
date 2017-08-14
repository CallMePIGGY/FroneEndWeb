'use strict';

var gulp = require('gulp');

var $ = require('gulp-load-plugins')();
var saveLicense = require('uglify-save-license');
var gulp = require('gulp');
var utf8convert = require('gulp-utf8-convert');

gulp.task('styles', function () {
    return gulp.src('app/styles/*.css')
    .pipe(utf8convert())
    .pipe($.plumber())
    .pipe($.autoprefixer('last 1 version'))
    .pipe(gulp.dest('dist/styles'))
    .pipe($.size());
});

gulp.task('scripts', function () {
  return gulp.src('app/scripts/**/*.js')
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.size());
});

gulp.task('partials', function () {
  return gulp.src('app/partials/**/*.html')
    .pipe($.minifyHtml({
      empty: true,
      spare: true,
      quotes: true
    }))
    .pipe(gulp.dest("dist/partials"))
    .pipe($.size());
});

gulp.task('layouts', function () {
    return gulp.src('app/layouts/**/*.html')
      .pipe($.minifyHtml({
          empty: true,
          spare: true,
          quotes: true
      }))
      .pipe(gulp.dest("dist/layouts"))
      .pipe($.size());
});

gulp.task('copy', function () {
    gulp.src(['app/Web.config'])
        .pipe(gulp.dest('dist'))

    gulp.src('app/fonts/**/*')
      .pipe(gulp.dest('dist/fonts'))
      .pipe($.size());

    gulp.src('app/scripts/js/**/*')
      .pipe(gulp.dest('dist/scripts/js'))
      .pipe($.size());
});

gulp.task('html', ['styles', 'scripts', 'partials', 'layouts','copy'], function () {
  var jsFilter = $.filter('**/*.js');
  var cssFilter = $.filter('**/*.css');

  return gulp.src('app/*.html')
    .pipe($.useref.assets())
    .pipe($.rev())
    .pipe(jsFilter)
    .pipe($.ngmin())
    .pipe($.uglify({preserveComments: saveLicense}))
    .pipe(jsFilter.restore())
    .pipe(cssFilter)
    .pipe($.replace('bower_components/bootstrap-sass-official/vendor/assets/fonts/bootstrap','fonts'))
    .pipe($.csso())
    .pipe(cssFilter.restore())
    .pipe($.useref.restore())
    .pipe($.useref())
    .pipe($.revReplace())
    .pipe(gulp.dest('dist'))
    .pipe($.size());
});

gulp.task('images', function () {
  return gulp.src('app/images/**/*')
    .pipe(gulp.dest('dist/images'))
    .pipe($.size());
});

gulp.task('clean', function () {
  return gulp.src(['.tmp', 'dist'], { read: false }).pipe($.clean());
});

gulp.task('build', ['html', 'images']);
