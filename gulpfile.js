const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');

gulp.task('build', (done) => {
  gulp.src(['src/**/*.js'])
    .pipe(babel({ presets: ['@babel/preset-env'] }))
    .pipe(gulp.dest('lib'));
  done();
});

gulp.task('lint', (done) => {
  gulp.src([
    'gulpfile.js',
    'src/**/*.js',
  ])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
  done();
});

gulp.task('build', gulp.series('lint', (done) => {
  gulp.src(['src/**/*.js'])
    .pipe(babel({ presets: ['@babel/preset-env'] }))
    .pipe(gulp.dest('lib'));
  done();
}));
