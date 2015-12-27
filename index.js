'use strict'

let scripts = require('./lib/scripts'),
    styles  = require('./lib/styles')

module.exports = function(gulp, name) {

	return {
		scripts : scripts.bind(null, gulp, name),
		styles  : styles.bind(null, gulp, name)
	}

}