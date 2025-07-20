const number = 400
// console.log(number);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);

// console.log(balance.toFixed(2));

const otherNumber = 28.2356
// console.log(otherNumber.toPrecision(3));

const hundereds = 1000000
// console.log(hundereds.toLocaleString('en-IN'))

// ++++++++++++++++++Maths+++++++++++++++++++++

// console.log(Math)
// console.log(Math.abs(-9))
// console.log(Math.round(4.85))
// console.log(Math.ceil(4.85))
// console.log(Math.floor(4.85))
// console.log(Math.min(1,2,3,4,5,6,7,8,9));
// console.log(Math.max(1,2,3,4,5,6,7,8,9));

console.log(Math.random()); // Math.random() ki value hamesha 0 <=> 1 ke beech me rahegi
console.log((Math.random() * 10) + 1);

console.log(Math.floor(Math.random() * 10) + 1); //Only One value required

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1) + min));