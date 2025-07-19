// Easy Comparison with 0 Problems
// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// Little Confusion Creating Comparison
// console.log("2" > 1);
// console.log("02" > 1);


// More Confusion Creating Comparison
// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);
// console.log(null < 0);
// console.log(null <= 0);

// In this the output are different because in JS if we use (==) operator there null remain as null but if we use (<, >, <=, >=) then the null gets converted into a number which is 0 or NaN.

console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);
console.log(undefined < 0);
console.log(undefined <= 0);
// But undefined always gives false. Also if you do (undefined == null) then only it will give true other wise false.

// (===) Strict Check, It checks the two operands as well as there datatypes (It do not convert the operand in comparison)
console.log("2" === 2);
