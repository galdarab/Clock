const hourHand = document.getElementById('idHour');
const minHand = document.getElementById('idMinute');
const secHand = document.getElementById('idSec');

setClock()
setInterval(setClock, 1000);

function setClock(){
    var currentTime = new Date();
    var secDegree = currentTime.getSeconds()*6;
    var minDegree = currentTime.getMinutes()*6;
    var hourDegree = currentTime.getHours()*30+minDegree/12;
    

    secHand.style.transform = "rotate("+secDegree+"deg)";
    minHand.style.transform = "rotate("+minDegree+"deg)";
    hourHand.style.transform = "rotate("+hourDegree+"deg)";

    //console.log(currentTime.getSeconds() );
    //console.log(currentTime.getMinute() );

}