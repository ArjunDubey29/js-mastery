// let myName = "Hitesh         "
// let myChannel = "Chai         "
// console.log(myName.truelength);

let myHero = ["Thor", "Spiderman"]

let heroPower = {
    thor: "Hammer",
    Spiderman: "Sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.Spiderman}`);
    }
}

Object.prototype.arjun = function(){
    console.log(`Arjun is present in all objects`);
}

Array.prototype.heyArj = function(){
    console.log(`Arjun says hello`);
}

// heroPower.arjun()

myHero.arjun()
myHero.heyArj()
// heroPower.heyArj()

// Outdated
const User = {
    name: 'Arjun',
    email: "arjunjj687934875@gmail.com"
}

const Teacher = {
    makevideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__:TeachingSupport
}

Teacher.__proto__ = User

// Modern Syntax

Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUserName = "ChaiAurCode      "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True lenght is: ${this.trim().length}`);
}

anotherUserName.trueLength()

"Arjun      ".trueLength()
"IceTea     ".trueLength()