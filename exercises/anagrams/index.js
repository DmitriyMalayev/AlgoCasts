/* 
Directions
  Check to see if two provided strings are anagrams of each other.
  One string is an anagram of another if it uses the same characters
  in the same quantity. Only consider characters, not spaces
  or punctuation.  Consider capital letters to be the same as lower case

  Examples
  anagrams('rail safety', 'fairy tales') --> True
  anagrams('RAIL! SAFETY!', 'fairy tales') --> True
  anagrams('Hi there', 'Bye there') --> False

RegExp

^ specifies NOT 

\w Matches any alphabetic character including an underscore.Same as [A- Za - z0 -9_]


/g Finds all matches 

, "" replace all with empty string

  
const word = "HI THERE!!!!!"
word.replace(/[^\w]/g, " ")


const obj = { a: 1, b: 2, c: 3 }
Object.keys(obj).length



*/


function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB)
}

function cleanString(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("")
}


// function anagrams(stringA, stringB) {
//   const aCharMap = buildCharMap(stringA);
//   const bCharMap = buildCharMap(stringB);

//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false;
//   }

//   for (let char in aCharMap) {
//     if (aCharMap[char] !== bCharMap[char]) {
//       return false;
//     }
//   }
//   return true;
// }

// function buildCharMap(str) {
//   const charMap = {};

//   for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1;
    //takes into account if a particular character has not been assigned to a character map.
//   }
//   return charMap; //Don't forget to have a return statement
// }

module.exports = anagrams;
