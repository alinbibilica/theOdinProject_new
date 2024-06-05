

let userInput = prompt('what is your favorite animal?');
let container = document.getElementsByClassName(".container");
let changeText = document.querySelector(".randomNumber");
let rand = `${randomNumber()}`;
let myTime = new Date();
let currTime = myTime.toLocaleTimeString();

changeText.addEventListener("click", moveLeft  );

function favoriteAnimal(userInput) {
   

    if(userInput=="CAT" || userInput=="cat" || userInput == "Cat")
        {
        document.getElementById("container1").style.backgroundImage = "url('https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg')";
        changeText.innerHTML = "random number " + currTime  + rand + `${setTime}`;
    }

    else if(userInput=="DOG" || userInput=="dog" || userInput == "Dog")
        {
            document.getElementById("container1").style.backgroundImage = "url('https://thumbor.forbes.com/thumbor/fit-in/960x/https://www.forbes.com/advisor/wp-content/uploads/2023/07/top-20-small-dog-breeds.jpeg.jpg')";
            changeText.innerHTML =  "random number " +  currTime + rand + `${setTime}`;
        }
         
    else 
    {
        alert('We only have dogs and cats so here`s a Dog is you don`t like cats!');
        document.getElementById("container1").style.backgroundImage = "url('https://thumbor.forbes.com/thumbor/fit-in/960x/https://www.forbes.com/advisor/wp-content/uploads/2023/07/top-20-small-dog-breeds.jpeg.jpg')";
        changeText.innerHTML =  "random number " + currTime  + rand + `${setTime}`;
    }
}

favoriteAnimal(userInput);
randomNumber();

// console.log(randomNumber());

function setTime(){
     setInterval(rand, 1000);
}

function randomNumber(){

    var time = Math.random();

    return Math.floor(time * 10) ;
};

function moveLeft(){
 
     
    document.getElementById("container1").style.transform = "translate(100px, 100px)"; 
    flag = true;
 

    
            let rand = document.getElementById("randomNumber");
            rand.style.background = "blue"; 
            rand.style.borderRadius = "10%";
            rand.style.fontFamily = "arial";
            rand.style.fontSize = "25px";

 
};

 