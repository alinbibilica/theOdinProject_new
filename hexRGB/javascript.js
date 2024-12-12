let color = document.querySelector("#Color");
let button = document.querySelector("#submit");
let container = document.querySelector(".container");
let showResult = document.querySelector(".result");
let hexValue;
const base16 = "0123456789ABCDEF";
let r = "";
let g = "";
let b = "";


button.addEventListener('click', ()=>{
    hexValue = color.value; 
   
    splitThem(hexValue);
    toRGB( showResult );
     
});




splitThem(hexValue);



function splitThem(hexValue){

    if(hexValue.charAt(0) == "#") hexValue=hexValue.substring(1);
    console.log(hexValue);
    
    r = parseInt(hexValue.substring(0,2), 16); console.log(r);
    g = parseInt(hexValue.substring(2,4), 16); console.log(g);
    b = parseInt(hexValue.substring(4,6), 16); console.log(b); 
}
 

function toRGB(wheretoShow){
    
    wheretoShow.style.background = `rgb(${r},${g},${b})`;
        wheretoShow.textContent = `HEX: ${color.value} to RGB: (${r},${g},${b})`;
    
}
