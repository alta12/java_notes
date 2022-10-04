const s = [4,2,3];
function mutateConstArray() {
    "use strict";

    // s=[2,4,5]; // will throw error because we cant entirely change an const array
    // but
    s[0]=1;
    s[1]=2;
    s[2]=3;
    // we can it individual like that 
}

mutateConstArray();
console.log(s)