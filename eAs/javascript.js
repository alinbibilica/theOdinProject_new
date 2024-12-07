

let container = document.querySelector(".container");
let containerWidth = container.getBoundingClientRect().width;
let containerHeight = container.getBoundingClientRect().height;
let columns = document.querySelectorAll(".columns1");
let divs = document.querySelectorAll(".divs");
let rangeValue = document.querySelector(".rangeValue");
let slider = document.querySelector("input");
let chooseColor = document.getElementById("chooseColor");

console.log(containerWidth);
console.log(containerHeight);



setValue ();
createElement();
color();
brush();




function brush(){

    console.log(chooseColor.value);

    //to change the color of the divs we set an event listener on the container. and we check if the event class list value is equal with our class
  container.addEventListener("mousemove", (event)=>{
    
    let target = event.target;

     if(target.classList.value == "rows1 divs"){
        
        target.style.backgroundImage ="url('images/brush.png')";
         

     }
     
  })
}
  

  

function color(){

    console.log(chooseColor.value);
    //to change the color of the divs we set an event listener on the container. and we check if the event class list value is equal with our class
  container.addEventListener("mousemove", (event)=>{

    let target = event.target;

     if(target.classList.value == "rows1 divs"){target.style.backgroundColor =chooseColor.value}
     
  })
}
  
    
 
 

 function setValue (){

    slider.addEventListener('mousemove', ()=>{
        
        rangeValue.textContent = `Submit(${slider.value}) `; 
        sketchWidth = slider.value;
        sketchHeight = slider.value;
        console.log(sketchHeight);
        console.log(sketchWidth);
     })  
   
}




function createElement(){

     

    rangeValue.addEventListener('click', ()=>{
        console.log(container);
        while(container.childElementCount>0){container.removeChild(container.lastChild)}
         createColumns(sketchWidth, sketchHeight, container);
     });
     
   
}


function createColumns(columns, rows, container1){
    //number of divs
    let divWidth =  containerWidth / slider.value;
    let divHeight = divWidth;

    console.log("containerWidth:" + containerWidth);
    console.log("columns" + columns);
    console.log("rows:" + rows);
    console.log("dv width" + divWidth);

    for (let x =1; x<=columns;++x){
        let columns = document.createElement('div');
        columns.classList.add('columns1');
        columns.style.width = `${divWidth}px`;
        container1.appendChild(columns);
    
    
        for(let y =1; y<=rows; ++y){
            let rows = document.createElement('div');
            rows.classList.add('rows1', 'divs');
            
           
            rows.style.height = `${divHeight}px`;
            rows.style.width = `${divWidth}px`;
            columns.appendChild(rows);
        }
    }
    
   

}


    

 
 