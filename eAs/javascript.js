

let container = document.querySelector(".container");
let columns = document.querySelectorAll(".columns1");

let rangeValue = document.querySelector(".rangeValue");
let slider = document.querySelector("input");

let sketchWidth = 20;
let sketchHeight = 20;


setValue ();
createElement();



 
 

function createElement(){
    rangeValue.addEventListener('click', ()=>{
       
        createColumns(sketchWidth, sketchHeight, container);
     });
}


function createColumns(columns, rows, container1){
    //number of divs
    
    for (let x =1; x<=columns;++x){
        let columns = document.createElement('div');
        columns.classList.add('columns1');
         
        container1.appendChild(columns);  
    
        for(let y =1; y<=rows; ++y){
            let rows = document.createElement('div');
            rows.classList.add('rows1', 'divs');
            // rows.textContent +=y;
            columns.appendChild(rows);
        }
    
    } }


function setValue (){

        slider.addEventListener('mousemove', ()=>{
            
            rangeValue.textContent = `Click(${slider.value}) `; 
            sketchWidth = slider.value;
            sketchHeight = slider.value;
         })  
    }
    

 