// Constructor se hamesha Singleton banata hai
Object.create // Constructor => Singleton

// Literals se synbol nhi bnta hai
// Symbol
const mySym = Symbol("Key1")
// Object Literals
const JsUser = {
    name: "Arjun",
    "lastName": "Dubey",
    age: 21,
    [mySym]: "mykey1", //To declare a Symbol as a key
    location: "Lucknow",
    email: "arjunDubey666@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Satirday"]
}
// 2 ways to access
// console.log(JsUser.name);
// console.log(JsUser["lastName"]);
// console.log(JsUser[mySym]); //To access the symbol
// console.log(typeof JsUser[mySym]);

JsUser.email = "arjun@arj.com" //To change the value

// Object.freeze(JsUser) //If you dont want anybody to edit the content.
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello Js User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js User ${this.name} how are you`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());