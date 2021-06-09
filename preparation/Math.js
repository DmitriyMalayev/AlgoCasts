//Math Object
console.log(Math)
console.log(Math.PI) //PI is a Mathematical Constant
console.log(Math.E)  //Euler's Number  Mathematical Constant

const area = 7.7
console.log(Math.round(area))  //Round the number to the nearest integer
console.log(Math.floor(area))  //Floors the number. 7.7 will be 7
console.log(Math.ceil(area)) //Ceils the nnumber 7.7 will be 8
console.log(Math.trunc(area)) //Takes away the decimal and leaves the integer 7.7 will be 7

//Random Number

const random = Math.random()
console.log(random) //Completely random number that's between 0 and 1
console.log(Math.round(random)); //Random number that's either 0 or 1
console.log(Math.round(random * 100)) //Random number between 1 - 100
