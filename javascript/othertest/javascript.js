const select = document.querySelector('select');
const html = document.querySelector('.container');
const body = document.querySelector('body');
const firstImage = 'url(https://images.unsplash.com/photo-1715089908179-46e5bfa8a44a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)';
const secondImage = 'url(https://images.unsplash.com/photo-1715673336295-9487981ab5fd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)';
const thirdImage =  'url(https://plus.unsplash.com/premium_photo-1712128937541-75574776ccd8?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)';
const fourthImage = 'url(https://images.unsplash.com/photo-1714779573220-39c843a7daa3?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)';
const fifthImage = 'url(https://images.unsplash.com/photo-1714738760088-8eb4aaf6916b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)';
const sixthImage = 'url(https://images.unsplash.com/photo-1715514918422-3bde21134880?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)';
select.addEventListener('change', ()=> {

    const choice = select.value;
     
    let sound = new Audio('https://youtu.be/FbXsEWWS990');
    let sound1 = new Audio('songs/B.U.G. Mafia - Inainte Sa Plec (Prod. Tata Vlad).mp3');
    let sound2 = new Audio('songs/Black Pumas - Colors (Official Live Session).mp3');
    let sound3 = new Audio('songs/Eminem - Stan (Long Version) ft. Dido.mp3');
    let sound4 = new Audio('songs/Grasu XXL - Drumul Spre Succes (Videoclip Oficial).mp3');
    let sound5 = new Audio('songs/Teddy Swims - Lose Control (Live).mp3');


 


    switch(choice) {
        case 'white' :
            update(sixthImage,'white', firstImage);
            sound1.pause();
            sound2.pause();
            sound3.pause();
            sound4.pause();
            sound5.pause();
            sound.play();
            break;

        case 'black' :
            update(fifthImage, 'white', secondImage);
            sound.pause();
            
            sound2.pause();
            sound3.pause();
            sound4.pause();
            sound5.pause();
            sound1.play();
            break;

        case 'red' :
            update(fourthImage, 'white', thirdImage);
            sound.pause();
            sound1.pause();
            sound3.pause();
            sound4.pause();
            sound5.pause();
            sound2.play();
            break;

        case 'blue' :
            update(thirdImage, 'black', fourthImage);
            sound.pause();
            sound1.pause();
            sound2.pause();
            
            sound4.pause();
            sound5.pause();
            sound3.play();
            break;

        case 'green' :
            update (secondImage, 'white', fifthImage);
            sound.pause();
            sound1.pause();
            sound2.pause();
            sound3.pause();
            
            sound5.pause();
            sound4.play();
            break;

        case 'yellow' :
            update (firstImage, 'red', sixthImage);
            sound.pause();
            sound1.pause();
            sound2.pause();
            sound3.pause();
            sound4.pause();
            sound5.play();
            break;
         }

});

 function update(bgColor, textColor, bodyColor){
    html.style.backgroundImage = bgColor;
    html.style.color = textColor;
    body.style.backgroundImage = bodyColor;
  
 }