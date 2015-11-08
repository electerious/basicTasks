'use strict'

let catchError   = require('./catchError')(),
    sass         = require('gulp-sass'),
    rename       = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    minifyCss    = require('gulp-minify-css')

module.exports = function(gulp, name, opts) {

	return (function() {

		gulp.src(opts.from)
		    .pipe(sass())
		    .on('error', catchError)
		    .pipe(rename((path) => path.basename = name + '.min'))
		    .pipe(autoprefixer('last 2 version', '> 1%'))
		    .pipe(minifyCss())
		    .pipe(gulp.dest(opts.to))

	})

}