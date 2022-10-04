console.log("This is simple program with reduce");
var sum = (function() {
    return function sum(x,y,z) {
        const args = [x,y,z];
        return args.reduce((a,b)=>a+b,0);
    //reduce((previousValue, currentValue) => previousValue + currentValue,initialValue)
    };
})();
console.log(sum(1,2,3));
console.log("\n");



console.log("This function has reduce and rest operator");
var sum = (function() {
    return function sum(...args) {
        //... gets any number of arguments as input
        return args.reduce((a,b)=>a+b,0);
    //reduce((previousValue, currentValue) => previousValue + currentValue,initialValue)
    };
})();
console.log(sum(1,2,3));
console.log("\n");
