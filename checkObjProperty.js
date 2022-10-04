var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes used": "cleats",
    "socks": "white"
};

function checkObjProperty(checkProp) {

    if(testObj.hasOwnProperty(checkProp)) {
        return testObj.checkProp;
    // this returns undefined and don't know why
        return testObj[checkProp]; // this returns jersey properly but wont work because only one return can be used and 
        // it should be first 
        

    }
    else {
        return "not found";
    }
}

console.log(checkObjProperty("shirt"));
