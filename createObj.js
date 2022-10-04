// const createPerson = (name, age, gender) => {
    // return {
    //     name: name,
    //     age: age,
    //     gender: gender
    // };
    // the following is the shorthand
// };

const createPerson = (name, age, gender) => ( { name, age, gender});
     


console.log(createPerson("alta",21,"male"));