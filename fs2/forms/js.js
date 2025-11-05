const price = document.querySelector("#slider");
const output = document.querySelector(".res");
 

output.textContent = price.ariaValueMax;
  


// price.addEventListener("input", ()=>{
//     output.textContent = price.value;
    
// });

function showTime(){

    const d = new Date().toLocaleTimeString();
    let time = document.querySelector("#time");
    time.textContent = d;

 
}

 
setInterval(showTime, 100);
 
 