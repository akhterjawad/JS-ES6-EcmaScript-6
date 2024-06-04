// Destructuring //p   ksi object ko brake karna ka lia
// Template literals //p    ``  in do nichan ko bactack bolta ha
// Default parameters //p  
// Rest parameter //p  ...   concate
// Spread Operator //p  murg karna ka lia
// Arrow functions  //p  
// Enhanced object literals //p   username age 
// Iterators & For..of  //p
// Map  //p
// Array methods  //p
// Higher-order function  //p
// CallBack  //p
// Promises  //p
// Ternary Operator //p    ??
// Variable Scoping
// Closure
// Generators
// Modules
// Exponentiation Operator
// Optional chaining
// Object Methods (keys,values,freez,entries)


// Destructuring
const user = {
  username: "abdullah",
  email: "mabdullah2037@gmail.com",
  age: 21,
};
const { username, email, age } = user;// is tarika sa hamara kam asan hojata ha Destructuring sa hama harjaga object ka nam nahi likhna parta
console.log(username);

// const fruit = ["apple", "banana", "orange", "mango"];

// const [, , , four] = fruit;
// console.log(four);

//spread operator

// const fruit = ["apple", "banana", "orange", "mango"];
// const arr2 = ["watermelon", ...fruit];
// console.log(arr2);
// const newArr = arr2.concat(fruit);
// console.log(newArr);

//rest operator
// function hello(...username) {
//   console.log(username);
// }
// hello("abdullah", "usman", "ammar", "zain", "hassan");

//ternary operator
// const num = 220;
// if (num > 50) {
//   console.log("passed");
// } else {
//   console.log("failed");
// }

// num > 50 ? console.log("passed") : console.log("failed");

// if (num > 70) {
//   console.log("behtreen");
// } else if (num > 50) {
//   console.log("passed");
// } else {
//   console.log("failed");
// }

// num > 70
//   ? console.log("behtreen")
//   : num > 50
//   ? console.log("passed")
//   : console.log("failed");

//default parameter

// function greetUser(username = "abd") {
//   console.log(`hello ${username}`);
// }

// greetUser();

// Enhanced object literals

// let names = "abd";
// let age = 21;

// let user = {
//   names,
//   age,
// };
// console.log(user);

