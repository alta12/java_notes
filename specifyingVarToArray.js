const [a,b,,d,,f] = [1,2,3,4,5,6];
console.log(a,b,d,f);


let x=8,y=3;
(() => {
    [x,y] = [y,x]
})();
console.log(x);
console.log(y);
