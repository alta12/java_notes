// class Book {
//     constructor(author) {
//       this._author = author;
//     }

//     // get the value which is private indirectly
//     get writer() {
//       return this._author;
//     }
//     set writer(updatedAuthor) {
//       this._author = updatedAuthor;
//     }
//   }
//   const novel = new Book('anonymous');
//   console.log(novel.writer);
//   novel.writer = 'newAuthor';
//   console.log(novel.writer);
  

function makeClass() {
    class Thermostat {
        constructor(temp) {
            this._temp =  5/9 * (temp-32);
        }
        get Temperature() {
            return this.temp;
        }
        set Temperature(updatedTemp) {
            this._temp= updatedTemp;
        }
    }
    return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(75);
let temp = thermos.Temperature; 
// get and set acts like properties so thereis no need for ()
thermos.Temperature = 23;
temp = thermos.Temperature;
console.log(temp);

// looks like i need a separate tutorial for this