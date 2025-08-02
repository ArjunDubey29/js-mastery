class User{
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }
    
    get password(){
        return `${this._password}arjun`
    }

    set password(value){
        this._password = value.toUpperCase()
    }
}

const hitesh = new User("a@arjun.ai", "12345")
console.log(hitesh.password);
console.log(hitesh.email);