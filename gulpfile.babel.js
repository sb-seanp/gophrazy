import gulp from 'gulp';
import jade from 'gulp-jade';
import stylus from 'gulp-stylus';
import nib from 'nib';

gulp.task('templates', () => {
  return gulp.src('assets/templates/index.jade')
    .pipe(jade())
    .pipe(gulp.dest('public'));
});

gulp.task('stylesheets', () => {
  return gulp.src('assets/stylesheets/*.styl')
    .pipe(stylus({
      compress: true,
      use: nib(),
    }))
    .pipe(gulp.dest('public/stylesheets'));
});

gulp.task('default', ['templates', 'stylesheets']);
