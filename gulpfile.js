const { dest, src, series } = require('gulp');
const path = require('path');
const eslint = require('gulp-eslint');
const babel = require('gulp-babel');
const scss = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const del = require('del');
const rollup = require('rollup');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const ts = require('rollup-plugin-typescript2');
const { babel: rollupBabel } = require('@rollup/plugin-babel');
const replace = require('rollup-plugin-replace');
const { terser } = require('rollup-plugin-terser');
const { name } = require('./package.json');

const toHump = name => name.replace(/\-(\w){1}/, (all, $1) => $1.toUpperCase());

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
  dist: 'dist',
};
const Entry = path.join(__dirname, 'components/index.ts');

function compileScripts(babelEnv, destDir) {
  // set eslint env
  process.env.BABEL_ENV = babelEnv;
  return src(components)
    .pipe(babel())
    .pipe(dest(destDir));
}

function clean(cb) {
  del([FOLDER.dist, FOLDER.lib, 'es'])
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
    .pipe(dest(FOLDER.es))
    .pipe(dest(FOLDER.dist));
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

async function compileCDN() {
  const bundle = await rollup.rollup({
    input: Entry,
    external: ['react', 'react-dom'],
    plugins: [
      replace({
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
      terser(),
      ts(),
      rollupBabel(),
      resolve({
        jsnext: true,
        main: true,
        browser: true,
      }),
      commonjs({
        include: 'node_modules/**',
        namedExports: {
          'node_modules/react-is/index.js': ['isFragment', 'ForwardRef', 'isMemo'],
        },
      }),
    ],
  });
  return await bundle.write({
    file: `${FOLDER.dist}/${name}.min.js`,
    format: 'umd',
    name: toHump(name),
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM',
    },
  });
}

exports.compileCDN = series(compileCDN);

exports.default = series(
  clean,
  lint,
  copyScss,
  compileScss,
  compileCJS,
  compileESM,
  compileCDN,
);
