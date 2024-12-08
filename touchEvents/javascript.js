 document.addEventListener('touchstart', e=>{

   [...e.changedTouches].forEach(touch=>{
    const dot = document.createElement("div");
    dot.classList.add('dot');
    dot.style.top =`${touch.pageY}px`;
    dot.style.left =`${touch.pageX}px`;
    dot.id = touch.identifier;
    document.body.append(dot);
   })

    console.log("Started");
 })

 document.addEventListener('touchmove', e=>{
    console.log("isMoving");

    [...e.changedTouches].forEach(touch=>{
        const dot = document.getElementById(touch.identifier);
        dot.style.top =`${touch.pageY}px`;
        dot.style.left =`${touch.pageX}px`;
    })
 })


 document.addEventListener('touchend', e=>{
    console.log("Not touching anymore");

    [...e.changedTouches].forEach(touch=>{
        const dot = document.getElementById(touch.identifier);
        dot.remove();
    })
 })