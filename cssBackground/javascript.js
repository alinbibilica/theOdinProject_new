let userAge;
let parentAprove;
let flag = false;
let audio = document.getElementById("Audio");
let background = document.getElementById("box");

checkAge();
playMusic(flag);



function checkAge(){

    userAge = prompt("How old are you?");
    if(parseInt(userAge) > 18)
        {
            flag = true;
        }
    else
        {
            parentAprove = prompt("Do you have parent aproval?");
            if ( parentAprove == 'yes')
                flag = true;
            else
                flag = false;
        }
}
function playMusic(flag){

    if(flag === true){
        alert('Welcome!');
    }
    else 
    {audio.style.display = 'none';
     background.style.display =  'none';
     alert("Not allowed on this website");
    }
}