// Primitive 

// number, sting, boolean, null, undefined, bigInt, symbol

let bigNum = 979797979797979n // we can define BigInt like this by attaching n at last of number
const id = Symbol("12345") // we can define symbol like this
 console.log(typeof id);  //=> symbol
 

 // Non Primitive (Reference)

 // Array, Objects, Functions

 const players = ["Jay", "Vicky", "Leon"]; // we can define array like this

 const playerObj = {
    pName : "Raj",
    pStats : 9.5
 }                      // we can define object like this

 const myFunction = function(){     // we can define function like this
    console.log("Hello world");
    
 }                  
 
 console.log(typeof players); //=> object type
 console.log(typeof playerObj); //=> object type
 console.log(typeof myFunction); //=> function type
 

 console.log(typeof null); //=> object type
 console.log(typeof undefined); //=> undefined type

 console.log(typeof bigNum); //=> bigint type
 
 
 
 