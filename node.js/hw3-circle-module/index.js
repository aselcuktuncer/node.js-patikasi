const {circleArea, circleCircumference} = require('./circle');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })

readline.question(`Please enter the radius:`, r => {
    console.log(`For radius ${r}: Area is ${circleArea(r).toFixed(2)} and Circumference is ${ circleCircumference(r).toFixed(2)}`)
    readline.close()
  })



  
