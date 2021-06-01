/*
If(row === n) then we have hit the end of our problem
If the "stair" string has a length === n then we are at the end of a row
If the length of the stair string is <= to the row number we're working on, we add a # otherwise we add a space.

*/

function steps(n, row = 0, stair = "") {
  //providing a default value for row(0 is top row) and stair (empty string).
  if (n === row) {
    return;
  }
  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1, ""); //Third argument optional because of the presence of the default argument.
  }
  if (stair.length <= row) { //If length of the stair string is <= to the row we're working on we add a # or a space.
    stair += "#"
  } else {
    stair += " "
  }
  steps(n, row, stair) //We don't change the value of row here because we're still working on the same row.
}
