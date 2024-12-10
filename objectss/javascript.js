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