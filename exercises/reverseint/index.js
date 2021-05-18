/* --- Directions
 Given an integer, return an integer that is the reverse
 ordering of numbers.
 --- Examples
   reverseInt(15) === 51
   reverseInt(981) === 189
   reverseInt(500) === 5     0's disappear 
   reverseInt(-15) === -51   
   reverseInt(-90) === -9

Result should be a number not a string. Both the input and the output should be numbers. 

1. Convert the number into a String
2. Split the string into an Array
3. Reverse the Number 
4. Join it back together into a String
5. We use parseInt() to convert a String into an integer
6. With Math.sign() If n is more than 0 the number will be positive, If n is less than 0 the number will be negative
*/

function reverseInt(n) {
  const reversed = n.toString().split("").reverse().join("");
  return parseInt(reversed) * Math.sign(n);
}
/*
ALTERNATIVE
 if (n < 0) {  
   return parseInt(reversed) * -1 
 } 
 return parseInt(reversed)
 } 

function reverseInt(n) {
  return parseInt(n.toString().split("").reverse().join("")) * Math.sign(n);
}

*/
module.exports = reverseInt;
