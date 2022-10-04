// A higher order function is a function that takes a function as an argument, or returns a function
// an const variable can reused as an function
const increment = function() {
    //below am returning an function
    return function increment(number,value=1) {
        //setting value in argument can act as an default value
        return number+value;
    }
}(); // and all of it was cover with (  ) too but it worked without it
// () at the end is important without it the output would just the function name 
console.log(increment(5,2));
console.log(increment(5));