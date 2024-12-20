
let container = document.querySelector(".container");

function update(event){

    let touches = event.touches;

    for (let dot; dot = document.querySelector('dot');){
        dot.remove();
    }
    for(let i = 0; i< touches.length; i++){
        let {pageX, pageY} = event.touches[i];
        let dot = document.createElement('dot');
        dot.style.left = (pageX - 50) + "px";
        dot.style.top = (pageY - 50) + "px";
        document.body.appendChild(dot);
        
    }
 }

window.addEventListener('touchstart', update);
window.addEventListener('touchmove', update);
window.addEventListener('touchend', update);
window.addEventListener('click', update);
 