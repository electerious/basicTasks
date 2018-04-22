'use strict'

module.exports = function() {

	return function(err) {

		console.log(err.toString())
		this.emit('end')

	}

}