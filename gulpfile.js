var gulp = require('gulp');
var path = require('path');
var browserify = require('browserify');
var less = require('gulp-less');
var source = require('vinyl-source-stream');

var paths = {
  js: ['web/js/src/**/*.js'],
  less: ['web/css/src/**/*.less']
};

// css preprocessor
gulp.task('css', function() {
	return gulp.src('./web/css/src/**/*.less')
		.pipe(less({}))
		.pipe(gulp.dest('./web/css/'));
});

// javascript preprocessor
gulp.task('js', function() {
	return browserify('./web/js/src/main.js')
		.bundle()
		.pipe(source('main.js'))
		.pipe(gulp.dest('./web/js/'));
});


gulp.task('watch', function() {
	gulp.watch(paths.js, ['js']);
  gulp.watch(paths.less, ['css']);
})

gulp.task('default', ['watch', 'js', 'css'])