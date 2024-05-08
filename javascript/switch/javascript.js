const select = document.querySelector("select");
const para = document.querySelector("p");

select.addEventListener("change", setMenu);

function setMenu() {

    const choice =  select.value;

    switch (choice)
    {
            case "Monday" :
                para.textContent =
                    "KFC MENU + COLA";
                    break;


            case "Tuesday":
                para.textContent =
                "McDonals Burger + Sprite";
                break;

            case "Wednesday":
                para.textContent =
                "Delicio Pizza (2$ extra for COLA)";
                break;

            case "Thursday":
                para.textContent =
                "WATER!";
                break;

            case "Friday":
                para.textContent =
                "Shaworma Menu + Water";
                break;

            case "Sunday":
                para.textContent =
                "Veggie Salad + Water";
                break;

            case "Saturday":
                para.textContent =
                "Fasting";
                break;

        
            default : 
            para.textContent = "Thinking..."

    }
}