var gulp       = require('gulp');
var browserify = require('browserify');
var source     = require('vinyl-source-stream');
var uglify     = require('gulp-uglify');
var streamify  = require('gulp-streamify'),
    gulpif     = require('gulp-if');

var env = process.env.NODE_ENV;

/*
 * Task js takes a file named 'main.js'
 * call bundle to generate the bundle that allows the the browser
 * to use the Node.js require
 * source to specify the output filename
 * uglify used to generate production file (i.e. make the source code
 * in a single file.
 * we call streamify to convert the file bundle from stream to a normal data
 * inorder to be used by uglify
 * gulp.des is used to specify the destination
 * */
gulp.task('js', function () {
    return browserify('main')
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulpif(false, streamify(uglify())))
        .pipe(gulp.dest('.'));
});



