// Primitive Datatypes (Call by Value)
// 7 types : String, Number, Boolean, null, undefined, Symbol(To make any value unique), BigInt 
const score = 100
const scores = 100.3
const isLoggedIn = false
const outsideTemp = false
let userEmail; //undefined
const id = Symbol("123")
const anotherId = Symbol("123")
console.log(id === anotherId);
const bigNumber = 987654355527889155222212n //BigInt


// Reference Type (Non-Primitive)
// Array, Objects, Functions

// Array
const heros = ["Shaktiman","Nagraj","Doga"];

// Objects
let myObj = {
    name: "Arjun",
    age: 21
}

// Function
const myFunction = function(){
    console.log("Hello World");
    
}

// Ouestion: (Is JS a Dynamically Typed Lang or Statically?) Ans: Dynamically Typed
// if we do (typeof myFunction) => function will be returned by we call it object function
// All the non-primitive dT will return Function if we do typeof but if we do (typeof myFunction) => object function