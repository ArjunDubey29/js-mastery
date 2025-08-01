// Call

function SetUserName(username){
    // Complex DB calls
    this.username = username
    console.log("called");
}

function creatUser(username, email, password){
    SetUserName.call(this, username)
    
    this.email = email
    this.password = password
}

const chai = new creatUser("Chai", "Chai@fb.in", "123")
console.log(chai);