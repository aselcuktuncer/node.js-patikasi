let userName = prompt('Please enter your name:')

let foo = document.querySelector("#myName")

foo.innerHTML = `${userName}`

function doDate(){
let clock = new Date()
let hour,minute,second,day;

// if(clock.getDay() == 0){
//     day = "Pazar"
// }else if(clock.getDay() == 1){
//     day = "Pazartesi"
// }
// else if(clock.getDay() == 2){
//     day = "Salı"
// }
// else if(clock.getDay() == 3){
//     day = "Çarşamba"
// }
// else if(clock.getDay() == 4){
//     day = "Perşembe"
// }else if(clock.getDay() == 5){
//     day = "Cuma"
// }else if(clock.getDay() == 6){
//     day = "Cumartesi"
// }

let days = ["Pazar","Pazartesi", "Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]

if(clock.getHours() < 10){
    hour = "0" + clock.getHours()
}else{
    hour = clock.getHours()
}
if(clock.getMinutes() < 10){
    minute = "0" + clock.getMinutes()
}else{
    minute = clock.getMinutes()
}
if(clock.getSeconds() < 10){
    second = "0" + clock.getSeconds()
}else{
    second = clock.getSeconds()
}

let dateTime = hour + ":" + minute + ":" + second + " " + days[clock.getDay()];

let time = document.querySelector("#myClock")

time.innerHTML = `${dateTime}`
}

setInterval(doDate, 1000);




