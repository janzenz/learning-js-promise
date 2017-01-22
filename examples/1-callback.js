// Example of a Callback
//  Not all Callbacks are asynchronous

// This is synchronous
function withCallback(cb) {
	cb()
}

withCallback(cb)

// This is an example of asynchronous callback
function withAsyncCallback(cb) {
	setTimeout(function() {
		console.log('After 1 second...')
		cb()
	}, 1000)
}

withAsyncCallback(cb)

function cb() {
	console.log('This is a callback!')
}
