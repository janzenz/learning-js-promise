// This is a Callback Hell example

setTimeout(
	function() {
		console.log('Start - func1')
		setTimeout(
				function() {
					console.log('Start - func2')
					setTimeout(
							function() {
								console.log('Start - func3')
								setTimeout(
										function() {
											console.log('Start - func4')
											console.log('End - func4')
										}
									,100)
								console.log('End - func3')
							}
						,2000)
					console.log('End - func2')
				}
			,300)
		console.log('End - func1')
	}
,1000)
