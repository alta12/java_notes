function testNotStrict(val) {
    if(val == "2") {
        // this program is to show that the == sign can convert string to number 
        return "equal";
    }
    return "not equal";
}

console.log(testNotStrict(2));

// but the string === sign won't do this 

function testStrict(val) {
    if(val === "2") { 
        return "equal";
    }
    return "not equal";
}

console.log(testStrict(2));
