
const math = require('./mathexp')

function allToAtom(list) {
    console.log(list)
    if (isAllAtom(list)) {
        return list
    } else {
        for (let i = 0; i < list.length; i++) {
            if (!isAtom(list[i])) { 
              if (isAllAtom(list[i])) {
                  let r = calculateOneExp(list[i])
                  list[i] = r
              } else {
                  //TODO: call this function
                  let l = allToAtom(list[i])
                  list[i] = l
              }
            }
        }
        return list
    }
}

function calculate(list) {
    if (isAllAtom(list)) {
        return calculateOneExp(list)
    } else {
        let allAtom = allToAtom(list)
        while(!isAllAtom(allAtom)) {
            allAtom = allToAtom(allAtom)
        }       
        console.log(allAtom)
        return calculateOneExp(allAtom)
    }
}

function calculateOneExp(list) {
    let operator
    let operand = []

    for (let i = 0; i < list.length; i++) {
        if (isOperator(list[i])) {
            operator = list[i]
        } else if (isAtom(list[i])) {
            operand.push(list[i])
        }
    }

    if (math.isMathOperator(operator)) {
        return math.mathExp(operator, operand)
    }
}


function isAtom(arr) {
    return !Array.isArray(arr)
}

function isAllAtom(arr) {
    let result = true
    for (let i = 0; i < arr.length; i++) {
        if (!isAtom(arr[i])) { 
            result = false
            break
        }
    }
    return result
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

module.exports = { calculate }