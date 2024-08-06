const log = console.log;

let humanScore = 0;
let computerScore = 0;



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
    
    let humanChoise = prompt('Enter "rock" , "paper" or "scissors"');

    return humanChoise;
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


}




function playGame(){



        while(humanScore<3 || computerScore<3){


            playRound(getHumanChoise(), getComputerChoice());

        }


}


function wannaPlay()
        {

            let wannaPlay = prompt

}
//playGame();
// log(getComputerChoice());
// log(`"human choise:"  ${getHumanChoise()}`);