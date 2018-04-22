'use strict'

const catchError = require('./catchError')()
const browserify = require('browserify')
const babelify = require('babelify')
const source = require('vinyl-source-stream')
const buffer = require('vinyl-buffer')
const uglify = require('gulp-uglify')

module.exports = function(gulp, name, opts) {

	return function() {

		const bify = browserify({
			entries: opts.from,
			standalone: name
		})

		const transformer = babelify.configure({
			presets: [ 'es2015' ]
		})

		bify.transform(transformer, { global: true })
		    .bundle()
		    .on('error', catchError)
		    .pipe(source(name + '.min.js'))
		    .pipe(buffer())
		    .pipe(uglify())
		    .on('error', catchError)
		    .pipe(gulp.dest(opts.to))

	}

}