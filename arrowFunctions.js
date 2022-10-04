var magic = function() {
// this is an anonymous function without an name
    return new Date();
}
console.log(magic);
//output[Function: magic]
// the code can also be written as 
var magic = () => new Date();
// returning one values does not need braces or return 
console.log(magic);
console.log("\n");




// it is also an good measure set arrow function variable as const 
console.log("add two arrays");
var myconcat = (arr1,arr2) => arr1.concat(arr2);
console.log(myconcat([1,2],[3,4]));





