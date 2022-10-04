// this is an object 

console.log("this is simple adding and getting values  from list");
var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes used": "cleats",
    "socks": "white"
};
var hatValue  = testObj.hat;
var shirtValue = testObj.shirt;
var shoeValue = testObj["shoes used"];
// the quotes is used for keys with space in them






// can also variables as savepoint of 
var socksColor = "socks";
var callSock = testObj[socksColor];
console.log(hatValue,shirtValue, shoeValue,callSock);
console.log("\n");
 





// two way of adding things to an object
testObj.watch = "rolex";
testObj["necklace"] = "diamond";
console.log(testObj);
console.log("\n");





console.log("this is to delete the object property"); 
delete testObj.hat;
console.log(testObj);
console.log("\n");


var myPlants = [
    {
        type: "flower",
        list: [
            'rose',"tulip"
        ]
    },
    {
        type: "tree",
        list: [
            'pine',"fir"
        ]
    },

]

var accessTree = myPlants[0].list[0];