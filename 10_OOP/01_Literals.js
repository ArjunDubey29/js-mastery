// Object Literals
// const user = {
//     username: "Arjun",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         // console.log("Got user details from db");
//         // console.log(`Username: ${this.username}`);
//         console.log(this);   
//     }
// }
// console.log(user.username);
// // console.log(user.getUserDetails());
// console.log(this);

// Constructor Function
// const promiseOne = new Promise()
// const date = new Date()

function User(username, loginCount, signedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.signedIn = signedIn

    this.greetings = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this
}

const userOne = new User("Hitesh", 12, true)
const userTwo = new User("Aniketh", 18, false)

console.log(userOne);
console.log(userOne.constructor)
console.log(userTwo);

// new keyword process

// 1. Empty object created.
// 2. Constructor function will be called due to new keyword
// 3. this keyword will inject every thing in it
// 4. you will get everything in function