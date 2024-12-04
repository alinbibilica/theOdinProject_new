

let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissor = document.getElementById("scissor");

let humanChoice = document.querySelector("#humanChoice");
let humanScore = document.querySelector(".human");
let ComputerScore = document.querySelector(".computer");

let humanPoints = 0;
let Pcpoints = 0;

 
let PC = getComputerChoice();
 

let RoundCounter = document.querySelector(".roundNumber");
let HumanPointsResult = document.querySelector(".HumanPoints");
let ComputerPointsResult = document.querySelector(".ComputerPoints");
let counter = '0';


let prompt = document.querySelector(".points");
let result = document.createElement("div");


humanChoice.addEventListener("click", (e)=>{
        
        let target = e.target;
         
        
        let Human = target.id;
        let Computer = getComputerChoice();
         
         
        playRound(Human, Computer, humanScore, ComputerScore, RoundCounter, HumanPointsResult,ComputerPointsResult );
        
        chooseWinner(counter, humanPoints, Pcpoints, RoundCounter, HumanPointsResult, ComputerPointsResult);
        
        
    });

    
    
 function clearScore(){
    counter = 0;
    humanPoints = 0;
    Pcpoints = 0;
    HumanPointsResult.textContent = `Human points:`;
    ComputerPointsResult.textContent = `Computer points:`;
    result.textContent =" --- "; 
     
 }
 
 

// let humanScore = 0;
// let computerScore = 0;
// const playButton = document.getElementById("clickToPlay");
// let counter = 0;




function getComputerChoice(){

        // o => rock
        // 1 => paper
        // 2 => scissors
        //return rock paper or scissors

        let randomNumber = getRandomInt(3) +1 ; //return an int from 1 to 3
        

        let computerChoice;

        if(randomNumber == 1){
            computerChoice = "rock";
        }

        else if (randomNumber == 2) {
            computerChoice = "paper";
        }
        
        else
            computerChoice = "scissors";
     
        return computerChoice;
};


//function needed to get a random number from 1 to 3 for the computer choice
function getRandomInt(max){
    return Math.floor(Math.random()*max);
};



 










function playRound(human, computer, humanResult, ComputerResult, roundCounter, humanPresult, computerPresult){
     
    let result;
     
    humanResult.textContent = `Your choice: ${human}`;
    ComputerResult.textContent = `Computer choice: ${computer}`;
    counter++;
    roundCounter.textContent = `Round: ${counter}`;
    
     

    if((human == "rock" && computer == "rock") || (human == "paper" && computer == "paper") || (human == "scissors" && computer == "scissors")){
        return humanPoints && Pcpoints;
        
    }

    else if (human == "rock" && computer == "scissors"){
        humanPoints++;
        humanPresult.textContent = `Human Points: ${humanPoints}`;
    }

    else if (human == "paper" && computer == "rock"){
        humanPoints++;
        humanPresult.textContent = `Human Points: ${humanPoints}`; 
    }

    else if (human == "scissors" && computer == "paper"){
        humanPoints++;
        humanPresult.textContent = `Human Points: ${humanPoints}`; 
    }

    else if (computer == "rock" && human == "scissors"){
        Pcpoints++
        computerPresult.textContent = `Computer Points: ${Pcpoints}`; 
    }

    else if (computer == "paper" && human == "rock"){
        Pcpoints++
        computerPresult.textContent = `Computer Points: ${Pcpoints}`; 
    }

    else if (computer == "scissors" && human == "paper"){
        Pcpoints++
        computerPresult.textContent = `Computer Points: ${Pcpoints}`; 
    }
    else 
    
    return 0;

   
};


function chooseWinner(counter, humanPoints, PcPoints, roundNr, hPointsResult, cPointsResult){

   
     

    if(counter == 5){
        if(humanPoints>PcPoints){
            
    
            result.textContent ="HUMAN WON!";
            counter = '0';
            humanPoints = '0';
            PcPoints = '0';
            result.classList.add("winner");
        }
        else if(PcPoints>humanPoints){
          
            result.textContent ="Computer WON!";
            counter = '0';
            humanPoints = '0';
            PcPoints = '0';
            result.classList.add("winner");
       
           
        }
        else if(PcPoints == humanPoints) {
          
            result.textContent ="it's a tie!";
            counter = '0';
            humanPoints = '0';
            PcPoints = '0';
            result.classList.add("winner");
       
           
        }
        prompt.appendChild(result);
        
    }
    if(counter>5){
        clearScore();
    }
 
};

 
 