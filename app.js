// variable declarations     let & var,const
// Destructuring //p   ksi object ko brake karna ka lia
// Template literals //p    ``  in do nichan ko bactack bolta ha
// Default parameters //p  
// Rest parameter //p  ...   concate         array ka lia
// Spread Operator //p  murg karna ka lia    object ka lia
// Arrow functions  //p  
// Enhanced object literals //p   username age 
// Ternary Operator //p    ??
// Iterators & For..of  //p
// Map  //p
// Array methods  //p
// Higher-order function  //p
// CallBack  //p
// Promises  //p
// Variable Scoping
// Closure
// Generators
// Modules //p
// Exponentiation Operator
// Optional chaining
// Object Methods (keys,values,freez,entries)

// variable declarations
//teen tarika sa variable declare ho sakta ha
// var
// let
// const

var hasnain; // is tarha variable declare karta ha
hasnain = 50; // is tarha variable ki value ko assingn karta ha
var haseeb = 80; // is tarha variable declare karta han or uski value ko assingn karta ha
//var ma variable ko redeclare bhi kar sakta ha or uski value reassign bhi ho sakti ha dubara sa jaisa
var jawad =90;
var jawad =80;
// let var ki tarha ha bs variable redeclare or reassign nahi ho sakta
// const ma variable declare karsakta ha or hath ka hath uski value ko assign karsakta ha var,let ki tarha bad ma assign nahi kar sakta ha


//Hoisting
// var hoisting support karta ha let || const hoisting support nahi karta

// console.log(usernames);
// var usernames = 'abdullah';
// console.log(username1);
// let username1 = 'abdullah';

// var usernames;


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
const num = 220;
// if (num > 50) {
  //   console.log("passed");
  // } else {
    //   console.log("failed");
    // }
    
    num > 50 ? console.log("passed") : console.log("failed");
    
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
      //    ternary operator bhi if else ki condition ki tarha kam karta ha.  ternary operator ma else ko bolta ha : or ? condition likhna ka foran bad likhta ha
      
      
// Modules

// Modules isi lia use hota k jub hum koi function || variable ya istarha ki different cheza JS ki 1 file ma banai hui ha or dusri ile ma use karna charaha ho to usa dusri file ma use karna ka lia hum Modulesuse karta ha 

// hum apni JS ki file ma kuch bhi likha jaisa function || variable to agar usko dusri file ma bhajna hoto hama us function || variable banana sa paihly export ata ha bs or js file ma lana ho to hum usa import karlata ha

export let v = 'akhter'; 