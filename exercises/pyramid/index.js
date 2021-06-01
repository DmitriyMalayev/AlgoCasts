/* --- Directions
 Write a function that accepts a positive number N.
 The function should console log a pyramid shape
 with N levels using the # character.  Make sure the
 pyramid has spaces on both the left *and* right hand sides
 --- Examples
   pyramid(1)
       '#'
   pyramid(2)
       ' # '
       '###'
   pyramid(3)
       '  #  '
       ' ### '
       '#####'
Solution 1 
  From 0 to n  (iterate through rows)
    Create an empty string, "level"
    From 0 to ??? (columns) 
      IF the column shoujld have a #
        Add a "#" to level
      ELSE
        Add a space " " to "level"
    console.log(stair)

Number of rows * 2  - 1 = Gives us the correct number of columns 

*/

function pyramid(n) {
  const midpoint = Math.floor((2 * n - 1) / 2);
  for (let row = 0; row < n; row++) {
    let level = ""; //Represents a level of a pyramid

    for (let column = 0; column < n * 2 - 1; column++) {
      if (midpoint - row <= column && midpoint + row >= column) {
        //makes sure that the current column that we're looking at is within bounds.
        level += "#";
      } else {
        level += " ";
      }
    }
    console.log(level)
  }
}

module.exports = pyramid;
