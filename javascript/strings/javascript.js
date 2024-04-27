const button = document.querySelector("button");

function greet(){
    const name = prompt("what is your name?");
    
    if (name==`Jackson`)
    {
        const greeting = document.querySelector("#greeting");
        greeting.textContent = `Hello ${name}, nice to see you!!`;
    }

    else 
    {
        alert("Not owner of this computer!");
        let question = prompt("Would you like to buy it?");

        if  (question == "yes")
        {
            const greeting = document.querySelector("#greeting");
            greeting.textContent = `that would be 50 buks ${name}`;
        }
        

    }
        
        
    
}

button.addEventListener("click", greet);