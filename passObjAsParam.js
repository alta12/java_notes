var stats = {
    max:3,
    mid:4,
    min:2
};

var half = function() {
    return function half(stats) {
        return (stats.max + stats.min)/2;
    };
}();

console.log(stats);
console.log(half(stats));
console.log("\n");

// it can change as 
var stats = {
    max:3,
    mid:4,
    min:2
};

var half = function() {
    return function half({max, min}) {
        return (max + min)/2;
    };
}();

console.log(stats);
console.log(half(stats));