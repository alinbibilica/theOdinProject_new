

let container = document.querySelector(".container");
let containerSize = container.getBoundingClientRect().width;
let columns = document.querySelectorAll(".columns1");
let divs = document.getElementsByClassName(".divs");
let rangeValue = document.querySelector(".rangeValue");
let slider = document.querySelector("input");

let sketchWidth = 20;
let sketchHeight = 20;


setValue ();
createElement();
changeColor(divs);

 
 



function createElement(){

    

    rangeValue.addEventListener('click', ()=>{
        while(container.firstChild){ container.removeChild(container.firstChild)} //if a child of the container exists remove all of them begore creating new ones
        createColumns(sketchWidth, sketchHeight, container);
     });
}


function createColumns(columns, rows, container1){
    //number of divs
    let divWidth = containerSize / slider.value;

    for (let x =1; x<=columns;++x){
        let columns = document.createElement('div');
        columns.classList.add('columns1');
         
        container1.appendChild(columns);  
    
        for(let y =1; y<=rows; ++y){
            let rows = document.createElement('div');
            rows.classList.add('rows1', 'divs');
            rows.style.width = `${divWidth}px`;
            rows.style.height = `${divWidth}px`;
            columns.appendChild(rows);
        }
    
    }

  

}


function setValue (){

        slider.addEventListener('mousemove', ()=>{
            
            rangeValue.textContent = `Click(${slider.value}) `; 
            sketchWidth = slider.value;
            sketchHeight = slider.value;
         })  
    }
    

 function changeColor(divs){
    divs.array.forEach(element => {
        
    });
 }