const accountId = 12345 // Used for constant values and cannot be changed. Its a blockscope variable.
let accoountEmail = "wao@gmail.com" // Its a block scope variable.In 2015 ECMA Script is developed and intoduced const and let keywords for variable declarations.
var accountPassword = "admin@12345" // Please avoid using var in codding because it can be changed anytime its a globalscope variable ,it have many drawbacks. 
accountCity = "Bombay"  // We shouldnt use this type of variable declaration in the code.
let accountAddress  // This is undefined variable , we not assigned any valu for this variable so its undefined.

let accountSalleryGrowth = null // This used for null value it means we do not put anything inside it.

let accountAlive = true  // This is boolean datatype variable declaration

/* Its me multi line comment */
// This is me single line comment

console.log(accountId);
console.log(accoountEmail);
console.log(accountPassword);
console.log(accountCity);

console.table([accountId, accoountEmail, accountPassword, accountCity, accountAddress, accountSalleryGrowth, accountAlive]) //We can use this console.table([variable1,variable2,...]) method to display the output.