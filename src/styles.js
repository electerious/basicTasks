'use strict'

module.exports = function(gulp, name, opts) {

	const catchError = require('./catchError')()
	const sass = require('gulp-sass')
	const rename = require('gulp-rename')
	const autoprefixer = require('gulp-autoprefixer')
	const csso = require('gulp-csso')

	let changePath = null

	if (opts.name == null) changePath = (path) => path.basename = name + '.min'
	else changePath = opts.name

	return function() {

		return gulp.src(opts.from)
			.pipe(sass())
			.on('error', catchError)
			.pipe(rename(changePath))
			.pipe(autoprefixer('last 2 version', '> 1%'))
			.pipe(csso({ restructure: false }))
			.pipe(gulp.dest(opts.to))

	}

}