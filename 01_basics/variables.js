const accountId = 15246  //const keyword cannot be changed/reassigned
let accountEmail = "new123@gmail.com"
var accountPassword = "New123"
accountCity = "Delhi"
let accountState;

// accountId = 2  // not allowed
accountEmail = "changed@gmail.com"
accountPassword = "changed password"
accountCity = "New Delhi"
/*
Prefer not to use var 
because of issue in block scope and functional scope
*/
console.log(accountId);
console.log(accountEmail);
console.table([accountEmail, accountPassword, accountCity, accountState])

