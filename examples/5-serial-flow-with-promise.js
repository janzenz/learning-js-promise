/**
 * Serial Flow Control
 * 1. Check if URL is valid
 *   - If valid grab the contents
 *     + Get the HTML Title
 *       * If valid display the Title
 *       * If none return with error
 *   - If not return with error
 */

function checkUrl(url, cb) {
	console.log('Checking Url ', url)
	setTimeout(function() {
		// Check url
		//  mock status code
		const statusCode = 200

		if (statusCode !== 200) {
			throw new Error('URL cant be reached')
		}

		cb('goOGle - thE SeaRch EnginE')
	}, Math.random() * 1000)
}

function getHTMLTitle(html, cb) {
	console.log('Retrieving the HTML Title', html)
	setTimeout(function() {
		// Returning HTML Title
		const title = html // Mock parsing of the HTML
		cb(title)
	}, Math.random() * 1000)
}

function formatTitle(validTitle, cb) {
	console.log('Formatting Title ', validTitle)
	setTimeout(function() {
		try {
			const formattedTitle = validTitle
									.toLowerCase()
									.replace(/\b(\w)/g, s => s.toUpperCase())
			cb(formattedTitle)
		} catch (e) {
			throw new Error(e)
		}
	}, Math.random() * 1000)
}

// Wrapping old callback into Promise
function checkUrlPromise(url) {
	return new Promise(function(resolve, reject) {
		try {
			checkUrl(url, function(html) {
				resolve(html)
			})
		} catch (e) {
			reject(e)
		}
	})
}

function getHTMLTitlePromise(html) {
	return new Promise(function(resolve, reject) {
		try {
			getHTMLTitle(html, function(title) {
				if (title === '')
					reject('Title is empty')

				resolve(title)
			})
		} catch (e) {
			reject(e)
		}
	})
}

function formatTitlePromise(validTitle) {
	return new Promise(function(resolve, reject) {
		try {
			formatTitle(validTitle, function(title) {
				if (title === '')
					reject('Formatted Title is empty')

				resolve(title)
			})
		} catch (e) {
			reject(e)			
		}
	})
}

checkUrlPromise('http://google.com')
	.then(function(html) {
		return getHTMLTitlePromise(html)
	})
	.then(function(title) {
		return formatTitlePromise(title)
	})
	.then(function(formattedTitle) {
		console.log(formattedTitle)
	})
	.catch(function(error) {
		console.error('Error')
	})

