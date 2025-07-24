// 04_object-iterate.js

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift"
}

// for (const key in myObject) {
//     console.log(`Key: ${key} value: ${myObject[key]}`);
// }

// Trying for in on Array
// const programming = ["JS", "RB", "PY", "JAVA", "C++"]
// for (const key in programming) {
//     // console.log(key);
//     // console.log(programming[key]);
// }


// Checking on map
const map = new Map()
// Stores Unique Values
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")

// for (const key in map) {
//     console.log(key);
// } Not working