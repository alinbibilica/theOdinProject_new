
let element =document.getElementById("text");
let flag = false;
element.addEventListener("mousedown", myFunction);
 

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