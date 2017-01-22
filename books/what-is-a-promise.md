In order to understand Promise in JavaScript one must know its [motivation](https://www.promisejs.org/). Although it is not required, it is also good to know about [Callback or Higher-order Function](http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/).

# What is a Callback?
- A Callback function is also know as a higher-order function, is a function that is passed to another function.
- It is the most commonly used patter in Functional Programming.
- Not all Callbacks are Async see [example](examples/1-callback.js)

# Why Promise?
- To solve the [Callback Hell](http://callbackhell.com/) problem see [example](examples/2-callback-hell.js)
- These 2 reasons are easily achievable by synchronous programming, but with Promise it is easily achieved:
    + Return Values from Asynchronous function
    + Throw and catch expresions
- Asynchronous Programming
    + Serial Flow
    + Paralell Flow

# What is a Promise?
- A Promise is a basically a State Machine.
