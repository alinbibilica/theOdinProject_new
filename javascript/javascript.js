const btn = document.querySelector("button");
const txt = document.querySelector("p");

btn.addEventListener("click", updateBtn);

function updateBtn(){

    if (btn.textContent === "Lights on!")
        {
            btn.textContent = "Lights OFF!!!";
            txt.textContent = "The light is on!!";
            document.getElementById("p2").style.background = "red";
            document.getElementById("p2").style.fontSize = "100%";
            document.getElementById("p2").style.height = "50vh";
        }
    else {
        btn.textContent = "Lights on!";
        txt.textContent = "The ligts are off!!";
        document.getElementById("p2").style.background = "yellow";
        document.getElementById("p2").style.fontSize = "200%";
    }

}