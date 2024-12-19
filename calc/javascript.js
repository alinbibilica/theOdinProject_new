const displayResults = document.querySelector(".display");
const button = document.querySelectorAll(".butttons");
const equal = document.querySelector(".equal");
const DELbutton = document.querySelector(".DEL");

let displayValue;
let value1, value2, operator, finalResult;
let arrayFromValue;

populateDisplay();



function results(){
    arrayFromValue = displayValue.split(operator);
    console.log(arrayFromValue);

    value1 = parseFloat(arrayFromValue[0]);
    value2 = parseFloat(arrayFromValue[1]);
    

    console.log("first Value", value1);
    console.log("second value", value2);
    console.log("operator", operator);

    let result = operate (value1, value2, operator);
    console.log("...", result)
}

 

function populateDisplay(){  
    
    button.forEach((item)=>{
            item.addEventListener("click", (e)=>{

                let value = e;
                
                console.log("check operator state:", operator);
                
                if(value.target.textContent != "DEL" ){  
                    // displayResults.textContent += value.target.textContent;
                    // displayValue = displayResults.textContent;

                    updateDis(value);
                }

                
                if(value.target.textContent == "+"){ operator = '+'};
                if(value.target.textContent == "-"){ operator = '-'};
                if(value.target.textContent == "*"){ operator = '*'};
                if(value.target.textContent == "/"){ operator = '/'};
                 
                results();
                
                
                if(value.target.textContent == "AC"){ displayResults.textContent = ''};
                if(value.target.textContent == "="){ 
                    const resultValue = parseFloat(finalResult).toFixed(2);
                    console.log("the result value", resultValue);
                    displayResults.textContent = resultValue; 
                    value1 = parseFloat(displayResults.textContent);
                };
               
            })  
    });
}
 

function updateDis(valoare){
    displayResults.textContent += valoare.target.textContent;
                    displayValue = displayResults.textContent;
};

function operate (op1, op2, operator){

    if(operator == "+"){ finalResult = add(op1, op2); return finalResult};
    if(operator == "-"){ finalResult = substract(op1, op2); return finalResult};
    if(operator == "*"){ finalResult =  multiply(op1, op2); return finalResult};
    if(operator == "/"){ finalResult =  divide(op1, op2); return finalResult};


    function add(op1, op2){ return op1 + op2};
    function substract(op1, op2){return op1 - op2};
    function multiply(op1, op2){return op1 * op2};
    function divide(op1, op2){return op1 / op2};

    console.log(".....", add);
}


