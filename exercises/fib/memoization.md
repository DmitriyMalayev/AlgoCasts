```js
function fib(n) {
  //Exponential Time
  if (n < 2) {
    return n; //Only time we return a number is if it's 0 or 1
  }

  return fib(n - 1) + fib(n - 2);
}
```

fib(0) => 0
fib(1) => 1

`What do you think the runtime of this will be?`
This will be exponential because for every increase in number, we're going to get a dramatic increase in the number of function calls that get get.
`How could we improve this solution to not be in Exponential Time?`
We could do an interative solution that is Linear Runtime.
`Note`
Our fibonacci function is being called many times with identical arguments

`Memoization`
Store the arguments of each function call along with the result.
If the function is called again with the same arguments, return the precomputed result, rather than running the function again.

Generic Memoization Function
Will work for any setting
Will be called with a slow version of the Fibonacci Function
Will return a Fast, Memoized version of the Fibonacci Function

```js
function memoize(fn) {
  const cache = {}; //Record of all of the previous calls to our function and it's results.
  return function (...args) {
    if (cache[args]){
      return cache[args]
    }
    const result = fn.apply(this, args)
    cache[args] = result
    return result 
  }
}

function slowFib(n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2); //This is a reference to the constant function assigned from memoize(fib)
}

const fib = memoize(slowFib);

```

`Notes`
  return function is the same as fib
`...args`
  This is used when we don't know how many arguments a function will be called with. 
  We instruct it to take all of the arguments and assign them as an array to the variable args. 
`cache[args]`
  Check to see if this function has been called with these particular set of arguments before.
  If something exists there, we immediately return it. 
  If something doesn't exist, and we get past the if statement it means we need to make sure we call that function, take the result and cache it inside of our cache object. 
`const result`
  This is the result of calling the slowFib function
`apply`
  

# apply()  
The apply() method calls a function with a given this value, and arguments provided as an array (or an array-like object)
`Syntax`
  apply(thisArg)
  apply(thisArg, argsArray)
`Parameters`
  thisArg  Required
    The value of this provided for the call to func.
    This may not be the actual value seen by the method. 
    If the method is a function in a non-strict mode code, null and undefined will be replaced with the global object, and primitive values will be boxed.   
  argsArray  Optional 
    An array like object, specifying the arguments with which func should be called, or null, or undefined if no arguments should be provided to the function. 
    These arguments can be generic array like object instead of an array.
  Return Value
    The result of calling the function with the specified this value and arguments. 
    
Return value
The result of calling the function with the specified this value and arguments.










