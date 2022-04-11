class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  append(value) {
    const newNode = {
      value: value,
      next: null,
    };
    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    if (!this.head) {
      this.head = newNode;
    }
  }
  toArray() {
    const elements = [];
    let curNode = this.head;
    while (curNode) {
      elements.push(curNode);
      curNode = curNode.next;
    }
    return elements;
  }
}

const linkedList = new LinkedList();

linkedList.append("David");
linkedList.append("Lekua");
linkedList.append("Len");
linkedList.append("Faith");
linkedList.append(20);

console.log(linkedList.toArray());
