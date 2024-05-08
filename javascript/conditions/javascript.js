const select = document.querySelector("select");
const para = document.querySelector("p");
 

select.addEventListener("change", setWeather);

function setWeather(){

    const choice = select.value;
    const d = new Date();
    const currentHour = d.getHours();
    const currentMin = d.getMinutes();

    if (choice === "sunny")
     {para.textContent = `${currentHour}:${currentMin} the sun is shinning!`;
      para.style.backgroundImage ="url('https://images.pexels.com/photos/936154/pexels-photo-936154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
      }
    
     else if (choice === "rainy")
     {  para.textContent = ` ${currentHour}:${currentMin} it is raining hard !!`;
        para.style.backgroundImage ="url('https://youpress.org.uk/wp-content/uploads/2019/07/rainy--e1562882808676.jpg')";
        }

     else if (choice === "snowing")
     {para.textContent = `  ${currentHour}:${currentMin} the show is 10 cm deep!!`;
     para.style.backgroundImage ="url('https://way-up-north.com/wp-content/uploads/2019/11/winter.jpg')";
        }

     else if (choice === "overcast")
     {para.textContent = ` ${currentHour}:${currentMin} the weather is not friendly!!!`;
     para.style.backgroundImage ="url('https://www.thoughtco.com/thmb/KBskPErWCeHss3-6-gtqKWGToOI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-528903279-599d1549aad52b001107054d.jpg')";
        }
     
     else if (choice === ""){
            para.textContent = " ";
            para.style.backgroundImage ="url('https://images.theconversation.com/files/304864/original/file-20191203-67028-qfiw3k.jpeg?ixlib=rb-4.1.0&rect=638%2C2%2C795%2C745&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip')";
      
              }

}