let countId = document.getElementById("count");
let secId = document.getElementById("sec");
let minId = document.getElementById("min");
let hrId = document.getElementById("hr");

var hr = 0;
var min = 0;
var sec = 0;
var count = 0;

var timer = false;

function start(){
    timer = true;
    stopwatch();
}

function stop(){
    timer=false;    
}

function reset(){
    timer=false;

    hr=0;
    min=0;
    sec=0;
    count=0;

    hrId.innerHTML="00";
    minId.innerHTML="00";
    secId.innerHTML="00";
    countId.innerHTML="00";
}


function stopwatch(){

    if (timer==true){
        count=count+1;

        if (count==100){
            sec= sec+1;
            count=0;
        }

        if (sec==60){
            min=min+1;
            sec=0;
        }

        if (min==60){
            hr=hr+1;
            min=0;
            sec=0;
        }

        var hrString = hr;
        var minString = min;
        var secString = sec;
        var countString = count;

        if (hr<10){
            hrString="0"+hr;
        }
        if (min<10){
            minString="0"+min;
        }
        if (sec<10){
            secString="0"+sec;
        }
        if (count<10){
            countString="0"+count;
        }

        hrId.innerHTML=hrString;
        minId.innerHTML=minString;
        secId.innerHTML=secString;
        countId.innerHTML=countString;
        setTimeout("stopwatch()", 10);
    }
}