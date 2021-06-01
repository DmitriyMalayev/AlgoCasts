```js
const word = "Hello there";
word.includes("lo");

function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}
```

match returns an array of all of the matches or null.
Want to find out if anything inside of the square brackets let us know.  
g => don't stop on the first one
i => case insensitive

If there are matches return them otherwise return 0 to prevent null. null is falsey.
