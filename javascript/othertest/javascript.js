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

    switch(choice) {
        case 'white' :
            update(sixthImage,'black', firstImage);
            break;
        case 'black' :
            update(fifthImage, 'white', secondImage);
            break;
        case 'red' :
            update(fourthImage, 'white', thirdImage);
            break;
        case 'blue' :
            update(thirdImage, 'black', fourthImage);
            break;
        case 'green' :
            update (secondImage, 'white', fifthImage);
            break;
        case 'yellow' :
            update (firstImage, 'red', sixthImage);
            break;
         }

});

 function update(bgColor, textColor, bodyColor){
    html.style.backgroundImage = bgColor;
    html.style.color = textColor;
    body.style.backgroundImage = bodyColor;
 }