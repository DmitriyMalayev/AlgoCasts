/*
Directions
 Given a string, return the character that is most
 commonly used in the string.
 --- Examples
 maxChar("abcccccccd") === "c"
 maxChar("apple 1231111") === "1"
Common String Questions 
  What is the most common character in a string?
  Does string A have the same characters as string B? Same as is it an anagram?  
  Does the given string have any repeated characters in it? 

Convert it into an object. 
Keys will be the letter and the Values will be how many times it appears. 

We use OF when iterating over a string or a number.
If a character is present, we increment it. 
If a character isn't present, we assign it to 1. 

We use IN when iterating over an object. 
If we find a character that has more uses than max then we will set max equal to that new value.
We set maxChar equal to the character that is responsible for the number of uses, which is the letter. 
charMap[char] uses the key to access the value
*/
function maxChar(str) {
  const charMap = {};

  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  let max = 0;
  let maxChar = "";

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}
module.exports = maxChar;
