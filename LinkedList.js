
import Node from "./Node.js";

class LinkedList {
    constructor() {
        this.headNode = null;
        this.tailNode = null;
    }

    append(value) {
        const newNode = new Node(value);

        if (this.headNode === null) {
            this.headNode = newNode;
            this.tailNode = newNode;
        } else {
            this.tailNode.nextNode = newNode;
            this.tailNode = newNode;
        }
    }

   prepend(value) {
    const newNode = new Node(value);

    if (this.headNode === null) {
        this.headNode = newNode;
        this.tailNode = newNode;
    } else {
        newNode.nextNode = this.headNode;
        this.headNode = newNode;
    }
}

size() {
    let count = 0;
    let currentNode = this.headNode;

    while(currentNode != null) {
        count++;
        currentNode = currentNode.nextNode;
    }
    return count;
}

head() {
    if (this.headNode === null) {
        return undefined;
    }

    return this.headNode.value;
}   

tail () {
    if (this.tailNode == null) {
        return undefined;
    }
     return this.tailNode.value;
}

at(index) {
    let currentNode = this.headNode;
    let count = 0

    while (currentNode != null) {
        if (count === index) {
              return currentNode.value;
        }
        currentNode = currentNode.nextNode;
        count++
    }
    return undefined;
}

pop() {
    if (this.headNode === null) {
        return undefined;
    }

    const removedValue = this.headNode.value;
    this.headNode = this.headNode.nextNode;

    if (this.headNode === null) {
        this.tailNode = null;
    }

    return removedValue


}
contains(value) {
    let currentNode = this.headNode;

    while (currentNode !== null) {
        if (currentNode.value === value) {
            return true;
        }
        
        currentNode = currentNode.nextNode;
    }

    return false;
}
findIndex(value) {
    let currentNode = this.headNode;
    let index = 0;

    while (currentNode !== null) {
        if (currentNode.value === value) {
            return index;
        }

        currentNode = currentNode.nextNode;
        index++;
    }

    return -1;
}
toString() {
    let currentNode = this.headNode;
    let result = "";

    while (currentNode !== null) {
        result += `( ${currentNode.value} ) -> `;
        currentNode = currentNode.nextNode;
    }

    result += "null";
    return result;
}
insertAt(value, index) {
    if (index < 0 || index > this.size()) {
        throw new RangeError("Index out of bounds");
    }

    if (index === 0) {
        this.prepend(value);
        return;
    }

    const newNode = new Node(value);
    let currentNode = this.headNode;
    let currentIndex = 0;

    while (currentIndex < index - 1) {
        currentNode = currentNode.nextNode;
        currentIndex++;
    }

    newNode.nextNode = currentNode.nextNode;
    currentNode.nextNode = newNode;

    if (newNode.nextNode === null) {
        this.tailNode = newNode;
    }
}
removeAt(index) {
    if (index < 0 || index >= this.size()) {
        throw new RangeError("Index out of bounds");
    }

    if (index === 0) {
        return this.pop();
    }

    let currentNode = this.headNode;
    let currentIndex = 0;

    while (currentIndex < index - 1) {
        currentNode = currentNode.nextNode;
        currentIndex++;
    }

    if (currentNode.nextNode === this.tailNode) {
        this.tailNode = currentNode;
    }

    currentNode.nextNode = currentNode.nextNode.nextNode;
}


}  


export default LinkedList;