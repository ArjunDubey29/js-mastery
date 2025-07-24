// Loops and iterations
// For Loops

// for (let i = 0; i <= 10; i++) {
//     if(i == 5) console.log("5 is best number");
//     console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(`Outer loop: ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         // console.log(`Inner loop of: ${j} of outer loop ${i}`);
//         console.log(i + '*' + j + ' = ' + i*j);
//     }    
// }

let myArray = ["Batman", "Superman", "Spiderman", "Ironman", "Hulk"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);    
}

// break
for (let i = 1; i <= 10; i++) {
    if(i == 5) {
        // break;
        continue;
    }
    // console.log(`The value is: ${i}`);
}