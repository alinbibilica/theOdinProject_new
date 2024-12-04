

let container = document.querySelector(".container");

let columns = document.querySelectorAll(".columns1");



 


createColumns(30, 20, container);
 
 
 
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

