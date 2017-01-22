// Example from http://colintoh.com/blog/staying-sane-with-asynchronous-programming-promises-and-generators#parallel_flow
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

strArr.forEach(function(item, index){
    lowerCase(item, function(lowerCaseString){
        lowerCaseArr[index] = lowerCaseString;
        arrCounter++;

        if(arrCounter === strArr.length){
            console.log(lowerCaseArr);
            // ["abc","efg","google","yahoo!"]
        }
    });
});