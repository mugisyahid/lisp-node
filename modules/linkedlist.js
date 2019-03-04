const Node = require('./node')

// https://hackernoon.com/the-little-guide-of-linked-list-in-javascript-9daf89b63b54
function LinkedList() {
    this.head = null
    this.tail = null
}

LinkedList.prototype.addToHead = function(value, result) {
    const newNode = new Node(value, result, this.head, null)
    if (this.head) this.head.prev = newNode
    else this.tail = newNode 
    this.head = newNode
}

LinkedList.prototype.addToTail = function(value, result) {
    const newNode = new Node(value, result, null, this.tail)
    if (this.tail) this.tail.next = newNode
    else this.head = newNode
    this.tail = newNode
}

LinkedList.prototype.removeHead = function() {
    if (!this.head) return null
    let value = this.head.value
    this.head = this.head.next
    
    if (this.head) this.head.prev = null
    else this.tail = null
    
    return value
}

LinkedList.prototype.search = function(searchValue) {
    let currentNode = this.head
    
    while(currentNode) {
      if (currentNode.value === searchValue) return currentNode
      currentNode = currentNode.next 
    }
    return null
}

module.exports = LinkedList