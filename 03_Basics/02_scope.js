// Yahan kya ho rha hai ki let a, const b and var c teeno hi if ke scope ke under declare toh rahenge bhi wahi tak but var c ke aisa nhi hai ap usko bahar bhi print karenge toh wo print hoga yhi sabse badi problem hai

if (true) {
    let a = 10
    const b = 20
    var c = 30    
}

// console.log(a);
// console.log(b);
// console.log(c);

// nested scope
function one(){
    const userName = "Arjun"
    function two(){
        const webSite = "youtube"
        console.log(userName);
    }
    // console.log(webSite);
    // two()
}
// one()
if(true){
    const userName = "Arjun"
    if(userName === "Arjun"){
        const website = " youtube"
        // console.log(userName + website);
    }
    // console.log(website);
}
// console.log(userName);

// ++++++++++++++++++++++++++++++++++++++++ Example ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const ans = addOne(5);
console.log(ans);
function addOne(num){
    return num + 1
}
// console.log(addTwo(5));
const addTwo = function(num){
    return num+2
}

