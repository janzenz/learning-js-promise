In order to understand Promise in JavaScript one must know its [motivation](https://www.promisejs.org/). Although it is not required, it is also good to know about [Callback or Higher-order Function](http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/).

# What is a Callback?
- A Callback function is also know as a higher-order function, is a function that is passed to another function.
- It is the most commonly used patter in Functional Programming.
- Not all Callbacks are Async see [example](examples/1-callback.js)

# Why Promise?
- To solve the [Callback Hell](http://callbackhell.com/) problem see [example](examples/2-callback-hell.js)
- [Example of Promise](examples/3-promise.js)
- [Example of Promise with Async](examples/4-promise-with-async.js)
- These 2 reasons that are easily achievable by Synchronous Programming which is difficult for Asynchronous Programming but with Promise it is easily achieved:
    + Return Values from Asynchronous function
    + Throw and catch expresions
- [Asynchronous Programming Control Flow](http://colintoh.com/blog/staying-sane-with-asynchronous-programming-promises-and-generators#control_flow)
    + Serial Flow - Serial Flow happens when you need a group of asynchronous tasks to finish in series before you execute your code.
        * [Callback Version](examples/5-serial-flow-with-callback.js)
        * [Promise Version](examples/5-serial-flow-with-promise.js)
    + Paralell Flow - Parallel Flow happens when you need a group of asynchronous tasks to be completed together before executing another task.
        * [Callback Version](examples/6-parallel-flow-with-callback.js)
        * [Promise Version](examples/6-parallel-flow-with-promise.js)

# What is a Promise?
- A Promise is basically a State Machine.
