

let answer = parseInt(prompt("Please enter the number you would like to fizzBuzz up to"));
let content = document.getElementById("numbers");

for(let i=1; i<=answer; i++){


    if (i%5 === 0 && i%3 === 0) {
        console.log("fizzBuzz");
        content.innerHTML+=  "abc <br>";
    }

   else if(i%3 === 0){
        console.log("Fizz");
        content.innerHTML+= "<br>  " + "Fizz <br>";
    }

    else if (i%5 === 0) {
        console.log("Buzz");
        content.innerHTML+= "<br>  " + "buzzz <br>";
    }
  
    else {
        console.log(i);
        content.innerHTML+= ` ${i} <br>`;
    }
    console.trace();
}

function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    console.trace();
}

const me = new Person("Tyler", "perry");

console.table(me);

console.error("You made a mistake");


const log = console.log;


log("abg - 123");