const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');

gulp.task('lint', () => {
  return gulp.src(['**/*.js', '!node_modules/**', '!public/javascripts/*.js'])
      .pipe(eslint())
      .pipe(eslint.format());
      // .pipe(eslint.failAfterError());
});

gulp.task('test', () => {
  return gulp.src(['test/*.spec.js'])
    .pipe(mocha());
});

gulp.task('default', ['lint', 'test'], () => {
});

gulp.task('watch', ['lint', 'test'], () => {
  gulp.watch(['./**/*.js'], ['lint', 'test']);
});

