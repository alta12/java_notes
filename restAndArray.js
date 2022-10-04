// refer to specifyingVarToArray.js for better understanding 
const source = [1,2,3,4,5,6];
function removeFirstTwo(list) {
    const [ , , ...arr] = list;
    // am leaving out the
    // 1st two values from the list(aka soure).
    // it can also look like 
    //and 
    // storing the rest of the array to arr
    return arr;
}
 
const arr = removeFirstTwo(source);
console.log(arr);
console.log(source);