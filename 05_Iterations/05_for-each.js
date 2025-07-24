// For each Loop

const programming = ["JS", "RB", "PY", "JAVA", "C++"]

// programming.forEach( function (item) {
//     console.log(item);
// })

// programming.forEach( (item) => { // Arrow function
//     console.log(item);
// } )
 
// function printMe(item){
//     console.log(item);
// }
// programming.forEach(printMe)

// programming.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "js"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
    {
        languageName: "Ruby",
        languageFileName: "rb"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
} )