const fruits = ["bananas", "3", "portocale", "mango", "struguri"];
fruits[1]  += " struguri";
const legumes = ["carrots","potatoes","tomatos"];
for(let y=0; y<legumes.length; y++){
    fruits.push(legumes[y]);
}

for(const legume in legumes){console.log(legumes[legume])}


const sliced = fruits.slice(2);
console.log(sliced);

const owner = {

        firstName:"John",
        lastName: "Mathwes",
        dob: "1930",
        adress: "5th street, Blvd Road , 23522, Sibiu",
        cars: ["Bmw", "Mercedes", "Audi"],
        currentYear: new Date().getFullYear(),
 
  
}

 

let firstFruit = fruits[0];

for (let i in fruits){document.getElementById("titlu").innerHTML+= "<li>" + fruits[i].toUpperCase()  + "</li>";}

for (let y in owner.cars) {document.getElementById("hash2").innerHTML += "<li>" + owner.cars[y] + " in " + owner.currentYear + "</li>";}