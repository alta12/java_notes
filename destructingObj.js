var vowel = {x:2, y:1, z:4};

var x = vowel.x;
var y = vowel.y;
var z = vowel.z;
// this is old way of assigning  values to variables 

const { x : a, y : b, z : c } = vowel;
// and this is the new way
console.log("\n");

console.log("this is an example for the above syntax");

const avgTemp = {
    today: 77,
    tomarrow: 70
}

function getTomTemp(avgT) {
    "use strict";
    const { tomarrow : tempOfTom } = avgTemp;
    return tempOfTom;
}

console.log(getTomTemp(avgTemp));



