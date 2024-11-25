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
            


    }



});

 