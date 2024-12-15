
const dateValue = document.querySelector(".dateValue");
const timeValue =  document.querySelector(".timeValue");
const varsta = document.querySelector(".varsta");


 

setInterval(function(){
     dateValue.textContent = myDate();
     timeValue.textContent = myTime();
     varsta.textContent = returnAge();
}, 1000);

 

function returnAge(){

    const Aris = {

        yearOfBirth: 2023,
        monthOfBirth: 4,
        dayOfBirth: 5,
        hourOfBirth: 11,
        minuteOfBirth: 25,
        currentDay : (new Date()).getDate(),
        currentMonth : (new Date()).getMonth() + 1,
        currentYear : (new Date()).getFullYear(),
        currentHour : (new Date()).getHours(),
        currentMinute : (new Date()).getMinutes(),
    
        yearsOld : function(){ return this.currentYear - this.yearOfBirth},
        monthOld : function(){ return this.currentMonth - this.monthOfBirth},
        daysOld  : function(){ return this.currentDay - this.dayOfBirth},
        hoursOld : function(){ return this.currentHour - this.hourOfBirth},
        minutesOld : function(){ return this.currentMinute- this.minuteOfBirth},
    
    }

    const varsta = `Aris are ${Aris.yearsOld()} an, ${Aris.monthOld()} luni, ${Aris.daysOld()} zile, ${Aris.hoursOld()} ore si ${Aris.minutesOld()} minute! `;
    return varsta;
}

//console.log(`Aris are ${Aris.yearsOld()} an, ${Aris.monthOld()} luni, ${Aris.daysOld()} zile, ${Aris.hoursOld()} ore si ${Aris.minutesOld()} minute! `)

 
 

function myTime(){

       let time = new Date();
       let day = time.getDate();
       let month = time.getMonth()+1;
       let year = time.getFullYear();
       let hour = time.getHours();
       let minutes = time.getMinutes();
       let seconds = time.getSeconds();
       
       if(minutes<10) { minutes = "0"+minutes;}
       if(seconds<10) { seconds = "0"+seconds;}
       
       const myTime = `${hour} : ${minutes} : ${seconds}`;
       
       return myTime;


}

function myDate(){
    let time = new Date();
    let day = time.getDate();
    let month = time.getMonth()+1;
    let year = time.getFullYear();

    const myDate = `${year}/${month}/${day}`;

    return myDate;
}