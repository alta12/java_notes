function freezeObj() {
    "use strict";
    const math_const ={
        pi:3.14
    };
    // Object.freeze(math_const);
// the above line is syntax fox making object constant
    try {
        math_const.pi = 3;
    }
    catch(e) {
        console.log(e);
    }
    return math_const['pi'];
}
console.log(freezeObj());