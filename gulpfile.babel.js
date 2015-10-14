import gulp from 'gulp';
import jade from 'gulp-jade';
import stylus from 'gulp-stylus';
import nib from 'nib';

const paths = {
  dist: {
    public: 'app/dist/',
    stylesheets: 'app/dist/stylesheets/',
    javascript: 'app/dist/javascript/',
  },
  src: {
    templates: 'app/src/assets/templates/',
    stylesheets: 'app/src/assets/stylesheets/',
    javascript: 'app/src/assets/javascript/',
    components: 'app/src/components/',
  },
};

gulp.task('templates', () => {
  return gulp.src(paths.src.templates + 'index.jade')
    .pipe(jade({
      pretty: true,
    }))
    .pipe(gulp.dest(paths.dist.public));
});

gulp.task('stylesheets', () => {
  return gulp.src(paths.src.stylesheets + '*.styl')
    .pipe(stylus({
      compress: true,
      use: nib(),
    }))
    .pipe(gulp.dest(paths.dist.stylesheets));
});

gulp.task('default', ['templates', 'stylesheets']);
