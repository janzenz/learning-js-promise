// Example of Promise with reject and resolve

const promise1 = function(success) {
	return new Promise(function(resolve, reject) {
		if (success) {
			resolve('Promise 1 completed')
		} else {
			reject('Promise 1 rejected')
		}
	})
}

// Promise success
promise1(true)
	.then(function(result) {
		console.log(result)
	}, function(error) {
		console.error(error)
	})

// Promise failure
promise1(false)
	.then(function(result) {
		console.log(result)
	}, function(error) {
		console.error(error)
	})
