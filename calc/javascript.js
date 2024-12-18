const displayResults = document.querySelector(".display");
const button = document.querySelectorAll(".butttons");
let displayValue;


populateDisplay();





function results(){
    console.log("results function:" + displayValue);
}

function populateDisplay(){
    
    

    button.forEach((item)=>{
            item.addEventListener("click", (e)=>{

                let value = e;
                displayResults.textContent += value.target.textContent;
                displayValue = parseInt(displayResults.textContent);
                results();
            })
            
    });

   
}


function operate (op1, op2, operator){
    if(operator == "+"){ add(op1, op2); };
    if(operator == "-"){ substract(op1, op2); };
    if(operator == "*"){ multiply(op1, op2); };
    if(operator == "/"){ divide(op1, op2); };
}


function add(op1, op2){ return op1 + op2};

function substract(op1, op2){return op1 - op2};

function multiply(op1, op2){return op1 * op2};

function divide(op1, op2){return op1 / op2};