const accountId=14453
let accountEmail="niraulanilesh@gmail.com"
var accountPassword="12345"
accountCity="Itahari"
let accountState;

// accountId=2// not allowed

accountEmail="NIlesh@gmail.com"
accountPassword="345"
accountCity="Prakashpur"
console.log(accountId);

/*
Prefer not to use var
because of the issue in block scope and functional scope
*/

console.table([accountEmail,accountPassword,accountCity,accountState])
