const person = [
        { firstName: "john",    age: 25 ,   dob: 2000, carOwned: "Dacia Logan" },
        { firstName: "andy",    age: 18 ,   dob: 1966, carOwned: "Bmw X6" },
        { firstName: "john",  age: 46 ,   dob: 1994, carOwned: "Dacia Duster" },
        { firstName: "ion",     age: 3 ,    dob: 1930, carOwned: "Citroen C3" },
    ];


person.push({firstName: "ionel",     age: 39 ,    dob: 1933, carOwned: "Citroen C3"});

 
const cars = person.map(person => person.age);
const owners = person.map(person => person.firstName);
const dateOfBirth = person.map (person => person.dob);
const currentYear = new Date().getFullYear();

console.log(cars);
console.log(owners);
console.log(dateOfBirth);


const old = person.filter(name => name.firstName === "john");

const oldest = person.reduce((oldest, year) => year.dob < oldest.dob ? year : oldest);
console.log(old);
 

 