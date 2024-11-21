

let square = document.querySelector("#square");
let rect = square.getBoundingClientRect();
let container = document.querySelector("#container");


console.log("X:" + rect.x + ", Y:" + rect.y);

square.style.position = "absolute";
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

        square.style.left = `${x}px`;
        square.style.top = `${y}px`;

})