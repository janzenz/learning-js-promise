const asyncWithPromise = function(success) {
	return new Promise(function(resolve, reject) {
		// Sample async
		setTimeout(function() {

			if (success) {
				resolve('This is a success')
			} else {
				reject('This is rejected')
			}
		}, 0)
	})
}

asyncWithPromise(true)
	.then(function(result) {
		console.log(result)
	}, function(error) {
		console.error(error)
	})
