
/*
Base Case
  first establish when is the time to end the recursion process.
Recursion Tips
  Figure out the bare minimum pieces of information to represent your problem. 
  Give reasonable defaults to the bare minimum pieces of information. 
  Check the base case. 
    is there any work left to do?
    If not, return. 
  Do some work
    Call your function again
    Make sure the arguments have changed in some fashion. 
*/



function printNumber(n, dec=1) {
  if (n === 0) {
    return 
  }
  console.log(n)
  printNumber(n-dec) //recursive step. Avoids infinity loop. reassigns n. 
}

printNumber(10)




