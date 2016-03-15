var clock_DOM = document.querySelector('#clock_write');

// Alter hours according to events.
var scatter_story_hours = 07;

function startTime() {
    var today = new Date();
    var h = scatter_story_hours;
    var m = today.getMinutes();
    var s = today.getSeconds();
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    clock_DOM.innerText = h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

startTime();