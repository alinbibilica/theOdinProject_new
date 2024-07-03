const genLength = document.getElementById("genLength");
const genNumbers = document.getElementById("genNumbers");
const submitButton = document.getElementById("button");
const clearResults = document.getElementById("clear");
let list = document.getElementById("list");

let length = "";
let numberOfLines = "";
let caractere = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','r','s','t','x','y','z','0','1','2','3','4','5','6','7','8','9'];
 


 submitButton.addEventListener("click", function(){
    length = genLength.value;
    numberOfLines = genNumbers.value;
    list.innerHTML = '';

    for(let x = 1; x<=numberOfLines; x++){
         list.innerHTML += generateString(length) + "</br>";
    }
    // alert("the length of the generater code id:" + length);
    // alert("the number of generated line is:" + numberOfLines);
});

clearResults.addEventListener("click", function(){
    list.innerHTML = "Empty";
} )


function generateString(length){
    let result = '';
    const lungineCaractere = caractere.length;
    for(let i = 0; i < length; i++){
        result += caractere[Math.floor(Math.random()*caractere.length)];
    }
    return result;



 }