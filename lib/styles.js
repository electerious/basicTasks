'use strict'

let catchError   = require('./catchError')()
let sass         = require('gulp-sass')
let rename       = require('gulp-rename')
let autoprefixer = require('gulp-autoprefixer')
let csso         = require('gulp-csso')

module.exports = function(gulp, name, opts) {

	let changePath = null

	if (opts.name==null) changePath = (path) => path.basename = name + '.min'
	else                 changePath = opts.name

	return (function() {

		gulp.src(opts.from)
		    .pipe(sass())
		    .on('error', catchError)
		    .pipe(rename(changePath))
		    .pipe(autoprefixer('last 2 version', '> 1%'))
		    .pipe(csso())
		    .pipe(gulp.dest(opts.to))

	})

}