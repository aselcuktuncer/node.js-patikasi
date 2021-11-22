let arguments = process.argv.slice(2);

const PI = 3.14

function area(radius){

    let area = PI * (parseInt(radius)**2)
    console.log(`Yarıçapı ${radius} olan dairenin alanı: ${area}`)
}

area(arguments[0])
