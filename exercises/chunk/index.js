/*
--- Directions
Given an array and chunk size, divide the array into many subarrays where each subarray is of length size
--- Examples
chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]   
chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

The first argument array specifies the array that's passed in
The second argument size specifies the number of elements in each chunk, NOT the number of arrays in the main array. 

Steps
Create an empty array to hold chunks called "chunked"
For each element in the "unchunked" array
  Retrieve the last element in "chunked"
  If the last element does not exist, or if it's length is equal to the chunk size
    Push a new chunk into "chunked" with the current element 
  Else add the current element into the chunk 
*/
function chunk(array, size) {
  const chunked = []; //holds all of the chunks of data

  for (let element of array) {
    const last = chunked[chunked.length - 1]; //access the last element of the array
    if (!last || last.length === size) {
      chunked.push([element]);

      //If last does not exist OR if the length of last is equal to size which is passed in as an argument.
      //We want to add a new element into chunked.
      //Rather than putting a new chunk inside of chunked, and then add the element in, we can do both things at the same time. We push in a new chunk and we immediately put our element that we're currently iterating over inside.
    } else {
      last.push(element);
    }
  }
  return chunked;
  //Don't forget to return the array
}

/*
Create an empty "chunked array"
Create "index" start at 0
Create a while loop 
While index is less than array.length
  Push a slice of length "size" from "array" into "chunked" 
  Add "size" to "index"

*/

function chunk_two(array, size) {
  const chunked = []; //holds all of the chunks of data
  let index = 0; //We want to allow this variable to change over time.

  //array.slice is non destructive. It produces an array that contains some number of elements out of the original array.
  //We're incrementing by the size of the array.
  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }
  return chunked;
}

module.exports = chunk;
module.exports = chunk_two;
