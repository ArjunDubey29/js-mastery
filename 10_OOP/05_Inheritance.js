// Some Inheritance things

class User{
    constructor(username){
        this.username = username 
    }

    logMe(){
        console.log(`USERNAME: ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("Chai", "arj@2929.com", "95135746852")

// console.log(chai);
// chai.addCourse()
// console.log(chai.username);


const masalaChai = new User("Arjun")
// masalaChai.addCourse() No Access
masalaChai.logMe() 
chai.logMe()

console.log(chai === masalaChai);
console.log(chai instanceof Teacher);
console.log(chai instanceof User);