let container1 = document.getElementById("container");


 
container1.style.cssText = " display:flex; flex-direction: row; justify-content: space-around;   align-items: self-end; background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%) ; overflow: hidden;";
 

let lines = document.querySelectorAll(".lines");


/*--------------------------------------------------
sets all of them to the same size 

lines.forEach(item =>{
    item.style.width =`${divWidth}px`;
    item.style.height =`${divHeight}vh`;
    item.style.border = "1px solid black";
});

---------------------------------------------------*/
 
function iterate(lines){

    for(let items = 0; items <lines.length; items++){
        // lines[items].style.width = `${randomNumber(10)}px`;
        lines[items].style.height =`${randomNumber(80)}vh`;
        lines[items].style.backgroundColor =`rgb(${randomNumber(255)} ${randomNumber(255)} ${randomNumber(255)}   )`;
        lines[items].style.borderRadius = "5px";
        lines[items].style.transition = " height 1s";
        lines[items].textContent = lines[items].style.height;
         }
}

function change(){iterate(lines);}

setInterval(change, 1000);
 
function randomNumber(number){
    return Math.floor(Math.random() * number + 10);
}

 
