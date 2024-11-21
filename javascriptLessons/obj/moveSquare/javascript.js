

let square = document.querySelector("#square");
let rect = square.getBoundingClientRect();
let container = document.querySelector("#container");
let rectContainer = container.getBoundingClientRect();

 


console.log("X:" + rect.x + ", Y:" + rect.y);
console.log("cX:" + rectContainer.x + "cY:" +rectContainer.y)

square.style.position = "absolute";

const xInitial = rect.x;
const yInitial = rect.y;

let x = rect.x;
let y = rect.y;

document.addEventListener('keydown', (event)=>{

     

        if(event.key=="ArrowRight"){       
            x+=10;
        }
        if(event.key=="ArrowLeft"){       
            x-=10;
        }

        if(event.key=="ArrowDown"){       
            y+=10;
        }
        if(event.key=="ArrowUp"){       
            y-=10;
        }



         if(x<= 0){
            x = xInitial *2;
         }
         if(y<= 0){
            y = yInitial *2;
         }

         if(x>= xInitial*2){
            x = xInitial;
         }
         if(y>= yInitial*2){
            y =yInitial;
         }

         square.style.left = `${x}px`;
         square.style.top = `${y}px`;

        console.log("left:" + square.style.left);
        console.log("top:" + square.style.top);

})