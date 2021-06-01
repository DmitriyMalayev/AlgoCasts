Calculate the midpoint of the array.
Center index of the array.

```js
const columns = [0, 1, 2, 3, 4];
const row = [0];
```

Second Solution using Recursion

```js
function pyramid(n, row = 0, level = "") {
  if (row === n) {
    //Basecase
    return;
  }
  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramid(n, row + 1, level);
  }
  const midpoint = Math.floor((2 * n - 1) / 2); //Midpoint index
  let add;
  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    add = "#";
  } else {
    add = " ";
  }
  pyramid(n, row, level + add);
}
```
