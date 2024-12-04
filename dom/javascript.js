
let colorate = document.querySelectorAll(".butoane");
let container = document.querySelector(".container");

colorate.forEach(coloreaza);

function coloreaza(items){



        if(items.id == "colorate") {  items.textContent = "blue"; items.style.cssText = "width: fit-content; background: blue; padding: 2px; color: white";}
        else { items.textContent = "green"; items.style.cssText = "width: fit-content; background: green; padding: 2px";}

         
 
}   
colorate.forEach(sterge);
let counter = 0;

let time = new Date();
function sterge(items){
     
    window.addEventListener("click",(e)=>{

    let target = e.target;
    if(target.id!="container")
    target.remove();
    else
        { let div = document.createElement('div');
            div.className = "butoane";
            div.id = "colorate";
            div.style.background = "red";
           
            container.appendChild(div);
            console.log( "the date is" + time.getHours() + ":" + time.getMinutes());

        }
        
})
}

window.addEventListener("keydown", (e)=>{
    console.log(e.keyCode);
})