'use strict'

let scripts = require('./scripts')
let styles  = require('./styles')

module.exports = function(gulp, name) {

	return {
		scripts : scripts.bind(null, gulp, name),
		styles  : styles.bind(null, gulp, name)
	}

}