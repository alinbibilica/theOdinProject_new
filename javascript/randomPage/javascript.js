const genLength = document.getElementById("genLength");
const genNumbers = document.getElementById("genNumbers");
const submitButton = document.getElementById("button");
const clearResults = document.getElementById("clear");

const checkLetters = document.getElementById("letters");
const checkNumbers = document.getElementById("numbers");
const checkSymbols = document.getElementById("specialCharacters");
const lettersType = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','r','s','t','x','y','z'];
const numbersType = ['0','1','2','3','4','5','6','7','8','9'];
const symbolsType = ['!','@','#','$','%','^','&','*','(',')','?'];

let list = document.getElementById("list");

let length = "";
let numberOfLines = "";
let caractere = [];
 


 submitButton.addEventListener("click", function(){
    length = genLength.value;
    numberOfLines = genNumbers.value;
    list.innerHTML = '';
    setStringType();
    for(let x = 1; x<=numberOfLines; x++){
         list.innerHTML += generateString(length) + "</br>";
    }
    // alert("the length of the generater code id:" + length);
    // alert("the number of generated line is:" + numberOfLines);
});


 
function setStringType(){

            if (checkLetters.checked == true && checkNumbers.checked == true && checkSymbols.checked == true){
                    caractere = lettersType.concat(numbersType, symbolsType);
                 }
            else if (checkLetters.checked == true && checkNumbers.checked == true && checkSymbols.checked == false) {
                    caractere = [];
                    caractere = lettersType.concat(numbersType);
                 }
            else if (checkLetters.checked == true && checkNumbers.checked == false && checkSymbols.checked == false){
                caractere = [];
                caractere = caractere.concat(lettersType);
              }
            else if (checkLetters.checked == false && checkNumbers.checked == false && checkSymbols.checked == true){
                caractere = [];
                caractere = caractere.concat(symbolsType);
              }
            else if (checkLetters.checked == false && checkNumbers.checked == true && checkSymbols.checked == true){
                caractere = [];
                caractere = caractere.concat(numbersType, symbolsType);
              }

            else if (checkLetters.checked == false && checkNumbers.checked == true && checkSymbols.checked == false){
                caractere = [];
                caractere = caractere.concat(numbersType);
              }
              else {
                caractere = null;
                list.innerHTML = "Choose character type!!";
            }
         
         
    }





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