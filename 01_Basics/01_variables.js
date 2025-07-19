const accountId = 144553
let accountEmail = "arjun@google.com"
var password = "12345"
accountCity = "Lucknow"
let accountState;

// accountId = 2 // not allowed
console.log(accountId);
accountEmail = "arjunarj.com"
accountCity = "Punjab"
password = "54321"

console.table([accountId, accountEmail, password, accountCity, accountState])

/*
Please do not use var as it has issue with block scope and function scope
*/