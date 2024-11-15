
let userAgent = document.createElement('li');
const language = document.createElement('li');
const online = document.createElement('li');
const vibrate =document.createElement('li');
const oList = document.querySelector('ol');
const browser = navigator;
const vibrateButton = document.getElementById('vibrationButton');
const ipValue = document.createElement('li');
const closeButton = document.getElementById("closeButton");
const google = document.querySelector('#googleButton');


ipValue.textContent = `IpAddress: ${getIP()}`;
userAgent.textContent = `User-Agent: ${browser.userAgent}`;
language.textContent =  `BrowserLanguage: ${navigator.language}`;
online.textContent =    `OnlineStatus: ${navigator.onLine?'Connected':'Disconnected'}`;
vibrate.textContent = "Click button to vibrate";

google.textContent = "Go to: Google";
 
google.addEventListener('click', openGoogle);

 
 
 oList.appendChild(userAgent);
 oList.appendChild(language);
 oList.appendChild(online);
 oList.appendChild(vibrate);
 

 vibrateButton.addEventListener('click',vibrate1);
 vibrateButton.addEventListener('click',vibrateOnOff);
 vibrateButton.addEventListener('click', removeitems);

 closeButton.addEventListener('click', close1);

 getIP();

function removeitems(){
    online.remove();
    language.remove();
}


function openGoogle(){
    window.open("https://www.google.com" );
}
function close1()
{
    window.close();
}
  function vibrate1(){
     navigator.vibrate([
        100, 30, 100, 30, 100, 30, 200, 30, 200, 30, 200, 30, 100, 30, 100, 30, 100,
      ]);
  }

  function vibrateOnOff(){
    vibrate.textContent ="SOS vibration pattern";
    vibrate.style.cssText = "background: red; color:white;";

  }

  async function getIP() {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        document.getElementById('ip').innerText = `Your IP Address: ${data.ip}`;
    } catch (error) {
        console.error('Error fetching IP address:', error);
    }
}