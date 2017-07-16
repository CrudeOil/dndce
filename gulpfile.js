var gulp = require('gulp');
var runSequence = require('run-sequence');
var inject = require('gulp-inject');
var tsc = require('gulp-tsc')


var wwwroot = './www'


// npm dependencies
gulp.task('copylib', (cb) => {
    console.log('test');
    return gulp.src([`/lib/**/*`], {base: '/lib'})
        .pipe(gulp.dest(`${wwwroot}/lib/`));
});


// copy files
gulp.task('copysrc', (cb) => {
    console.log('test');
    return gulp.src(['src/**/*'], {base: 'src'})
        .pipe(gulp.dest(`${wwwroot}`));
});



// compile typescript
gulp.task('tsc', (cb) => {
    return gulp.src([`${wwwroot}/**/*.ts`], {base: wwwroot})
        .pipe(tsc({
            "module": "commonjs",
            "target": "ES6",
            "noimplicitany": false,
            "sourcemap": true
        }))
        .pipe(gulp.dest(`${wwwroot}`));
    cb();
});
// inject dependencies
gulp.task('insertjs', function(cb){
    console.log('test');
    return gulp.src(`${wwwroot}/index.html`)
        .pipe(inject(gulp.src([`${wwwroot}/components/controllers/*.js`], {base: wwwroot}), {
                starttag: '<!-- gulp:controllers -->',
                endtag: '<!-- endgulp -->',
                relative:true
            }
        ))
        .pipe(gulp.dest(`${wwwroot}`));
});

gulp.task('deploy', (cb) => {
    runSequence('copylib', 'copysrc', 'tsc', 'insertjs', cb);
});
