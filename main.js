import LinkedList from "./LinkedList.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");

list.prepend("Rabbit");

console.log("Head:", list.headNode.value);
console.log("Tail:", list.tailNode.value);
console.log("Entire list:", list);
console.log("Size", list.size());
console.log("Head", list.head())
console.log("Tail", list.tail());
console.log("Index", list.at(0))
console.log("Index", list.at(2))
console.log("Removed", list.pop())
console.log("new Head", list.head())
console.log("New tail", list.tail())
console.log("Indexat", list.findIndex("rabbit"))
list.removeAt(2);
console.log(list.toString());

