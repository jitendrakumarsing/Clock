setInterval(() => {
    let date =new Date();
    let first =document.getElementById("first");
    let second = document.getElementById("second");
    let third = document.getElementById("third");

    hour = date.getHours();
    minute= date.getMinutes();
    seconds= date.getSeconds();

    // For analog clock
    hourrotation= hour*30+minute/2;
    minuterotation=6*minute+0.1*seconds;
    secondrotation=6*seconds;

    first.style.transform = `rotate(${hourrotation}deg)`;
    second.style.transform= `rotate(${minuterotation}deg)`;
    third.style.transform =`rotate(${secondrotation}deg)`;   

    // For digital clock
    let updatetime= document.getElementById("updatetime");
    let timeperiod= document.getElementById("timeperiod");
    
    // set time format
    let select = document.getElementById("select");
    if (select.value=='h12' && hour>12) {
        let Hour = hour-12
        updatetime.innerText=`${`${Hour<10?"0"+Hour:Hour}` + ":" + `${minute<10?"0"+minute:minute}` + ":" + `${seconds<10?"0"+seconds:seconds}` }` 
        
    } else {
        // updatetime.innerText=`${hour + ":" + minute + ":" + seconds }`
    updatetime.innerText=`${`${hour<10?"0"+hour:hour}` + ":" + `${minute<10?"0"+minute:minute}` + ":" + `${seconds<10?"0"+seconds:seconds}` }` 
}
    // set AM || PM 
    timeperiod.innerText=`${hour<12?`AM`:`PM`}`

}, 1000);

// update date
let updatedate= document.getElementById("updatedate");
let dt = new Date();
date= dt.getDate();
month = dt.getMonth();
year = dt.getFullYear();
updatedate.innerText= `${`${date<10?"0"+date:date}`+" /" + `${month<10?"0"+month:month}` + "/ "+ year}`







