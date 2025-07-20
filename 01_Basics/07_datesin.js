// Date

// let myDate = new Date()
// console.log(myDate);
// // console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);
// let newDate = new Date(2023, 0, 23)
// let newDate = new Date(2023, 0, 23, 12, 23)
// let newDate = new Date("2024-01-14")
// let newDate = new Date("02-14-2003")
// console.log(newDate.toLocaleString());

// // TimeStamps
// let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(newDate.getTime());
console.log(Math.floor(Date.now()/1000));
//Convert millisecond to Seconds

// Some more things on date
let newDate = new Date()
console.log(newDate.getMonth());

newDate.toLocaleString('default', {
    weekday: "long",
})