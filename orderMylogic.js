function orderMyLogic(val) {
    if(val<10) {
        return "less than 10";

    } else if (val<5) {
        return "less than 5";

    } else {
        return "greater than or equal to 10";
    }
}

console.log(orderMyLogic(3));
// this would print less than 10 because the order 
// of the logic is wrong here 