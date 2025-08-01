class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `12345`
    }
}

const hitesh = new User("Hitesh")
// console.log(hitesh.createId());

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher('iphone', 'i@phone.com')
console.log(iphone);


// Static do not allow to the children class to use the method that are created in the main class also applicable for the same class