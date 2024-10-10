/*
cautare in lista de contacte si countdown

*/

const contacte = [
    "Cristina:23459995783",
    "Andreea:28764766791",
    "Marcel:3764872891",
    "Dorel:42381004",
    "Jasmin:324876811",
    "Alin:2100004",
    "Gogo: 112"
];

const para = document.querySelector("p");
const input = document.querySelector("input");
const btn = document.querySelector("button");


/* variable pentru countdown */
let i = 10;
 const output = document.querySelector('.output');
 output.textContent = "";
    
    

    while(i>=0){
        const para1 = document.createElement('p');
        if(i===10){para1.textContent = `Countdown ${i}`;}
        else if(i===0){para1.textContent=`BlastOff ${i}`;}
        else {para1.textContent = i;}
        output.appendChild(para1);
        i--;
    }



btn.addEventListener("click", ()=>{

    const searchName = input.value.toLowerCase();
    input.value = "";
    input.focus();

    para.textContent = "";

    for (const contact of contacte){
        const imparteContacte = contact.split(":");
        if(imparteContacte[0].toLowerCase()===searchName){
            para.textContent = `${imparteContacte[0]}'s number is ${imparteContacte[1]}.`;
            break;
        }
    }

    if (para.textContent === ""){
        para.textContent = "Contactul nu este in agenda!";
    }


});