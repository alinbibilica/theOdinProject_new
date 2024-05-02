
let user = prompt("Who's there?");
let pass = prompt("Enter pass:");

if (user == "Admin" && pass=="Master")
{
    
                document.getElementById("first").innerHTML = `Welcome ${user} !`;
                document.getElementById("second").innerHTML = "How`s your day?";
                document.getElementById("third").innerHTML = "This is your info!!"
 
}

if (user == null)
{
    alert("Canceled!");
}

else {
    alert("GET OUT!!");
}