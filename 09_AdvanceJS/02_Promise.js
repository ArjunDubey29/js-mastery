// fetch('https://something.com').then().catch().finally()

// How to create promises 
// const promiseOne = new Promise(function (resolve, reject) {
//     // Do an async task
//     // DB calls, cryptography, network
//     setTimeout(() => {
//         console.log('Async task is complete')
//         resolve()
//     }, 1000);
// })

// Consumption
// promiseOne.then(function(){
//     console.log("Promise Consumed");
// })

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async Task 2");
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("Promise 2 consume");
// })

// To pass object data from promise to then function
// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "Chai", email: "arju563dube@gmail.com"})
//     }, 1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
// })

// const promiseFour = new Promise(function (resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if(!error){
//             resolve({username: "Chai", email: "arju563dube@gmail.com"})
//         } else{
//             reject('ERROR: Something went wrong')
//         }
//     }, 1500)
// })

// promiseFour
// .then((user) => {
//     console.log(user);
//     return user.username
// })
// .then((username) => {
//     console.log(username);
// })
// .catch(function(error){
//     console.log(error);
// })
// .finally(() => console.log("The promise is either resolved or rejected"))







// const promiseFive = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = false;
//     if (!error) {
//       resolve({ username: "JavaScript", password: "12345" });
//     } else {
//       reject("ERROR: JS went wrong");
//     }
//   }, 5000);
// })

// async function consumepromiseFive(){
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumepromiseFive()




// async function getAllUser(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response);
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }
// getAllUser()

// Now the upper one in try and then format

fetch('https://api.github.com/users/ArjunDubey29')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))