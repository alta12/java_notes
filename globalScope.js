
myGlobal = 10;
// variable outside an function is always an global scope

function fun1() {
    oopsGlobal = 5;
    // a variable without the var keyword even within a function can
// automatically become a global keyword  
// scrimba enforces the var keyword but not browsers
}

function fun2() {
    var output = "";
    if(typeof myGlobal != "undefined") {
        output +="myGlobal: " + myGlobal;
    }
    if(typeof oopsGlobal != "undefined") {
        output+= " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}

fun1();
fun2();