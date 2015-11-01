var gulp = require('gulp');
var path = require('path');
var browserify = require('browserify');
var less = require('gulp-less');
var source = require('vinyl-source-stream');



// css preprocessor
gulp.task('css', function() {
	return gulp.src('./web/css/**/*.less')
		.pipe(less({}))
		.pipe(gulp.dest('./web/css/'));
});

// javascript preprocessor
gulp.task('js', function() {
	return browserify('./web/js/main-src.js')
		.bundle()
		.pipe(source('main.js'))
		.pipe(gulp.dest('./web/js/'));
});
