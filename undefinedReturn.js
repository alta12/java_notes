var sum = 0;
function addThree() {
    sum = sum+3;
    console.log("local");
    console.log(sum)  // this prints the three
    // console.log("Local= "+ toString(sum
    ; 
    //this returned undefined

    // this wont work because sum needs to returned using the
    // return keyword and this is called undefined too 
}
console.log(addThree());  // this prints undefined
// console.log("Global= "+ toString(sum)); 
//this returned undefined
 
console.log("global");
console.log(sum) // this prints three too 

// when we modify global variable inside the function with example 
// It will change the global variable value outside the function also 