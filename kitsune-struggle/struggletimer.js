var startDateTime = new Date(2021,2,9,21,30,0,0); // YYYY (M-1) D H m s (start time and date from DB)
var startStamp = startDateTime.getTime();

var newDate = new Date();
var newStamp = newDate.getTime();

var timer;

function updateClock() {
    newDate = new Date();
    newStamp = newDate.getTime();
    var diff = Math.round((newStamp-startStamp)/1000);
    
    var d = Math.floor(diff/(24*60*60));
    diff = diff-(d*24*60*60);
    var h = Math.floor(diff/(60*60));
    diff = diff-(h*60*60);
    var m = Math.floor(diff/(60));
    diff = diff-(m*60);
    var s = diff;
    
    document.getElementById("time-elapsed").innerHTML = d+" day(s), "+h+" hour(s), "+m+" minute(s), "+s+" second(s) since last struggle";
}

setInterval(updateClock, 1000);