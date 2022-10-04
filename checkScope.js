function checkScope() {
    "use strict";
    var i = "function scope";
    if(true) {
        var i = "block scope";
        console.log("the scope is ",i);
    }
    console.log("the scope is ",i);
    // return i;
    // this return didnt do anything so i dont know 
    // y it was in the code 
}
checkScope();
console.log("\n");
// this would print block scope twice because i have 
// changed the i value inside if 
// so changing let will help here 
// because the scope of let is limited to its block 
function checkScope() {
    "use strict";
    let i = "function scope";
    if(true) {
        let i = "block scope";
        console.log("the scope is ",i);
    }
    console.log("the scope is ",i);
    // return i;
    // this return didnt do anything so i dont know 
    // y it was in the code 
}
checkScope();