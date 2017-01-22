/****************************************
 * Parallel Flow Control
 *
 * Return an array of string in lowercase in the SAME order.
 ****************************************/
var strArr = ["ABC","EFG","gooGLE","YAHoo!"];

var lowerCaseArr = [],
    arrCounter = 0;

function lowerCase(item, cb) {
	cb(item.toLowerCase())
}

function lowerCasePromise(item) {
    return new Promise(function(resolve, reject) {
        lowerCase(item, function(lowerCaseString){
            resolve(lowerCaseString)
        })
    })
}

const promises = strArr.map(function(str) {
    return lowerCasePromise(str)
})

Promise
    .all(promises)
    .then(function(data) {
        console.log(data)
    })
    .catch(function(err) {
        console.error(err)
    })
