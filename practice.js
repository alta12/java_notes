// data types 
// undefined, null, boolean, string, symbol, number and object 

var myName = "Altaf"
myName=8
// it can be  modified
let ourName = "Aliens"
// only be used within a scope 
const pi = 3.14
// ths can never be changed 
// difference between  declaring and initializing variable
console.log("This is a simple program to see var, let and const");
console.log(myName, ourName,pi)
console.log("\n");
// use camelCase



var firstName = "Ado";
var nameLength = firstName.length;
console.log("In this i have used 'length' function");
console.log(firstName + " length is " + nameLength);
console.log("\n");



console.log("This is a program to check string immutability");
var myStr = "Jello World";
myStr[0] = "Hello";
// this code won't work becuuse i have tried to modified using index
// but i can entirely change the myStr itself it works
myStr = "Hello World";
console.log(myStr);
console.log("\n");



console.log("This is about push function");
var ourArray= ["hai", "bye"];
ourArray.push("hello");
// the push function is similar to append in python
ourArray.push(["everybody"]);
console.log(ourArray);
console.log("\n");




console.log("this is about the pop() function")
var ourArray = [1,2,3];
var removedFromArray = ourArray.pop();
// the simple pop() only removes the last element of an given array
// In this it actually stores the popped element to another variable
console.log(removedFromArray);
console.log(ourArray);
console.log("\n");




console.log("This program is about shift() function");
var ourArray = [1,2,3];
var removedFromArray = ourArray.shift();
// the shift() function is same as the pop but it removes the first element 
console.log(removedFromArray);
console.log(ourArray);
console.log("\n");





console.log("This program is about unshift() function");
var ourArray = [1,2,3];
ourArray.unshift(0);
// the unshift is similar to push but it adds at the beginning
console.log(ourArray);
console.log("\n");





console.log("This program contains both shift and unshift");
var myArray = ["Hai", "welcome", "everybody"];
myArray.shift();
console.log(myArray)
myArray.unshift("hello");
console.log(myArray)
console.log("\n");








 


