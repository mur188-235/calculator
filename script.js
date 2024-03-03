document.write("java script connected")
var calculatorforCalculation = prompt("Enter your calculation (+ - * /)")
var firstNum = prompt("Enter first number")
firstNum = parseInt(firstNum)
var secondNum = prompt("Enter second number")
secondNum = parseInt(secondNum)
if (calculatorforCalculation == "+") {
    totalNum = firstNum + secondNum
} else if (calculatorforCalculation == "-") {
    totalNum = firstNum - secondNum
} else if (calculatorforCalculation == "*") {
    totalNum = firstNum * secondNum
} else if (calculatorforCalculation == "/") {
    totalNum = firstNum / secondNum
}
alert(totalNum)