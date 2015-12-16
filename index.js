'use strict'

let scripts = require('./src/scripts/scripts'),
    styles  = require('./src/scripts/styles')

module.exports = function(gulp, name) {

	return {
		scripts : scripts.bind(null, gulp, name),
		styles  : styles.bind(null, gulp, name)
	}

}