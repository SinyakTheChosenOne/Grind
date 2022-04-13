addEventListener("load", calculateTime)
function calculateTime() {
    let date = new Date();
    let dayNumb = date.getDay();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let ampm = hour >= 12 ? "PM" : "AM";
    let dayName = ["SUN", "MON", "TUE", "WED", "THR", "FRI", "SAT"];

    hour = hour % 12;
    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute; 

    document.getElementById("day").innerHTML = dayName[dayNumb];
    document.getElementById("hr").innerHTML = hour;
    document.getElementById("min").innerHTML = minute;
    document.getElementById("pm").innerHTML = ampm;

    setTimeout(calculateTime, 100);
}