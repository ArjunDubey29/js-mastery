// This and -> functions
const user = {
    username: "Arjun Dubey",
    fees: 999,
    welcomeMessage: function(){
        console.log(`${this.username} welcome to website`);
        console.log(this);
    }
}
// user.welcomeMessage()

// user.username = "sam"
// user.welcomeMessage()
// console.log(this);

// function chai(){
//     console.log(this);
// }

// chai()

// const chai = function(){
//     let username = "Arrrjjjuuunnn"
//     console.log(this.username);
// }

// Arrow function
const chai = () => {
    let username = "Arrrjjjuuunnn"
    console.log(this);
}
chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// implicit
// const addTwo = (num1, num2) => num1 + num2
// if you want to return a object
const addTwo = (num1, num2) => ({username: "Arjun"})
console.log(addTwo(3,5));