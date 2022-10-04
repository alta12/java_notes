// Setup
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];

//   console.log(contacts[0].firstName);

  function lookUpProfile(name, prop) {
    // Only change code below this line
    // console.log(name);
    for(i=0; i<contacts.length;i++) {
            if(contacts[i].firstName == name) {
                // return contacts[i].likes;
                return contacts[i][prop] || "no such property";
            }
    }
    // Only change code above this line
  }
  
  console.log(lookUpProfile("Akira", "likes"));