'use strict';
const gulp = require('gulp');
const sass = require('gulp-sass');
const watch = require('gulp-watch');
const browserSync = require('browser-sync');

gulp.task('html', function() {
  return gulp.src('index.html')
  .pipe(browserSync.reload({stream:true}));
});

gulp.task('css', function() {
  return gulp.src('style.css')
  .pipe(browserSync.reload({stream:true}));
});

gulp.task('js', function() {
  return gulp.src('script.js')
  .pipe(browserSync.reload({stream:true}));
});

gulp.task('watcher', function() {
  gulp.watch('index.html', ['html']);
  gulp.watch('style.css', ['css']);
  gulp.watch('script.js', ['js']);
});

gulp.task('browsersync', function() {
  browserSync({
    server: {
      baseDir: './'
    },
    port: 8080,
    open: true,
    notify: false
  });
});

gulp.task('default', ['watcher', 'browsersync']);
