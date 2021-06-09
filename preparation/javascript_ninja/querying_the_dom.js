//get an element by ID
//We don't need # unless we're using querySelector
const title = document.getElementById("page-title");
console.log(title);

//get elements by their class name
//notice that it's plural and will grab multiple elements if they're present
//We don't need to use . because it's implied.
const errors = document.getElementsByClassName("error");
console.log(errors); //Provides HTML Collection as opposed to NodeList
console.log(errors[0]); //Works.
errors.forEach((error) => {
  console.log(error); //Does not work with HTML Collection.
});

//get elements by their tag name
const paras = document.getElementsByTagName("p");
console.log(paras); //Provides HTML Collection as opposed to NodeList
console.log(paras[1]); //Works

//ADDING OR CHANGING CONTENT

const para = document.querySelector("p");

console.log(para.innerText); //Shows us the text
para.innerText = "Ninjas are Awesome"; //Overriding Text

const paras = document.querySelectorAll("p"); //Provides NodeList of all "p" tags

paras.forEach((para) => {
  console.log(para.innerText);
  para.innerText += " new text"; //appending (adding to) each Node
});

const content = document.querySelector(".content"); //Selecting element with class of "content"
console.log(content.innerHTML); //Shows us the HTML Content

content.innerHTML = "<h2>This is a new H2 which replaced the previous code</h2";
content.innerHTML += "<h2>This is a new H2 that is added to the new code</h2";

const people = ["mario", "luigi", "yoshi"];

people.forEach((person) => {
  content.innerHTML += ` <p>${person}</p>`;
});

const link = document.querySelector("a"); //Selects first anchor tag
console.log(link.getAttribute("href")); //Returns the value of the href attribute
link.setAttribute("href", "http://www.thenetninja.co.uk");
//Takes two arguments (what we want to change and what we want to change it to.)
link.innerText = "The Net Ninja Website";

const message = document.querySelector("p");
console.log(message.getAttribute("class"));

message.setAttribute("class", "success");
message.setAttribute("style", "color: green"); //If a style attribute doesn't exist, it will be created.

const title = document.querySelector("h1");
this.setAttribute("style", "margin: 50px"); //This will override everything.
console.log(title.style); //Shows all of the CSS properties
console.log(title.style.color);
title.style.margin = "50px"; //Adds margin without overriding previous
title.style.color = "crimson"; //overrides just color
title.style.fontSize = "60px"; //font-size becomes fontSize
title.style.margin = ""; //deletes margin attribute

const content = document.querySelector("p"); //First p tag
console.log(content.classList); //List of the "p" element's classes (DOMContentList)

content.classList.add("errors"); //Add Class
content.classList.remove("errors"); // Remove Class

content.classList.add("success");

const paras = document.querySelectorAll("p");
paras.forEach((p) => {
  if (p.textContent.includes("error")) {
    //we can use includes because it's a NodeList??
    p.classList.add("error"); //add class
  }
  if (p.textContent.includes("success")) {
    p.classList.add("success");
  }
});
//innerText => Gets only the visible text inside of the element
//textContent => Gets all of the text inside regardless of visibility


const title = document.querySelector(".title")
title.classList.toggle("test") //Adds class of test
title.classList.toggle("test") //Removes class of test
