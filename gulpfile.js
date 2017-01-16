// REQUIRES
const babel = require('gulp-babel');
const bump = require('gulp-bump');
const changelog = require('gulp-conventional-changelog');
const concat = require('gulp-concat');
const del = require('del');
const eslint = require('gulp-eslint');
const gulp = require('gulp');
const merge2 = require('merge2');
const rename = require('gulp-rename');
const run = require('run-sequence');
const stream = require('stream');
const through2 = require('through2');
const tools = require('aurelia-tools');
const ts = require('gulp-typescript');
const vinyl = require('vinyl');

const pck = require('./package.json');


// PRIVATE PROPERTIES
const bumps = ['major', 'minor', 'patch', 'prerelease'];
const file = pck.name + '.js';
const modules = ['amd', 'commonjs', 'es2015', 'native-modules', 'system'];
const paths = { output: 'dist/', root: 'src/', source: 'src/**/*.js' };


// TASK - CLEAN
gulp.task('clean', () => del([paths.output]));


// TASK - BUILD
gulp.task('build', () => run('clean', 'build-index', modules.map((module) => `build-babel-${module}`), 'build-dts'));


// TASKS - BUILD BABEL
modules.forEach((module) => {
  gulp.task(`build-babel-${module}`, () =>
    srcForBabel()
      .pipe(babel({
        comments: false,
        plugins: ['transform-decorators-legacy'],
        presets: module === 'es2015' ? ['stage-1'] : [['env', {
            include: ['transform-es2015-template-literals'],
            loose: true,
            modules: switchModule(module),
            targets: { browsers: ['last 2 versions', 'not ie <= 11'] }
          }]]
      }))
      .pipe(cleanGeneratedCode())
      .pipe(gulp.dest(paths.output + module))
  );
});


// TASKS - BUILD DTS
gulp.task('build-dts', () => {
  let tsProject = ts.createProject('tsconfig.json');
  let tsResult = gulp
    .src(paths.output + file)
    .pipe(rename((path) => path.extname = path.extname === '.js' ? '.ts' : path.extname))
    .pipe(tsProject());
  return tsResult.dts.pipe(gulp.dest(paths.output));
});


// TASK - BUILD INDEX
gulp.task('build-index', () => gulp.src(paths.source).pipe(concat(file)).pipe(gulp.dest(paths.output)));


// TASK - BUMPS
bumps.forEach((type) => gulp.task(`bump-${type}`, () => gulp.src(['package.json', 'bower.json']).pipe(bump({ type: type })).pipe(gulp.dest('./'))));


// TASK - CHANGELOG
gulp.task('changelog', () => gulp.src('CHANGELOG.md').pipe(changelog({ preset: 'angular' })).pipe(gulp.dest('./')));


// TASK - ESLINT
gulp.task('eslint', () => gulp.src(paths.source).pipe(eslint()).pipe(eslint.format()).pipe(eslint.failOnError()));


// PRIVATE METHODS
function cleanGeneratedCode() {
  return through2.obj(function(file, enc, callback) {
    file.contents = new Buffer(tools.cleanGeneratedCode(file.contents.toString('utf8')));
    this.push(file);
    return callback();
  });
}

function gulpFileFromString(filename, string) {
  const src = stream.Readable({ objectMode: true });
  src._read = function() {
    this.push(new vinyl({ base: paths.output, contents: new Buffer(string), cwd: paths.root, path: filename }));
    this.push(null);
  };
  return src;
}

function srcForBabel() {
  return merge2(
    gulp.src(paths.output + file),
    gulpFileFromString(`${paths.output}index.js`, `export * from './${pck.name}';`)
  );
}

function switchModule(module) {
  switch (module) {
    case 'amd': return 'amd';
    case 'commonjs': return 'commonjs';
    case 'es2015': return false;
    case 'native-modules': return false;
    case 'system': return 'systemjs';
  }
}
