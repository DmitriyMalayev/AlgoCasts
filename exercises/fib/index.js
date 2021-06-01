/* --- Directions
 Print out the n-th entry in the fibonacci series.
 The fibonacci series is an ordering of numbers where
 each number is the sum of the preceeding two.
 For example, the sequence
  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
 forms the first ten entries of the fibonacci series.
 Example:
   fib(4) === 3
0-1-1-2-3-5-8-13
0 + 1 = 1
1 + 1 = 2
2 + 3 = 5  

Note
  We manually insert 0 and 1 
*/

function fib(n) {   //Linear Runtime 
  const result = [0, 1]
  for (let i = 2; i <= n; i++){
    const a = result[i - 1]; //could also be result[result.length -1]     2 - 1 = 1
    const b = result[i - 2]; //could also be result[result.length -2]     2 - 2 = 0

    result.push(a + b)
  }
  return result[n] // result[result.length -1]
}



module.exports = fib;
