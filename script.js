// Taking the ID's from the HTML
let countId = document.getElementById("count");
let secId = document.getElementById("sec");
let minId = document.getElementById("min");
let hrId = document.getElementById("hr");

// Initialising the variables which we have to use in our function to compute time
var hr = 0;
var min = 0;
var sec = 0;
var count = 0;

var timer = false;

// To start the stopwatch
function start(){
    timer = true;
    stopwatch();
}

// To stop the stopwatch
function stop(){
    timer=false;    
}

// To reset the stopwatch
function reset(){
    timer=false;

    hr=0;
    min=0;
    sec=0;
    count=0;

    // While reset the value we see should be 00 not 0 so we use string and add this using innerhtml
    hrId.innerHTML="00";
    minId.innerHTML="00";
    secId.innerHTML="00";
    countId.innerHTML="00";
}


// This is the main stopwatch Function Here we call this function recursilvey at every 10millisecond
function stopwatch(){

    if (timer==true){
        count=count+1;
        // For count
        if (count==100){
            sec= sec+1;
            count=0;
        }
        // For sec
        if (sec==60){
            min=min+1;
            sec=0;
        }
        // For min
        if (min==60){
            hr=hr+1;
            min=0;
            sec=0;
        }
        // Converting them into string
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
        // To show the values in the real time on screen
        hrId.innerHTML=hrString;
        minId.innerHTML=minString;
        secId.innerHTML=secString;
        countId.innerHTML=countString;
        setTimeout("stopwatch()", 10);
    }
}