/* --- Directions
 Write a function that accepts a positive number N.
 The function should console log a step shape
 with N levels using the # character. 
 Make sure to console log each step (each independent level)  
 Make sure the step has spaces on the right hand side! 

 --- Examples
   steps(2)
       '# '
       '##'
   steps(3)
       '#  '
       '## '
       '###'
   steps(4)
       '#   '
       '##  '
       '### '
       '####'
Solution 1
  From 0 to n  (iterate through rows)
    Create an empty string, "stair"  (singular)
    From 0 to n (iterate through columns)
      IF the current column is equal or less than the current row
        Add a "#" to "stair"
      ELSE
        Add a space to "stair"
  console.log "stair"
    
*/
//FIRST SOLUTION
function steps(n) {
  for (let row = 0; row < n; row++) { //iterating from 0 to n  (rows)
    let stair = ""; //For every row we loop through we create a new empty string 
    for (let column = 0; column < n; column++) {  //iterating from 0 to n  (columns)
      if (column <= row) {  //For each column we write an if statement 
        stair += "#";   //We add a # symbol to the end of the stair string 
      } else {
        stair += " ";  //We add a space to the end of the string. Make sure it's not just an empty string. 
      }
    }
    console.log(stair);
    // After we process one entire row and assembled one full stair string we need to console log it.
    // Make sure to console.log inside of the for loop because we want to console log for each row we want to assemble.   
  }
}



module.exports = steps
