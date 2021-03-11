function add(a, b) {
    return Number(a) + Number(b);
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    if (operator === '+') {
        const res = add(a, b)
        document.getElementById("display-text").innerHTML = res
    } else if (operator === '-') {
        const res = subtract(a, b)
        document.getElementById("display-text").innerHTML = res
    } else if (operator === '*') {
        const res = multiply(a, b)
        document.getElementById("display-text").innerHTML = res
    } else if (operator === '/') {
        const res = divide(a, b)
        var resRounded = res.toFixed(2);
        document.getElementById("display-text").innerHTML = resRounded
    } else {
        document.getElementById("display-text").innerHTML = "sorry, I'm not the smartest calculator on the block, I can't compute numbers higher than 9 ://"
    }
}

function addNumberToDisplay () {
    var previousText = document.getElementById("display-text").innerHTML
    var newText = event.target.innerHTML
    document.getElementById("display-text").innerHTML = `${previousText} ${newText} `;
}

function clearDisplay () {
    document.getElementById("display-text").innerHTML = ""
}

function removeEmpty (number) {
    return number != "";
}

function displayResult () {
    // document.getElementById("display-text").innerHTML = "result"
    var numbers = document.getElementById("display-text").innerHTML.split(" ").filter(removeEmpty);
    operate(numbers[1], numbers[0], numbers[2])
}

document.getElementById("button-1").addEventListener("click", addNumberToDisplay)
document.getElementById("button-2").addEventListener("click", addNumberToDisplay)
document.getElementById("button-3").addEventListener("click", addNumberToDisplay)
document.getElementById("button-+").addEventListener("click", addNumberToDisplay)
document.getElementById("button-4").addEventListener("click", addNumberToDisplay)
document.getElementById("button-5").addEventListener("click", addNumberToDisplay)
document.getElementById("button-6").addEventListener("click", addNumberToDisplay)
document.getElementById("button--").addEventListener("click", addNumberToDisplay)
document.getElementById("button-7").addEventListener("click", addNumberToDisplay)
document.getElementById("button-8").addEventListener("click", addNumberToDisplay)
document.getElementById("button-9").addEventListener("click", addNumberToDisplay)
document.getElementById("button-0").addEventListener("click", addNumberToDisplay)
document.getElementById("button-*").addEventListener("click", addNumberToDisplay)
document.getElementById("button-clear").addEventListener("click", clearDisplay)
document.getElementById("button-=").addEventListener("click", displayResult)
document.getElementById("button-/").addEventListener("click", addNumberToDisplay)