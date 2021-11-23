const PI = 3.14

function circleArea(r) {
    return PI * r**2;
}

function circleCircumference(r) {
    return 2 * PI * r;
}

module.exports = {
    circleArea,
    circleCircumference
}