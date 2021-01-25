const gulp        = require('gulp');
const fileinclude = require('gulp-file-include');

const paths = {
  scripts: {
    src: './emails',
    dest: './build/'
  }
};

async function includeHTML(){
  return gulp.src([
    '*.html',
    '!header.html', // ignore
    '!footer.html' // ignore
    ])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest(paths.scripts.dest));
}

exports.default = includeHTML;
