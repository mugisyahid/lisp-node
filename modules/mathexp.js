function isMathOperator(char) {
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

function mathExp(operator, operand) {
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

module.exports = { isMathOperator, mathExp }