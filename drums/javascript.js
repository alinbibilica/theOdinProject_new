
let audio =  document.querySelectorAll("audio");
let clape = document.querySelectorAll(".clape");

audio.forEach((item) => item.play());


document.addEventListener("click", (e)=>{

    let target = e.target;
    const doS = new Audio("sounds/do.mp3");
    const reS = new Audio("sounds/re.mp3");
    const miS = new Audio("sounds/mi.mp3");
    const faS = new Audio("sounds/fa.mp3");
    const solS = new Audio("sounds/sol.mp3");
    const laS = new Audio("sounds/la.mp3");
    const siS = new Audio("sounds/si.mp3");

     console.log(target.id);

     switch(target.id){
        case "do" : doS.currentTime=0; doS.play(); target.classList.add("clapaPressed"); break;
        case "re" : reS.currentTime=0; reS.play(); target.classList.add("clapaPressed");break;
        case "mi" : miS.currentTime=0; miS.play(); target.classList.add("clapaPressed");break;
        case "fa" : faS.currentTime=0; faS.play(); target.classList.add("clapaPressed");break;
        case "sol" : solS.currentTime=0; solS.play(); target.classList.add("clapaPressed");break;
        case "la" : laS.currentTime=0; laS.play(); target.classList.add("clapaPressed");break;
        case "si" : siS.currentTime=0; siS.play(); target.classList.add("clapaPressed");break;
        default: return;
     }
   
});

function removeTransition(e){
    if (e.propertyName !== 'transform') return;
    this.classList.remove('clapaPressed');
     
}

clape.forEach(key => key.addEventListener("transitionend", removeTransition));