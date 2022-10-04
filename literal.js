// advantages of using backtick
// 1, can make multiline strings
// 2. add single or double quotes without escape sequence
// 3. put varaibles inside them

const person ={
    name: "alta",
    age:21
};

const greet = `hello, am ${person.name} and
i am ${person.age} years old`;
console.log(greet);