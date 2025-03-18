var today = new Date();
var hourNow = today.getHours();
var greeting;
if (hourNow > 18) {
 greeting = 'Good evening';
}
else if (hourNow > 12) {
 greeting = 'Good afternoon';
}
else if (hourNow > 0) {
 greeting = 'Good morning';
}
else {
 greeting = 'Welcome';
}
 document.write(greeting);
 document.write("<br>");

 function updateTime() {
    const timeElement = document.getElementById('current-time');
    const now = new Date();
    timeElement.textContent = `Current Time: ${now.toLocaleTimeString()}`;
}

setInterval(updateTime, 1000);

updateTime();