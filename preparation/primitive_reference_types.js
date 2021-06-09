/*
Primitive Types  => Stored in Stack With Limited Space 
  Numbers
  Strings
  Booleans
  Null
  Undefined
  Symbols
References Types  => Stored in Heap. Slower. 
  All Types of Objects
    Object Literals
    Arrays
    Functions
    Dates
    Math 
    All other objects 
*/

//Primitive Values (change in one doesn't affect the other)
let scoreOne = 50
let scoreTwo = scoreOne

console.log(`scoreOne: ${scoreOne}`, `ScoreTwo: ${scoreTwo}`)   //50 50 

let scoreOne = 100;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`); //100 50

//Reference Types (change in one affects the other. Stored once in the heap with two separate pointers.)

const userOne = { name: "ryu", age: 30 }
const userTwo = userOne

console.log(userOne, userTwo) //{ name: "ryu", age: 30 } { name: "ryu", age: 30 }

userOne.age = 40
console.log(userOne, userTwo) //{ name: "ryu", age: 40 } { name: "ryu", age: 40 }







