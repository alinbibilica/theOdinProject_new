let header = document.querySelector("#header");
let text = document.createElement("p");

header.addEventListener('click', (event)=>{

    let target = event.target;


    switch(target.id){
            case 'home' : 
                            console.log("Home menu was pressed");
                            event.target.classList.toggle("clicked");
                            event.target.style.textAlign = "center";
                            break;
            
            case 'contact' :
                                console.log("Contact button was pressed");
                                event.target.classList.toggle("clicked");
                                event.target.style.textAlign = "center";
                                break;

            case 'products' : 
                                console.log("Products menu was pressed!");
                                event.target.classList.toggle("clicked");
                                event.target.style.textAlign = "center";
                                break;
            
            default:   
            event.target.classList.toggle("notclicked");
            addText ();
            break;
          
            

    }
         
});

window.addEventListener('click', event =>{
    console.log(event.target.id);
});


window.addEventListener('keydown', event =>{

    if(event.key == "b" && event.ctrlKey){
        document.body.style.background = "blue";
    }
    if(event.key == "g" && event.ctrlKey){
        document.body.style.background = "green";
    }
    if(event.key == "y" && event.ctrlKey){
        document.body.style.background = "yellow";
    }
    if(event.key == "r" && event.ctrlKey){
        document.body.style.background = "red";
    }
    if(event.key == "B" && event.ctrlKey){
        document.body.style.background = "black";
    }

})


function addText (){
    text.textContent = "Click to show menu";
    text.style.color = "white";
    header.appendChild(text);
   
}