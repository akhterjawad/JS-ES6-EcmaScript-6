// Destructuring //p   ksi object ko brake karna ka lia
// Template literals //p    ``  in do nichan ko bactack bolta ha
// Default parameters //p  
// Rest parameter //p  ...   concate         array ka lia
// Spread Operator //p  murg karna ka lia    object ka lia
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


// Destructuring
const fruits = ["apple", "banana", "orange", "mango"];
const [, , , four] = fruits;
console.log(four);



//default parameter
function greetUser(username = "abd") {
  console.log(`hello ${username}`);
}
greetUser();
// default parameter ma ya hota ha ka parameter receive karta wa hi us ki value set kardata ha jaisa  username = "abd"  is tarika sa or jub hum argument pass karta ha to argument ki value ajati ha default value ka bajay


//rest operator
function hello(...username) {
  console.log(username);
}
hello("abdullah", "usman", "ammar", "zain", "hassan");
//is tarika sa jub hum parameter receive karta ha to hamara pas jitna bhi argument ho array ki form ma ajata ha  


//spread operator
const fruit = ["apple", "banana", "orange", "mango"];
const arr2 = ["watermelon", ...fruit];
console.log(arr2);
//is ma bhi rest operater wala kam hota ha bus rest operater function ka lia hota ha or spread operater array ka lia



// Enhanced object literals
let names = "abd";
let ages = 21;
let users = {
  names,
  ages,
};
console.log(users);
//is tarika sa hamara pas short cut tarika sa object ki key bhi ajati ha or uski value bhi kam asan hojata ha




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




