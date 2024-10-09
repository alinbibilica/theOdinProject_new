const log = console.log;

let humanScore = 0;
let computerScore = 0;
const playButton = document.getElementById("clickToPlay");
let counter = 0;

function getComputerChoice(){

        // o => rock
        // 1 => paper
        // 2 => scissors
        //return rock paper or scissors

        let randomNumber = getRandomInt(3) +1 ; //return an int from 1 to 3
        log(randomNumber);  //log random number

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
}


function getRandomInt(max){
    return Math.floor(Math.random()*max);
}







function getHumanChoise(){

    
    let humanChoice1 = prompt(`"Enter your choice: 'rock' 'paper' or 'scissor'" Human=${humanScore} Computer=${computerScore}`);
        
        return humanChoice1;
 
 
}








function playRound(human, computer){
    log(human);
    log(computer);

  

    let result;

    if((human == "rock" && computer == "rock") || (human == "paper" && computer == "paper") || (human == "scissors" && computer == "scissors")){
        return result = log('its a tie');
        
    }

    else if (human == "rock" && computer == "scissors"){
        humanScore++;
        return result = log(`'Human won' + 'Human score:' ${humanScore} + 'Computer score:' ${computerScore}`);
    }

    else if (human == "paper" && computer == "rock"){
        humanScore++;
        return result = log(`'Human won' + 'Human score:' ${humanScore} + 'Computer score:' ${computerScore}`);
    }

    else if (human == "scissors" && computer == "paper"){
        humanScore++;
        return result = log(`'Human won' + 'Human score:' ${humanScore} + 'Computer score:' ${computerScore}`);
    }

    else if (computer == "rock" && human == "scissors"){
        computerScore++
        return result = log(`'Computer won' + 'Human score:' ${humanScore} + 'Computer score:' ${computerScore}`);
    }

    else if (computer == "paper" && human == "rock"){
        computerScore++
        return result = log(`'Computer won' + 'Human score:' ${humanScore} + 'Computer score:' ${computerScore}`);
    }

    else if (computer == "scissors" && human == "paper"){
        computerScore++
        return result = log(`'Computer won' + 'Human score:' ${humanScore} + 'Computer score:' ${computerScore}`);
    }
    else return 0;
    

}
 
// playRound(getHumanChoise(), getComputerChoice());
// // playButton.addEventListener("click",playGame);

 

function playGame(){
    while(true){
    if (humanScore <= 3 || computerScore <= 3){
    
    playRound(getHumanChoise(), getComputerChoice());
        
 
       
    if(humanScore == 3 && computerScore<=3) {
    alert(`"Game Over! Human won!"  Human=${humanScore} Computer=${computerScore}`);
        humanScore=0;
        computerScore=0;
        }

    else if(humanScore <= 3 && computerScore == 3){
        alert(`"Game over! Computer WON!" Human=${humanScore} Computer=${computerScore}`);
        humanScore=0;
        computerScore=0;
    }
    else if (humanScore == 3 && computerScore == 3){
     
        alert(`"it's a tie!" Human=${humanScore} Computer=${computerScore}`);

        }}

    else if(humanScore >3 || computerScore > 3){
        humanScore = 0;
        computerScore = 0;
        }
    }
    }


 
 
playGame();

// function wannaPlay()
//         {

//             let wannaPlay = prompt

// }
// playGame();
// log(getComputerChoice());
// log(`"human choise:"  ${getHumanChoise()}`);