var today = new Date();
var day = today.getDay();
var time = today.getHours()
var prepand = time >= 12 ? "PM" : "AM";
if (time > 12) {
    time = time % 12;
}
var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
console.log(time + " " + prepand)
console.log(today)