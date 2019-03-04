const LinkedList = require('./linkedlist')


function parseString(str) {
    // parsing string to linked list
    // value of list always 1 operation (+ 1 2)
    // for (+ (+ 2 1) 3)
    // it will become 
    const list = new LinkedList()
    list.addToHead(str)
    return list
}

module.exports = parseString