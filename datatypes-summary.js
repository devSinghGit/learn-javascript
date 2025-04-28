// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.5

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

// console.log(id); // Symbol(123)
// console.log(anotherId); // Symbol(123)

const bigNumber = 26894264802079675675657n;
// console.log(typeof bigNumber); // bigint 


// console.log(id === anotherId); // false (Symbol provides unique value)






// Reference (Non Primitive)

// Array, Objects, Functions

const avengers = ["Iron Man", "Thor", "Hulk", "Spider Man", "Hawkeye"]
let myObj = {
    name: "Satyam",
    age: 25
}

function myFunction() {
    console.log("Hello world");
    
}