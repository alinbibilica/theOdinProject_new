

const array = [1,2,3,4,5,6,7,8,6,9,10];

array.push(14);
array.pop();
array.shift();
array.unshift(2,3,4,5,6)
console.log(array );

const example = ["i", "love","beer"];

let y = example.splice(0,2, "Give", "me");

example.splice(1,0,"don't")

console.log(array);
array.splice(-6,0,9.5, 9.7);

console.log(array.slice(3,9));

array.includes(6);

console.log(array.lastIndexOf(6));

let users = [
    {id:1, name: "James", secondName: "Ileanca",},
    {id:5, name: "Viorica", secondName: "Ileanca",},
    {id:2, name: "Viorica", secondName: "Ileanca",},
    {id:3, name: "Ciolacu", secondName: "Ileanca",},
    {id:4, name: "Viorica", secondName: "Ileanca",},
  
];


let user2 = users.find(item => item.name =="Viorica");

let results = users.map((value)=>{if (value.name =="Viorica") return value.id + ":" + value.secondName});


const arrayUnsorted = [3,6,4,1,35,2,6];

function sortValues(a,b){
    if(a>b)return 1;
    if(a==b) return 0;
    if(a<b) return -1;
}


arrayUnsorted.sort(sortValues);
 
console.log("abc=>", arrayUnsorted);


let countries = ['Österreich', 'Andorra', 'Vietnam'];

console.log(countries.sort((a,b)=>a.localeCompare(b)));
console.log(countries.sort((a,b)=>a > b ? 1 : -1));

console.log(arrayUnsorted.reverse());

let cnt1 = "Alba, Irlanda, Macedonia, Jugoslavia";
let countryArray = cnt1.split(', ');

 

let string1 = "We come as one!";
string1.split("");

console.log(string1);

 for(let x of string1){ if (x=="e"){console.log("s")}};

console.log(string1);

let str23 = countries.join("-");

console.log(str23);


const values1=[1,2,3,5,6];

const total1 =  values1.reduce((acumulator, current)=>{ return acumulator+current});

console.log(`the total is:${total1}`)
    
    // const obj1 = {
//     data : 15,
// }

// console.log(obj1.data);
// const obj2 = obj1;
// console.log(obj2.data);

// obj2.data = 34;

// console.log(obj1.data)


// console.log( parseInt("32",16))



// function increaseCounterObj(object){
//     object.counter +=1;
// }
 
// function increaseCounterPrim(prim){
//     prim+=1;
// }


// const obj = {
//     counter:0,
// }
// const primitive = 0;

// increaseCounterObj(obj);
// increaseCounterPrim(primitive);

// increaseCounterObj(obj);
// increaseCounterPrim(primitive);
// increaseCounterObj(obj);
// increaseCounterPrim(primitive);

// console.log(obj.counter, " : ", primitive);


// let animal = { rasa: "pisica"};
// let caine = animal;

// animal = {rasa: "caine"} 
// console.log(animal.rasa);
// console.log(caine);


// function addOne(number){
//     return number +1;
// }

// const array1 = [1,2,3,4,5,6,7,8,9,10];

// const mappedArr = array1.map(addOne);

// const mappedArr2 = array1.map((valoare) => valoare+3);

// console.log(mappedArr2);

// console.log(mappedArr);
// const mapped5 = array1.map(addOne).filter(isOdd);
// console.log("....", mapped5);

// function isOdd(num){
//     return num%2!==0;
// }

// const oddArray = array1.filter(isOdd);

// console.log(`initial array:${array1} => Odd array after filter: ${oddArray}`);


// const sumedup = array1.reduce((a,p)=>a+p, 0);
//  console.log(sumedup);
 

// const lista = ["abc34","edf","123","4","z"];

//  function checkValue(x){parseInt(x); console.log(x)};
//  let sum =0; 
//  const mapped = lista.map((value)=>{return sum+=value});

 

//  const length1 = lista.map((value)=>{if(value.length<=3)return value});
// console.log(length1)



// const arraySimplu = [1,2,4,5,6,7,347,7,3,3656];
// const totalOne = arraySimplu.reduce((total, current)=> { console.log(`total:${total} - current:${current}`); return total + current;},1);

// console.log(totalOne);


// const exercise1 = [1,2,3,4,5,6,7,8,9];

// function sumOfTrippledEvens(x){
//     return x
//     .filter((num)=>num%2===0)
//     .map((num)=> num*3)
//     .reduce((a,b)=> a+b);
// };

// let yxz = sumOfTrippledEvens(exercise1);


 


// console.log(yxz);

// // //object basics...

// // function makeUser(name, age, birthyear){
// //     return {
// //         name,
// //         age,
// //         cYear: birthyear + age,
      
// //     };
// // }


// // let countryCodes = {
// //     "49" : "Germany",
// //     "41" : "Switzerland",
// //     "44" : "UK",
// //     "1"  : "USA"
// // };

// // let user = makeUser("Jack", 40, 2000);
// // let user1 = makeUser("Valerie", 20, 2000);

// // console.log(`${user.name} is ${user.age} and the current year is ${user.cYear}`);
// // console.log(`${user1.name} is ${user1.age} and the current year is ${user1.cYear}`);

// // for ( items in countryCodes){ console.log(items + " => " + countryCodes[items])}



// // let usr = {};
// // usr.name = "John";
// // usr.surname = "Smith";
// // usr.name = "Pete";
// // delete usr.name;
// // console.log(usr.name);
// // console.log(usr.surname);


// // let salaries = {
// //     John: 100,
// //     Ann: 160,
// //     Pete: 130
// // }

// // let value = '';

// // let x = null;

// // for(items in salaries) { 
    
   
    
// //     x +=salaries[items];

    


// // };
// // console.log(x);


// // let menu = {
// //     width: 200,
// //     height: 300,
// //     title: "my Menu"
// // };

// // multiply2 ( menu);

// // function multiply2 ( menu){
// //     for(item in menu){
// //         if(typeof(menu[item]) == "number"){ menu[item]*=2}
// //     }
// // }

// // console.log(menu.title + "is=> " + menu.width + " X " + menu.height)


// // const person = {

// //     name: ["JOhn", "Smith"],
// //     age: 32,
// //     bio: function(){
// //         console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);},
// //     introduceSelf: function(){ console.log(`Hi! I'm ${this.name[0]}.`);},


// // };

// // console.log(person.name[1]);
// // console.log(person.age);
// // person.bio();
// // person.introduceSelf();

// // person.bye = function(){console.log(`bye bye ${this.name}`)};

// // person.bye();

// // const myDataName = "height";
// // const myDataValie = "1.75m";
// // person[myDataName] = myDataValie;

// // console.log(person.height);




// // function createNewPerson(name){

// //     const obj = {};

// //     obj.name = name;
// //     obj.introduceSelf = function(){ console.log(`Hi! I'm ${this.name}.`)};
// //     return obj;


// // }


// // const alex = createNewPerson("Alex");


// // alex.introduceSelf();
// // console.log(alex.name);



// // function Users123(userName){
// //     this.userName = userName;
// //     this.Intro = function(){console.log(`This is the admin: ${this.userName}`);}
// // }

// //  const myUser = new Users123("Frankie");

// //  myUser.Intro();

// //  const myNotification = new Notification("Hello!");

// //  const myBand = {
// //         name: "The Hooligans!",
// //         nationality: "Romans",
// //         genre: "Rock&Roll",
// //         members: 5,
// //         formed: 1975,
// //         split: 2005,
// //         albums: [
// //             {   name: "FirstAlbum", release: "1975",},
// //             {   name: "SecondAlbum", release: "1985",},
// //             {   name: "ThirdAlbum", release: "2000",}]
// //  }


// //  let theBand = '';
 
// //  theBand = `This band with the name${myBand.name}, is one of my favorite bands in the world. They are of ${myBand.nationality} origins.
// //                 Their music genre is ${myBand.genre}. Their second album was ${myBand.albums[1].name} => ${myBand.albums[1].release}. Got to love them! They split in ${myBand.split}`;


// // console.log(theBand);


// // function Masini(numeMasina, anMasina, combustibil){
// //    this.numeMasina = numeMasina;
// //    this.anMasina = anMasina;
// //    this.combustibil = combustibil;
// // };

// // const myCar = new Masini("Jeep","2005","Diesel");


// // for(items in myCar){ console.log(myCar[items])}


