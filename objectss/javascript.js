//object basics...

function makeUser(name, age, birthyear){
    return {
        name,
        age,
        cYear: birthyear + age,
      
    };
}


let countryCodes = {
    "49" : "Germany",
    "41" : "Switzerland",
    "44" : "UK",
    "1"  : "USA"
};

let user = makeUser("Jack", 40, 2000);
let user1 = makeUser("Valerie", 20, 2000);

console.log(`${user.name} is ${user.age} and the current year is ${user.cYear}`);
console.log(`${user1.name} is ${user1.age} and the current year is ${user1.cYear}`);

for ( items in countryCodes){ console.log(items + " => " + countryCodes[items])}



let usr = {};
usr.name = "John";
usr.surname = "Smith";
usr.name = "Pete";
delete usr.name;
console.log(usr.name);
console.log(usr.surname);


let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let value = '';

let x = null;

for(items in salaries) { 
    
   
    
    x +=salaries[items];

    


};
console.log(x);


let menu = {
    width: 200,
    height: 300,
    title: "my Menu"
};

multiply2 ( menu);

function multiply2 ( menu){
    for(item in menu){
        if(typeof(menu[item]) == "number"){ menu[item]*=2}
    }
}

console.log(menu.title + "is=> " + menu.width + " X " + menu.height)


const person = {

    name: ["JOhn", "Smith"],
    age: 32,
    bio: function(){
        console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);},
    introduceSelf: function(){ console.log(`Hi! I'm ${this.name[0]}.`);},


};

console.log(person.name[1]);
console.log(person.age);
person.bio();
person.introduceSelf();

person.bye = function(){console.log(`bye bye ${this.name}`)};

person.bye();

const myDataName = "height";
const myDataValie = "1.75m";
person[myDataName] = myDataValie;

console.log(person.height);




function createNewPerson(name){

    const obj = {};

    obj.name = name;
    obj.introduceSelf = function(){ console.log(`Hi! I'm ${this.name}.`)};
    return obj;


}


const alex = createNewPerson("Alex");


alex.introduceSelf();
console.log(alex.name);



function Users123(userName){
    this.userName = userName;
    this.Intro = function(){console.log(`This is the admin: ${this.userName}`);}
}

 const myUser = new Users123("Frankie");

 myUser.Intro();

 const myNotification = new Notification("Hello!");

 const myBand = {
        name: "The Hooligans!",
        nationality: "Romans",
        genre: "Rock&Roll",
        members: 5,
        formed: 1975,
        split: 2005,
        albums: [
            {   name: "FirstAlbum", release: "1975",},
            {   name: "SecondAlbum", release: "1985",},
            {   name: "ThirdAlbum", release: "2000",}]
 }


 let theBand = '';
 
 theBand = `This band with the name${myBand.name}, is one of my favorite bands in the world. They are of ${myBand.nationality} origins.
                Their music genre is ${myBand.genre}. Their second album was ${myBand.albums[1].name} => ${myBand.albums[1].release}. Got to love them! They split in ${myBand.split}`;


console.log(theBand);


function Masini(numeMasina, anMasina, combustibil){
   this.numeMasina = numeMasina;
   this.anMasina = anMasina;
   this.combustibil = combustibil;
};

const myCar = new Masini("Jeep","2005","Diesel");


for(items in myCar){ console.log(myCar[items])}