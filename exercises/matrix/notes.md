# Matrix

Create an empty array of arrays called `results`
Create a counter variable, starting at 1
As long as (start column <= end column) AND (start row <= end row))
  Loop from start column to end column
    At results[start_row][i] assign counter variable
    Increment counter
  Increment start row
  Loop from start row to end row
    At results[i][end_column] assign counter variable
    Increment counter
  Decrement end column
  ..Repeat for the other two sides

```js
  const arr = []
  arr[3] = "Hi There!"

  arr => [null, null, null, "Hi There!"]
```

`Start Column and Start Row`
Will always be initialized to 0

`End Column and End Row`
Will have their values dependended on the value of "n" that's passed into our function.
To calculate the end column in the end row we will take the "n" and subtract one from it. 

`startColumn, endColumn, startRow, endRow`
Used to indicate which row and which column we're currently working on at any given time. 
Not fixed values. 
Will change over time. 

`Four For Loops`
  1. Responsible for assemming the top row of the solution. (1, 2, 3)
  2. Responsible for assembling the row on the right hand side.  (4, 5)
  3. Responsible for assembling the two values on the bottom (6, 7)
  4. Responsible for assembling the left hand side of the solution (8)
  1. Goes back to the original forloop and is responsible for assembling (9) 