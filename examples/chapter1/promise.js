var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;

function Promise() {
  // store state which can be PENDING, FULFILLED or REJECTED
  var state = PENDING; // PENDING is the default state

  // store value or error once FULFILLED or REJECTED
  var value = null;

  // store success & failure handlers attached by calling .then or .done
  var handlers = [];

  function fulfill(result) {
    state = FULFILLED;
    value = result;
  }

  function reject(error) {
    state = REJECTED;
    value = error;
  }

  function resolve(result) {
  	try {
  		var then = getThen(result);
  		if (then) {
  			doResolve(then.bind(result), resolve, reject)
  		}
  	}
  }
}
