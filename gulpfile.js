const { dest, src, series } = require('gulp');
const eslint = require('gulp-eslint');
const babel = require('gulp-babel');
const scss = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const del = require('del');
const rename = require('gulp-rename');

const components = [
  'components/**/*.tsx',
  'components/**/*.ts',
  '!components/**/docs/**',
  '!components/**/__tests__/**',
];
const styles = ['components/**/*.scss', 'components/*.scss'];
const FOLDER = {
  es: 'es',
  lib: 'lib',
  build: 'build',
};

function compileScripts(babelEnv, destDir) {
  // set eslint env
  process.env.BABEL_ENV = babelEnv;
  return src(components)
    .pipe(babel())
    .pipe(dest(destDir));
}

function clean(cb) {
  del([FOLDER.build, FOLDER.lib, 'es'])
    .then(() => {
      cb();
    })
    .catch(err => {
      throw err;
    });
}

async function lint(cb) {
  src(components)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
  cb();
}

function copyScss(cb) {
  src(styles)
    .pipe(dest(FOLDER.lib))
    .pipe(dest(FOLDER.es));
  cb();
}

/**
 *
 * compile scss
 */
function compileScss(cb) {
  src(styles)
    .pipe(scss())
    .pipe(autoprefixer())
    .pipe(cssnano({ zindex: false, reduceIdents: false }))
    .pipe(dest(FOLDER.lib))
    .pipe(dest(FOLDER.es));
  cb();
}

/**
 *
 * compile cjs ES5
 */
function compileCJS() {
  return compileScripts('cjs', FOLDER.lib);
}

/**
 *
 * compile esm ES6
 */
function compileESM() {
  return compileScripts('esm', FOLDER.es);
}

/**
 *
 * compile dist CDN
 */

exports.compile = series(clean, lint, copyScss, compileScss, compileCJS, compileESM);

exports.default = series(clean, lint, copyScss, compileScss, compileCJS, compileESM);
