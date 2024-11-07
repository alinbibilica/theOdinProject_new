const container = document.querySelector("#container");
const newDiv = document.createElement("div");
let array = ["yellow", "red", "blue", "green"];
let clickCounter = "";

container.appendChild(newDiv);
 

/* set styles 1 by 1 */
// newDiv.style.background = "gray";
// newDiv.style.width = "50px";
// newDiv.style.height = "50px";

/*set styles in one line*/
container.style.cssText = "display: flex; flex-direction: row; flex-flow: row wrap; align-items: center; gap: 20px"
const button1 = document.createElement('button');
button1.textContent = 'Counter';
container.appendChild(button1);

const resetBUtton = document.createElement('button');
resetBUtton.textContent ="Reset + Create";
container.appendChild(resetBUtton);


 newDiv.style.cssText = "color: gray; background: yellow; width: 50px; height: 50px; text-align: center; font-size: 3rem;"
 



button1.addEventListener("click", ()=>{
    clickCounter++;
    newDiv.textContent = clickCounter;
})

resetBUtton.addEventListener("click", ()=>{

    for(let x = 1; x<= clickCounter; x++){
        let numeButton = x;
        numeButton = document.createElement('button');
        numeButton.textContent = x;
        container.appendChild(numeButton);

    }


    clickCounter="0";
    newDiv.textContent = clickCounter;

    

                    })


 /* change background color on click */

//  container.onclick = changeColor();

//  function changeColor(){
//     container.onclick = ()=>{
//         for(let i =0; i <= array.length-1; i++){
//            setInterval((newDiv.style.background = array[i]), 2000) ;
//         }}
//  }

//  changeColor();

 