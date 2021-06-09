//Object Literals

console.log(blogs);
let user = {
  name: "crystal",
  age: 30,
  email: "crystal@thenetninja.co.uk",
  location: "berlin",
  blogs: [
    {
      title: "lunches",
      likes: 30,
    },

    {
      title: "dinners",
      likes: 50,
    },
  ],
  login: function () {
    console.log("the user is logged in");
    //method attached to user object
  },
  logout: function () {
    console.log("the user is logged out");
  },
  logBlogs: function () {
    console.log("The user has written the following blogs");
    this.blogs.forEach((blog) => {
      console.blog(blog.title, blog.likes);
    });
    //this represents the context in which the current code is executed
    //This would not work with an arrow function, the value of this doesn't change with Arrow Functions
    /*
  We can also do this: (Without the word function)
  login()
  logout()
  logBlogs()
  */
  },
};

user.logBlogs;
console.log(this); //this represents window object
console.log(user);
console.log(user.name);

user.age = 35;

console.log(user.age);
console.log(user["email"]);

user["name"] = "chun-li";
console.log(user["name"]);

let key = "location";
console.log(user[key]);

console.log(typeof user);

//Object Methods
user.login();
