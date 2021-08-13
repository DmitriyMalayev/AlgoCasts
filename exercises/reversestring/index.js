// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  debugger
  return str.split("").reverse().join(""); 
}
reverse("hello")

// function secondReverse(str) {
//   let reversed = "";
//   for (let character of str) {
//     reversed = character + reversed;

//   }
//   return reversed;
// }

// secondReverse("hello")
/*
Declaring a variable called character. str is the iterable object that we want to loop through.


""  =  "a" + ""    "a"

"a"  =  "p" + "a"     "pa"
"pa"  =  "p" + "pa"     "ppa"
"ppa" = "l" + "ppa"  "lppa"
"lppa" = "e" + "lppa" "ellpa"

elppa
apple   

*/

// function thirdReverse(str) {
//    debugger
//    return str.split("").reduce((rev, char) => char + rev, "")
//  }

// thirdReverse("asdf")



module.exports = reverse;
 

// .reduce takes two arguments, an arrow function and a starting value. 
