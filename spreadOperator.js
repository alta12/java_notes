 const arr1 = ['jan',"feb",'mar'];
 let arr2;
 (function() {
    arr2 = [...arr1];
    // this ... similar to rest operator is called 
    // spread operator and is used for assigning the values of 
    // arr1 to  arr2
    // we didn't use = operator because if any 
    // changes made to arr1 will affect arr2 
    // but 
    // not in spread operator
    // arr1[0] = 'potato';
    
 })();
 console.log(arr2);