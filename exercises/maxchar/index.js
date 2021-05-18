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

  Convert it into an object. Keys will be the letter and the Values will be how many times it appears. 
*/

function maxChar(str) {
  const charMap = {}; //empty object

  for (let char of str) {
    //We use OF when iterating over a string or a number
    if (charMap[char]) {
      //present? incremenent it. if not present assign it to 1.
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  let max = 0;
  let maxChar = "";

  for (let char in charMap) {   //We use IN when iterating over an object
    //If we find a character that has more uses than max then we will set max equal to that new value. We set maxChar equal to the character that is responsible for the number of uses (the letter) 
    
    if (charMap[char] > max) { //charMap[char] uses the key to access the value  
      max = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}
module.exports = maxChar;
