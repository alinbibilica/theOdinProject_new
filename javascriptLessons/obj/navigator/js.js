
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
vibrate.textContent = `Vibrate: ${navigator.vibrate([
    100, 30, 100, 30, 100, 30, 200, 30, 200, 30, 200, 30, 100, 30, 100, 30, 100,
  ])}`;
 oList.appendChild(userAgent);
 oList.appendChild(language);
 oList.appendChild(online);
 oList.appendChild(vibrate);

 vibrateButton.addEventListener('click', navigator.vibrate([
    100, 30, 100, 30, 100, 30, 200, 30, 200, 30, 200, 30, 100, 30, 100, 30, 100,
  ]));