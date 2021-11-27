let btn0DOM = document.querySelector('#btn0')
let btn1DOM = document.querySelector('#btn1')
let btnClrDOM = document.querySelector('#btnClr')
let btnEqlDOM = document.querySelector('#btnEql')
let btnSumDOM = document.querySelector('#btnSum')
let btnSubDOM = document.querySelector('#btnSub')
let btnMulDOM = document.querySelector('#btnMul')
let btnDivDOM = document.querySelector('#btnDiv')

let btnsDOM = document.querySelector('#btns')
let resDOM = document.querySelector('#res')

let left = "";
let right = "";
let moment = "";
let screen = "";
let type = -1;
let result = 0;

btn0DOM.addEventListener('click', () => {
    moment = moment + "0"
    screen = screen + "0"
        resDOM.innerHTML = screen
    })

btn1DOM.addEventListener('click', () => {
    moment = moment + "1"
    screen = screen + "1"
        resDOM.innerHTML = screen
    })
btnSumDOM.addEventListener('click', () => {
    left = moment
    screen = screen + "+"
    moment = ""
    type = 0
        resDOM.innerHTML = screen
    })
btnSubDOM.addEventListener('click', () => {
    left = moment
    screen = screen + "-"
    moment = ""
    type = 1
        resDOM.innerHTML = screen
    })
btnDivDOM.addEventListener('click', () => {
    left = moment
    screen = screen + "/"
    moment = ""
    type = 2
        resDOM.innerHTML = screen
    })
btnMulDOM.addEventListener('click', () => {
    left = moment
    screen = screen + "*"
    moment = ""
    type = 3
        resDOM.innerHTML = screen
    })
btnEqlDOM.addEventListener('click', () => {
    right = moment
    if(type == 0){
        result = parseInt(left,2) + parseInt(right,2)
    }else if(type == 1){
        result = parseInt(left,2) - parseInt(right,2)
    }else if(type == 2){
        result = parseInt(left,2) / parseInt(right,2)
    }else if(type == 3){
        result = parseInt(left,2) * parseInt(right,2)
    }
    left = ""
    screen = ""
    moment = ""
    right = ""
        resDOM.innerHTML = result.toString(2)
    })

btnClrDOM.addEventListener('click', () => {
    left = ""
    screen = ""
    moment = ""
    right = ""
    type = -1
    resDOM.innerHTML = ""
    })