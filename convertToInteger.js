function convertToInteger(str) {
    return parseInt(str,2);
}
console.log(convertToInteger("0011"));

// the parse int function parses the value passed 
// and convert it to integer even if it is binary 
// here radix 2 is used  to denote that this is binary 