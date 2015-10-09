import gulp from 'gulp';
import jade from 'gulp-jade';

gulp.task('templates', () => {
  return gulp.src('assets/templates/index.jade')
    .pipe(jade())
    .pipe(gulp.dest('public'));
});
