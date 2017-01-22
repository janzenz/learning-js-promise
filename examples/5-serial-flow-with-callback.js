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
			return false
		}

		cb('goOGle - thE SeaRch EnginE')
	}, Math.random() * 1000)
}

function getHTMLTitle(html, cb) {
	console.log('Retrieving the HTML Title')
	setTimeout(function() {
		// Returning HTML Title
		const title = html // Mock parsing of the HTML
		cb(title)
	}, Math.random() * 1000)
}

function formatTitle(validTitle, cb) {
	console.log('Formatting Title')
	setTimeout(function() {
		const formattedTitle = validTitle
								.toLowerCase()
								.replace(/\b(\w)/g, s => s.toUpperCase())
		cb(formattedTitle)
	}, Math.random() * 1000)
}

checkUrl('http://google.com', function(html) {
	getHTMLTitle(html, function(htmlTitle) {
		formatTitle(htmlTitle, function(validTitle) {
			console.log(validTitle)
		})
	})
})
