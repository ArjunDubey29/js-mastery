// let score = "33abc"
// let score = null
// let score = undefined
let score = true


// console.log(typeof score);

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);

// console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN => type(Number hi hai)
// true => 1; false => 0
// null => 0
// undifined => NaN

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)

// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false; "Arjun" => true

let someNumber = 33
let stringNumber = String(someNumber);
// console.log(typeof stringNumber);
// console.log(stringNumber);

// ****************** operation *************************
let value = 3
let negValue = -value
console.log(negValue)

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);

let str1 = "Arjun" //These are basic stuff and mostly are correct
let str2 = " Dubey"
let str3 = str1 + str2
console.log(str3);

// Problematic Stuff
// console.log("1" + 2)
// console.log(1 + "2")
// console.log("1" + 2 + 2)
// console.log(1 + 2 + "2")

// console.log(+true);
// console.log(+"");

// let num1, num2, num3
// num1 = num2 = num3 = 2+2 // Code written in a bad way

let gameCounter = 100
gameCounter++;
console.log(gameCounter);

// Link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-toprimitive