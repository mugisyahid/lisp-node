
const math = require('./mathexp')

function calculateOneExp(str) {
    let operator
    let operand = []

    let tempOperand = ''
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) !== '(' && str.charAt(i) !== ')' && str.charAt(i) !== ' ') {
            tempOperand += str.charAt(i)
        }
        if (str.charAt(i) !== ' ' || str.charAt(i) !== ')') {
            if (isOperator(tempOperand)) {
                operator = tempOperand
                tempOperand = ''
            } else if (tempOperand !== ''){
                operand.push(tempOperand)
                tempOperand = ''
            }
        }
    }

    // calculate based on operator
    if (operator === '+') {
        return operand.length > 0 ? operand.reduce((a, b) => +a + +b) : 0
    }
    if (operator === '-') {
        return operand.length > 0 ? operand.reduce((a, b) => +a - +b) : 0
    }
    if (operator === '*') {
        return operand.length > 0 ? operand.reduce((a, b) => +a * +b) : 0
    }
    if (operator === '/') {
        return operand.length > 0 ? operand.reduce((a, b) => +a / +b) : 0
    }

}


function isOperator(char) {
    switch(char) {
        case '+':
        case '-':
        case '/':
        case '*':
            return true
        default: 
            return false
    }
}

// TODO: should use stack checker
function isValidExp(str) {
    // kurung buka == kurung tutup
    let kurungBuka = 0
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === '(') {
            kurungBuka++
        }
        if (str.charAt(i) === ')') {
            kurungBuka--
        }
    }
    return kurungBuka == 0
}


module.exports = { isValidExp, calculateOneExp }