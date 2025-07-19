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

//+++++++++++++++++++++Memory++++++++++++++++++++++++++++

// Stack (Primitive DT) => Humme Copy Milta Hai 
// Heap (Non-Primitive DT) => Humme Address milta hai

let myYouTubeName = "ArjunDubeyIsCool"
let anotherName = "ArjunDubey"
console.log(anotherName)
console.log(myYouTubeName)

// Non-Primitive
let userOne = {
    email: "arjun@google.com",
    upi: "arjun@ybl"
}

let userTwo = userOne

userOne.email = "Satyam@yahoo.com"
console.log(userOne.email);
console.log(userTwo.email);

// https://excalidraw.com/#json=qW0gJnG3NM2rlhYWPSeZH,0CySBwt1AlNRURlnHvTtWQ