const para = document.querySelector("p"); //first p tag
const para = document.querySelector(".error"); //class name
const para = document.querySelector("div.error"); //div with a class of error

console.log(para);

// query multiple elements at once
const paras = document.querySelectorAll("p");
const errors = document.querySelectorAll(".error"); 

console.log(paras); //Provides NodeList looks like an Array but it's not. It has some similar methods.
console.log(paras, errors);
console.log(paras[1], errors[0]);

paras.forEach(para => console.log(para))
