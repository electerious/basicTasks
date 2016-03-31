'use strict'

let catchError = require('./catchError')()
let browserify = require('browserify')
let babelify   = require('babelify')
let source     = require('vinyl-source-stream')
let buffer     = require('vinyl-buffer')
let uglify     = require('gulp-uglify')

module.exports = function(gulp, name, opts) {

	return (function() {

		let bify = browserify({
			entries    : opts.from,
			standalone : name
		})

		let transformer = babelify.configure({
			presets: [ 'es2015' ]
		})

		bify.transform(transformer)
		    .bundle()
		    .on('error', catchError)
		    .pipe(source(name + '.min.js'))
		    .pipe(buffer())
		    .pipe(uglify())
		    .on('error', catchError)
		    .pipe(gulp.dest(opts.to))

	})

}