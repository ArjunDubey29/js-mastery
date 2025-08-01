// ES6
// classes

// class User {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     ChangeUserName(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new User("Chai", "Chai@gmail.com", "123456")
// console.log(chai.encryptPassword());
// console.log(chai.ChangeUserName());


// Behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User.prototype.ChangeUserName = function(){
    return `${this.username.toUpperCase()}`

}

const chai = new User("Chai", "Chai@gmail.com", "123456")
console.log(chai.encryptPassword());
console.log(chai.ChangeUserName());