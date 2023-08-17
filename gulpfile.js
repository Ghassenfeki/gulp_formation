const livereload = require("gulp-livereload");
const gulp = require("gulp");
const cleanCSS = require('gulp-clean-css');
var nunjucksRender = require('gulp-nunjucks-render');
const sass = require('gulp-sass')(require('sass'));

gulp.task('build-images', function minifyImages(cb) {
  import('gulp-imagemin')
    .then(module => {
      const imagemin = module.default;
      gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build'));
      cb();
    })
    .catch(err => {
      console.log(err);
      cb();
    });
});

gulp.task('build-sass', function buildStyles() {
  return gulp.src('./src/components/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build'));
});

gulp.task('build-Ts', function buildTs() {
  return gulp.src('./src/components/**/*.ts')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build'));
});

gulp.task('build-fonts', function font() {
  return src('./src/fonts/**/*.{ttf,otf,woff2}', { read: false })
    .pipe(gulpFont({
      ext: '.css',
      fontface: './src/fonts',
      relative: './src/fonts',
      dest: './build/fonts',
      embed: ['woff2'],
      collate: false
    }))
    .pipe(dest('./build/fonts'));
});


gulp.task('nunjucks-html', function () {
  return gulp.src('./src/*.njk')
    .pipe(nunjucksRender({
      path: ['./src'],
      ext: '.html'
    }))
    .pipe(gulp.dest('./build'));
});

gulp.task('build-styles', function () {
  return gulp.src('./src/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build'));
});

gulp.task('build-js', function () {
  return gulp.src('./src/*.ts')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build'));
});

gulp.task("default", gulp.parallel("nunjucks-html", "build-styles", "build-sass", "build-images", "build-Ts", "build-js", "build-fonts"));

exports.default = function () {
  require("./server.js");
  livereload.listen();
};
