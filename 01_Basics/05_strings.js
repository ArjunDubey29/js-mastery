const name = "Arjun Dubey"
const iAm = "person"
// console.log(name + repoCount + " Value"); Out Dated

// Newer things use backticks (Yahan String Interpolation hota hai)
// console.log(`Hello my name is ${name} and I am a good ${iAm} in life.`);

const gameName = new String("Arjun Dubey") //String is a object here

// console.log(gameName[0])
// console.log(gameName.__proto__)
// console.log(gameName.length)
// console.log(gameName.toLowerCase())
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(3))
// console.log(gameName.indexOf('j'))

const newString = gameName.substring(0, 4) //Last ki value include nhi hoti
// console.log(newString);
const anotherString = gameName.slice(-11, 4) //Hum slice mein -ve value bhi de skte
// console.log(anotherString);

const newStringOne = "    Arjun    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://github.com/ArjunDubey29/js-mastery"
console.log(url.replace('git', 'arj'))
console.log(url.includes('Arjun'))
console.log(url.includes('Neha'))

const newNew = "Arjun-Dubey-29-@"
console.log(newNew.split('-'))