// Function
function sayMyName(){
    console.log("A");
    console.log("R");
    console.log("J");
    console.log("U");
    console.log("N");
}
// sayMyName()

function addTwoNumbers(number1, number2){
    // console.log(number1 + number2);
    let result = number1+number2
    return result
    // return number1+number2
}
// addTwoNumbers(3,3)
// addTwoNumbers(3,"3")
// addTwoNumbers(3,"a")
// addTwoNumbers(3,null)

const result = addTwoNumbers(5,9)
// console.log(result);

function loginUserMessage(userName){
    if(!userName){
        console.log("Please enter the user name");
        return
    }
    return `${userName} just logged in`
}
// console.log(loginUserMessage("Arjun Dubey"))
// console.log(loginUserMessage(""))
// console.log(loginUserMessage(""))

// ++++++++++++++++++++Day 2 of Functions++++++++++++++++++++

function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200, 400, 600, 1000));
// function ke parameter mein (...) ko rest operator bola jada aur 2 chezo ke adding ke samay pe isko spread operator bola jata hai

const user = {
    username: "Hitesh",
    price: 199
}
// How to send object as a parameter
function handleObject(anyobject){
    console.log(`My name is ${anyobject.username} and my course price is ${anyobject.price}`);
}
// handleObject(user)

function returnSecond(getArray){
    return getArray[1]
}
const myNewArray = [1,2,3,4,5]
console.log(returnSecond(myNewArray));