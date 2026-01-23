"use strict"; // treat all js code as newer version 

// alert("Hello") // we are using node js , not a browser so this alert or promt type codes wont work here.

let name = "Jays" // string used as in ""

let age = 22  // this is number datatype range betweeb may be 2 to power 53

let isPlayerConnected = true  // this is boolean true/false

let bigint = 999999999999999999999999999999999999999999999999999999999999999999999 // can be called bigint datatype

let future ; // this is undefined means we not defined any value.

let endOf2026 = null // this is we can use null if we dont have any value for it (standalone value)

// symbol => unique datatype

// All are aboves are Premitive datatypes.

// object 

console.log(typeof(null)); // Interview question - type of null is becomes object dataype.
console.log(typeof(undefined)); // Interview question- type of undefined is becomes undefined type. 

console.table([typeof(age), age, typeof(bigint), bigint]); // we can use typeof to check datatype of variables.