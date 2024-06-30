
let element =document.getElementById("text");
let flag = false;
let background = document.getElementById("square");
 
let caractere = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','r','s','t','x','y','z','0','1','2','3','4','5','6','7','8','9'];
 
 function generateString(length){
    let result = '';
    const lungineCaractere = caractere.length;
    for(let i = 0; i < length; i++){
        result += caractere[Math.floor(Math.random()*caractere.length)];
    }
     
     

    return result;
 }




let UserName = generateString(6);

alert("Your username is: " + UserName);

document.getElementById("text").innerHTML +=  " " + UserName;

element.addEventListener("mousedown", myFunction);

 background.addEventListener("click", () => {

        alert("Click on the button!");
        document.getElementById("text").style.boxShadow = "12px 12px 20px 10px rgba(236, 120, 145, 0.62)";
 });

function myFunction(){


    if(flag==false){
        document.getElementById("text").innerHTML =" ";
        flag = true;
        flagStatus()
    }

    else if(flag==true){
        // document.getElementById("text").innerHTML ="Turn On";
        flag = false;
        flagStatus()
    }

}

function flagStatus(){
    if(flag == true){
        document.getElementById("flagStatus").innerHTML = "Day";
        document.getElementById("square").style.backgroundImage = "linear-gradient(180deg, red, yellow)";
        document.getElementById("text").style.backgroundImage = "url('/on.jpg')";
        document.getElementById("square").style.boxShadow = "12px 12px 20px 10px rgba(236, 120, 145, 0.62)";
        document.getElementById("flagStatus").style.color ="black";
        document.getElementById("flagStatus").style.background="transparent";
    }
    else if (flag == false){
        document.getElementById("flagStatus").innerHTML = "Night";
        document.getElementById("square").style.backgroundImage = "linear-gradient(180deg, black, grey)";
        document.getElementById("text").style.backgroundImage = "url('/off.jpg')";
        document.getElementById("square").style.boxShadow = "12px 12px 20px 10px rgba(69, 43, 48, 0.62)";
        document.getElementById("flagStatus").style.color ="white";
    }
}