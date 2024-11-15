
let userAgent = document.createElement('li');
const language = document.createElement('li');
const online = document.createElement('li');
const vibrate =document.createElement('li');
const oList = document.querySelector('ol');
const browser = navigator;
const vibrateButton = document.getElementById('vibrationButton');

userAgent.textContent = `User-Agent: ${browser.userAgent}`;
language.textContent =  `NetworkInfo: ${navigator.language}`;
online.textContent =    `OnlineStatus: ${navigator.onLine?'Connected':'Disconnected'}`;
vibrate.textContent = "ON";
 oList.appendChild(userAgent);
 oList.appendChild(language);
 oList.appendChild(online);
 oList.appendChild(vibrate);

 vibrateButton.addEventListener('click',vibrate1);
 vibrateButton.addEventListener('click',vibrateOnOff);
  function vibrate1(){
     navigator.vibrate([
        100, 30, 100, 30, 100, 30, 200, 30, 200, 30, 200, 30, 100, 30, 100, 30, 100,
      ]);
  }

  function vibrateOnOff(){
    if(vibrate.textContent == "OFF"){
        vibrate.textContent = "ON";
        
    }
    else if(vibrate.textContent == "ON") {vibrate.textContent = "OFF";}

    oList.appendChild(vibrate);
  }